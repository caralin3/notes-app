import { TableOfContentsProps } from './TableOfContents.types';
import { List } from '../../components/List';

export const TableOfContents = ({
  content,
  Link,
  listType,
  viewType = 'list',
}: TableOfContentsProps) => {
  if (viewType === 'grid') {
    return null;
  }
  return <List links={content} listType={listType} Link={Link} />;
};
