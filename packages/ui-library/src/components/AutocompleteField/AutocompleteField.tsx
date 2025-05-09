import Autocomplete from '@mui/material/Autocomplete';

import { AutocompleteFieldProps } from './AutocompleteField.types';
import { TextField } from '../TextField';

export const AutocompleteField = <T,>({
  error,
  helperText,
  label,
  placeholder,
  required,
  ...props
}: AutocompleteFieldProps<T>) => {
  return (
    <Autocomplete
      {...props}
      sx={{ minWidth: 200 }}
      renderInput={(params) => (
        <TextField
          {...params}
          size="small"
          required={required}
          label={label}
          placeholder={placeholder}
          helperText={helperText}
          error={error}
        />
      )}
    />
  );
};
