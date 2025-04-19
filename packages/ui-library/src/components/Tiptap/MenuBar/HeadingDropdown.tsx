import { Editor } from '@tiptap/react';
import { PopoverMenu } from '../../PopoverMenu';
import { ShortcutLabel } from '../../ShortcutLabel';

interface HeadingDropdownProps {
  editor: Editor;
  isActive: (type: string, level?: number) => boolean;
}

export const HeadingDropdown = ({ editor, isActive }: HeadingDropdownProps) => {
  const getHeadingLabel = () => {
    switch (editor.getAttributes('heading').level) {
      case 1:
        return 'Heading 1';
      case 2:
        return 'Heading 2';
      case 3:
        return 'Heading 3';
      case 4:
        return 'Heading 4';
      case 5:
        return 'Heading 5';
      case 6:
        return 'Heading 6';
      default:
        return 'Normal Text';
    }
  };

  const getDisabled = () => {
    return editor.isActive('codeBlock') || editor.isActive('code');
  };

  const handleHeadingSelection = (level: number) => {
    editor
      .chain()
      .focus()
      .toggleHeading({ level: level as any })
      .run();
  };

  return (
    <PopoverMenu
      showArrow
      label={getHeadingLabel()}
      disabled={getDisabled()}
      iconButton={false}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom',
      }}
      items={[
        {
          label: (
            <ShortcutLabel label="Normal Text" shortcut="Ctrl + Opt + 0" />
          ),
          onClick: () => editor.chain().focus().setParagraph().run(),
          selected: isActive('paragraph'),
          disabled: !editor.can().chain().focus().setParagraph().run(),
        },
        {
          label: <ShortcutLabel label="Heading 1" shortcut="Ctrl + Opt + 1" />,
          onClick: () => handleHeadingSelection(1),
          selected: isActive('heading', 1),
          disabled: !editor
            .can()
            .chain()
            .focus()
            .toggleHeading({ level: 1 })
            .run(),
        },
        {
          label: <ShortcutLabel label="Heading 2" shortcut="Ctrl + Opt + 2" />,
          onClick: () => handleHeadingSelection(2),
          selected: isActive('heading', 2),
          disabled: !editor
            .can()
            .chain()
            .focus()
            .toggleHeading({ level: 2 })
            .run(),
        },
        {
          label: <ShortcutLabel label="Heading 3" shortcut="Ctrl + Opt + 3" />,
          onClick: () => handleHeadingSelection(3),
          selected: isActive('heading', 3),
          disabled: !editor
            .can()
            .chain()
            .focus()
            .toggleHeading({ level: 3 })
            .run(),
        },
        {
          label: <ShortcutLabel label="Heading 4" shortcut="Ctrl + Opt + 4" />,
          onClick: () => handleHeadingSelection(4),
          selected: isActive('heading', 4),
          disabled: !editor
            .can()
            .chain()
            .focus()
            .toggleHeading({ level: 4 })
            .run(),
        },
        {
          label: <ShortcutLabel label="Heading 5" shortcut="Ctrl + Opt + 5" />,
          onClick: () => handleHeadingSelection(5),
          selected: isActive('heading', 5),
          disabled: !editor
            .can()
            .chain()
            .focus()
            .toggleHeading({ level: 5 })
            .run(),
        },
        {
          label: <ShortcutLabel label="Heading 6" shortcut="Ctrl + Opt + 6" />,
          onClick: () => handleHeadingSelection(6),
          selected: isActive('heading', 6),
          disabled: !editor
            .can()
            .chain()
            .focus()
            .toggleHeading({ level: 6 })
            .run(),
        },
        { label: 'divider' },
        {
          label: <ShortcutLabel label="Clear Formatting" />,
          onClick: () => editor.chain().focus().clearNodes().run(),
          disabled: !editor.can().chain().focus().clearNodes().run(),
        },
      ]}
    />
  );
};
