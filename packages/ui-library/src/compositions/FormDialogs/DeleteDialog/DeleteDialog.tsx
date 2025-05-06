import Typography from '@mui/material/Typography';

import { DeleteDialogProps } from './DeleteDialog.types';
import { Dialog } from '../../../components/Dialog';

export const DeleteDialog = ({
  description,
  errorMessage,
  loading,
  onClose,
  onSubmit,
  open,
  title,
}: DeleteDialogProps) => {
  return (
    <Dialog
      title={title}
      open={open}
      onClose={onClose}
      onConfirm={onSubmit}
      cancelButtonDisabled={loading}
      cancelButtonText="Cancel"
      confirmButtonDisabled={loading || !!errorMessage}
      confirmButtonText="Delete"
      type="danger">
      {errorMessage ? (
        <Typography variant="body1" color="error" gutterBottom>
          {errorMessage}
        </Typography>
      ) : (
        <Typography variant="body1" gutterBottom>
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </Typography>
      )}
    </Dialog>
  );
};
