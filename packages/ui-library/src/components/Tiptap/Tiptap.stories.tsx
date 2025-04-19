import { Story, StoryDefault } from '@ladle/react';

import { Tiptap } from './Tiptap';

export default {
  title: 'Components / Tiptap',
} satisfies StoryDefault;

export const Editor: Story = () => {
  const content = `
  <h1>Header 1</h1>
  <ul data-type="taskList">
    <li data-type="taskItem" data-checked="true">A list item</li>
    <li data-type="taskItem" data-checked="false">And another one</li>
  </ul>
  <h2>Header 2</h2>
  <h3>Header 3</h3>
  <h4>Header 4</h4>
  <h5>Header 5</h5>
  <h6>Header 6</h6>
  <p>
    this is a <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you'd probably expect from a text editor. But wait until you see the lists:
  </p>
  <ul>
    <li>
      That's a bullet list with one …
    </li>
    <li>
      … or two list items.
    </li>
  </ul>
  <code>code test</code>
  <p>
    Isn't that great? And all of that is editable. But wait, there's more. Let's try a code block:
  </p>
  <ol>
    <li>
      That's a bullet list with one …
    </li>
    <li>
      … or two list items.
    </li>
  </ol>
  <pre><code class="language-css">body {
    display: none;
  }</code></pre>
  <p>
    I know, I know, this is impressive. It's only the tip of the iceberg though. Give it a try and click a little bit around. Don't forget to check the other examples too.
  </p>
  <blockquote>
    Wow, that's amazing. Good work, boy! 👏
    <br />
    — Mom
  </blockquote>
`;

  return <Tiptap content={content} />;
};
