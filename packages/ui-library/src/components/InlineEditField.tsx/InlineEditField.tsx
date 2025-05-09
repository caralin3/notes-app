import { TextField } from '../TextField';
import { InlineEditFieldProps } from './InlineEditField.types';

export const InlineEditField = ({
  onSaveTitle,
  setTitle,
  title,
}: InlineEditFieldProps) => {
  return (
    <TextField
      fullWidth
      value={title}
      size="small"
      onChange={(e) => {
        setTitle(e.target.value);
      }}
      onBlur={() => {
        onSaveTitle(title);
      }}
      slotProps={{
        root: {
          sx(theme) {
            return {
              '& fieldset': {
                borderColor: theme.palette.background.paper, // Default border
              },
              // '& .MuiOutlinedInput-root:hover fieldset': {
              //   borderColor: theme.palette.divider, // Hover state
              // },
              '&.Mui-focused fieldset': {
                borderColor: theme.palette.primary.main, // Focused state
              },
            };
          },
        },
        input: {
          sx(theme) {
            return {
              color: theme.palette.text.primary,
              fontSize: theme.typography.h4.fontSize,
              fontWeight: theme.typography.h4.fontWeight,
              '& input': {
                px: 0.5,
              },
            };
          },
        },
      }}
    />
  );
};
