import { useMemo, useState } from 'react';

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

import { useFolders, useNotes } from '../hooks';
import { DeleteDialog } from './DeleteDialog';
import { MoveDialog } from './MoveDialog';

interface NoteActionsProps {
  id: string;
  label: string;
  path: string;
  showEdit?: boolean;
  slug: string;
}

export const NoteActions = ({
  id,
  label,
  path,
  showEdit = true,
  slug,
}: NoteActionsProps) => {
  const navigate = useNavigate();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openMoveDialog, setOpenMoveDialog] = useState(false);
  // const [openCopyDialog, setOpenCopyDialog] = useState(false);
  // const [openArchiveDialog, setOpenArchiveDialog] = useState(false);

  const { deleteNote, getNoteBySlug, updateNote } = useNotes();
  const { folderOptions } = useFolders();

  const note = useMemo(() => getNoteBySlug(slug), [slug, getNoteBySlug]);

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
      onClick: () => setOpenMoveDialog(true),
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
      <MoveDialog
        item={label}
        open={openMoveDialog}
        setOpen={setOpenMoveDialog}
        folders={folderOptions}
        folderId={note?.folderId ?? null}
        onMove={({ folderId, onSuccess, onError }) => {
          updateNote(
            id,
            {
              folderId,
              updatedAt: new Date().toISOString(),
            },
            {
              onSuccess,
              onError,
            }
          );
        }}
        redirect={(folderId) => navigate(`/folder/${folderId}/${slug}`)}
      />
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
