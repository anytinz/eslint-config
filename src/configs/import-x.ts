import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import { createNodeResolver } from 'eslint-plugin-import-x'
import { GLOB_D_TS, GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX } from '../globs'
import { extendsRuleOptions } from '../helpers/extends-rule-options'
import { pluginImportX } from '../plugins.js'
import type { Linter } from 'eslint'
import type { OverridesOptions } from '../types/options'
import type { ImportExtensions, ImportXRules } from '../types/rules/import-x'

export const resolveImportXRules = (): Required<ImportXRules> => ({
  'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
  'import/default': 'error',
  'import/dynamic-import-chunkname': 'off',
  'import/export': 'error',
  'import/exports-last': 'off',
  'import/extensions': ['error', 'ignorePackages'],
  'import/first': 'error',
  'import/group-exports': 'off',
  'import/imports-first': 'off',
  'import/max-dependencies': 'off',
  'import/named': 'error',
  'import/namespace': 'error',
  'import/newline-after-import': 'error',
  'import/no-absolute-path': 'error',
  'import/no-amd': 'error',
  'import/no-anonymous-default-export': ['error', {
    allowCallExpression: false,
  }],
  'import/no-commonjs': 'error',
  'import/no-cycle': 'error',
  'import/no-default-export': 'error',
  'import/no-deprecated': 'error',
  'import/no-duplicates': 'error',
  'import/no-dynamic-require': 'error',
  'import/no-empty-named-blocks': 'error',
  'import/no-extraneous-dependencies': 'error',
  'import/no-import-module-exports': 'error',
  'import/no-internal-modules': 'off',
  'import/no-mutable-exports': 'error',
  'import/no-named-as-default': 'error',
  'import/no-named-as-default-member': 'error',
  'import/no-named-default': 'error',
  'import/no-named-export': 'off',
  'import/no-namespace': 'error',
  'import/no-nodejs-modules': 'off',
  'import/no-relative-packages': 'error',
  'import/no-relative-parent-imports': 'off',
  'import/no-rename-default': 'off',
  'import/no-restricted-paths': 'off',
  'import/no-self-import': 'error',
  'import/no-unassigned-import': 'off',
  'import/no-unresolved': ['error', {
    commonjs: true,
    amd: true,
    caseSensitiveStrict: true,
  }],
  'import/no-unused-modules': 'off',
  'import/no-useless-path-segments': ['error', { commonjs: true }],
  'import/no-webpack-loader-syntax': 'error',
  'import/order': 'off',
  'import/prefer-default-export': 'off',
  'import/prefer-namespace-import': 'off',
  'import/unambiguous': 'error',
})

const TYPESCRIPT_EXTENSIONS_PATTERN = {
  ts: 'never',
  cts: 'never',
  mts: 'never',
  tsx: 'never',
} as const

const extendsExtensionsRuleObjOptsForTs = (objOpts?: ImportExtensions[1]): NonNullable<ImportExtensions[1]> => {
  return {
    ...objOpts,
    pattern: {
      ...typeof objOpts?.pattern === 'object' && objOpts.pattern,
      ...TYPESCRIPT_EXTENSIONS_PATTERN,
    },
  }
}

const JS_EXTENSIONS = ['.js', '.cjs', '.mjs', '.jsx']
const TS_EXTENSIONS = ['.ts', '.cts', '.mts', '.tsx']
export type ImportXOptions = OverridesOptions<Partial<ImportXRules>>
export const importX = (options: ImportXOptions = {}): Linter.Config[] => {
  const { overrides } = options
  const importXRules = resolveImportXRules()
  return [
    {
      name: 'anytinz/import-x/rules',
      files: [GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX],
      plugins: {
        import: pluginImportX,
      },
      rules: {
        ...importXRules,
        ...overrides,
      },
      settings: {
        'import-x/external-module-folders': ['node_modules', 'node_modules/@types'],
        'import-x/parsers': {
          '@typescript-eslint/parser': [...TS_EXTENSIONS],
        },
        'import-x/resolver-next': [
          createNodeResolver({
            extensions: [...JS_EXTENSIONS, ...TS_EXTENSIONS],
          }),
          createTypeScriptImportResolver(),
        ],
      },
    },
    {
      name: 'anytinz/import-x/overrides/config-files',
      files: ['**/*.config.?([cm])[jt]s?(x)', '**/vitest.workspace.?([cm])[jt]s?(x)'],
      rules: {
        'import/no-default-export': 'off',
        'import/prefer-default-export': ['error', { target: 'any' }],
      },
    },
    {
      name: 'anytinz/import-x/overrides/ts',
      files: [GLOB_TS, GLOB_TSX],
      rules: {
        'import/extensions': extendsRuleOptions<ImportExtensions, ImportExtensions>(
          importXRules['import/extensions'],
          (...ruleOptions) => {
            return typeof ruleOptions[0] === 'string'
              ? [ruleOptions[0], extendsExtensionsRuleObjOptsForTs(ruleOptions[1])]
              : [extendsExtensionsRuleObjOptsForTs(ruleOptions[0])]
          },
        ),
        'import/named': 'off',
      },
    },
    {
      name: 'anytinz/import-x/overrides/dts',
      files: [GLOB_D_TS],
      rules: {
        'import/unambiguous': 'off',
      },
    },
  ]
}
