import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material/TextField';

import { TextFieldProps } from './TextField.types';

export const TextField = ({ ...props }: MuiTextFieldProps & TextFieldProps) => {
  return <MuiTextField {...props} size="small" />;
};
