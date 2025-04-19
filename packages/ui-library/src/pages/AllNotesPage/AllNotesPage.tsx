import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { Stack, Typography } from '@mui/material';

import { AllNotesPageProps } from './AllNotesPage.types';
import { Button } from '../../components';
import { NotePageContainer } from '../../components/Containers';

export function AllNotesPage({ notes }: AllNotesPageProps) {
  if (!notes || notes.length === 0) {
    return (
      <NotePageContainer>
        <Stack alignItems="flex-start" spacing={2}>
          <Typography variant="body1">
            You haven&apos;t created any notes yet. Create a new note to get
            started.
          </Typography>
          <Button
            label="Create New Note"
            variant="contained"
            color="primary"
            onClick={() => {
              console.log('Create new note');
            }}
            startIcon={<NoteAddIcon />}
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
