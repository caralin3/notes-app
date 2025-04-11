import HorizontalRule from '@tiptap/extension-horizontal-rule';

export const CustomHorizontalRule = () =>
  HorizontalRule.extend({
    addAttributes() {
      return {
        ...this.parent?.(),
        class: {
          default: 'border-t-1 border-gray-300 my-8',
        },
      };
    },
  });
