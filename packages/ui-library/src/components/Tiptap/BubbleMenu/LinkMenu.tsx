import { useState } from 'react';

import LinkOffIcon from '@mui/icons-material/LinkOff';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Divider, Paper, Stack } from '@mui/material';
import { Editor } from '@tiptap/react';

import { Button } from '../../Button';
import { IconButton } from '../../IconButton';
import { TextField } from '../../TextField';

export const LinkMenu = ({ editor }: { editor: Editor }) => {
  const [editingLink, setEditingLink] = useState(false);
  const [href, setHref] = useState<string>(editor.getAttributes('link').href);

  const [text, setText] = useState<string>(
    editor.state.doc.textBetween(
      editor.view.state.selection.from,
      editor.view.state.selection.to,
      '',
    ),
  );

  if (editingLink) {
    const handleSave = () => {
      editor.chain().focus().extendMarkRange('link').setLink({ href }).run();
      editor.chain().insertContent(text).run();
      setEditingLink(false);
    };

    return (
      <Paper elevation={5} sx={{ p: 2, minWidth: 300 }}>
        <Stack spacing={2} width="100%">
          <TextField
            label="Enter or paste a link"
            size="small"
            onChange={(ev) => setHref(ev.target.value)}
            value={href}
            placeholder="https://example.com"
            type="url"
          />
          <TextField
            label="Display Text (optional)"
            size="small"
            onChange={(ev) => setText(ev.target.value)}
            value={text}
          />
          <Stack
            direction="row"
            flex={1}
            spacing={1}
            alignItems="center"
            alignSelf="flex-end">
            <Button
              label="Cancel"
              variant="text"
              size="small"
              onClick={() => setEditingLink(false)}
            />
            <Button
              label="Save"
              variant="contained"
              size="small"
              onClick={handleSave}
            />
          </Stack>
        </Stack>
      </Paper>
    );
  }

  return (
    <Paper elevation={5} sx={{ px: 1, py: 0.5 }}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Button
          label="Edit Link"
          variant="text"
          size="small"
          onClick={() => setEditingLink(true)}
        />
        <Divider orientation="vertical" flexItem />
        <IconButton
          icon={<LinkOffIcon fontSize="small" />}
          size="small"
          onClick={() => editor.chain().focus().unsetLink().run()}
        />
        <Divider orientation="vertical" flexItem />
        <IconButton
          icon={<OpenInNewIcon fontSize="small" />}
          size="small"
          onClick={() =>
            window.open(editor.getAttributes('link').href, '_blank')
          }
        />
      </Stack>
    </Paper>
  );
};
