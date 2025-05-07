export interface TableOfContentsProps {
  content: {
    id: string;
    title: string;
    path: string;
    children?: {
      id: string;
      title: string;
      path: string;
    }[];
  }[];
  Link?: any;
  listType?: 'disc' | 'decimal';
  viewType?: 'list' | 'grid';
}
