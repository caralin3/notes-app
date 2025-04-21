import { useCallback } from 'react';

import ImageIcon from '@mui/icons-material/Image';
import { Editor } from '@tiptap/react';

import { IconButton } from '../../IconButton';

export const ImageButton = ({
  editor,
  tooltip,
}: {
  editor: Editor;
  tooltip: string;
}) => {
  const addImage = useCallback(() => {
    const url = window.prompt('URL');

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  return (
    <IconButton
      icon={<ImageIcon fontSize="small" />}
      onClick={addImage}
      disabled={!editor.can().chain().focus().setImage({ src: '' }).run()}
      selected={editor.isActive('image')}
      tooltip={tooltip}
      tooltipPlacement="top"
    />
  );
};
