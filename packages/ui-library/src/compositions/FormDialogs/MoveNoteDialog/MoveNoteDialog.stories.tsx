import { useState } from 'react';

import { action, type Story, type StoryDefault } from '@ladle/react';
import { Stack } from '@mui/material';

import { MoveNoteDialog } from './MoveNoteDialog';
import { Button } from '../../../components/Button';

export default {
  title: 'Compositions / Form Dialogs',
} satisfies StoryDefault;

export const MoveNoteDialogStory: Story = () => {
  const [open, setOpen] = useState(true);
  return (
    <Stack direction="row">
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <MoveNoteDialog
        open={open}
        noteTitle="Note Title"
        onClose={() => setOpen(false)}
        onSubmit={action('onSubmit')}
        folders={[
          {
            value: '1',
            label: 'Folder 1',
          },
          {
            value: '2',
            label: 'Folder 2',
          },
          {
            value: '3',
            label: 'Folder 3',
          },
        ]}
      />
    </Stack>
  );
};

MoveNoteDialogStory.storyName = 'Move Note Dialog';
