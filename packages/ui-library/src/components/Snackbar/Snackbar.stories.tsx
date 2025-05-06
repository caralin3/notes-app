import { action, Story, StoryDefault } from '@ladle/react';

import { Snackbar } from './Snackbar';

export default {
  title: 'Components / Alerts',
} satisfies StoryDefault;

interface SnackbarStoryProps {
  message: string;
  severity: 'error' | 'info' | 'success' | 'warning';
}

export const SnackbarStory: Story<SnackbarStoryProps> = ({
  message,
  severity,
}: SnackbarStoryProps) => {
  return (
    <Snackbar
      id="1"
      severity={severity}
      message={message}
      onClose={action('onClose')}
      open={true}
    />
  );
};

SnackbarStory.storyName = 'Snackbar';

SnackbarStory.args = {
  message: 'This is an Alert inside a Snackbar!',
  severity: 'success',
};

SnackbarStory.argTypes = {
  severity: {
    control: { type: 'select' },
    options: ['error', 'info', 'success', 'warning'],
  },
};
