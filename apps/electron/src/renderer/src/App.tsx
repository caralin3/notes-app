import { useEffect, useMemo, useState } from 'react';

import {
  firebaseSignOut,
  onAuthStateChanged,
  type User,
} from '@notes-app/database';
import {
  AddIcon,
  CreateFolderDialog,
  CreateNoteDialog,
  FolderIcon,
  LibraryBooksIcon,
  PopoverMenu,
  ShortcutLabel,
} from '@notes-app/ui-library';
import type { Authentication, Navigation } from '@toolpad/core';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { Outlet } from 'react-router';

import { type Session, SessionContext } from './contexts/SessionContext';

const BRANDING = {
  title: 'My Toolpad Core App',
};

const AUTHENTICATION: Authentication = {
  signIn: () => {},
  signOut: firebaseSignOut,
};

function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [showNewNoteDialog, setShowNewNoteDialog] = useState(false);
  const [showNewFolderDialog, setShowNewFolderDialog] = useState(false);

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
        setSession({
          user: {
            name: user.displayName || '',
            email: user.email || '',
            image: user.photoURL || '',
          },
        });
      } else {
        setSession(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

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
    {
      segment: 'folder',
      title: 'Folder',
      icon: <FolderIcon />,
      action: (
        <PopoverMenu
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
      pattern: '/:folder/:id',
      children: [],
    },
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
        <CreateNoteDialog
          open={showNewNoteDialog}
          onClose={() => setShowNewNoteDialog(false)}
          onSubmit={() => {
            // Handle new note creation
          }}
        />
        <CreateFolderDialog
          open={showNewFolderDialog}
          onClose={() => setShowNewFolderDialog(false)}
          onSubmit={() => {
            // Handle new folder creation
          }}
        />
      </SessionContext.Provider>
    </ReactRouterAppProvider>
  );
}

export default App;
