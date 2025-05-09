import { useEffect, useMemo, useState } from 'react';

import {
  firebaseSignOut,
  firebaseTokenId,
  onAuthStateChanged,
  type User,
} from '@notes-app/database';
import {
  AddIcon,
  ArticleIcon,
  CreateFolderDialog,
  CreateNoteDialog,
  DescriptionIcon,
  FolderIcon,
  LibraryBooksIcon,
  PopoverMenu,
  ShortcutLabel,
} from '@notes-app/ui-library';
import type { Authentication, Navigation } from '@toolpad/core';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { Outlet, useNavigate } from 'react-router';

import { FolderActions, NoteActions } from './components';
import { type Session, SessionContext } from './contexts/SessionContext';
import { useFolders, useNotes } from './hooks';

const BRANDING = {
  title: 'Notes App',
  logo: <ArticleIcon color="primary" fontSize="large" />,
};

const AUTHENTICATION: Authentication = {
  signIn: firebaseTokenId,
  signOut: firebaseSignOut,
};

function App() {
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [showNewNoteDialog, setShowNewNoteDialog] = useState(false);
  const [showNewFolderDialog, setShowNewFolderDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
  const [submitting, setSubmitting] = useState(false);
  const { addNote, getNotesByFolderId, loadNotes, notes } = useNotes();
  const { addFolder, loadFolders, folderOptions, folders } = useFolders();

  const sessionContextValue = useMemo(
    () => ({
      session,
      setSession,
      loading,
    }),
    [session, loading]
  );

  useEffect(() => {
    // Returns an `unsubscribe` function to be called during teardown
    const unsubscribe = onAuthStateChanged((user: User | null) => {
      if (user) {
        console.log('User logged in:', user);
        setSession({
          user: {
            // name: user.displayName || '',
            email: user.email || '',
            // image: user.photoURL || '',
            uid: user.uid,
          },
        });
      } else {
        setSession(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (session?.user) {
      loadFolders(session.user.uid);
      loadNotes(session.user.uid);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.user]);

  const navigation: Navigation = [
    {
      title: 'All Notes',
      icon: <LibraryBooksIcon />,
      action: (
        <PopoverMenu
          icon={<AddIcon />}
          items={[
            {
              label: <ShortcutLabel label="New Note" shortcut="Ctrl + N" />,
              onClick: () => setShowNewNoteDialog(true),
            },
            {
              label: (
                <ShortcutLabel label="New Folder" shortcut="Ctrl + Shift + N" />
              ),
              onClick: () => setShowNewFolderDialog(true),
            },
          ]}
        />
      ),
    },
    {
      kind: 'header',
      title: 'Notes',
    },
    ...folders.map((folder) => ({
      pattern: '/folder/:folderId/:slug',
      segment: `folder/${folder.id}`,
      title: folder.name,
      icon: <FolderIcon />,
      action: (
        <FolderActions
          path={`/folder/${folder.id}`}
          label={folder.name}
          id={folder.id}
        />
      ),
      children: getNotesByFolderId(folder.id).map((note) => ({
        segment: note.slug,
        title: note.title,
        icon: <DescriptionIcon />,
        action: (
          <NoteActions
            path={`/folder/${folder.id}/${note.slug}`}
            label={note.title}
            id={note.id}
          />
        ),
      })),
    })),
    ...notes.map((note) => ({
      segment: `note/${note.slug}`,
      title: note.title,
      icon: <DescriptionIcon />,
      action: (
        <NoteActions
          path={`/note/${note.slug}`}
          label={note.title}
          id={note.id}
        />
      ),
    })),
  ];

  return (
    <ReactRouterAppProvider
      navigation={navigation}
      branding={BRANDING}
      session={session}
      authentication={AUTHENTICATION}
    >
      <SessionContext.Provider value={sessionContextValue}>
        <Outlet />
        {session?.user && (
          <>
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
            <CreateFolderDialog
              errorMessage={errorMessage}
              loading={submitting}
              open={showNewFolderDialog}
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
                    onSuccess: (id) => {
                      setSubmitting(false);
                      setShowNewFolderDialog(false);
                      setErrorMessage(undefined);
                      navigate(`/folder/${id}`);
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
        )}
      </SessionContext.Provider>
    </ReactRouterAppProvider>
  );
}

export default App;
