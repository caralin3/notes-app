import { useMemo, useState } from 'react';

import {
  Breadcrumbs,
  DeleteDialog,
  NotePage,
  NotesToolbar,
  Stack,
  Typography,
} from '@notes-app/ui-library';
import { useActivePage } from '@toolpad/core/useActivePage';
import { Link, useLocation, useNavigate } from 'react-router';

import { useNotes } from '../hooks';

export function Note() {
  const activePage = useActivePage();
  const location = useLocation();
  const navigate = useNavigate();
  const slug = location.pathname.split('/').pop();
  const { deleteNote, getNoteBySlug } = useNotes();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

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
  const { content, id, title } = note;

  const breadcrumbs =
    activePage?.breadcrumbs.map((crumb) => ({
      ...crumb,
      path: crumb.path ?? '',
      active: crumb.path === activePage.path,
    })) ?? [];

  return (
    <>
      <NotePage
        content={content}
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
                onEdit={() => {}}
                onMove={() => {}}
                onDelete={() => setOpenDeleteDialog(true)}
              />
            </Stack>
          </Stack>
        }
      />
      <DeleteDialog
        title="Delete Note"
        description={`Are you sure you want to delete the <strong>${title}</strong> note? This action cannot be undone.`}
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
        loading={loading}
        errorMessage={errorMessage}
        onSubmit={() => {
          setLoading(true);
          setErrorMessage(undefined);
          deleteNote(id, {
            onSuccess: () => {
              setLoading(false);
              setErrorMessage(undefined);
              setOpenDeleteDialog(false);
              if (activePage?.path && activePage?.path.includes('folder')) {
                navigate(
                  activePage.path.slice(0, activePage.path.lastIndexOf('/'))
                );
              }
              navigate('/');
            },
            onError: (error) => {
              setErrorMessage(error as string);
              setLoading(false);
            },
          });
        }}
      />
    </>
  );
}
