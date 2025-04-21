import { useState } from 'react';

import { action, type Story, type StoryDefault } from '@ladle/react';
import { Stack, Typography } from '@mui/material';

import { Dialog } from './Dialog';
import { Button } from '../Button';

export default {
  title: 'Components / Dialog',
} satisfies StoryDefault;

export const DialogStory: Story = () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack direction="row">
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog
        open={open}
        title="Dialog Title"
        dialogText="To subscribe to this website, please enter your email address here.
                    We will send updates occasionally."
        cancelButtonText="Cancel"
        confirmButtonText="Confirm"
        onClose={() => setOpen(false)}
        onConfirm={action('onConfirm')}>
        <Typography>Dialog Content</Typography>
      </Dialog>
    </Stack>
  );
};

DialogStory.storyName = 'Dialog';

export const DialogFormStory: Story = () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack direction="row">
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog
        open={open}
        title="Form"
        cancelButtonText="Cancel"
        confirmButtonText="Submit"
        onClose={() => setOpen(false)}
        onSubmitForm={action('onSubmitForm')}>
        <Typography>Form Content</Typography>
      </Dialog>
    </Stack>
  );
};
DialogFormStory.storyName = 'Form Dialog';
