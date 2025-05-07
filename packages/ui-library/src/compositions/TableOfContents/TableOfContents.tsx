import { TableOfContentsProps } from './TableOfContents.types';
import { DataTable } from '../../components/DataTable';
import { List } from '../../components/List';

export const TableOfContents = <T,>({
  content,
  Link,
  listType,
  tableData,
  viewType = 'list',
}: TableOfContentsProps<T>) => {
  if (viewType === 'grid' && tableData) {
    return <DataTable {...tableData} LinkComponent={Link} />;
  }
  return <List links={content} listType={listType} Link={Link} />;
};
