import { GLOB_JSX, GLOB_TSX } from '../globs'
import { pluginTailwindcss } from '../plugins.js'
import type { Linter } from 'eslint'
import type { FilesOptions, OverridesOptions } from '../types/options'
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

export type TailwindcssOptions = OverridesOptions<Partial<TailwindcssRules>> & FilesOptions
export const tailwindcss = (options: TailwindcssOptions = {}): Linter.Config[] => {
  const {
    files = [GLOB_JSX, GLOB_TSX],
    overrides,
  } = options
  return [{
    name: 'anytinz/tailwindcss/rules',
    files,
    plugins: {
      tailwindcss: pluginTailwindcss,
    },
    rules: {
      ...resolveTailwindcssRules(),
      ...overrides,
    },
  }]
}
