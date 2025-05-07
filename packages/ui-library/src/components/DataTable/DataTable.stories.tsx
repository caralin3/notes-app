import { action, Story, StoryDefault } from '@ladle/react';
import { Link } from '@mui/material';

import { DataTable } from './DataTable';
import { HeadCell } from './DataTable.types';

export default {
  title: 'Components / Table',
} satisfies StoryDefault;

interface Note {
  id: number;
  name: string;
  link: string;
  createdAt: string;
  updatedAt: string;
  // contentPreview: string;
  folderId: string | null;
}

interface DataTableStoryProps {
  dense: boolean;
}

export const DataTableStory: Story<DataTableStoryProps> = ({
  dense,
}: DataTableStoryProps) => {
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
    <DataTable
      title="Notes"
      LinkComponent={Link}
      dense={dense}
      headCells={headCells}
      onRequestSort={action('onRequestSort')}
      onSelectAllClick={action('onSelectAllClick')}
      order="asc"
      orderBy="updatedAt"
      rows={rows}
    />
  );
};

DataTableStory.storyName = 'Data Table';

DataTableStory.args = {
  dense: false,
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
