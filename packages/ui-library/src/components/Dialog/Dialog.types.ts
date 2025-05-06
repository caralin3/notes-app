export interface DialogProps {
  cancelButtonDisabled?: boolean;
  cancelButtonText?: string;
  confirmButtonDisabled?: boolean;
  confirmButtonText: string;
  children?: React.ReactNode;
  dialogText?: string;
  open: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  onSubmitForm?: (event: React.FormEvent<HTMLFormElement>) => void;
  title: string;
  type?: 'default' | 'danger';
}
