import { Stack } from '@mui/material';
import { NotePageContainerProps } from './NotePageContainer.types';

export const NotePageContainer = ({ children }: NotePageContainerProps) => (
  <Stack pt={3}>{children}</Stack>
);
