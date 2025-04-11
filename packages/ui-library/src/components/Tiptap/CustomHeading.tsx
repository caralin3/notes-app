import Heading from '@tiptap/extension-heading';
import { mergeAttributes } from '@tiptap/react';

export const CustomHeading = () =>
  Heading.extend({
    levels: [1, 2, 3, 4, 5, 6],
    renderHTML({ node, HTMLAttributes }) {
      const level = this.options.levels.includes(node.attrs.level)
        ? node.attrs.level
        : this.options.levels[0];

      const classes: { [index: number]: string } = {
        1: 'text-8xl/[1.2] mb-6 mt-12',
        2: 'text-6xl/[1.2] mb-6 mt-12',
        3: 'text-5xl/[1.2] mb-6 mt-10',
        4: 'text-4xl/[1.2] mb-6 mt-10',
        5: 'text-2xl/[1.2] mb-6 mt-8',
        6: 'text-xl/[1.2] mb-6 mt-8',
      };
      return [
        `h${level}`,
        mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
          class: `${classes[level]} text-pretty`,
        }),
        0,
      ];
    },
  }).configure({ levels: [1, 2, 3, 4, 5, 6] });
