import { useEffect, useMemo, useState } from 'react';

import { useBoundStore, ViewModes } from '@notes-app/state-manager';
import {
  Breadcrumbs,
  CreateNoteDialog,
  FolderPage,
  Snackbar,
  type SnackbarProps,
} from '@notes-app/ui-library';
import { useActivePage } from '@toolpad/core/useActivePage';
import { Link, useLocation, useNavigate } from 'react-router';

import { FolderActions } from '../components';
import { useSession } from '../contexts/SessionContext';
import { useFolders, useNotes } from '../hooks';
import { formatDisplayDate, mapFolderNotesToList } from '../utils';

interface NotesTableData {
  createdAt: string;
  id: number;
  folderName?: string;
  link: string;
  name: string;
  uid: string;
  updatedAt?: string;
}

export function Folder() {
  const navigate = useNavigate();
  const activePage = useActivePage();
  const location = useLocation();
  const folderId = location.pathname.split('/').pop();
  const { getFolderById, updateFolder } = useFolders();
  const [notification, setNotification] = useState<
    Omit<SnackbarProps, 'id' | 'onClose'>
  >({
    canAutoHide: true,
    open: false,
    message: '',
    severity: 'success',
  });
  const [editedTitle, setEditedTitle] = useState('');
  const [showNewNoteDialog, setShowNewNoteDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
  const [submitting, setSubmitting] = useState(false);
  const { getNotesByFolderId, addNote } = useNotes();
  const { folderOptions } = useFolders();
  const { session } = useSession();
  const viewMode = useBoundStore((state) => state.settings.folderViewMode);
  const updateSettings = useBoundStore((state) => state.updateSettings);

  const folder = useMemo(() => {
    if (!folderId) {
      return null;
    }
    const currentFolder = getFolderById(folderId);
    if (!currentFolder) {
      return null;
    }

    return currentFolder;
  }, [folderId, getFolderById]);

  const folderNotes = useMemo(() => {
    if (!folder?.id) {
      return [];
    }
    const notes = getNotesByFolderId(folder.id);
    if (!notes) {
      return [];
    }
    return notes;
  }, [folder, getNotesByFolderId]);

  const rows = useMemo(() => {
    if (!folder?.id) {
      return [];
    }

    if (!folderNotes) {
      return [];
    }
    return folderNotes.map((note, index) => {
      return {
        id: index,
        uid: note.id,
        name: note.title,
        createdAt: formatDisplayDate(note.createdAt),
        updatedAt: note.updatedAt
          ? formatDisplayDate(note.updatedAt)
          : undefined,
        link: folder?.id
          ? `/folder/${folder.id}/${note.slug}`
          : `/note/${note.slug}`,
      };
    });
  }, [folder, folderNotes]);

  useEffect(() => {
    if (folder) {
      setEditedTitle(folder.name);
    }
  }, [folder]);

  if (!session || !folder) {
    return null;
  }

  const breadcrumbs =
    activePage?.breadcrumbs.map((crumb) => ({
      ...crumb,
      path: crumb.path ?? '',
      active: crumb.path === activePage.path,
    })) ?? [];

  const handleCloseSnackbar = () => {
    setNotification((prev) => ({ ...prev, open: false }));
  };

  const handleSaveTitle = async (name: string) => {
    if (!folder.id) {
      return;
    }

    if (name === folder.name) {
      return;
    }

    await updateFolder(
      folder.id,
      {
        name,
        updatedAt: new Date().toISOString(),
      },
      {
        onSuccess: () => {
          setNotification({
            canAutoHide: true,
            open: true,
            message: 'Note renamed successfully',
            severity: 'success',
          });
        },
        onError: (error) => {
          setNotification({
            canAutoHide: false,
            open: true,
            message: error as string,
            severity: 'error',
          });
        },
      }
    );
  };

  return (
    <>
      <FolderPage<NotesTableData>
        breadcrumbs={<Breadcrumbs links={breadcrumbs} Link={Link} />}
        actions={
          <FolderActions
            id={folder.id}
            label={editedTitle}
            path={location.pathname}
            showEdit={false}
          />
        }
        onSaveTitle={handleSaveTitle}
        setTitle={setEditedTitle}
        title={editedTitle}
        Link={Link}
        notes={mapFolderNotesToList(folder.id, folderNotes)}
        onCreateNote={() => setShowNewNoteDialog(true)}
        setIsGridView={() =>
          updateSettings({
            folderViewMode:
              viewMode === ViewModes.GRID ? ViewModes.LIST : ViewModes.GRID,
          })
        }
        isGridView={viewMode === ViewModes.GRID}
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
        slugs={folderNotes.map((note) => note.slug)}
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
                if (values.folderId) {
                  navigate(`/folder/${values.folderId}/${values.slug}`);
                } else {
                  navigate(`/note/${values.slug}`);
                }
              },
              onError: (error) => {
                setSubmitting(false);
                setErrorMessage(error as string);
              },
            }
          );
        }}
      />
      <Snackbar
        id="folder-save-notification"
        {...notification}
        onClose={handleCloseSnackbar}
      />
    </>
  );
}
