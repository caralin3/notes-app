import { action, Story, StoryDefault } from '@ladle/react';

import { InlineEditField } from './InlineEditField';

export default {
  title: 'Components / Inputs',
} satisfies StoryDefault;

export const InlineEditFieldStory: Story = () => {
  return (
    <InlineEditField
      onSaveTitle={action('onSaveTitle')}
      setTitle={action('setTitle')}
      title="Title"
    />
  );
};

InlineEditFieldStory.storyName = 'Inline Edit';
