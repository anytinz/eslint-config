import { isTypescriptAvailable } from '@anytinz/eslint-shared'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import globals from 'globals'
import { coreRules } from './rules/core.js'
import { importRules } from './rules/import.js'
import { typescriptRules } from './rules/typescript.js'

export const javascriptConfig = [
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      ...coreRules,
      ...importRules,
    },
    settings: {
      'import/core-modules': [],
      'import/ignore': [
        'node_modules',
        '\\.(coffee|css|scss|sass|less|styl|stylus|hbs|svg|json)$',
      ],
      'import/parsers': {
        espree: ['.js', '.mjs', '.cjs'],
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.mjs', '.cjs', '.json'],
        },
      },
    },
  },
]

export const typescriptConfig = [
  ...javascriptConfig.map((config) => ({ ...config, files: ['**/*.{ts,mts,cts}'] })),
  {
    files: ['**/*.{ts,mts,cts}'],
    languageOptions: {
      parser: typescriptParser,
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      import: importPlugin,
    },
    rules: typescriptRules,
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.mts', '.cts'],
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.mjs', '.cjs', '.json', '.ts', '.mts', '.cts'],
        },
        typescript: true,
      },
    },
  },
]

export const anytinzConfig = [
  ...javascriptConfig,
  ...(isTypescriptAvailable() && typescriptConfig),
]
