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

import { useFolders } from '../hooks';
import { DeleteDialog } from './DeleteDialog';

interface FolderActionsProps {
  id: string;
  label: string;
  path: string;
  showEdit?: boolean;
}

export const FolderActions = ({
  id,
  label,
  path,
  showEdit = true,
}: FolderActionsProps) => {
  const navigate = useNavigate();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  // const [openMoveDialog, setOpenMoveDialog] = useState(false);
  // const [openCopyDialog, setOpenCopyDialog] = useState(false);
  // const [openArchiveDialog, setOpenArchiveDialog] = useState(false);

  const { deleteFolder } = useFolders();

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
        deleteType="Folder"
        deleteItem={label}
        onDelete={(cbs) => deleteFolder(id, cbs)}
        open={openDeleteDialog}
        setOpen={setOpenDeleteDialog}
        redirect={() => navigate('/')}
      />
    </>
  );
};
