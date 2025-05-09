import { Box, Container, Stack, Typography } from '@mui/material';

import type { NotePageContainerProps } from './NotePageContainer.types';

export const NotePageContainer = ({
  actions,
  children,
  title,
}: NotePageContainerProps) => (
  <Container sx={{ pt: 3 }}>
    <Stack direction="row" justifyContent="space-between" gap={2}>
      <Typography component="h1" variant="h4">
        {title}
      </Typography>
      {actions}
    </Stack>
    <Box pt={4}>{children}</Box>
  </Container>
);
