import { StateCreator } from 'zustand';

import { BoundStore, Folder, UpdateFolder } from './types';

export interface FoldersSlice {
  addFolder: (folder: Folder) => void;
  deleteFolder: (folderId: string) => void;
  folders: Folder[];
  resetFolders: () => void;
  setFolders: (folders: Folder[]) => void;
  updateFolder: (folderId: string, folder: UpdateFolder) => void;
}

export const createFoldersSlice: StateCreator<
  BoundStore,
  [['zustand/persist', unknown]],
  [],
  FoldersSlice
> = (set) => ({
  folders: [],
  addFolder: (folder: Folder) =>
    set((state) => ({
      folders: [folder, ...state.folders],
    })),
  deleteFolder: (folderId: string) =>
    set((state) => ({
      folders: state.folders.filter((folder) => folder.id !== folderId),
    })),
  resetFolders: () => set({ folders: [] }),
  setFolders: (folders: Folder[]) => set({ folders }),
  updateFolder: (folderId: string, folder: UpdateFolder) =>
    set((state) => ({
      folders: state.folders.map((f) =>
        f.id === folderId ? { ...f, ...folder } : f,
      ),
    })),
});
