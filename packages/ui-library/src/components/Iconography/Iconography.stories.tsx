import { PropsWithChildren } from 'react';

import { Story, StoryDefault } from '@ladle/react';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArticleIcon from '@mui/icons-material/Article';
import ChecklistIcon from '@mui/icons-material/Checklist';
import Code from '@mui/icons-material/Code';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DeleteIcon from '@mui/icons-material/Delete';
import DescriptionIcon from '@mui/icons-material/Description';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import EditIcon from '@mui/icons-material/Edit';
import FolderIcon from '@mui/icons-material/Folder';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import GridOnIcon from '@mui/icons-material/GridOn';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import ImageIcon from '@mui/icons-material/Image';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import InventoryIcon from '@mui/icons-material/Inventory';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LinkIcon from '@mui/icons-material/Link';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import RedoIcon from '@mui/icons-material/Redo';
import SaveIcon from '@mui/icons-material/Save';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import StarIcon from '@mui/icons-material/Star';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import UndoIcon from '@mui/icons-material/Undo';
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
    { icon: <ArrowDropDownIcon {...props} />, label: 'Arrow Drop Down' },
    { icon: <ArticleIcon {...props} />, label: 'Article' },
    { icon: <ChecklistIcon {...props} />, label: 'Checklist' },
    { icon: <Code {...props} />, label: 'Code' },
    { icon: <ContentCopyIcon {...props} />, label: 'Content Copy' },
    { icon: <CreateNewFolderIcon {...props} />, label: 'Create New Folder' },
    { icon: <DashboardIcon {...props} />, label: 'Dashboard' },
    { icon: <DeleteIcon {...props} />, label: 'Delete' },
    { icon: <DescriptionIcon {...props} />, label: 'Description' },
    { icon: <DriveFileMoveIcon {...props} />, label: 'Drive File Move' },
    { icon: <EditIcon {...props} />, label: 'Edit' },
    { icon: <FolderIcon {...props} />, label: 'Folder' },
    {
      icon: <FormatAlignCenterIcon {...props} />,
      label: 'Format Align Center',
    },
    { icon: <FormatAlignLeftIcon {...props} />, label: 'Format Align Left' },
    { icon: <FormatAlignRightIcon {...props} />, label: 'Format Align Right' },
    { icon: <FormatBoldIcon {...props} />, label: 'Format Bold' },
    {
      icon: <FormatItalicIcon {...props} />,
      label: 'Format Italic',
    },
    {
      icon: <FormatListBulletedIcon {...props} />,
      label: 'Format List Bulleted',
    },
    {
      icon: <FormatListNumberedIcon {...props} />,
      label: 'Format List Numbered',
    },
    { icon: <FormatQuoteIcon {...props} />, label: 'Format Quote' },
    { icon: <GridOnIcon {...props} />, label: 'Grid On' },
    { icon: <HorizontalRuleIcon {...props} />, label: 'Horizontal Rule' },
    { icon: <ImageIcon {...props} />, label: 'Image' },
    { icon: <InsertEmoticonIcon {...props} />, label: 'Insert Emoticon' },
    { icon: <InventoryIcon {...props} />, label: 'Inventory' },
    { icon: <LibraryBooksIcon {...props} />, label: 'Library Books' },
    { icon: <LinkIcon {...props} />, label: 'Link' },
    { icon: <LinkOffIcon {...props} />, label: 'Link Off' },
    { icon: <MoreHorizIcon {...props} />, label: 'More Horiz' },
    { icon: <MoreVertIcon {...props} />, label: 'More Vert' },
    { icon: <NoteAddIcon {...props} />, label: 'Note Add' },
    { icon: <OpenInNewIcon {...props} />, label: 'Open In New' },
    { icon: <RedoIcon {...props} />, label: 'Redo' },
    { icon: <SaveIcon {...props} />, label: 'Save' },
    { icon: <SaveAsIcon {...props} />, label: 'Save As' },
    { icon: <StarIcon {...props} />, label: 'Star' },
    { icon: <TextSnippetIcon {...props} />, label: 'Text Snippet' },
    { icon: <UndoIcon {...props} />, label: 'Undo' },
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
