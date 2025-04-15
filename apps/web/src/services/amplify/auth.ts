import { Amplify } from 'aws-amplify';
import {
  autoSignIn,
  confirmSignUp,
  type ConfirmSignUpInput,
  signIn,
  type SignInInput,
  signOut,
  signUp,
} from 'aws-amplify/auth';

import { SignUpParameters } from './types';

async function handleSignUp({
  username,
  password,
  email,
  // phone_number,
  given_name,
  family_name,
}: SignUpParameters) {
  try {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username,
      password,
      options: {
        userAttributes: {
          preferred_username: username,
          email,
          // phone_number, // E.164 number convention
          given_name,
          family_name,
        },
        // optional
        autoSignIn: true, // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
      },
    });

    console.log(userId);
  } catch (error) {
    console.log('error signing up:', error);
  }
}

async function handleSignUpConfirmation({ username, confirmationCode }: ConfirmSignUpInput) {
  try {
    const { isSignUpComplete, nextStep } = await confirmSignUp({
      username,
      confirmationCode,
    });
  } catch (error) {
    console.log('error confirming sign up', error);
  }
}

async function handleAutoSignIn() {
  try {
    const signInOutput = await autoSignIn();
    // handle sign-in steps
  } catch (error) {
    console.log(error);
  }
}

export async function handleSignIn({ username, password }: SignInInput) {
  try {
    const { isSignedIn, nextStep } = await signIn({ username, password });

    return {
      success: isSignedIn,
      nextStep,
      error: null,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log('error signing in', error);
    return {
      success: false,
      user: null,
      error: error.message || 'Failed to sign in with email/password',
    };
  }
}

async function handleSignOut() {
  try {
    await signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}
