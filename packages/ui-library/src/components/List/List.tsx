import { Fragment } from 'react';

import {
  ListItem,
  ListItemText,
  Link as MuiLink,
  List as MuiList,
} from '@mui/material';

import { ListProps } from './List.types';

export const List = ({ links, Link, listType = 'disc' }: ListProps) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const listStyleType = listType === 'disc' ? 'disc' : undefined;

  const getTitle = (title: string, prefix: string) => {
    if (listType === 'decimal') {
      return `${prefix}. ${title}`;
    }
    return title;
  };

  return (
    <MuiList sx={{ listStyleType, pl: 2 }}>
      {links.map((item, index) => (
        <Fragment key={item.id}>
          <ListItem key={item.id} sx={{ display: 'list-item', pl: 0 }}>
            {Link ? (
              <MuiLink
                component={Link}
                key={item.path}
                to={item.path}
                underline="hover"
                color="primary">
                <ListItemText primary={getTitle(item.title, `${index + 1}`)} />
              </MuiLink>
            ) : (
              <ListItemText primary={getTitle(item.title, `${index + 1}`)} />
            )}
          </ListItem>
          {item.children && (
            <MuiList sx={{ listStyleType, pl: 4 }}>
              {item.children.map((child, childIndex) => (
                <ListItem key={child.id} sx={{ display: 'list-item', pl: 0 }}>
                  {Link ? (
                    <MuiLink
                      component={Link}
                      key={child.path}
                      to={child.path}
                      underline="hover"
                      color="primary">
                      <ListItemText
                        primary={getTitle(
                          child.title,
                          `${index + 1}${alphabet[childIndex]}`,
                        )}
                      />
                    </MuiLink>
                  ) : (
                    <ListItemText
                      primary={getTitle(
                        child.title,
                        `${index + 1}${alphabet[childIndex]}`,
                      )}
                    />
                  )}
                </ListItem>
              ))}
            </MuiList>
          )}
        </Fragment>
      ))}
    </MuiList>
  );
};
