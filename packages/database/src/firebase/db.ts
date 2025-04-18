import { doc, setDoc } from 'firebase/firestore';

import { firebaseDb } from './config';
import { FIRESTORE_COLLECTIONS } from './constants';

export const createUser = async (user: { email: string; uid: string }) => {
  try {
    await setDoc(doc(firebaseDb, FIRESTORE_COLLECTIONS.USERS, user.uid), user);
    console.log('Document written with ID: ', user.uid);
    return user.uid;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
