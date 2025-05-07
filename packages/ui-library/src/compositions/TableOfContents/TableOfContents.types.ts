import { DataTableProps } from '../../components/DataTable';

export interface TableOfContentsProps<T> {
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
  tableData?: Omit<DataTableProps<T>, 'LinkComponent'>;
  viewType?: 'list' | 'grid';
}
