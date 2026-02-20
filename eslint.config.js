// @ts-check

import eslintPluginAstro from 'eslint-plugin-astro';
import tsEslintParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  // Global ignores
  {
    ignores: ['node_modules/', 'dist/', '.astro/', 'public/'],
  },
  // Base ESLint configuration for JS/TS files
  {
    files: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsEslintParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      // Add general JavaScript/TypeScript rules here if needed
    },
  },
  // Astro plugin recommended configuration
  ...eslintPluginAstro.configs.recommended,
  // Prettier configuration (must be last to override other formatting rules)
  eslintConfigPrettier, // This disables ESLint rules that conflict with Prettier
];
