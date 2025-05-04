/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  getIdToken,
  GithubAuthProvider,
  GoogleAuthProvider,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import { firebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// Sign in with Google functionality
export const signInWithGoogle = async () => {
  try {
    return setPersistence(firebaseAuth, browserSessionPersistence).then(
      async () => {
        const result = await signInWithPopup(firebaseAuth, googleProvider);
        return {
          success: true,
          user: result.user,
          error: null,
        };
      },
    );
  } catch (error: any) {
    return {
      success: false,
      user: null,
      error: error.message,
    };
  }
};

// Sign in with GitHub functionality
export const signInWithGithub = async () => {
  try {
    return setPersistence(firebaseAuth, browserSessionPersistence).then(
      async () => {
        const result = await signInWithPopup(firebaseAuth, githubProvider);
        return {
          success: true,
          user: result.user,
          error: null,
        };
      },
    );
  } catch (error: any) {
    return {
      success: false,
      user: null,
      error: error.message,
    };
  }
};

// Sign in with email and password
export async function signInWithCredentials(email: string, password: string) {
  try {
    return setPersistence(firebaseAuth, browserSessionPersistence).then(
      async () => {
        const userCredential = await signInWithEmailAndPassword(
          firebaseAuth,
          email,
          password,
        );
        return {
          success: true,
          user: userCredential.user,
          error: null,
        };
      },
    );
  } catch (error: any) {
    return {
      success: false,
      user: null,
      error: error.message || 'Failed to sign in with email/password',
    };
  }
}

// Sign up with email and password
export async function signUpWithCredentials(email: string, password: string) {
  try {
    return setPersistence(firebaseAuth, browserSessionPersistence).then(
      async () => {
        const userCredential = await createUserWithEmailAndPassword(
          firebaseAuth,
          email,
          password,
        );
        return {
          success: true,
          user: userCredential.user,
          error: null,
        };
      },
    );
  } catch (error: any) {
    return {
      success: false,
      user: null,
      error: error.message || 'Failed to sign up with email/password',
    };
  }
}

export const firebaseTokenId = async () => {
  try {
    const user = firebaseAuth.currentUser;
    if (user) {
      const token = await getIdToken(user);
      return { success: true, token };
    } else {
      return { success: false, error: 'No user is currently signed in.' };
    }
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

// Sign out functionality
export const firebaseSignOut = async () => {
  try {
    await signOut(firebaseAuth);
    return { success: true };
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    };
  }
};

// Auth state observer
export const onAuthStateChanged = (callback: (user: any) => void) => {
  return firebaseAuth.onAuthStateChanged(callback);
};
