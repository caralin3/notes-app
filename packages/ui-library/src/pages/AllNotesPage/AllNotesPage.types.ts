export interface AllNotesPageProps<T> {
  loading?: boolean;
  notes: T[];
  onCreateNote: () => void;
  onCreateFolder: () => void;
  title?: string;
}
