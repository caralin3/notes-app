import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';

import { firebaseDb } from './config';
import { FIRESTORE_COLLECTIONS } from './constants';
import { CreateNoteParams, Note, User } from './types';

export const createUser = async (user: User) => {
  try {
    await setDoc(doc(firebaseDb, FIRESTORE_COLLECTIONS.USERS, user.uid), user);
    console.log('Document written with ID: ', user.uid);
    return user.uid;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const createNote = async (note: CreateNoteParams) => {
  try {
    const res = await addDoc(
      collection(firebaseDb, FIRESTORE_COLLECTIONS.NOTES),
      note,
    );
    console.log('Document written with ID: ', res.id);

    return Note.parse(res);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const updateNote = async (note: Note) => {
  try {
    await updateDoc(
      doc(firebaseDb, FIRESTORE_COLLECTIONS.NOTES, note.id),
      note,
    );
    console.log('Document written with ID: ', note.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const deleteNote = async (noteId: string) => {
  try {
    await deleteDoc(doc(firebaseDb, FIRESTORE_COLLECTIONS.NOTES, noteId));
    console.log('Document written with ID: ', noteId);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const getNotes = async (userId: string) => {
  try {
    const q = query(
      collection(firebaseDb, FIRESTORE_COLLECTIONS.NOTES),
      where('userId', '==', userId),
    );
    const querySnapshot = await getDocs(q);
    const notes = querySnapshot.docs.map((doc) => Note.parse(doc.data()));
    return notes;
  } catch (e) {
    console.error('Error getting documents: ', e);
  }
};
