export interface ListProps {
  links: {
    id: string;
    title: string;
    path: string;
    children?: {
      id: string;
      title: string;
      path: string;
    }[];
  }[];
  listType?: 'disc' | 'decimal';
  Link?: any;
}
