import { useCallback, useMemo } from 'react';

import LinkIcon from '@mui/icons-material/Link';
import { Editor } from '@tiptap/react';

import { IconButton } from '../../IconButton';

export const LinkButton = ({
  editor,
  tooltip,
}: {
  editor: Editor;
  tooltip: string;
}) => {
  const setLink = useCallback(() => {
    if (!editor) {
      return;
    }

    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();

      return;
    }

    // update link
    try {
      editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run();
    } catch (e) {
      console.log('Error setting link', e);
    }
  }, [editor]);

  const toggleLink = useCallback(() => {
    if (!editor) {
      return;
    }

    if (editor.isActive('link')) {
      editor.chain().focus().unsetLink().run();
    } else {
      setLink();
    }
  }, [editor, setLink]);

  const disableLink = useMemo(() => {
    if (!editor) {
      return false;
    }
    if (editor.isActive('link')) {
      return !editor
        .can()
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: '' })
        .run();
    }
    return !editor
      .can()
      .chain()
      .focus()
      .extendMarkRange('link')
      .unsetLink()
      .run();
  }, [editor]);

  return (
    <IconButton
      icon={<LinkIcon fontSize="small" />}
      onClick={toggleLink}
      disabled={disableLink}
      selected={editor.isActive('link')}
      tooltip={tooltip}
      tooltipPlacement="top"
    />
  );
};
