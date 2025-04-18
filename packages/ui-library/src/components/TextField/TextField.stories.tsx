import { Story, StoryDefault } from '@ladle/react';
import { TextField } from './TextField';
import Stack from '@mui/material/Stack';

export default {
  title: 'Components / Inputs',
} satisfies StoryDefault;

export const TextFieldStory: Story = () => {
  return (
    <Stack spacing={3} direction="row">
      <Stack spacing={2} alignItems="flex-start">
        <TextField label="Default Small" />
        <TextField label="Default with placeholder" placeholder="Placeholder" />
        <TextField label="Password" type="password" />
        <TextField
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </Stack>
      <Stack spacing={2} alignItems="flex-start">
        <TextField label="Disabled" disabled />
        <TextField label="Required" required />
        <TextField label="Number" type="number" />
        <TextField
          error
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </Stack>
    </Stack>
  );
};

TextFieldStory.storyName = 'Text Field';
