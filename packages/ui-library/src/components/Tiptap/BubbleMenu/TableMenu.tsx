import { Divider, Paper, Stack } from '@mui/material';
import { Editor } from '@tiptap/react';

export const TableMenu = ({ editor }: { editor: Editor }) => {
  return (
    <Paper elevation={5} sx={{ px: 1, py: 0.5 }}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Divider orientation="vertical" flexItem />
      </Stack>
    </Paper>
  );
};
