import { Story, StoryDefault } from '@ladle/react';
import { Link, Stack } from '@mui/material';

import { List } from './List';
import { ListProps } from './List.types';

export default {
  title: 'Components / List',
} satisfies StoryDefault;

interface ListStoryProps {
  listType: 'disc' | 'decimal';
}

export const ListStory: Story<ListStoryProps> = ({
  listType = 'disc',
}: ListStoryProps) => {
  const links: ListProps['links'] = [
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
    {
      id: '3',
      title: 'Advanced Topics',
      path: '#advanced-topics',
    },
  ];

  return (
    <Stack direction="row" spacing={2}>
      <List listType={listType} Link={Link} links={links} />
      <List listType={listType} links={links} />
    </Stack>
  );
};

ListStory.storyName = 'Nested List';

ListStory.args = {
  listType: 'disc',
};

ListStory.argTypes = {
  listType: {
    control: { type: 'select' },
    options: ['disc', 'decimal'],
  },
};
