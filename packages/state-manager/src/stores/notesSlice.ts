import { StateCreator } from 'zustand';
import { BoundStore, Note, UpdateNote } from './types';

export interface NotesSlice {
  addNote: (note: Note) => void;
  deleteNote: (noteId: string) => void;
  notes: Note[];
  resetNotes: () => void;
  setNotes: (notes: Note[]) => void;
  updateNote: (noteId: string, note: UpdateNote) => void;
}

export const createNotesSlice: StateCreator<
  BoundStore,
  [['zustand/persist', unknown]],
  [],
  NotesSlice
> = (set) => ({
  deleteNote: (noteId: string) =>
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== noteId),
    })),
  addNote: (note: Note) =>
    set((state) => ({
      notes: [note, ...state.notes],
    })),
  notes: [],
  resetNotes: () => set({ notes: [] }),
  setNotes: (notes: Note[]) => set({ notes }),
  updateNote: (noteId: string, note: UpdateNote) =>
    set((state) => ({
      notes: state.notes.map((n) => (n.id === noteId ? { ...n, ...note } : n)),
    })),
  // getNote: (noteId: string) =>
  //   set((state) => ({
  //     notes: state.notes.find((note) => note.id === noteId),
  //   })),
  // getNotes: () => set((state) => ({ notes: state.notes })),
  // getNotesByFolderId: (folderId: string) =>
  //   set((state) => ({
  //     notes: state.notes.filter((note) => note.folderId === folderId),
  //   })),
  // getNotesByUserId: (userId: string) =>
  //   set((state) => ({
  //     notes: state.notes.filter((note) => note.userId === userId),
  //   })),
});
