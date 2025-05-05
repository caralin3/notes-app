import MuiTextField from '@mui/material/TextField';

import { TextFieldProps } from './TextField.types';

export const TextField = ({ ...props }: TextFieldProps) => {
  return <MuiTextField {...props} size="small" />;
};
