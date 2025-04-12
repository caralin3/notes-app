import type { Story, StoryDefault } from '@ladle/react';
import { Stack, Typography } from '@mui/material';

import { AllNotesPage } from './AllNotesPage';

export default {
  title: 'Pages',
} satisfies StoryDefault;

export const AllNotesPageStory: Story = () => (
  <Stack>
    <Typography component="h1" variant="h4">
      All Notes
    </Typography>
    <AllNotesPage />
  </Stack>
);

AllNotesPageStory.storyName = 'All Notes';
