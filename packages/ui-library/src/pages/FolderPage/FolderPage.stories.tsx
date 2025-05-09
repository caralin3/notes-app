import { action, type Story, type StoryDefault } from '@ladle/react';

import { FolderPage } from './FolderPage';
import { HeadCell } from '../../components/DataTable';

export default {
  title: 'Pages / Folder',
} satisfies StoryDefault;

export const NewFolderPageStory: Story = () => (
  <FolderPage
    notes={[]}
    onCreateNote={action('Create Note')}
    setIsGridView={action('setIsGridView')}
    onSaveTitle={action('onSaveTitle')}
    setTitle={action('setTitle')}
    title="Folder Name"
  />
);

NewFolderPageStory.storyName = 'Empty';

interface Note {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  folderId: string | null;
  link: string;
}

interface FolderPageStoryProps {
  isGridView: boolean;
  listType: 'disc' | 'decimal';
}
export const FolderPageStory: Story<FolderPageStoryProps> = ({
  isGridView = false,
  listType = 'disc',
}: FolderPageStoryProps) => {
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
    <FolderPage
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
      onSaveTitle={action('onSaveTitle')}
      setTitle={action('setTitle')}
      title="Folder Name"
      setIsGridView={action('setIsGridView')}
      isGridView={isGridView}
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

FolderPageStory.storyName = 'With Notes';

FolderPageStory.args = {
  isGridView: false,
  listType: 'disc',
};

FolderPageStory.argTypes = {
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
