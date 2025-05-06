import { Fragment, useState } from 'react';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button, Divider, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { PopoverMenuProps } from './PopoverMenu.types';
import { IconButton } from '../IconButton';

export const PopoverMenu = ({
  anchorOrigin,
  disabled,
  icon,
  iconButton = true,
  items,
  label,
  showArrow = false,
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
      {iconButton && !showArrow ? (
        <IconButton
          aria-describedby={popoverId}
          onClick={handlePopoverButtonClick}
          icon={icon ?? <MoreHorizIcon />}
          disabled={disabled}
        />
      ) : (
        <Button
          aria-describedby={popoverId}
          onClick={handlePopoverButtonClick}
          disabled={disabled}
          variant="text"
          sx={{
            borderRadius: '8px !important',
            paddingRight: showArrow ? '0' : '15px',
          }}>
          {label ? (
            <Typography textTransform="capitalize">{label}</Typography>
          ) : (
            (icon ?? <MoreHorizIcon fontSize="small" />)
          )}
          {showArrow && <ArrowDropDownIcon fontSize="small" />}
        </Button>
      )}
      <Menu
        id={popoverId}
        open={isPopoverOpen}
        anchorEl={popoverAnchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={
          anchorOrigin ?? {
            horizontal: 'right',
            vertical: 'bottom',
          }
        }
        disableAutoFocus
        disableAutoFocusItem>
        {items.map((item, index) => {
          if (typeof item.label === 'string' && item.label === 'divider') {
            return <Divider key={index} />;
          }
          return (
            <MenuItem
              key={index}
              onClick={(event) => {
                event.stopPropagation();
                item.onClick?.();
                handlePopoverClose(event);
              }}
              disabled={item.disabled}
              selected={item.selected}
              sx={{ gap: 2, alignItems: 'flex-start', display: 'flex' }}>
              {item.icon}
              {item.label}
            </MenuItem>
          );
        })}
      </Menu>
    </Fragment>
  );
};
