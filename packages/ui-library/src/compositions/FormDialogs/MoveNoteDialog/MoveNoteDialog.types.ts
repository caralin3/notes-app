export interface MoveNoteDialogProps {
  description?: string;
  errorMessage?: string;
  folders: {
    label: string;
    value: string;
  }[];
  loading?: boolean;
  noteTitle: string;
  open: boolean;
  onClose: () => void;
  onSubmit: (folderId: string | null) => void;
}
