import { FoldersSlice } from './foldersSlice';
import { NotesSlice } from './notesSlice';

export interface Note {
  content: string;
  createdAt: string;
  folderId?: string;
  id: string;
  slug: string;
  title: string;
  updatedAt?: string;
  userId: string;
}

export interface UpdateNote {
  content?: string;
  slug?: string;
  title?: string;
  updatedAt: string;
}

export interface Folder {
  createdAt: string;
  id: string;
  name: string;
  updatedAt?: string;
  userId: string;
}

export interface UpdateFolder {
  name?: string;
  updatedAt: string;
}

export type BoundStore = NotesSlice & FoldersSlice;
