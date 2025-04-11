import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

import { ButtonProps } from './Button.types';

export const Button = ({ label, ...props }: MuiButtonProps & ButtonProps) => {
  return <MuiButton {...props}>{label}</MuiButton>;
};
