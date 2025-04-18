import MuiButton from '@mui/material/Button';

import { ButtonProps } from './Button.types';

export const Button = ({ label, ...props }: ButtonProps) => {
  return <MuiButton {...props}>{label}</MuiButton>;
};
