export interface CreateNoteDialogProps {
  errorMessage?: string;
  folders: Array<{
    label: string;
    value: string;
  }>;
  loading?: boolean;
  open: boolean;
  onClose: () => void;
  onSubmit?: (values: {
    folderId: string | null;
    slug: string;
    title: string;
  }) => void;
  slugs: Array<string>;
}
