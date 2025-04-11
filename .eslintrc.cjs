/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json'],
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'storybook'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'eslint-config-prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // You can add custom rules here if needed
  },
};
