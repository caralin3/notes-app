import ChecklistIcon from '@mui/icons-material/Checklist';
import Code from '@mui/icons-material/Code';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';
import { Divider, Paper } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Editor } from '@tiptap/react';

import { HeadingDropdown } from './HeadingDropdown';
import { ImageButton } from './ImageButton';
import { LinkButton } from './LinkButton';
import { convertToOSLabel } from '../../../utils';
import { IconButton } from '../../IconButton';
import { PopoverMenu } from '../../PopoverMenu';
import { ShortcutLabel } from '../../ShortcutLabel';

export const MenuBar = ({ editor }: { editor: Editor }) => {
  if (!editor) {
    return null;
  }

  const isActive = (type: string, level?: number) => {
    if (level) {
      return editor.isActive(type, { level });
    }
    return editor.isActive(type);
  };

  const getTooltipLabel = (label: string, command?: string) => {
    if (!command) {
      return label;
    }
    const osCommand = convertToOSLabel(command);
    return `${label} ${osCommand}`;
  };

  return (
    <Paper
      sx={{
        border: (theme) => `1px solid ${theme.palette.divider}`,
        flex: 1,
        padding: 0.5,
        position: 'sticky',
        top: 0,
        width: '100%',
        zIndex: 100,
      }}>
      <ButtonGroup aria-label="Menu bar">
        <IconButton
          icon={<UndoIcon fontSize="small" />}
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          tooltip={getTooltipLabel('Undo', 'Ctrl + Z')}
          tooltipPlacement="top"
        />
        <IconButton
          icon={<RedoIcon fontSize="small" />}
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          tooltip={getTooltipLabel('Redo', 'Ctrl + Shift + Z')}
          tooltipPlacement="top"
        />
        <MenuDivider />
        <HeadingDropdown editor={editor} isActive={isActive} />
        <MenuDivider />
        <IconButton
          icon={<FormatBoldIcon fontSize="small" />}
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          selected={isActive('bold')}
          tooltip={getTooltipLabel('Bold', 'Ctrl + B')}
          tooltipPlacement="top"
        />
        <IconButton
          icon={<FormatItalicIcon fontSize="small" />}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          selected={isActive('italic')}
          tooltip={getTooltipLabel('Italic', 'Ctrl + I')}
          tooltipPlacement="top"
        />
        <PopoverMenu
          anchorOrigin={{
            horizontal: 'left',
            vertical: 'bottom',
          }}
          items={[
            {
              label: <ShortcutLabel label="Underline" shortcut="Ctrl + U" />,
              onClick: () => editor.chain().focus().toggleUnderline().run(),
              disabled: !editor.can().chain().focus().toggleUnderline().run(),
              selected: isActive('underline'),
            },
            {
              label: (
                <ShortcutLabel
                  label="Strikethrough"
                  shortcut="Ctrl + Shift + S"
                />
              ),
              onClick: () => editor.chain().focus().toggleStrike().run(),
              disabled: !editor.can().chain().focus().toggleStrike().run(),
              selected: isActive('strike'),
            },
            {
              label: <ShortcutLabel label="Code" shortcut="``" />,
              onClick: () => editor.chain().focus().toggleCode().run(),
              disabled: !editor.can().chain().focus().toggleCode().run(),
              selected: isActive('code'),
            },
          ]}
        />
        <MenuDivider />
        <IconButton
          icon={<Code fontSize="small" />}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
          selected={isActive('codeBlock')}
          tooltip={getTooltipLabel('Code Block', '```')}
          tooltipPlacement="top"
        />
        <IconButton
          icon={<FormatQuoteIcon fontSize="small" />}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          disabled={!editor.can().chain().focus().toggleBlockquote().run()}
          selected={isActive('blockquote')}
          tooltip={getTooltipLabel('Blockquote', '>')}
          tooltipPlacement="top"
        />
        <IconButton
          icon={<HorizontalRuleIcon fontSize="small" />}
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          disabled={!editor.can().chain().focus().setHorizontalRule().run()}
          selected={isActive('horizontalRule')}
          tooltip={getTooltipLabel('Horizontal Rule', '---')}
          tooltipPlacement="top"
        />
        <MenuDivider />
        <IconButton
          icon={<FormatListBulletedIcon fontSize="small" />}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          disabled={!editor.can().chain().focus().toggleBulletList().run()}
          selected={isActive('bulletList')}
          tooltip={getTooltipLabel('Bullet List', 'Shift + 8')}
          tooltipPlacement="top"
        />
        <IconButton
          icon={<FormatListNumberedIcon fontSize="small" />}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          disabled={!editor.can().chain().focus().toggleOrderedList().run()}
          selected={isActive('orderedList')}
          tooltip={getTooltipLabel('Ordered List', 'Shift + 7')}
          tooltipPlacement="top"
        />
        <IconButton
          icon={<ChecklistIcon fontSize="small" />}
          onClick={() => editor.chain().focus().toggleTaskList().run()}
          disabled={!editor.can().chain().focus().toggleTaskList().run()}
          selected={isActive('taskList')}
          tooltip={getTooltipLabel('Task List', '[ ]')}
          tooltipPlacement="top"
        />
        <MenuDivider />
        <LinkButton
          editor={editor}
          tooltip={getTooltipLabel('Link', 'Ctrl + K')}
        />
        <ImageButton
          editor={editor}
          tooltip={getTooltipLabel('Image', 'Ctrl + Shift + I')}
        />
      </ButtonGroup>
    </Paper>
  );
};

const MenuDivider = () => (
  <Divider
    orientation="vertical"
    flexItem
    sx={{ borderWidth: 0.5, mx: 0.5, my: 1 }}
  />
);
