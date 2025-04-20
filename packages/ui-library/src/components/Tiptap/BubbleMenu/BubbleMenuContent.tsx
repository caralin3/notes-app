import { Editor } from '@tiptap/react';

import { LinkMenu } from './LinkMenu';

export const BubbleMenuContent = ({ editor }: { editor: Editor }) => {
  if (editor.isActive('link')) {
    return <LinkMenu editor={editor} />;
  }

  return null;
};
