import { useState } from 'react';

import {
  AllNotesPage,
  CreateFolderDialog,
  CreateNoteDialog,
} from '@notes-app/ui-library';

export function AllNotes() {
  const [showNewNoteDialog, setShowNewNoteDialog] = useState(false);
  const [showNewFolderDialog, setShowNewFolderDialog] = useState(false);

  return (
    <>
      <AllNotesPage
        notes={[]}
        onCreateNote={() => setShowNewNoteDialog(true)}
        onCreateFolder={() => setShowNewFolderDialog(true)}
        // title="All Notes"
      />
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
    </>
  );
}
