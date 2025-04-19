import js from '@eslint/js';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jestPlugin from 'eslint-plugin-jest';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import pluginReact from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['jest.config.ts'],
    plugins: { js, 'react-hooks': reactHooks, 'react-refresh': reactRefresh },
    languageOptions: { ecmaVersion: 2020, globals: globals.browser },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
      importPlugin.flatConfigs.recommended,
      eslintConfigPrettier,
    ],
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      'import/no-unresolved': ['error', { ignore: ['\\.svg\\?url$'] }],
      // this is for sorting WITHIN an import
      'sort-imports': [
        'error',
        { ignoreCase: true, ignoreDeclarationSort: true },
      ],
      // this is for sorting imports
      'import/order': [
        'error',
        {
          groups: [
            ['external', 'builtin'],
            'internal',
            ['sibling', 'parent'],
            'index',
          ],
          pathGroups: [
            {
              pattern: '@(react|react-native)',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '^[a-zA-Z]',
              group: 'internal',
            },
            {
              pattern: '^@/?\\w',
              group: 'internal',
            },
            {
              pattern: '^[./]',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['internal', 'react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
  },
  {
    files: ['**/*.test.{ts,tsx}'],
    ignores: ['jest.config.ts'],
    plugins: { jest: jestPlugin },
    languageOptions: { ecmaVersion: 2020, globals: globals.jest },
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
);
