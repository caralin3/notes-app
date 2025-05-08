import { TableOfContentsProps } from '../../compositions';

export interface AllNotesPageProps<T>
  extends Omit<TableOfContentsProps<T>, 'content' | 'viewType'> {
  loading?: boolean;
  isGridView?: boolean;
  notes: TableOfContentsProps<T>['content'];
  onCreateNote: () => void;
  onCreateFolder: () => void;
  setIsGridView: (isGridView: boolean) => void;
}
