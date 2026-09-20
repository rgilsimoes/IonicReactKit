import { defineConfig } from 'eslint/config';
import * as css from 'eslint-plugin-css';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import { reactRefresh } from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const sourceFiles = ['src/**/*.{js,jsx,ts,tsx}'];

export default defineConfig(
  {
    files: sourceFiles,
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        ecmaVersion: 2020,
      },
    },
  },
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: sourceFiles,
  })),
  {
    ...react.configs.flat.recommended,
    files: sourceFiles,
  },
  {
    ...reactHooks.configs.flat.recommended,
    files: sourceFiles,
  },
  {
    ...reactRefresh.configs.vite(),
    files: sourceFiles,
  },
  {
    ...css.configs['flat/recommended'],
    files: sourceFiles,
  },
  {
    files: sourceFiles,
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'max-len': ['warn', { code: 120, ignoreComments: true }],
      'max-lines': ['error', { max: 1000, skipComments: false }],
      'arrow-body-style': ['warn', 'as-needed'],
      'react/jsx-uses-vars': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'react-hooks/exhaustive-deps': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
  {
    files: ['src/utils/Logger.ts'],
    rules: {
      'no-console': 'off',
    },
  },
);
