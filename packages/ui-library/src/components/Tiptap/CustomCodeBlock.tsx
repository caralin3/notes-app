import CodeBlock from '@tiptap/extension-code-block';

export const CustomCodeBlock = () =>
  CodeBlock.extend({
    addAttributes() {
      return {
        ...this.parent?.(),
        class: {
          default: 'bg-black text-white text-sm py-3 px-4 rounded-lg',
        },
      };
    },
  });
