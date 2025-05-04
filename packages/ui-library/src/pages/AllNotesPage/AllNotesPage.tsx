import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { Stack, Typography } from '@mui/material';

import { AllNotesPageProps } from './AllNotesPage.types';
import { Button } from '../../components';
import { NotePageContainer } from '../../components/Containers';

export function AllNotesPage<T>({
  notes,
  onCreateFolder,
  onCreateNote,
}: AllNotesPageProps<T>) {
  if (!notes || notes.length === 0) {
    return (
      <NotePageContainer>
        <Stack alignItems="flex-start" spacing={2}>
          <Typography variant="body1">
            You haven&apos;t created any notes yet. Create a new note or a new
            folder to get started.
          </Typography>
          <Button
            label="Create Note"
            variant="contained"
            color="primary"
            onClick={onCreateNote}
            startIcon={<NoteAddIcon />}
          />
          <Button
            label="Create Folder"
            variant="contained"
            color="primary"
            onClick={onCreateFolder}
            startIcon={<CreateNewFolderIcon />}
          />
        </Stack>
      </NotePageContainer>
    );
  }

  return (
    <NotePageContainer>
      <div>Note</div>
    </NotePageContainer>
  );
}
