import { action, type Story, type StoryDefault } from '@ladle/react';
import { Stack } from '@mui/material';

import { NotesToolbar } from './NotesToolbar';

export default {
  title: 'Components / Toolbar',
} satisfies StoryDefault;

export const NotesToolbarStory: Story = () => (
  <Stack direction="row" justifyContent="flex-end">
    <NotesToolbar
      onEdit={action('Edit')}
      onDelete={action('Delete')}
      onMove={action('Move')}
    />
  </Stack>
);

NotesToolbarStory.storyName = 'Notes Toolbar';
