export interface MoveNoteDialogProps {
  description?: string;
  errorMessage?: string;
  folderId: string | null;
  folders: {
    label: string;
    value: string;
  }[];
  loading?: boolean;
  noteTitle: string;
  open: boolean;
  onClose: () => void;
  onSubmit: (folderId: string | null) => void;
  setErrorMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
}
