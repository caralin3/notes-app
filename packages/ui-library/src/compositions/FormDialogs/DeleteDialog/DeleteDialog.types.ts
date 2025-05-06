export interface DeleteDialogProps {
  errorMessage?: string;
  description: string;
  loading?: boolean;
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title: string;
}
