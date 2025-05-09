import { TableOfContentsProps } from '../../compositions';

export interface FolderPageProps<T>
  extends Omit<TableOfContentsProps<T>, 'content' | 'viewType'> {
  actions?: React.ReactNode;
  breadcrumbs?: React.ReactNode;
  loading?: boolean;
  isGridView?: boolean;
  notes: TableOfContentsProps<T>['content'];
  onCreateNote: () => void;
  onSaveTitle: (title: string) => void;
  setIsGridView: (isGridView: boolean) => void;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  title: string;
}
