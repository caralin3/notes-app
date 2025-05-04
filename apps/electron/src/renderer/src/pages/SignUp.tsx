import { createUser, signUpWithCredentials } from '@notes-app/database';
import { SignUpPage, Typography } from '@notes-app/ui-library';
import { Link, Navigate, useNavigate } from 'react-router';

import { Session, useSession } from '../contexts/SessionContext';

export function SignUp() {
  const { session, setSession, loading } = useSession();
  const navigate = useNavigate();

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (session) {
    return <Navigate to="/" />;
  }

  const addUser = async (user: { email: string; uid: string }) => {
    try {
      await createUser(user);
      // Convert Firebase user to Session format
      const userSession: Session = {
        user: {
          email: user.email || '',
          // name: user.displayName || '',
          // image: user.photoURL || '',
          uid: user.uid,
        },
      };
      setSession(userSession);
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <SignUpPage
      addUser={addUser}
      onSignUp={signUpWithCredentials}
      signInLink={<Link to="/sign-in">Sign In</Link>}
    />
  );
}
