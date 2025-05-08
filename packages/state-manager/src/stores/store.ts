import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { createFoldersSlice } from './foldersSlice';
import { createNotesSlice } from './notesSlice';
import { createSettingsSlice } from './settingsSlice';
import { BoundStore } from './types';

export const useBoundStore = create<BoundStore>()(
  persist(
    (...a) => ({
      ...createNotesSlice(...a),
      ...createFoldersSlice(...a),
      ...createSettingsSlice(...a),
    }),
    { name: 'notes-bound-store' },
  ),
);
