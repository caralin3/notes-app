import js from '@eslint/js';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { js },
    languageOptions: { ecmaVersion: 2020, globals: globals.browser },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      importPlugin.flatConfigs.recommended,
      eslintConfigPrettier,
    ],
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
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
);
