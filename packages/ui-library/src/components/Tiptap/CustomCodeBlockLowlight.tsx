import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import {
  NodeViewContent,
  NodeViewProps,
  NodeViewWrapper,
  ReactNodeViewRenderer,
} from '@tiptap/react';
import bash from 'highlight.js/lib/languages/bash';
import css from 'highlight.js/lib/languages/css';
import go from 'highlight.js/lib/languages/go';
import graphql from 'highlight.js/lib/languages/graphql';
import java from 'highlight.js/lib/languages/java';
import js from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import php from 'highlight.js/lib/languages/php';
import python from 'highlight.js/lib/languages/python';
import sql from 'highlight.js/lib/languages/sql';
import twig from 'highlight.js/lib/languages/twig';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import { createLowlight } from 'lowlight';

const lowlight = createLowlight();

lowlight.register({ bash });
lowlight.register({ css });
lowlight.register({ go });
lowlight.register({ graphql });
lowlight.register({ html });
lowlight.register({ java });
lowlight.register({ js });
lowlight.register({ json });
lowlight.register({ php });
lowlight.register({ python });
lowlight.register({ sql });
lowlight.register({ twig });
lowlight.register({ ts });

export const CustomCodeBlockLowlight = () => {
  return CodeBlockLowlight.extend({
    addNodeView() {
      return ReactNodeViewRenderer(CodeBlockComponent);
    },
  }).configure({ lowlight });
};

const CodeBlockComponent = ({
  node: {
    attrs: { language: defaultLanguage },
  },
  updateAttributes,
  extension,
}: NodeViewProps) => {
  const getOptionLabel = (language: string) => {
    switch (language) {
      case 'bash':
        return 'Bash';
      case 'css':
        return 'CSS';
      case 'go':
        return 'Go';
      case 'graphql':
        return 'GraphQL';
      case 'html':
        return 'HTML';
      case 'java':
        return 'Java';
      case 'javascript':
        return 'JavaScript';
      case 'json':
        return 'JSON';
      case 'php':
        return 'PHP';
      case 'python':
        return 'Python';
      case 'sql':
        return 'SQL';
      case 'twig':
        return 'Twig';
      case 'typescript':
        return 'TypeScript';
      default:
        return language.charAt(0).toUpperCase() + language.slice(1);
    }
  };

  return (
    <NodeViewWrapper className="relative">
      <select
        contentEditable={false}
        className="absolute top-2 right-2 bg-white text-sm rounded-lg border-r-8 border-transparent py-1 px-2"
        defaultValue={defaultLanguage}
        onChange={(event) =>
          updateAttributes({ language: event.target.value })
        }>
        <option value="null">Auto</option>
        <option disabled>—</option>
        {extension.options.lowlight
          .listLanguages()
          .map((lang: string, index: number) => (
            <option key={index} value={lang}>
              {getOptionLabel(lang)}
            </option>
          ))}
      </select>
      <pre>
        <NodeViewContent as="code" />
      </pre>
    </NodeViewWrapper>
  );
};
