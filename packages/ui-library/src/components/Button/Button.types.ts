import { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    MuiButtonProps {
  label?: string;
  selected?: boolean;
  tooltip?: string;
  tooltipPlacement?: 'top' | 'bottom' | 'left' | 'right';
}
