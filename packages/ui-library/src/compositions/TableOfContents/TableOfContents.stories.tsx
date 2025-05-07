import { action, Story, StoryDefault } from '@ladle/react';
import { Link } from '@mui/material';

import { TableOfContents } from './TableOfContents';
import { TableOfContentsProps } from './TableOfContents.types';
import { HeadCell } from '../../components/DataTable';

export default {
  title: 'Compositions / TableOfContents',
} satisfies StoryDefault;

interface Note {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  folderId: string | null;
  link: string;
}

interface TableOfContentsStoryProps {
  listType: 'disc' | 'decimal';
  viewType: 'list' | 'grid';
}

export const TableOfContentsStory: Story<TableOfContentsStoryProps> = ({
  listType = 'disc',
  viewType = 'list',
}: TableOfContentsStoryProps) => {
  const content: TableOfContentsProps<Note>['content'] = [
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

  const headCells: HeadCell<Note>[] = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Title',
    },
    {
      id: 'folderId',
      disablePadding: false,
      label: 'Folder',
    },
    {
      id: 'createdAt',
      disablePadding: false,
      label: 'Created On',
    },
    {
      id: 'updatedAt',
      disablePadding: false,
      label: 'Updated On',
    },
  ];

  const rows = [
    createData(
      1,
      'Note 1',
      'April 14, 2025',
      'May 3, 2025',
      'Folder 1',
      'note-1',
    ),
    createData(2, 'Note 2', 'March 16, 2024', 'May 4, 2025', 'Folder 2'),
    createData(3, 'Note 3', 'May 4, 2025', 'May 12, 2025', null, 'note-3'),
  ];

  return (
    <TableOfContents
      Link={Link}
      content={content}
      listType={listType}
      viewType={viewType}
      tableData={{
        headCells,
        rows,
        title: 'Notes',
        dense: false,
        onRequestSort: action('onRequestSort'),
        onSelectAllClick: action('onSelectAllClick'),
        order: 'asc',
        orderBy: 'updatedAt',
      }}
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

function createData(
  id: number,
  name: string,
  createdAt: string,
  updatedAt: string,
  folderId: string | null = null,
  link: string = '',
): Note {
  return {
    id,
    name,
    folderId,
    createdAt,
    updatedAt,
    link,
  };
}
