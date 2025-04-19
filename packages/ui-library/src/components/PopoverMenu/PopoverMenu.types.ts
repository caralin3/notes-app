import { PopoverOrigin } from '@mui/material/Popover';

export interface PopoverMenuItem {
  icon?: React.ReactNode;
  label: string | React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

export interface PopoverMenuProps {
  anchorOrigin?: PopoverOrigin;
  icon?: React.ReactNode;
  iconButton?: boolean;
  items: PopoverMenuItem[];
}
