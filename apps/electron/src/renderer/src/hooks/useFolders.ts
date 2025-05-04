import {
  createFolder,
  CreateFolderParams,
  deleteFolder as deleteDbFolder,
  getFolders,
  updateFolder as updateDbFolder,
  UpdateFolderParams,
} from '@notes-app/database';
import { useBoundStore } from '@notes-app/state-manager';

interface UseFoldersCallbacks {
  onSuccess?: () => void;
  onError?: (err: unknown) => void;
}

export function useFolders() {
  const folders = useBoundStore((state) => state.folders);
  const addStoredFolder = useBoundStore((state) => state.addFolder);
  const deleteStoredFolder = useBoundStore((state) => state.deleteFolder);
  const setStoredFolders = useBoundStore((state) => state.setFolders);
  const updateStoredFolder = useBoundStore((state) => state.updateFolder);

  const loadFolders = async (userId: string) => {
    try {
      const folders = await getFolders(userId);
      setStoredFolders(folders);
    } catch (error: unknown) {
      console.error('Error loading folders:', error);
    }
  };

  const addFolder = async (
    folder: CreateFolderParams,
    { onSuccess, onError }: UseFoldersCallbacks
  ) => {
    try {
      const id = await createFolder(folder);
      if (!id) {
        onError?.('Folder creation failed');
        return;
      }
      await updateDbFolder(id, {
        id,
        updatedAt: new Date().toISOString(),
      });
      addStoredFolder({
        ...folder,
        id,
      });
      onSuccess?.();
    } catch (error: unknown) {
      onError?.(error);
    }
  };

  const updateFolder = async (
    folderId: string,
    folder: UpdateFolderParams,
    { onSuccess, onError }: UseFoldersCallbacks
  ) => {
    try {
      await updateDbFolder(folderId, folder);
      updateStoredFolder(folderId, folder);
      onSuccess?.();
    } catch (error: unknown) {
      onError?.(error);
    }
  };
  const deleteFolder = async (
    folderId: string,
    { onSuccess, onError }: UseFoldersCallbacks
  ) => {
    try {
      await deleteDbFolder(folderId);
      deleteStoredFolder(folderId);
      onSuccess?.();
    } catch (error: unknown) {
      onError?.(error);
    }
  };

  const folderOptions = folders.map((folder) => ({
    label: folder.name,
    value: folder.id,
  }));

  return {
    folderOptions,
    folders,
    addFolder,
    loadFolders,
    updateFolder,
    deleteFolder,
  };
}
