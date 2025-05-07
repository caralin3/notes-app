import { Content } from '@tiptap/react';

export interface TiptapProps {
  content?: Content | undefined;
  header: React.ReactNode;
  onChange: (content: string) => void;
  onSaveTitle: (title: string) => void;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  title: string;
}
