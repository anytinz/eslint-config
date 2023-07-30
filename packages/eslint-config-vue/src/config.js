import { javascriptConfig, typescriptConfig, typescriptRules } from '@anytinz/eslint-config'
import { isTypescriptAvailable } from '@anytinz/eslint-shared'
import typescriptParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import vuePlugin from 'eslint-plugin-vue'
import * as espree from 'espree'
import globals from 'globals'
import vueParser from 'vue-eslint-parser'
import { vueRules } from './rules.js'

const baseVueConfig = [
  {
    files: ['**/*.{vue,js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      import: importPlugin,
    },
    settings: {
      'import/parsers': {
        espree: ['.js', '.mjs', '.cjs', '.jsx'],
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.mjs', '.cjs', '.json', '.jsx'],
        },
      },
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: {
          js: espree,
          jsx: espree,
        },
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      vue: vuePlugin,
    },
    rules: vueRules,
  },
]

export const javascriptVueConfig = [
  ...javascriptConfig.map((config) => ({ ...config, files: ['**/*.{vue,jsx}'] })),
  ...baseVueConfig,
]

export const typescriptVueConfig = [
  ...typescriptConfig.map((config) => ({ ...config, files: ['**/*.{vue,jsx,tsx}'] })),
  ...baseVueConfig,
  {
    files: ['**/*.{vue,ts,mts,cts,tsx}'],
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          ...typescriptRules['import/extensions'][2],
          jsx: 'never',
          tsx: 'never',
        },
      ],
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.mts', '.cts', '.tsx'],
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.mjs', '.cjs', '.jsx', '.json', '.ts', '.mts', '.cts', '.tsx'],
        },
      },
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: {
          ts: typescriptParser,
          tsx: typescriptParser,
        },
        extraFileExtensions: ['.vue'],
      },
    },
  },
]

export const anytinzVueConfig = isTypescriptAvailable() ? typescriptVueConfig : javascriptVueConfig
