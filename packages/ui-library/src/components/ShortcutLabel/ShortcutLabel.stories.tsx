import { Story, StoryDefault } from '@ladle/react';
import { Paper } from '@mui/material';

import { ShortcutLabel } from './ShortcutLabel';

export default {
  title: 'Components / Labels',
} satisfies StoryDefault;

interface ShortcutLabelStoryProps {
  label: string;
  shortcut: string;
}

export const ShortcutLabelStory: Story<ShortcutLabelStoryProps> = (
  props: ShortcutLabelStoryProps,
) => (
  <Paper sx={{ maxWidth: 300, padding: 2 }}>
    <ShortcutLabel {...props} />
  </Paper>
);

ShortcutLabelStory.storyName = 'Shortcut Label';

ShortcutLabelStory.args = {
  label: 'Add Note',
  shortcut: 'Ctrl + N',
};
