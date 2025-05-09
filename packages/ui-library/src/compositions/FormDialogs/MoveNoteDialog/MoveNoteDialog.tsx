import { useEffect, useState } from 'react';

import { Stack, Typography } from '@mui/material';

import { MoveNoteDialogProps } from './MoveNoteDialog.types';
import { AutocompleteField, Dialog } from '../../../components';

export const MoveNoteDialog = ({
  errorMessage,
  folders,
  loading,
  noteTitle,
  onClose,
  onSubmit,
  open,
}: MoveNoteDialogProps) => {
  const [folderId, setFolderId] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | undefined>(
    '',
  );

  useEffect(() => {
    if (open) {
      setFolderId(null);
      setValidationError(undefined);
    }
  }, [open]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setValidationError(undefined);
    onSubmit(folderId);
  };

  const handleClose = () => {
    setFolderId(null);
    setValidationError(undefined);
    onClose();
  };

  return (
    <Dialog
      title="Move Note"
      open={open}
      onClose={handleClose}
      onSubmitForm={handleSubmit}
      cancelButtonDisabled={loading}
      cancelButtonText="Cancel"
      confirmButtonDisabled={loading}
      confirmButtonText="Move">
      <Stack spacing={3}>
        <Typography>
          Move <strong>{noteTitle}</strong> note to a different folder.
        </Typography>
        <AutocompleteField<{
          label: string;
          value: string;
        }>
          label="Folder"
          placeholder="Select a folder"
          options={folders}
          getOptionLabel={(option) =>
            typeof option === 'string' ? option : option.label
          }
          isOptionEqualToValue={(option, value) => option.value === value.value}
          onChange={(_, value) => {
            const folder = value as { label: string; value: string } | null;
            setFolderId(folder?.value ?? null);
          }}
          error={!!errorMessage || !!validationError}
          helperText={errorMessage || validationError}
        />
      </Stack>
    </Dialog>
  );
};
