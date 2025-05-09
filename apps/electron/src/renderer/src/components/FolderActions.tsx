import { useState } from 'react';

import {
  ContentCopyIcon,
  DeleteDialog,
  DeleteIcon,
  DriveFileMoveIcon,
  EditIcon,
  InventoryIcon,
  PopoverMenu,
  ShortcutLabel,
} from '@notes-app/ui-library';
import { useNavigate } from 'react-router';

import { useFolders } from '../hooks';

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
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
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
        title="Delete Folder"
        description={`Are you sure you want to delete the <strong>${label}</strong> folder? This action cannot be undone.`}
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
        loading={loading}
        errorMessage={errorMessage}
        onSubmit={() => {
          setLoading(true);
          setErrorMessage(undefined);
          deleteFolder(id, {
            onSuccess: () => {
              setLoading(false);
              setErrorMessage(undefined);
              setOpenDeleteDialog(false);
              navigate('/');
            },
            onError: (error) => {
              setErrorMessage(error as string);
              setLoading(false);
            },
          });
        }}
      />
    </>
  );
};
