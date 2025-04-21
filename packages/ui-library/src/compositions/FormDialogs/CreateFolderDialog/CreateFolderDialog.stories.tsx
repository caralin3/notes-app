import { useState } from 'react';

import { action, type Story, type StoryDefault } from '@ladle/react';
import { Stack } from '@mui/material';

import { CreateFolderDialog } from './CreateFolderDialog';
import { Button } from '../../../components/Button';

export default {
  title: 'Compositions / Form Dialogs',
} satisfies StoryDefault;

export const CreateFolderDialogStory: Story = () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack direction="row">
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <CreateFolderDialog
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={action('onSubmit')}
      />
    </Stack>
  );
};

CreateFolderDialogStory.storyName = 'Create Folder Dialog';
