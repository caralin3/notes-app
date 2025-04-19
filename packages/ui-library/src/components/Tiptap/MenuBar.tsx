import MuiButton from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Code from '@mui/icons-material/Code';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';
import { useCurrentEditor } from '@tiptap/react';

import { Button } from '../Button';
import { PopoverMenu } from '../PopoverMenu';
import { ShortcutLabel } from '../ShortcutLabel';

export const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <ButtonGroup variant="outlined" aria-label="Basic button group">
      <MuiButton
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}>
        <UndoIcon fontSize="small" />
      </MuiButton>
      <MuiButton
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}>
        <RedoIcon fontSize="small" />
      </MuiButton>
      <Button
        label="B"
        sx={{ fontWeight: 'bold' }}
        // className={editor.isActive('bold') ? 'is-active' : ''}
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
      />
      <Button
        label="I"
        sx={{ fontStyle: 'italic' }}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
      />
      <PopoverMenu
        iconButton={false}
        anchorOrigin={{
          horizontal: 'center',
          vertical: 'bottom',
        }}
        items={[
          // {
          //   label: <ShortcutLabel label="Underline" shortcut="Ctrl + U" />,
          //   onClick: () => editor.chain().focus().toggleStrike().run(),
          //   disabled: !editor.can().chain().focus().toggleStrike().run(),
          // },
          {
            label: (
              <ShortcutLabel
                label="Strikethrough"
                shortcut="Ctrl + Shift + S"
              />
            ),
            onClick: () => editor.chain().focus().toggleStrike().run(),
            disabled: !editor.can().chain().focus().toggleStrike().run(),
          },
          {
            label: <ShortcutLabel label="Code" shortcut="``" />,
            onClick: () => editor.chain().focus().toggleCode().run(),
            disabled: !editor.can().chain().focus().toggleCode().run(),
          },
        ]}
      />
      <MuiButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}>
        <FormatListBulletedIcon fontSize="small" />
      </MuiButton>
      <MuiButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}>
        <FormatListNumberedIcon fontSize="small" />
      </MuiButton>
      <MuiButton onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
        <Code fontSize="small" />
      </MuiButton>
      <MuiButton
        onClick={() => editor.chain().focus().toggleBlockquote().run()}>
        <FormatQuoteIcon fontSize="small" />
      </MuiButton>
      <MuiButton
        onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <HorizontalRuleIcon />
      </MuiButton>
      {/* <MuiButton onClick={() => editor.chain().focus().setHardBreak().run()}>
        Hard break
      </MuiButton> */}
    </ButtonGroup>
    // <div className="control-group">
    //   <div className="button-group">
    //     <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
    //       Clear marks
    //     </button>
    //     <button onClick={() => editor.chain().focus().clearNodes().run()}>
    //       Clear nodes
    //     </button>
    //     <button
    //       onClick={() => editor.chain().focus().setParagraph().run()}
    //       className={editor.isActive('paragraph') ? 'is-active' : ''}>
    //       Paragraph
    //     </button>
    //     <button
    //       onClick={() =>
    //         editor.chain().focus().toggleHeading({ level: 1 }).run()
    //       }
    //       className={
    //         editor.isActive('heading', { level: 1 }) ? 'is-active' : ''
    //       }>
    //       H1
    //     </button>
    //     <button
    //       onClick={() =>
    //         editor.chain().focus().toggleHeading({ level: 2 }).run()
    //       }
    //       className={
    //         editor.isActive('heading', { level: 2 }) ? 'is-active' : ''
    //       }>
    //       H2
    //     </button>
    //     <button
    //       onClick={() =>
    //         editor.chain().focus().toggleHeading({ level: 3 }).run()
    //       }
    //       className={
    //         editor.isActive('heading', { level: 3 }) ? 'is-active' : ''
    //       }>
    //       H3
    //     </button>
    //     <button
    //       onClick={() =>
    //         editor.chain().focus().toggleHeading({ level: 4 }).run()
    //       }
    //       className={
    //         editor.isActive('heading', { level: 4 }) ? 'is-active' : ''
    //       }>
    //       H4
    //     </button>
    //     <button
    //       onClick={() =>
    //         editor.chain().focus().toggleHeading({ level: 5 }).run()
    //       }
    //       className={
    //         editor.isActive('heading', { level: 5 }) ? 'is-active' : ''
    //       }>
    //       H5
    //     </button>
    //     <button
    //       onClick={() =>
    //         editor.chain().focus().toggleHeading({ level: 6 }).run()
    //       }
    //       className={
    //         editor.isActive('heading', { level: 6 }) ? 'is-active' : ''
    //       }>
    //       H6
    //     </button>
    //   </div>
    // </div>
  );
};
