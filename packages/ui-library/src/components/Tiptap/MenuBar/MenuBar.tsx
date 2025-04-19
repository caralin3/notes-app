import Code from '@mui/icons-material/Code';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useCurrentEditor } from '@tiptap/react';

import { HeadingDropdown } from './HeadingDropdown';
import { convertToOSLabel } from '../../../utils';
import { Button } from '../../Button';
import { PopoverMenu } from '../../PopoverMenu';
import { ShortcutLabel } from '../../ShortcutLabel';

export const MenuBar = () => {
  const { editor } = useCurrentEditor();

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
    <ButtonGroup variant="outlined" aria-label="Basic button group">
      <Button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        tooltip={getTooltipLabel('Undo', 'Ctrl + Z')}
        tooltipPlacement="top">
        <UndoIcon fontSize="small" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        tooltip={getTooltipLabel('Redo', 'Ctrl + Shift + Z')}
        tooltipPlacement="top">
        <RedoIcon fontSize="small" />
      </Button>
      <HeadingDropdown editor={editor} isActive={isActive} />
      <Button
        label="B"
        sx={{ fontWeight: 'bold' }}
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        selected={isActive('bold')}
        tooltip={getTooltipLabel('Bold', 'Ctrl + B')}
        tooltipPlacement="top"
      />
      <Button
        label="I"
        sx={{ fontStyle: 'italic' }}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        selected={isActive('italic')}
        tooltip={getTooltipLabel('Italic', 'Ctrl + I')}
        tooltipPlacement="top"
      />
      <PopoverMenu
        iconButton={false}
        anchorOrigin={{
          horizontal: 'left',
          vertical: 'bottom',
        }}
        items={[
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
      <Button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
        selected={isActive('codeBlock')}
        tooltip={getTooltipLabel('Code Block', '```')}
        tooltipPlacement="top">
        <Code fontSize="small" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        disabled={!editor.can().chain().focus().toggleBlockquote().run()}
        selected={isActive('blockquote')}
        tooltip={getTooltipLabel('Blockquote', '>')}
        tooltipPlacement="top">
        <FormatQuoteIcon fontSize="small" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        disabled={!editor.can().chain().focus().setHorizontalRule().run()}
        selected={isActive('horizontalRule')}
        tooltip={getTooltipLabel('Horizontal Rule', '---')}
        tooltipPlacement="top">
        <HorizontalRuleIcon />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        disabled={!editor.can().chain().focus().toggleBulletList().run()}
        selected={isActive('bulletList')}
        tooltip={getTooltipLabel('Bullet List', 'Shift + 8')}
        tooltipPlacement="top">
        <FormatListBulletedIcon fontSize="small" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        disabled={!editor.can().chain().focus().toggleOrderedList().run()}
        selected={isActive('orderedList')}
        tooltip={getTooltipLabel('Ordered List', 'Shift + 7')}
        tooltipPlacement="top">
        <FormatListNumberedIcon fontSize="small" />
      </Button>
    </ButtonGroup>
  );
};
