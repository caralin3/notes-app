import { useMemo, useState } from 'react';

import {
  Breadcrumbs,
  NotePage,
  NotesToolbar,
  Snackbar,
  type SnackbarProps,
  Stack,
  Typography,
} from '@notes-app/ui-library';
import { useActivePage } from '@toolpad/core/useActivePage';
import { Link, useLocation } from 'react-router';

import { NoteActions } from '../components/NoteActions';
import { useNotes } from '../hooks';
import { formatEditedAt } from '../utils/dateTime';

export function Note() {
  const activePage = useActivePage();
  const location = useLocation();
  const slug = location.pathname.split('/').pop();
  const { getNoteBySlug, updateNote } = useNotes();
  const [notification, setNotification] = useState<
    Omit<SnackbarProps, 'id' | 'onClose'>
  >({
    canAutoHide: true,
    open: false,
    message: '',
    severity: 'success',
  });
  const [updatedContent, setUpdatedContent] = useState('');

  const note = useMemo(() => {
    if (!slug) {
      return null;
    }
    const slugNote = getNoteBySlug(slug);
    if (!slugNote) {
      return null;
    }
    return slugNote;
  }, [slug, getNoteBySlug]);

  if (!note) {
    return null;
  }
  const { content, createdAt, id, title, updatedAt } = note;

  const breadcrumbs =
    activePage?.breadcrumbs.map((crumb) => ({
      ...crumb,
      path: crumb.path ?? '',
      active: crumb.path === activePage.path,
    })) ?? [];

  const handleCloseSnackbar = () => {
    setNotification((prev) => ({ ...prev, open: false }));
  };

  const handleSave = async () => {
    if (!id) {
      return;
    }

    await updateNote(
      id,
      {
        content: updatedContent,
        updatedAt: new Date().toISOString(),
      },
      {
        onSuccess: () => {
          setNotification({
            canAutoHide: true,
            open: true,
            message: 'Note saved successfully',
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
      <NotePage
        content={content}
        onChange={(newContent) => {
          setUpdatedContent(newContent);
        }}
        header={
          <Stack px={3} py={1} gap={1}>
            <Breadcrumbs links={breadcrumbs} Link={Link} />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              gap={2}
            >
              <Typography component="h1" variant="h6" fontWeight="bold">
                {title}
              </Typography>
              <NotesToolbar
                updatedAt={formatEditedAt(updatedAt || createdAt)}
                onSave={handleSave}
                menu={
                  <NoteActions
                    id={id}
                    label={title}
                    path={location.pathname}
                    showEdit={false}
                  />
                }
              />
            </Stack>
          </Stack>
        }
      />
      <Snackbar
        id="note-save-notification"
        {...notification}
        onClose={handleCloseSnackbar}
      />
    </>
  );
}
