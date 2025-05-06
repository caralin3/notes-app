import Alert from '@mui/material/Alert';
import MuiSnackbar from '@mui/material/Snackbar';

import { SnackbarProps } from './Snackbar.types';

const AUTO_HIDE_DURATION = 5000;

export const Snackbar = ({
  canAutoHide,
  id,
  message,
  open,
  onClose,
  severity,
}: SnackbarProps) => {
  return (
    <MuiSnackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      key={id}
      open={open}
      autoHideDuration={canAutoHide ? AUTO_HIDE_DURATION : undefined}
      onClose={onClose}>
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </MuiSnackbar>
  );
};
