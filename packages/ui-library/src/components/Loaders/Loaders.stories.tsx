import { Story, StoryDefault } from '@ladle/react';
import { LinearProgress, LinearProgressProps, Stack } from '@mui/material';

export default {
  title: 'Components / Loaders',
} satisfies StoryDefault;

interface LoadersStoryProps {
  color: LinearProgressProps['color'];
}

export const LinearProgressStory: Story<LoadersStoryProps> = ({
  color,
}: LoadersStoryProps) => {
  return (
    <Stack gap={2}>
      <LinearProgress color={color} />
    </Stack>
  );
};

LinearProgressStory.storyName = 'Linear Progress';

LinearProgressStory.args = {
  color: 'primary',
};

LinearProgressStory.argTypes = {
  color: {
    control: {
      type: 'select',
    },
    options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
  },
};
