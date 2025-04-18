import { signInWithCredentials } from '@notes-app/database';
import { SignInPage, Typography } from '@notes-app/ui-library';
import { Link, Navigate, useNavigate } from 'react-router';

import { Session, useSession } from '../contexts/SessionContext';

export function SignIn() {
  const { session, setSession, loading } = useSession();
  const navigate = useNavigate();

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (session) {
    return <Navigate to="/" />;
  }

  const handleSubmit = (user: { email: string; uid: string }) => {
    // Convert Firebase user to Session format
    const userSession: Session = {
      user: {
        // name: user.displayName || '',
        email: user.email || '',
        // image: user.photoURL || '',
      },
    };
    setSession(userSession);
    navigate('/', { replace: true });
  };

  return (
    <SignInPage
      onSignIn={signInWithCredentials}
      onSubmit={handleSubmit}
      signInLink={<Link to="/sign-up">Sign Up</Link>}
    />
  );
}
