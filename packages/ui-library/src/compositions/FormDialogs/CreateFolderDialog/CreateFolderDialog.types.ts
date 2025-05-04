export interface CreateFolderDialogProps {
  errorMessage?: string;
  loading?: boolean;
  open: boolean;
  onClose: () => void;
  onSubmit?: (name: string) => void;
}
