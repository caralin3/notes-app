import { action, Story, StoryDefault } from '@ladle/react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { PopoverOrigin, Stack } from '@mui/material';

import { PopoverMenu } from './PopoverMenu';

export default {
  title: 'Components / Menu',
} satisfies StoryDefault;

export const PopoverMenuStory: Story<PopoverOrigin> = (
  anchorOrigin: PopoverOrigin,
) => {
  return (
    <Stack direction="row" gap={2}>
      <PopoverMenu
        anchorOrigin={anchorOrigin}
        icon={<MoreHorizIcon />}
        items={[
          { label: 'Edit', onClick: action('Edit') },
          { label: 'Delete', onClick: action('Delete') },
        ]}
      />

      <PopoverMenu
        anchorOrigin={anchorOrigin}
        icon={<MoreHorizIcon />}
        items={[
          { label: 'Edit', onClick: action('Edit'), icon: <EditIcon /> },
          { label: 'Delete', onClick: action('Delete'), icon: <DeleteIcon /> },
        ]}
      />
    </Stack>
  );
};
PopoverMenuStory.storyName = 'Popover Menu';

PopoverMenuStory.args = {
  horizontal: 'right',
  vertical: 'bottom',
};

PopoverMenuStory.argTypes = {
  horizontal: {
    control: { type: 'select' },
    options: ['center', 'left', 'right'],
  },
  vertical: {
    control: { type: 'select' },
    options: ['bottom', 'top', 'center'],
  },
};
