import './Tiptap.css';
import { useEffect } from 'react';

import { Box } from '@mui/material';
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

export const Tiptap = ({ content }: TiptapProps) => {
  const editor = useEditor({
    extensions,
    content,
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
    <Box position="relative">
      <MenuBar editor={editor} />
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
      <Box pt={3}>
        <EditorContent editor={editor} />
      </Box>
    </Box>
  );
};
