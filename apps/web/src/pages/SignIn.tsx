import { Typography } from '@notes-app/ui-library';
import { SignInPage } from '@toolpad/core';
import { Navigate, useNavigate } from 'react-router';

import { Session, useSession } from '../contexts/SessionContext';
import { handleSignIn } from '../services/amplify';

export function SignIn() {
  const { session, setSession, loading } = useSession();
  const navigate = useNavigate();

  if (loading) {
    return <Typography>Loading...</Typography>;
    // return <LinearProgress />;
  }

  if (session) {
    return <Navigate to="/" />;
  }

  return (
    <SignInPage
      // providers={[
      //   { id: 'google', name: 'Google' },
      //   { id: 'github', name: 'GitHub' },
      //   { id: 'credentials', name: 'Credentials' },
      // ]}
      signIn={async (provider, formData, callbackUrl) => {
        let result;
        try {
          // if (provider.id === 'google') {
          //   result = await signInWithGoogle();
          // }
          // if (provider.id === 'github') {
          //   result = await signInWithGithub();
          // }
          const email = formData?.get('email') as string;
          const password = formData?.get('password') as string;
          if (provider.id === 'credentials') {
            // const email = formData?.get('email') as string;
            // const password = formData?.get('password') as string;

            if (!email || !password) {
              return { error: 'Email and password are required' };
            }

            result = await handleSignIn({ username: email, password });
          }

          if (result?.success) {
            // if (result?.success && result?.user) {
            // Convert Firebase user to Session format
            const userSession: Session = {
              user: {
                // name: result.user.displayName || '',
                email,
                // image: result.user.photoURL || '',
              },
            };
            setSession(userSession);
            navigate(callbackUrl || '/', { replace: true });
            return {};
          }
          return { error: result?.error || 'Failed to sign in' };
        } catch (error) {
          return {
            error: error instanceof Error ? error.message : 'An error occurred',
          };
        }
      }}
    />
  );
}
