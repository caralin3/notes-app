import { Story, StoryDefault } from '@ladle/react';
import { Link } from '@mui/material';

import { Breadcrumbs } from './Breadcrumbs';

export default {
  title: 'Components / Breadcrumbs',
} satisfies StoryDefault;

export const BreadcrumbsStory: Story = () => (
  <Breadcrumbs
    links={[
      { title: 'Home', path: '/' },
      { title: 'Notes', path: '/notes' },
      { title: 'Add Note', path: '/notes/add', active: true },
    ]}
    Link={Link}
  />
);

BreadcrumbsStory.storyName = 'Breadcrumbs';
