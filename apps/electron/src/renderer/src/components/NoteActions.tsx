import { useState } from 'react';

import {
  ContentCopyIcon,
  DeleteIcon,
  DriveFileMoveIcon,
  EditIcon,
  InventoryIcon,
  PopoverMenu,
  ShortcutLabel,
} from '@notes-app/ui-library';
import { useNavigate } from 'react-router';

import { useNotes } from '../hooks';
import { DeleteDialog } from './DeleteDialog';

interface NoteActionsProps {
  id: string;
  label: string;
  path: string;
  showEdit?: boolean;
}

export const NoteActions = ({
  id,
  label,
  path,
  showEdit = true,
}: NoteActionsProps) => {
  const navigate = useNavigate();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  // const [openMoveDialog, setOpenMoveDialog] = useState(false);
  // const [openCopyDialog, setOpenCopyDialog] = useState(false);
  // const [openArchiveDialog, setOpenArchiveDialog] = useState(false);

  const { deleteNote } = useNotes();

  const items = [
    {
      label: <ShortcutLabel label="Copy" />,
      icon: <ContentCopyIcon fontSize="small" />,
      disabled: true,
      onClick: () => {},
    },
    {
      label: <ShortcutLabel label="Move" />,
      icon: <DriveFileMoveIcon fontSize="small" />,
      disabled: true,
      onClick: () => {},
    },
    {
      label: 'divider',
    },
    {
      label: <ShortcutLabel label="Archive" />,
      icon: <InventoryIcon fontSize="small" />,
      disabled: true,
      onClick: () => {},
    },
    {
      label: <ShortcutLabel label="Delete" />,
      icon: <DeleteIcon fontSize="small" />,
      onClick: () => setOpenDeleteDialog(true),
    },
  ];

  if (showEdit) {
    items.unshift({
      label: 'divider',
    });
    items.unshift({
      label: <ShortcutLabel label="Edit" />,
      icon: <EditIcon fontSize="small" />,
      onClick: () => navigate(path),
    });
  }

  return (
    <>
      <PopoverMenu items={items} />
      <DeleteDialog
        deleteType="Note"
        deleteItem={label}
        onDelete={(cbs) => deleteNote(id, cbs)}
        open={openDeleteDialog}
        setOpen={setOpenDeleteDialog}
        redirect={() => {
          if (path.includes('folder')) {
            navigate(path.slice(0, path.lastIndexOf('/')));
          }
          navigate('/');
        }}
      />
    </>
  );
};
