export interface AllNotesPageProps {
  loading?: boolean;
  notes: string[];
  onCreateNote: () => void;
  onCreateFolder: () => void;
  title?: string;
}
