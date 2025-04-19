import {
  AddIcon,
  DescriptionIcon,
  FolderIcon,
  LibraryBooksIcon,
  PopoverMenu,
  ShortcutLabel,
} from '@notes-app/ui-library';
import { Navigation } from '@toolpad/core';

// https://github.com/mui/toolpad/issues/3934

const notes = [
  {
    segment: '1',
    title: 'Note 1',
    icon: <DescriptionIcon />,
  },
];

export const NAVIGATION: Navigation = [
  // {
  //   kind: 'header',
  //   title: 'Main items',
  // },
  {
    title: 'All Notes',
    icon: <LibraryBooksIcon />,
    action: (
      <PopoverMenu
        icon={<AddIcon />}
        items={[
          {
            label: <ShortcutLabel label="New Note" shortcut="Ctrl + N" />,
            onClick: () => console.log('Add new note'),
          },
          {
            label: (
              <ShortcutLabel label="New Folder" shortcut="Ctrl + Shift + N" />
            ),
            onClick: () => console.log('Add new folder'),
          },
        ]}
      />
    ),
  },
  {
    kind: 'header',
    title: 'Notes',
  },
  {
    segment: 'folder',
    title: 'Folder',
    icon: <FolderIcon />,
    action: (
      <PopoverMenu
        items={[
          {
            label: <ShortcutLabel label="New Note" shortcut="Ctrl + N" />,
            onClick: () => console.log('Add new note'),
          },
          {
            label: (
              <ShortcutLabel label="New Folder" shortcut="Ctrl + Shift + N" />
            ),
            onClick: () => console.log('Add new folder'),
          },
        ]}
      />
    ),
    pattern: '/:folder/:id',
    children: notes,
  },
];
