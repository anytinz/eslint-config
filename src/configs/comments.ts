import { pluginEslintComments } from '../plugins'
import type { Linter } from 'eslint'
import type { CommonOptions } from '../types/options'
import type { EslintCommentsRules } from '../types/rules/eslint-comments'

export const resolveEslintCommentsRules = (): Required<EslintCommentsRules> => ({
  'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
  'eslint-comments/no-aggregating-enable': 'error',
  'eslint-comments/no-duplicate-disable': 'error',
  'eslint-comments/no-restricted-disable': 'off',
  'eslint-comments/no-unlimited-disable': 'error',
  'eslint-comments/no-unused-disable': 'error',
  'eslint-comments/no-unused-enable': 'error',
  'eslint-comments/no-use': 'off',
  'eslint-comments/require-description': 'off',
})

export type EslintCommentsOptions = CommonOptions<Partial<EslintCommentsRules>>
export const eslintComments = (options: EslintCommentsOptions = {}): Linter.Config[] => {
  const { overrides } = options
  return [{
    name: 'anytinz/eslint-comments/rules',
    plugins: {
      'eslint-comments': pluginEslintComments,
    },
    rules: {
      ...resolveEslintCommentsRules(),
      ...overrides,
    },
  }]
}
