import { StateCreator } from 'zustand';

import { BoundStore, PartialSettings, Settings, ViewModes } from './types';

export interface SettingsSlice {
  resetSettings: () => void;
  settings: Settings;
  updateSettings: (settings: PartialSettings) => void;
}

const initialState: Settings = {
  allNotesViewMode: ViewModes.GRID,
  folderViewMode: ViewModes.LIST,
};

export const createSettingsSlice: StateCreator<
  BoundStore,
  [['zustand/persist', unknown]],
  [],
  SettingsSlice
> = (set) => ({
  settings: initialState,
  resetSettings: () => set({ settings: initialState }),
  updateSettings: (updates) =>
    set((state) => ({
      settings: {
        ...state.settings,
        ...updates,
      },
    })),
});
