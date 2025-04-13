import { Fragment, useState } from 'react';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { PopoverMenuProps } from './PopoverMenu.types';
import { IconButton } from '../IconButton';

export const PopoverMenu = ({
  anchorOrigin,
  icon,
  items,
}: PopoverMenuProps) => {
  const [popoverAnchorEl, setPopoverAnchorEl] =
    useState<HTMLButtonElement | null>(null);

  const isPopoverOpen = Boolean(popoverAnchorEl);
  const popoverId = isPopoverOpen ? 'simple-popover' : undefined;

  const handlePopoverButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    setPopoverAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setPopoverAnchorEl(null);
  };

  return (
    <Fragment>
      <IconButton
        aria-describedby={popoverId}
        onClick={handlePopoverButtonClick}
        icon={icon ?? <MoreHorizIcon />}
      />
      <Menu
        id={popoverId}
        open={isPopoverOpen}
        anchorEl={popoverAnchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={
          anchorOrigin ?? {
            vertical: 'bottom',
            horizontal: 'right',
          }
        }
        disableAutoFocus
        disableAutoFocusItem>
        {items.map((item, index) => (
          <MenuItem
            key={index}
            onClick={(event) => {
              event.stopPropagation();
              item.onClick();
              handlePopoverClose(event);
            }}
            disabled={item.disabled}
            sx={{ gap: 1 }}>
            {item.icon}
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
};
