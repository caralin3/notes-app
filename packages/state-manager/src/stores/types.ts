import { FoldersSlice } from './foldersSlice';
import { NotesSlice } from './notesSlice';
import { SettingsSlice } from './settingsSlice';

export const ViewModes = {
  GRID: 'grid',
  LIST: 'list',
} as const;
export type ViewMode = (typeof ViewModes)[keyof typeof ViewModes];

export interface Settings {
  allNotesViewMode: ViewMode;
  folderViewMode: ViewMode;
}

export interface PartialSettings {
  allNotesViewMode?: ViewMode;
  folderViewMode?: ViewMode;
}

export interface Note {
  content: string;
  createdAt: string;
  folderId: string | null;
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

export type BoundStore = NotesSlice & FoldersSlice & SettingsSlice;
