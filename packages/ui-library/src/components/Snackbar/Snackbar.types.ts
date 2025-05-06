export interface SnackbarProps {
  canAutoHide?: boolean;
  /**
   * Unique id for the snackbar.
   * This is used to identify the snackbar instance.
   */
  id: string;
  onClose: () => void;
  open: boolean;
  message: string;
  severity: 'success' | 'error' | 'warning' | 'info';
}
