import type { Story, StoryDefault } from '@ladle/react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Stack } from '@mui/material';

import { IconButton } from './IconButton';

export default {
  title: 'Components / Button',
} satisfies StoryDefault;

interface IconButtonStoryProps {
  disabled: boolean;
  size: 'small' | 'medium' | 'large';
}

export const IconButtonStory: Story<IconButtonStoryProps> = ({
  disabled,
  size,
}: IconButtonStoryProps) => {
  return (
    <Stack gap={3}>
      <Stack gap={2} flexDirection="row" flexWrap="wrap">
        <IconButton
          disabled={disabled}
          size={size}
          icon={<MoreVertIcon fontSize={size} />}
        />

        <IconButton
          disabled={disabled}
          size={size}
          icon={<MoreVertIcon fontSize={size} />}
          tooltip="More"
        />
      </Stack>
    </Stack>
  );
};

IconButtonStory.storyName = 'Icon Button';

IconButtonStory.args = {
  disabled: false,
  size: 'medium',
};

IconButtonStory.argTypes = {
  size: {
    control: { type: 'select' },
    options: ['small', 'medium', 'large'],
  },
};
