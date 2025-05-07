import { action, type Story, type StoryDefault } from '@ladle/react';

import { AllNotesPage } from './AllNotesPage';
import { HeadCell } from '../../components/DataTable';

export default {
  title: 'Pages / All Notes',
} satisfies StoryDefault;

export const NewAllNotesPageStory: Story = () => (
  <AllNotesPage
    notes={[]}
    onCreateNote={action('Create Note')}
    onCreateFolder={action('Create Folder')}
  />
);

NewAllNotesPageStory.storyName = 'Empty';

interface Note {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  folderId: string | null;
  link: string;
}

interface AllNotesPageStoryProps {
  listType: 'disc' | 'decimal';
}
export const AllNotesPageStory: Story<AllNotesPageStoryProps> = ({
  listType = 'disc',
}: AllNotesPageStoryProps) => {
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
    <AllNotesPage
      listType={listType}
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

AllNotesPageStory.storyName = 'With Notes';

AllNotesPageStory.args = {
  listType: 'disc',
};

AllNotesPageStory.argTypes = {
  listType: {
    control: { type: 'select' },
    options: ['disc', 'decimal'],
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
