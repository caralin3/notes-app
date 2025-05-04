import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';

import { firebaseDb } from './config';
import { FIRESTORE_COLLECTIONS } from './constants';
import {
  CreateFolderParams,
  CreateNoteParams,
  Folder,
  Note,
  UpdateFolderParams,
  UpdateNoteParams,
  User,
} from './types';

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
    return res.id;
  } catch (e: unknown) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    throw (e as any).message;
  }
};

export const updateNote = async (noteId: string, note: UpdateNoteParams) => {
  try {
    await updateDoc(doc(firebaseDb, FIRESTORE_COLLECTIONS.NOTES, noteId), note);
    console.log('Document written with ID: ', noteId);
    return noteId;
  } catch (e: unknown) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    throw (e as any).message;
  }
};

export const deleteNote = async (noteId: string) => {
  try {
    await deleteDoc(doc(firebaseDb, FIRESTORE_COLLECTIONS.NOTES, noteId));
    console.log('Document written with ID: ', noteId);
    return noteId;
  } catch (e: unknown) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    throw (e as any).message;
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
  } catch (e: unknown) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    throw (e as any).message;
  }
};

export const getNote = async (noteId: string) => {
  try {
    const docRef = doc(firebaseDb, FIRESTORE_COLLECTIONS.NOTES, noteId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return Note.parse(docSnap.data());
    } else {
      console.log('No such document!');
    }
  } catch (e: unknown) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    throw (e as any).message;
  }
};

export const createFolder = async (folder: CreateFolderParams) => {
  try {
    const res = await addDoc(
      collection(firebaseDb, FIRESTORE_COLLECTIONS.FOLDERS),
      folder,
    );
    console.log('Document written with ID: ', res.id);
    return res.id;
  } catch (e: unknown) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    throw (e as any).message;
  }
};
export const updateFolder = async (
  folderId: string,
  folder: UpdateFolderParams,
) => {
  try {
    await updateDoc(
      doc(firebaseDb, FIRESTORE_COLLECTIONS.FOLDERS, folderId),
      folder,
    );
    console.log('Document written with ID: ', folderId);
    return folderId;
  } catch (e: unknown) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    throw (e as any).message;
  }
};

export const deleteFolder = async (folderId: string) => {
  try {
    await deleteDoc(doc(firebaseDb, FIRESTORE_COLLECTIONS.FOLDERS, folderId));
    console.log('Document written with ID: ', folderId);
    return folderId;
  } catch (e: unknown) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    throw (e as any).message;
  }
};

export const getFolders = async (userId: string) => {
  try {
    const q = query(
      collection(firebaseDb, FIRESTORE_COLLECTIONS.FOLDERS),
      where('userId', '==', userId),
    );
    const querySnapshot = await getDocs(q);
    const folders = querySnapshot.docs.map((doc) => Folder.parse(doc.data()));
    return folders;
  } catch (e: unknown) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    throw (e as any).message;
  }
};

export const getFolder = async (folderId: string) => {
  try {
    const docRef = doc(firebaseDb, FIRESTORE_COLLECTIONS.FOLDERS, folderId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return Folder.parse(docSnap.data());
    } else {
      console.log('No such document!');
    }
  } catch (e: unknown) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    throw (e as any).message;
  }
};
