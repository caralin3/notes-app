import { Editor } from '@tiptap/react';

import { LinkMenu } from './LinkMenu';
import { TableMenu } from './TableMenu';

export const BubbleMenuContent = ({ editor }: { editor: Editor }) => {
  if (editor.isActive('link')) {
    return <LinkMenu editor={editor} />;
  }

  if (editor.isActive('table')) {
    return <TableMenu editor={editor} />;
  }

  return null;
};
