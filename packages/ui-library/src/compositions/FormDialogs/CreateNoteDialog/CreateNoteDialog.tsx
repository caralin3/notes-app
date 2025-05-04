import { useEffect, useState } from 'react';

import { Stack } from '@mui/material';

import { CreateNoteDialogProps } from './CreateNoteDialog.types';
import { AutocompleteField } from '../../../components';
import { Dialog } from '../../../components/Dialog';
import { TextField } from '../../../components/TextField';

export const CreateNoteDialog = ({
  errorMessage,
  folders,
  loading,
  onClose,
  onSubmit,
  open,
}: CreateNoteDialogProps) => {
  const [values, setValues] = useState<{
    folderId: string | null;
    slug: string;
    title: string;
  }>({
    folderId: null,
    title: '',
    slug: '',
  });
  const [titleError, setTitleError] = useState<string | undefined>('');
  const [validationError, setValidationError] = useState<string | undefined>(
    '',
  );

  useEffect(() => {
    if (open) {
      setValues({ folderId: null, title: '', slug: '' });
      setValidationError(undefined);
      setTitleError(undefined);
    }
  }, [open]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string,
  ) => {
    const value = event.target.value;
    setValidationError(undefined);
    setTitleError(undefined);

    if (field === 'title') {
      setValues({
        ...values,
        title: value,
        slug: value
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^A-Za-z0-9]$/, ''),
      });
    } else {
      setValues({ ...values, [field]: value });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setValidationError(undefined);
    setTitleError(undefined);

    if (values.title.trim() === '') {
      setTitleError('Title is required');
      return;
    }
    if (/^[A-Za-z0-9\s]+$/.test(values.title) === false) {
      setTitleError('Title can only contain letters and numbers');
      return;
    }

    if (onSubmit) {
      onSubmit({
        folderId: values.folderId,
        slug: values.slug,
        title: values.title.trim(),
      });
    }
  };

  const handleClose = () => {
    setValues({ folderId: null, title: '', slug: '' });
    setValidationError(undefined);
    setTitleError(undefined);
    onClose();
  };

  return (
    <Dialog
      title="Create Note"
      open={open}
      onClose={handleClose}
      onSubmitForm={handleSubmit}
      cancelButtonDisabled={loading}
      cancelButtonText="Cancel"
      confirmButtonDisabled={loading}
      confirmButtonText="Create">
      <Stack spacing={3}>
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
            setValues({ ...values, folderId: folder?.value ?? null });
          }}
          error={!!errorMessage || !!validationError}
          helperText={errorMessage || validationError}
        />
        <TextField
          fullWidth
          required
          label="Title"
          variant="outlined"
          value={values.title}
          onChange={(e) => handleChange(e, 'title')}
          error={!!titleError}
          helperText={titleError}
        />
        <TextField
          fullWidth
          disabled
          required
          label="Slug"
          variant="outlined"
          value={values.slug}
          onChange={(e) => handleChange(e, 'slug')}
        />
      </Stack>
    </Dialog>
  );
};
