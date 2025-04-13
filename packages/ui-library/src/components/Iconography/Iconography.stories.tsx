import { PropsWithChildren } from 'react';

import { Story, StoryDefault } from '@ladle/react';
import AddIcon from '@mui/icons-material/Add';
import ArticleIcon from '@mui/icons-material/Article';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DeleteIcon from '@mui/icons-material/Delete';
import DescriptionIcon from '@mui/icons-material/Description';
import EditIcon from '@mui/icons-material/Edit';
import FolderIcon from '@mui/icons-material/Folder';
import InventoryIcon from '@mui/icons-material/Inventory';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import SaveIcon from '@mui/icons-material/Save';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import StarIcon from '@mui/icons-material/Star';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { Grid, Stack, SvgIconOwnProps, Typography } from '@mui/material';

export default {
  title: 'Components / Iconography',
} satisfies StoryDefault;

interface IconsStoryProps {
  color: SvgIconOwnProps['color'];
  fontSize: SvgIconOwnProps['fontSize'];
}

// https://mui.com/material-ui/material-icons/

export const Icons: Story<IconsStoryProps> = (props: IconsStoryProps) => {
  const Item = ({ children, label }: { label: string } & PropsWithChildren) => {
    return (
      <Stack alignItems="center" gap={1}>
        {children}
        <Typography variant="caption">{label}</Typography>
      </Stack>
    );
  };

  const items = [
    { icon: <AddIcon {...props} />, label: 'Add' },
    { icon: <ArticleIcon {...props} />, label: 'Article' },
    { icon: <ContentCopyIcon {...props} />, label: 'Content Copy' },
    { icon: <CreateNewFolderIcon {...props} />, label: 'Create New Folder' },
    { icon: <DashboardIcon {...props} />, label: 'Dashboard' },
    { icon: <DeleteIcon {...props} />, label: 'Delete' },
    { icon: <DescriptionIcon {...props} />, label: 'Description' },
    { icon: <EditIcon {...props} />, label: 'Edit' },
    { icon: <FolderIcon {...props} />, label: 'Folder' },
    { icon: <InventoryIcon {...props} />, label: 'Inventory' },
    { icon: <MoreHorizIcon {...props} />, label: 'More Horiz' },
    { icon: <MoreVertIcon {...props} />, label: 'More Vert' },
    { icon: <NoteAddIcon {...props} />, label: 'Note Add' },
    { icon: <SaveIcon {...props} />, label: 'Save' },
    { icon: <SaveAsIcon {...props} />, label: 'Save As' },
    { icon: <StarIcon {...props} />, label: 'Star' },
    { icon: <TextSnippetIcon {...props} />, label: 'Text Snippet' },
  ];

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}>
      {items.map((item) => (
        <Grid key={item.label} size={{ xs: 2, sm: 4, md: 4 }}>
          <Item label={item.label}>{item.icon}</Item>
        </Grid>
      ))}
    </Grid>
  );
};

Icons.args = {
  color: 'primary',
  fontSize: 'large',
};

Icons.argTypes = {
  color: {
    control: {
      type: 'select',
    },
    options: [
      'action',
      'disabled',
      'primary',
      'secondary',
      'success',
      'error',
      'info',
      'warning',
    ],
  },
  fontSize: {
    control: {
      type: 'select',
    },
    options: ['small', 'medium', 'large'],
  },
};
