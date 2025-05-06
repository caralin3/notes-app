import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Dialog as MuiDialog,
} from '@mui/material';

import { DialogProps } from './Dialog.types';
import { Button } from '../Button';

export const Dialog = ({
  cancelButtonDisabled,
  cancelButtonText,
  confirmButtonDisabled,
  confirmButtonText,
  children,
  dialogText,
  open,
  onClose,
  onConfirm,
  onSubmitForm,
  title,
  type = 'default',
}: DialogProps) => {
  return (
    <MuiDialog
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDialog-paper': { width: '100%', minWidth: 100, maxWidth: 600 },
      }}
      slotProps={{
        paper: {
          component: onSubmitForm ? 'form' : undefined,
          onSubmit: onSubmitForm
            ? (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                onSubmitForm(event);
              }
            : undefined,
        },
      }}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ pb: dialogText ? 2 : 1 }}>
          {dialogText}
        </DialogContentText>
        {children}
      </DialogContent>
      <DialogActions sx={{ pb: 2, pr: 3 }}>
        <Button onClick={onClose} disabled={cancelButtonDisabled}>
          {cancelButtonText ?? 'Cancel'}
        </Button>
        <Button
          type={onSubmitForm ? 'submit' : 'button'}
          onClick={onConfirm ? onConfirm : undefined}
          disabled={confirmButtonDisabled}
          color={type === 'danger' ? 'error' : 'primary'}
          variant="contained">
          {confirmButtonText}
        </Button>
      </DialogActions>
    </MuiDialog>
  );
};
