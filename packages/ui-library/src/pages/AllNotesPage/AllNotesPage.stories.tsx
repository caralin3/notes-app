import { action, type Story, type StoryDefault } from '@ladle/react';
import { Stack, Typography } from '@mui/material';

import { AllNotesPage } from './AllNotesPage';

export default {
  title: 'Pages / All Notes',
} satisfies StoryDefault;

export const NewAllNotesPageStory: Story = () => (
  <Stack>
    <Typography component="h1" variant="h4">
      All Notes
    </Typography>
    <AllNotesPage
      notes={[]}
      onCreateNote={action('Create Note')}
      onCreateFolder={action('Create Folder')}
    />
  </Stack>
);

NewAllNotesPageStory.storyName = 'Empty';

export const AllNotesPageStory: Story = () => (
  <Stack>
    <Typography component="h1" variant="h4">
      All Notes
    </Typography>
    <AllNotesPage
      notes={[
        {
          id: '1',
          title: 'Table of Contents',
          path: '#table-of-contents',
          children: [
            {
              id: '1.1',
              title: 'Introduction',
              path: '#introduction',
            },
          ],
        },
        {
          id: '2',
          title: 'Getting Started',
          path: '#getting-started',
        },
      ]}
      onCreateNote={action('Create Note')}
      onCreateFolder={action('Create Folder')}
    />
  </Stack>
);

AllNotesPageStory.storyName = 'With Notes';
