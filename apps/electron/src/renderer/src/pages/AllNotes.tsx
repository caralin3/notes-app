import { useMemo, useState } from 'react';

import {
  AllNotesPage,
  CreateFolderDialog,
  CreateNoteDialog,
} from '@notes-app/ui-library';
import { Link } from 'react-router';

import { useSession } from '../contexts/SessionContext';
import { useFolders, useNotes } from '../hooks';
import { formatDisplayDate, mapNotesToNestedList } from '../utils';

interface NotesTableData {
  createdAt: string;
  id: number;
  folderName?: string;
  link: string;
  name: string;
  uid: string;
  updatedAt?: string;
}

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

  const rows = useMemo(
    () =>
      allNotes.map((note, index) => {
        const folder = folders.find((f) => f.id === note.folderId);
        return {
          id: index,
          uid: note.id,
          name: note.title,
          folderName: folder?.name,
          createdAt: formatDisplayDate(note.createdAt),
          updatedAt: note.updatedAt
            ? formatDisplayDate(note.updatedAt)
            : undefined,
          link: folder?.id
            ? `/folder/${folder.id}/${note.slug}`
            : `/note/${note.slug}`,
        };
      }),
    [allNotes, folders]
  );

  if (!session) {
    return null;
  }

  return (
    <>
      <AllNotesPage<NotesTableData>
        notes={mapNotesToNestedList(folders, allNotes)}
        Link={Link}
        onCreateNote={() => setShowNewNoteDialog(true)}
        onCreateFolder={() => setShowNewFolderDialog(true)}
        tableData={{
          rows,
          title: 'Notes',
          orderBy: 'updatedAt',
          headCells: [
            {
              id: 'name',
              numeric: false,
              disablePadding: true,
              label: 'Title',
            },
            {
              id: 'folderName',
              disablePadding: false,
              label: 'Folder',
            },
            {
              id: 'createdAt',
              disablePadding: false,
              label: 'Created On',
            },
            {
              id: 'updatedAt',
              disablePadding: false,
              label: 'Updated On',
            },
          ],
        }}
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
