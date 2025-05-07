import './Tiptap.css';
import { useEffect } from 'react';

import { Box, Container, Stack, TextField } from '@mui/material';
import Dropcursor from '@tiptap/extension-dropcursor';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import Underline from '@tiptap/extension-underline';
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import { BubbleMenuContent } from './BubbleMenu';
import { CustomBlockquote } from './CustomBlockquote';
import { CustomCode } from './CustomCode';
import { CustomCodeBlockLowlight } from './CustomCodeBlockLowlight';
import { CustomHeading } from './CustomHeading';
import { CustomHorizontalRule } from './CustomHorizontalRule';
import { CustomImage } from './CustomImage';
import { CustomLink } from './CustomLink';
import {
  CustomBulletList,
  CustomListItem,
  CustomOrderedList,
} from './CustomLists';
import { CustomParagraph } from './CustomParagraph';
import { MenuBar } from './MenuBar';
import type { TiptapProps } from './Tiptap.types';

const extensions = [
  StarterKit.configure({
    blockquote: false,
    code: false,
    codeBlock: false,
    dropcursor: false,
    heading: false,
    horizontalRule: false,
    bulletList: false,
    listItem: false,
    orderedList: false,
    paragraph: false,
  }),
  CustomBlockquote(),
  CustomBulletList(),
  CustomCode(),
  CustomCodeBlockLowlight(),
  CustomHeading(),
  CustomHorizontalRule(),
  CustomImage(),
  CustomLink(),
  CustomListItem(),
  CustomOrderedList(),
  CustomParagraph(),
  Dropcursor,
  TaskList,
  TaskItem.configure({ nested: true }),
  Table.configure({
    resizable: true,
  }),
  TableRow,
  TableHeader,
  TableCell,
  Underline,
];

export const Tiptap = ({
  content,
  header,
  onChange,
  onSaveTitle,
  setTitle,
  title,
}: TiptapProps) => {
  const editor = useEditor({
    extensions,
    content,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(content ?? '');
    }
  }, [content, editor]);

  if (!editor) {
    return null;
  }

  return (
    <Stack position="relative">
      <Stack
        sx={{
          backgroundColor: 'background.paper',
          flex: 1,
          padding: 0.5,
          position: 'sticky',
          top: 0,
          width: '100%',
          zIndex: 100,
        }}>
        {header}
        <MenuBar editor={editor} />
      </Stack>
      <BubbleMenu
        editor={editor}
        tippyOptions={{ duration: 100 }}
        shouldShow={({ editor }) => {
          const isLinkActive = editor.isActive('link');
          // const isTableActive = editor.isActive('table');
          // const isTextSelected = selection.from !== selection.to;
          // return isLinkActive || isTableActive;
          return isLinkActive;
        }}>
        <BubbleMenuContent editor={editor} />
      </BubbleMenu>
      <Container sx={{ pt: 4 }}>
        <TextField
          fullWidth
          value={title}
          size="small"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          onBlur={() => {
            onSaveTitle(title);
          }}
          slotProps={{
            root: {
              sx(theme) {
                return {
                  '& fieldset': {
                    borderColor: theme.palette.background.paper, // Default border
                  },
                  // '& .MuiOutlinedInput-root:hover fieldset': {
                  //   borderColor: theme.palette.divider, // Hover state
                  // },
                  '&.Mui-focused fieldset': {
                    borderColor: theme.palette.primary.main, // Focused state
                  },
                };
              },
            },
            input: {
              sx(theme) {
                return {
                  color: theme.palette.text.primary,
                  fontSize: theme.typography.h4.fontSize,
                  fontWeight: theme.typography.h4.fontWeight,
                  '& input': {
                    px: 0.5,
                  },
                };
              },
            },
          }}
        />
        <Box pt={4}>
          <EditorContent editor={editor} />
        </Box>
      </Container>
    </Stack>
  );
};
