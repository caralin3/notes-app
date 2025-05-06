export interface BreadcrumbsProps {
  links: Array<{
    active?: boolean;
    title: string;
    path: string;
  }>;
  Link: any;
}
