import { action, Story, StoryDefault } from '@ladle/react';
import { SplitButton } from './SplitButton';
import { Stack } from '@mui/material';

export default {
  title: 'Components / Button',
} satisfies StoryDefault;

export const SplitButtonStory: Story<{ options: string[] }> = ({
  options,
}: {
  options: string[];
}) => {
  return (
    <Stack spacing={2} alignItems="flex-start">
      <SplitButton options={options} onClick={action('onClick')} />
      <SplitButton
        variant="contained"
        options={options}
        onClick={action('onClick')}
      />
      <SplitButton
        variant="text"
        options={options}
        onClick={action('onClick')}
      />
    </Stack>
  );
};

SplitButtonStory.storyName = 'SplitButton';

SplitButtonStory.args = {
  options: ['Create a merge commit', 'Squash and merge', 'Rebase and merge'],
};
