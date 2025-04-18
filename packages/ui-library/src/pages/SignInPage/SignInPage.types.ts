import React from 'react';

export interface SignInPageProps {
  onSignIn: (
    email: string,
    password: string,
  ) => Promise<{
    success: boolean;
    user: {
      email: string | null;
      uid: string;
    } | null;
    error: string | null;
  }>;
  onSubmit: (user: { email: string; uid: string }) => void;
  signInLink: React.ReactNode;
}
