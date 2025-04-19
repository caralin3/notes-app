import './Tiptap.css';

import { EditorProvider } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import { CustomBlockquote } from './CustomBlockquote';
import { CustomCode } from './CustomCode';
import { CustomCodeBlockLowlight } from './CustomCodeBlockLowlight';
import { CustomHeading } from './CustomHeading';
import { CustomHorizontalRule } from './CustomHorizontalRule';
import {
  CustomBulletList,
  CustomListItem,
  CustomOrderedList,
} from './CustomLists';
import { CustomParagraph } from './CustomParagraph';
import { TiptapProps } from './Tiptap.types';
import { MenuBar } from './MenuBar';

const extensions = [
  StarterKit.configure({
    blockquote: false,
    code: false,
    codeBlock: false,
    heading: false,
    bulletList: false,
    orderedList: false,
    listItem: false,
  }),
  CustomBlockquote(),
  CustomBulletList(),
  CustomCode(),
  CustomCodeBlockLowlight(),
  CustomHeading(),
  CustomHorizontalRule(),
  CustomListItem(),
  CustomOrderedList(),
  CustomParagraph(),
];

export const Tiptap = ({ content }: TiptapProps) => {
  return (
    <EditorProvider
      slotBefore={<MenuBar />}
      extensions={extensions}
      content={content}
    />
  );
};
