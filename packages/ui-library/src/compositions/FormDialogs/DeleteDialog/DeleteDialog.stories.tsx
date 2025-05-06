import { useState } from 'react';

import { action, type Story, type StoryDefault } from '@ladle/react';
import { Stack } from '@mui/material';

import { DeleteDialog } from './DeleteDialog';
import { Button } from '../../../components/Button';

export default {
  title: 'Compositions / Form Dialogs',
} satisfies StoryDefault;

export const DeleteDialogStory: Story = () => {
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);

  return (
    <Stack direction="row">
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Button onClick={() => setOpenError(true)}>Open Dialog with Error</Button>
      <DeleteDialog
        title="Delete Note"
        description="Are you sure you want to delete this note? This action cannot be undone."
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={action('onSubmit')}
      />
      <DeleteDialog
        title="Delete Note"
        description="Are you sure you want to delete this note? This action cannot be undone."
        open={openError}
        onClose={() => setOpenError(false)}
        onSubmit={action('onSubmit')}
        errorMessage="Error deleting note"
      />
    </Stack>
  );
};

DeleteDialogStory.storyName = 'Delete Dialog';
