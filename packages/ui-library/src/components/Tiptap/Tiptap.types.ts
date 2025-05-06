import { Content } from '@tiptap/react';

export interface TiptapProps {
  content?: Content | undefined;
  header: React.ReactNode;
  onChange: (content: string) => void;
}
