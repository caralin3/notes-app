import { useState } from 'react';

import { CreateFolderDialogProps } from './CreateFolderDialog.types';
import { Dialog } from '../../../components/Dialog';
import { TextField } from '../../../components/TextField';

export const CreateFolderDialog = ({
  errorMessage,
  loading,
  onClose,
  onSubmit,
  open,
}: CreateFolderDialogProps) => {
  const [name, setName] = useState<string>('');
  const [validationError, setValidationError] = useState<string | undefined>(
    '',
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValidationError(undefined);
    setName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValidationError(undefined);

    if (name.trim() === '') {
      setValidationError('Name is required');
      return;
    }

    if (/^[A-Za-z0-9]+$/.test(name) === false) {
      setValidationError('Name can only contain letters and numbers');
      return;
    }

    if (onSubmit) {
      onSubmit(name.trim());
    }
  };

  const handleClose = () => {
    setName('');
    setValidationError(undefined);
    onClose();
  };

  return (
    <Dialog
      title="Create Folder"
      open={open}
      onClose={handleClose}
      onSubmitForm={handleSubmit}
      cancelButtonDisabled={loading}
      cancelButtonText="Cancel"
      confirmButtonDisabled={loading}
      confirmButtonText="Create">
      <TextField
        fullWidth
        required
        label="Name"
        variant="outlined"
        value={name}
        onChange={handleChange}
        error={!!errorMessage || !!validationError}
        helperText={errorMessage || validationError}
      />
    </Dialog>
  );
};
