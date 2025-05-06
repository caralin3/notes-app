import SaveIcon from '@mui/icons-material/Save';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

import { NotesToolbarProps } from './NotesToolbar.types';
import { IconButton } from '../IconButton';

export const NotesToolbar = ({
  menu,
  onSave,
  updatedAt,
}: NotesToolbarProps) => {
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <Typography variant="body2" color="text.secondary">
        Edited {updatedAt}
      </Typography>
      <Stack direction="row" alignItems="center" gap={0.5}>
        <IconButton icon={<SaveIcon />} tooltip="Save Note" onClick={onSave} />
        {menu}
      </Stack>
    </Stack>
  );
};
