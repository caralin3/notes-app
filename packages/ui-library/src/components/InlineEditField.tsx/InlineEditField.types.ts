export interface InlineEditFieldProps {
  onSaveTitle: (title: string) => void;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  title: string;
}
