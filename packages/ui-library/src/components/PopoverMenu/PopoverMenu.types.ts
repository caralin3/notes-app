import { PopoverOrigin } from '@mui/material/Popover';

export interface PopoverMenuItem {
  icon?: React.ReactNode;
  label: string | React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
}

export interface PopoverMenuProps {
  anchorOrigin?: PopoverOrigin;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconButton?: boolean;
  items: PopoverMenuItem[];
  label?: string;
  showArrow?: boolean;
}
