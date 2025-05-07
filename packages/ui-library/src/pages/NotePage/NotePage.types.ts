export interface NotesPageProps {
  content: string;
  header: React.ReactNode;
  onChange: (content: string) => void;
  onSaveTitle: (title: string) => void;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  title: string;
}
