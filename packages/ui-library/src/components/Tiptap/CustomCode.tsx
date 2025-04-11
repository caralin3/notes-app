import Code from '@tiptap/extension-code';

export const CustomCode = () =>
  Code.extend({
    addAttributes() {
      return {
        ...this.parent?.(),
        class: {
          default: 'bg-[#5805FF0D] text-black text-sm rounded-md p-1',
        },
      };
    },
  });
