export interface FolderPageContainerProps {
  actions?: React.ReactNode;
  breadcrumbs?: React.ReactNode;
  children: React.ReactNode;
  onSaveTitle: (title: string) => void;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  title: string;
}
