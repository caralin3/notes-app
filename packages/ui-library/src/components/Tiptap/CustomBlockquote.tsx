import Blockquote from '@tiptap/extension-blockquote';

export const CustomBlockquote = () =>
  Blockquote.extend({
    addAttributes() {
      return {
        ...this.parent?.(),
        class: {
          default: 'border-s-3 border-gray-300 ps-4 my-6',
        },
      };
    },
  });
