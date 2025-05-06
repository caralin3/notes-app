import { action, type Story, type StoryDefault } from '@ladle/react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Stack } from '@mui/material';

import { NotesToolbar } from './NotesToolbar';
import { IconButton } from '../IconButton';

export default {
  title: 'Components / Toolbar',
} satisfies StoryDefault;

export const NotesToolbarStory: Story = () => (
  <Stack direction="row" justifyContent="flex-end">
    <NotesToolbar
      updatedAt="April 5, 2025"
      onSave={action('Saved')}
      menu={
        <IconButton
          icon={<MoreHorizIcon />}
          tooltip="Menu"
          onClick={action('Menu')}
        />
      }
    />
  </Stack>
);

NotesToolbarStory.storyName = 'Notes Toolbar';
