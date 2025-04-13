import {
  AddIcon,
  DashboardIcon,
  FolderIcon,
  PopoverMenu,
  ShortcutLabel,
} from '@notes-app/ui-library';
import { Navigation } from '@toolpad/core';

export const NAVIGATION: Navigation = [
  // {
  //   kind: 'header',
  //   title: 'Main items',
  // },
  {
    title: 'All Notes',
    icon: <DashboardIcon />,
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
    segment: 'orders',
    title: 'Folder',
    icon: <FolderIcon />,
    action: (
      <PopoverMenu
        items={[
          {
            label: 'Edit',
            onClick: () => console.log('Edit'),
          },
          {
            label: 'Delete',
            onClick: () => console.log('Delete'),
          },
        ]}
      />
    ),
    // pattern: 'inbox/:id',
    // children: [
    //   {
    //     segment: 'test',
    //     title: 'Test',
    //   },
    // ],
  },
];
