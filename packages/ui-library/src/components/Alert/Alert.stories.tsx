import { action, Story, StoryDefault } from '@ladle/react';
import Alert from '@mui/material/Alert';

export default {
  title: 'Components / Alerts',
} satisfies StoryDefault;

interface AlertStoryProps {
  message: string;
  severity: 'error' | 'info' | 'success' | 'warning';
}

export const AlertStory: Story<AlertStoryProps> = ({
  message,
  severity,
}: AlertStoryProps) => {
  return (
    <Alert severity={severity} onClose={action('onClose')}>
      {message}
    </Alert>
  );
};

AlertStory.storyName = 'Alert';

AlertStory.args = {
  message: 'This is an Alert!',
  severity: 'success',
};

AlertStory.argTypes = {
  severity: {
    control: { type: 'select' },
    options: ['error', 'info', 'success', 'warning'],
  },
};
