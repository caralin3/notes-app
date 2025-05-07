import { Box, Container, Stack, Typography } from '@mui/material';

import { NotePageContainerProps } from './NotePageContainer.types';

export const NotePageContainer = ({
  actions,
  children,
  title,
}: NotePageContainerProps) => (
  <Container sx={{ pt: 3 }}>
    <Stack direction="row" justifyContent="space-between">
      <Typography component="h1" variant="h4">
        {title}
      </Typography>
      {actions}
    </Stack>
    <Box pt={4}>{children}</Box>
  </Container>
);
