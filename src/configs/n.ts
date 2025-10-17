import { pluginN } from '../plugins.js'
import type { Linter } from 'eslint'
import type { OverridesOptions } from '../types/options'
import type { NRules } from '../types/rules/n'

export const resolveNRules = (): Required<NRules> => ({
  'n/callback-return': 'off',
  'n/exports-style': 'error',
  'n/file-extension-in-import': 'off',
  'n/global-require': 'error',
  'n/handle-callback-err': 'off',
  'n/hashbang': 'error',
  'n/no-callback-literal': 'off',
  'n/no-deprecated-api': 'error',
  'n/no-exports-assign': 'error',
  'n/no-extraneous-import': 'off',
  'n/no-extraneous-require': 'off',
  'n/no-hide-core-modules': 'off',
  'n/no-missing-import': 'off',
  'n/no-missing-require': 'off',
  'n/no-mixed-requires': 'error',
  'n/no-new-require': 'error',
  'n/no-path-concat': 'error',
  'n/no-process-env': 'off',
  'n/no-process-exit': 'error',
  'n/no-restricted-import': 'off',
  'n/no-restricted-require': 'off',
  'n/no-sync': 'error',
  'n/no-top-level-await': 'off',
  'n/no-unpublished-bin': 'error',
  'n/no-unpublished-import': 'error',
  'n/no-unpublished-require': 'error',
  'n/no-unsupported-features/es-builtins': 'off',
  'n/no-unsupported-features/es-syntax': 'off',
  'n/no-unsupported-features/node-builtins': 'off',
  'n/prefer-global/buffer': 'error',
  'n/prefer-global/console': 'error',
  'n/prefer-global/process': ['error', 'never'],
  'n/prefer-global/text-decoder': 'error',
  'n/prefer-global/text-encoder': 'error',
  'n/prefer-global/url': 'error',
  'n/prefer-global/url-search-params': 'error',
  'n/prefer-node-protocol': 'error',
  'n/prefer-promises/dns': 'error',
  'n/prefer-promises/fs': 'error',
  'n/process-exit-as-throw': 'error',
  'n/shebang': 'off',
})

export type NOptions = OverridesOptions<Partial<NRules>>
export const n = (options: NOptions = {}): Linter.Config[] => {
  const { overrides } = options
  return [{
    name: 'anytinz/n/rules',
    plugins: {
      n: pluginN,
    },
    rules: {
      ...resolveNRules(),
      ...overrides,
    },
  }]
}
