import Stack from '@mui/material/Stack';
import { NotesToolbarProps } from './NotesToolbar.types';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import { IconButton } from '../IconButton';

export const NotesToolbar = ({onDelete, onEdit, onMove}: NotesToolbarProps) => {
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <IconButton icon={<EditIcon />} tooltip="Edit Note" onClick={onEdit} />
      <IconButton icon={<DriveFileMoveIcon />} tooltip="Move to Folder" onClick={onMove} />
      <IconButton icon={<DeleteIcon />} tooltip="Delete Note" onClick={onDelete} />
    </Stack>
  );
};
