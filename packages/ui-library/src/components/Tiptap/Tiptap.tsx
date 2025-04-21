import './Tiptap.css';
import { Box } from '@mui/material';
import Dropcursor from '@tiptap/extension-dropcursor';
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
  Underline,
];

export const Tiptap = ({ content }: TiptapProps) => {
  const editor = useEditor({
    extensions,
    content,
  });

  if (!editor) {
    return null;
  }

  return (
    <Box position="relative">
      <MenuBar editor={editor} />
      <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
        {editor.isActive('link') && <BubbleMenuContent editor={editor} />}
      </BubbleMenu>
      <EditorContent editor={editor} />
    </Box>
  );
};
