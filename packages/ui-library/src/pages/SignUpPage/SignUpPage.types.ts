import React from 'react';

export interface SignUpPageProps {
  addUser: (user: { email: string; uid: string }) => void;
  onSignUp: (
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
  signInLink: React.ReactNode;
}
