import { AutocompleteProps } from '@mui/material/Autocomplete';

export interface AutocompleteFieldProps<T>
  extends Omit<AutocompleteProps<T, boolean, boolean, boolean>, 'renderInput'> {
  error?: boolean;
  helperText?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
}
