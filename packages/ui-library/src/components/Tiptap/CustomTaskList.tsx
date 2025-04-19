import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';

export const CustomTaskList = () =>
  TaskList.extend({
    addAttributes() {
      return {
        ...this.parent?.(),
        class: {
          // default: 'bg-gray-100 text-sm py-3 px-4 rounded-lg',
        },
      };
    },
  });

export const CustomTaskItem = () =>
  TaskItem.extend({
    addAttributes() {
      return {
        ...this.parent?.(),
        class: {
          // default: 'bg-gray-100 text-sm py-3 px-4 rounded-lg',
        },
      };
    },
  });
