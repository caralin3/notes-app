import { CreateFolderDialogProps } from './CreateFolderDialog.types';
import { Dialog } from '../../../components/Dialog';
import { TextField } from '../../../components/TextField';

export const CreateFolderDialog = ({
  onClose,
  onSubmit,
  open,
}: CreateFolderDialogProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(event);
    }
    onClose();
  };

  return (
    <Dialog
      title="Create Folder"
      open={open}
      onClose={onClose}
      onSubmitForm={handleSubmit}
      cancelButtonText="Cancel"
      confirmButtonText="Create">
      <TextField label="Title" variant="outlined" fullWidth />
    </Dialog>
  );
};
