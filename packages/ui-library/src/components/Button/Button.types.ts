import { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    MuiButtonProps {
  label: string;
}
