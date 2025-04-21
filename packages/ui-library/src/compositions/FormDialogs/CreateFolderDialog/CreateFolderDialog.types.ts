export interface CreateFolderDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}
