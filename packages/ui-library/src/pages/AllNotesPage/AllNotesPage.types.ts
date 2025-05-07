import { TableOfContentsProps } from '../../compositions';

export interface AllNotesPageProps {
  loading?: boolean;
  notes: TableOfContentsProps['content'];
  Link?: TableOfContentsProps['Link'];
  listType?: TableOfContentsProps['listType'];
  onCreateNote: () => void;
  onCreateFolder: () => void;
  viewType?: TableOfContentsProps['viewType'];
}
