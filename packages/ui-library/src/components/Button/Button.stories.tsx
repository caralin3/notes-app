import type { Story, StoryDefault } from '@ladle/react';
import { Stack } from '@mui/material';

import { Button } from './Button';

export default {
  title: 'Components / Button',
} satisfies StoryDefault;

interface VariantsStoryProps {
  disabled: boolean;
  label: string;
  size: 'small' | 'medium' | 'large';
}

export const Variants: Story<VariantsStoryProps> = ({
  disabled,
  label,
  size,
}: VariantsStoryProps) => {
  const getLabel = (text: string) => {
    if (label !== '') {
      return label;
    }
    return text;
  };

  return (
    <Stack gap={3}>
      <Stack gap={2} flexDirection="row" flexWrap="wrap">
        <Button label={getLabel('Primary Text')} disabled={disabled} />
        <Button
          label={getLabel('Secondary Text')}
          color="secondary"
          disabled={disabled}
          size={size}
        />
        <Button
          label={getLabel('Error Text')}
          color="error"
          disabled={disabled}
          size={size}
        />
        <Button
          label={getLabel('Info Text')}
          color="info"
          disabled={disabled}
          size={size}
        />
        <Button
          label={getLabel('Success Text')}
          color="success"
          disabled={disabled}
          size={size}
        />
        <Button
          label={getLabel('Warning Text')}
          color="warning"
          disabled={disabled}
          size={size}
        />
      </Stack>
      <Stack gap={2} flexDirection="row" flexWrap="wrap">
        <Button
          label={getLabel('Primary Contained')}
          variant="contained"
          disabled={disabled}
          size={size}
        />
        <Button
          label={getLabel('Secondary Contained')}
          variant="contained"
          color="secondary"
          disabled={disabled}
          size={size}
        />
        <Button
          label={getLabel('Error Contained')}
          variant="contained"
          color="error"
          disabled={disabled}
          size={size}
        />
        <Button
          label={getLabel('Info Contained')}
          variant="contained"
          color="info"
          disabled={disabled}
          size={size}
        />
        <Button
          label={getLabel('Success Contained')}
          variant="contained"
          color="success"
          disabled={disabled}
          size={size}
        />
        <Button
          label={getLabel('Warning Contained')}
          variant="contained"
          color="warning"
          disabled={disabled}
          size={size}
        />
      </Stack>
      <Stack gap={2} flexDirection="row" flexWrap="wrap">
        <Button
          label={getLabel('Primary Outlined')}
          variant="outlined"
          disabled={disabled}
          size={size}
        />
        <Button
          label={getLabel('Secondary Outlined')}
          variant="outlined"
          color="secondary"
          disabled={disabled}
          size={size}
        />
        <Button
          label={getLabel('Error Outlined')}
          variant="outlined"
          color="error"
          disabled={disabled}
          size={size}
        />
        <Button
          label={getLabel('Info Outlined')}
          variant="outlined"
          color="info"
          disabled={disabled}
          size={size}
        />
        <Button
          label={getLabel('Success Outlined')}
          variant="outlined"
          color="success"
          disabled={disabled}
          size={size}
        />
        <Button
          label={getLabel('Warning Outlined')}
          variant="outlined"
          color="warning"
          disabled={disabled}
          size={size}
        />
      </Stack>
    </Stack>
  );
};

Variants.args = {
  label: '',
  disabled: false,
  size: 'medium',
};

Variants.argTypes = {
  size: {
    control: { type: 'select' },
    options: ['small', 'medium', 'large'],
  },
};
