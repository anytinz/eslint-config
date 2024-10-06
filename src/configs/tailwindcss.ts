import { pluginTailwindcss } from '../plugins'
import type { Linter } from 'eslint'
import type { CommonOptions } from '../types/options'
import type { TailwindcssRules } from '../types/rules/tailwindcss'

export const resolveTailwindcssRules = (): Required<TailwindcssRules> => ({
  'tailwindcss/classnames-order': 'error',
  'tailwindcss/enforces-negative-arbitrary-values': 'error',
  'tailwindcss/enforces-shorthand': 'error',
  'tailwindcss/migration-from-tailwind-2': 'error',
  'tailwindcss/no-arbitrary-value': 'error',
  'tailwindcss/no-contradicting-classname': 'error',
  'tailwindcss/no-custom-classname': 'error',
  'tailwindcss/no-unnecessary-arbitrary-value': 'error',
})

export type TailwindcssOptions = CommonOptions<Partial<TailwindcssRules>>
export const tailwindcss = (options: TailwindcssOptions = {}): Linter.Config[] => {
  const { overrides } = options
  return [{
    name: 'anytinz/tailwindcss/rules',
    plugins: {
      tailwindcss: pluginTailwindcss,
    },
    rules: {
      ...resolveTailwindcssRules(),
      ...overrides,
    },
  }]
}
