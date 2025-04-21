import { CreateNoteDialogProps } from './CreateNoteDialog.types';
import { Dialog } from '../../../components/Dialog';
import { TextField } from '../../../components/TextField';

export const CreateNoteDialog = ({
  onClose,
  onSubmit,
  open,
}: CreateNoteDialogProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(event);
    }
    onClose();
  };

  return (
    <Dialog
      title="Create Note"
      open={open}
      onClose={onClose}
      onSubmitForm={handleSubmit}
      cancelButtonText="Cancel"
      confirmButtonText="Create">
      <TextField label="Title" variant="outlined" fullWidth />
    </Dialog>
  );
};
