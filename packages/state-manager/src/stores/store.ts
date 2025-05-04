import { create } from 'zustand';
import { createNotesSlice } from './notesSlice';
import { createFoldersSlice } from './foldersSlice';
import { persist } from 'zustand/middleware';
import { BoundStore } from './types';

export const useBoundStore = create<BoundStore>()(
  persist(
    (...a) => ({
      ...createNotesSlice(...a),
      ...createFoldersSlice(...a),
    }),
    { name: 'notes-bound-store' },
  ),
);
