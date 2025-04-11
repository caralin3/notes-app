import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';

export const CustomBulletList = () =>
  BulletList.extend({
    addAttributes() {
      return {
        ...this.parent?.(),
        class: {
          default: 'list-disc px-4 my-5 mx-4',
        },
      };
    },
  });

export const CustomOrderedList = () =>
  OrderedList.extend({
    addAttributes() {
      return {
        ...this.parent?.(),
        class: {
          default: 'list-decimal px-4 my-5 mx-4',
        },
      };
    },
  });

export const CustomListItem = () =>
  ListItem.extend({
    addAttributes() {
      return {
        ...this.parent?.(),
        class: {
          default: 'my-1',
        },
      };
    },
  });
