import { Story, StoryDefault } from '@ladle/react';
import Stack from '@mui/material/Stack';

import { AutocompleteField } from './AutocompleteField';

export default {
  title: 'Components / Inputs',
} satisfies StoryDefault;

export const AutocompleteFieldStory: Story = () => {
  const options = [
    { label: 'Option 1', id: 1 },
    { label: 'Option 2', id: 2 },
    { label: 'Option 3', id: 3 },
  ];

  return (
    <Stack spacing={3} direction="row">
      <Stack spacing={2} alignItems="flex-start">
        <AutocompleteField options={options} label="Default Small" />
        <AutocompleteField
          options={options}
          label="Default with placeholder"
          placeholder="Placeholder"
        />
        <AutocompleteField
          options={options}
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </Stack>
      <Stack spacing={2} alignItems="flex-start">
        <AutocompleteField options={options} label="Disabled" disabled />
        <AutocompleteField options={options} label="Required" required />
        <AutocompleteField
          options={options}
          error
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </Stack>
    </Stack>
  );
};

AutocompleteFieldStory.storyName = 'Autocomplete Field';
