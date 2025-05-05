import {
  createNote,
  CreateNoteParams,
  deleteNote as deleteDbNote,
  getNotes,
  updateNote as updateDbNote,
  UpdateNoteParams,
} from '@notes-app/database';
import { useBoundStore } from '@notes-app/state-manager';

interface UseNotesCallbacks {
  onSuccess?: () => void;
  onError?: (err: unknown) => void;
}

export function useNotes() {
  const notes = useBoundStore((state) => state.notes);
  const addStoredNote = useBoundStore((state) => state.addNote);
  const deleteStoredNote = useBoundStore((state) => state.deleteNote);
  const setStoredNotes = useBoundStore((state) => state.setNotes);
  const updateStoredNote = useBoundStore((state) => state.updateNote);

  const loadNotes = async (userId: string) => {
    try {
      const notes = await getNotes(userId);
      setStoredNotes(notes);
    } catch (error: unknown) {
      console.error('Error loading notes:', error);
    }
  };

  const addNote = async (
    note: CreateNoteParams,
    { onSuccess, onError }: UseNotesCallbacks
  ) => {
    try {
      const id = await createNote(note);
      if (!id) {
        onError?.('Note creation failed');
        return;
      }
      await updateDbNote(id, {
        id,
        updatedAt: new Date().toISOString(),
      });
      addStoredNote({
        ...note,
        id,
      });
      onSuccess?.();
    } catch (error: unknown) {
      onError?.(error);
    }
  };

  const updateNote = async (
    noteId: string,
    note: UpdateNoteParams,
    { onSuccess, onError }: UseNotesCallbacks
  ) => {
    try {
      await updateDbNote(noteId, note);
      updateStoredNote(noteId, note);
      onSuccess?.();
    } catch (error: unknown) {
      onError?.(error);
    }
  };
  const deleteNote = async (
    noteId: string,
    { onSuccess, onError }: UseNotesCallbacks
  ) => {
    try {
      await deleteDbNote(noteId);
      deleteStoredNote(noteId);
      onSuccess?.();
    } catch (error: unknown) {
      onError?.(error);
    }
  };

  const getNoteBySlug = (slug: string) =>
    notes.find((note) => note.slug === slug);

  const getNotesByFolderId = (folderId: string) =>
    notes.filter((note) => note.folderId === folderId);

  const genericNotes = notes.filter((note) => note.folderId === null);

  return {
    notes: genericNotes,
    addNote,
    getNoteBySlug,
    getNotesByFolderId,
    loadNotes,
    updateNote,
    deleteNote,
  };
}
