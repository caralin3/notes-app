export interface CreateNoteDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}
