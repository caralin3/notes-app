import { Box, Container, Stack } from '@mui/material';

import type { FolderPageContainerProps } from './FolderPageContainer.types';
import { InlineEditField } from '../../InlineEditField.tsx';

export const FolderPageContainer = ({
  breadcrumbs,
  actions,
  children,
  onSaveTitle,
  setTitle,
  title,
}: FolderPageContainerProps) => (
  <Container sx={{ pt: 3 }}>
    {breadcrumbs}
    <Stack direction="row" justifyContent="space-between" gap={2}>
      <InlineEditField
        onSaveTitle={onSaveTitle}
        setTitle={setTitle}
        title={title}
      />
      {actions}
    </Stack>
    <Box pt={4}>{children}</Box>
  </Container>
);
