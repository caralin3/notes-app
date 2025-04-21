export interface DialogProps {
  cancelButtonText?: string;
  confirmButtonText: string;
  children?: React.ReactNode;
  dialogText?: string;
  open: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  onSubmitForm?: (event: React.FormEvent<HTMLFormElement>) => void;
  title: string;
}
