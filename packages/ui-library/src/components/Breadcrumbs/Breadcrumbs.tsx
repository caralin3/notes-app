import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import MuiLink from '@mui/material/Link';

import { BreadcrumbsProps } from './Breadcrumbs.types';

export const Breadcrumbs = ({ links, Link }: BreadcrumbsProps) => (
  <MuiBreadcrumbs aria-label="breadcrumb">
    {links.map((link) => (
      <MuiLink
        component={Link}
        key={link.path}
        to={link.path}
        underline={link.active ? 'none' : 'hover'}
        aria-current={link.active ? 'page' : undefined}
        disabled={link.active}
        color="textSecondary">
        {link.title}
      </MuiLink>
    ))}
  </MuiBreadcrumbs>
);
