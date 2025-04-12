import { Story, StoryDefault } from '@ladle/react';
import { Stack, Typography, TypographyProps } from '@mui/material';

export default {
  title: 'Components / Typography',
} satisfies StoryDefault;

interface VariantsStoryProps {
  color: TypographyProps['color'];
  text: string;
}

export const Variants: Story<VariantsStoryProps> = ({
  color,
  text,
}: VariantsStoryProps) => {
  const getText = (str: string) => {
    if (text !== '') {
      return text;
    }
    return str;
  };

  return (
    <Stack gap={2}>
      <Typography variant="h1" color={color}>
        {getText('Header 1')}
      </Typography>
      <Typography variant="h2" color={color}>
        {getText('Header 2')}
      </Typography>
      <Typography variant="h3" color={color}>
        {getText('Header 3')}
      </Typography>
      <Typography variant="h4" color={color}>
        {getText('Header 4')}
      </Typography>
      <Typography variant="h5" color={color}>
        {getText('Header 5')}
      </Typography>
      <Typography variant="h6" color={color}>
        {getText('Header 6')}
      </Typography>
      <Typography variant="subtitle1" color={color}>
        {getText('Subtitle 1')}
      </Typography>
      <Typography variant="subtitle2" color={color}>
        {getText('Subtitle 2')}
      </Typography>
      <Typography variant="body1" color={color}>
        {getText('Body 1')}
      </Typography>
      <Typography variant="body2" color={color}>
        {getText('Body 2')}
      </Typography>
      <Typography variant="caption" color={color}>
        {getText('Caption')}
      </Typography>
      <Typography variant="overline" color={color}>
        {getText('Overline')}
      </Typography>
      <Typography variant="button" color={color}>
        {getText('Button')}
      </Typography>
    </Stack>
  );
};

Variants.args = {
  color: 'textPrimary',
  text: '',
};

Variants.argTypes = {
  color: {
    control: {
      type: 'select',
    },
    options: [
      'textPrimary',
      'textSecondary',
      'textDisabled',
      'primary',
      'secondary',
      'success',
      'error',
      'info',
      'warning',
    ],
  },
};
