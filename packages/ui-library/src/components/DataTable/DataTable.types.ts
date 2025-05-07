export type Order = 'asc' | 'desc';

export interface HeadCell<T> {
  disablePadding: boolean;
  id: keyof T;
  label: string;
  numeric?: boolean;
}

export interface DataCell<T> {
  rows: (T & { id: number; link?: string; name: string; uid?: string })[];
}

export interface DataTableProps<T> extends DataCell<T> {
  dense?: boolean;
  headCells: HeadCell<T>[];
  LinkComponent?: any;
  onRequestSort?: (event: React.MouseEvent<unknown>, property: keyof T) => void;
  onSelectAllClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order?: Order;
  orderBy: keyof T;
  showTitle?: boolean;
  title: string;
}

export interface DataTableHeadProps<T>
  extends Omit<DataTableProps<T>, 'rows' | 'title'> {
  numSelected: number;
  rowCount: number;
}
