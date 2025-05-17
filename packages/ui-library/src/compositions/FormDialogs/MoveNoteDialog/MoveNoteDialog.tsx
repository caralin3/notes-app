import { useEffect, useState } from 'react';

import { Stack, Typography } from '@mui/material';

import { MoveNoteDialogProps } from './MoveNoteDialog.types';
import { AutocompleteField, Dialog } from '../../../components';

export const MoveNoteDialog = ({
  errorMessage,
  folderId: initialFolderId,
  folders,
  loading,
  noteTitle,
  onClose,
  onSubmit,
  open,
  setErrorMessage,
}: MoveNoteDialogProps) => {
  const [folderId, setFolderId] = useState<string | null>(initialFolderId);
  const [validationError, setValidationError] = useState<string | undefined>(
    '',
  );

  useEffect(() => {
    if (open) {
      setFolderId(initialFolderId);
      setValidationError(undefined);
    }
  }, [open, initialFolderId]);

  const handleSubmit = () => {
    setValidationError(undefined);
    setErrorMessage(undefined);
    if (!folderId) {
      setValidationError('Please select a folder');
      return;
    }

    if (folderId === 'none') {
      onSubmit(null);
      return;
    }

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
      onConfirm={handleSubmit}
      cancelButtonDisabled={loading}
      cancelButtonText="Cancel"
      confirmButtonDisabled={loading || !!errorMessage || !!validationError}
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
          value={folders.find((f) => f.value === folderId) ?? null}
          options={[
            {
              label: 'None',
              value: 'none',
            },
            ...folders,
          ]}
          getOptionLabel={(option) =>
            typeof option === 'string' ? option : option.label
          }
          isOptionEqualToValue={(option, value) => option.value === value.value}
          onChange={(_, value) => {
            setValidationError(undefined);
            setErrorMessage(undefined);
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
