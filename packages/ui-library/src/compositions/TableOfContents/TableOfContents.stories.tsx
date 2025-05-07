import { Story, StoryDefault } from '@ladle/react';
import { Link } from '@mui/material';

import { TableOfContents } from './TableOfContents';
import { TableOfContentsProps } from './TableOfContents.types';

export default {
  title: 'Compositions / TableOfContents',
} satisfies StoryDefault;

interface TableOfContentsStoryProps {
  listType: 'disc' | 'decimal';
  viewType: 'list' | 'grid';
}

export const TableOfContentsStory: Story<TableOfContentsStoryProps> = ({
  listType = 'disc',
  viewType = 'list',
}: TableOfContentsStoryProps) => {
  const content: TableOfContentsProps['content'] = [
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
  ];

  return (
    <TableOfContents
      Link={Link}
      content={content}
      listType={listType}
      viewType={viewType}
    />
  );
};

TableOfContentsStory.storyName = 'Table of Contents';

TableOfContentsStory.args = {
  listType: 'disc',
  viewType: 'list',
};

TableOfContentsStory.argTypes = {
  listType: {
    control: { type: 'select' },
    options: ['disc', 'decimal'],
  },
  viewType: {
    control: { type: 'select' },
    options: ['list', 'grid'],
  },
};
