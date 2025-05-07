import { useState } from 'react';

import {
  AllNotesPage,
  CreateFolderDialog,
  CreateNoteDialog,
} from '@notes-app/ui-library';
import { Link } from 'react-router';

import { useSession } from '../contexts/SessionContext';
import { useFolders, useNotes } from '../hooks';
import { mapNotesToNestedList } from '../utils';

export function AllNotes() {
  const [showNewNoteDialog, setShowNewNoteDialog] = useState(false);
  const [showNewFolderDialog, setShowNewFolderDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
  const [submitting, setSubmitting] = useState(false);
  const { allNotes, addNote } = useNotes();
  const { addFolder, folders, folderOptions } = useFolders();
  const { session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <>
      <AllNotesPage
        notes={mapNotesToNestedList(folders, allNotes)}
        Link={Link}
        onCreateNote={() => setShowNewNoteDialog(true)}
        onCreateFolder={() => setShowNewFolderDialog(true)}
      />
      <CreateNoteDialog
        errorMessage={errorMessage}
        folders={folderOptions}
        loading={submitting}
        open={showNewNoteDialog}
        onClose={() => {
          setShowNewNoteDialog(false);
          setErrorMessage(undefined);
          setSubmitting(false);
        }}
        onSubmit={(values) => {
          setSubmitting(true);
          setErrorMessage(undefined);
          addNote(
            {
              ...values,
              content: '',
              createdAt: new Date().toISOString(),
              userId: session.user.uid,
            },
            {
              onSuccess: () => {
                setSubmitting(false);
                setShowNewNoteDialog(false);
                setErrorMessage(undefined);
              },
              onError: (error) => {
                setSubmitting(false);
                setErrorMessage(error as string);
              },
            }
          );
        }}
      />
      <CreateFolderDialog
        open={showNewFolderDialog}
        loading={submitting}
        onClose={() => {
          setShowNewFolderDialog(false);
          setErrorMessage(undefined);
          setSubmitting(false);
        }}
        onSubmit={(name) => {
          setSubmitting(true);
          setErrorMessage(undefined);
          addFolder(
            {
              name,
              createdAt: new Date().toISOString(),
              userId: session.user.uid,
            },
            {
              onSuccess: () => {
                setSubmitting(false);
                setShowNewFolderDialog(false);
                setErrorMessage(undefined);
              },
              onError: (error) => {
                setSubmitting(false);
                setErrorMessage(error as string);
              },
            }
          );
        }}
      />
    </>
  );
}
