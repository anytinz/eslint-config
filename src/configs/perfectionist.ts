import { pluginPerfectionist } from '../plugins.js'
import type { Linter } from 'eslint'
import type { MaybeArray } from '../helpers/type'
import type { OverridesOptions, RulesOptions } from '../types/options'
import type { PerfectionistRules } from '../types/rules/perfectionist'

type PerfectionistRulesOptions = {
  sortImports?: {
    internalPattern?: MaybeArray<{ pattern: string; flags?: string } | string>
  }
}

export const resolvePerfectionistRules = (
  options?: PerfectionistRulesOptions,
): Required<PerfectionistRules> => ({
  'perfectionist/sort-array-includes': 'error',
  'perfectionist/sort-classes': 'off',
  'perfectionist/sort-decorators': 'off',
  'perfectionist/sort-enums': 'off',
  'perfectionist/sort-exports': 'off',
  'perfectionist/sort-heritage-clauses': 'off',
  'perfectionist/sort-imports': ['error', {
    newlinesBetween: 'never',
    groups: [
      'side-effect-style',
      'side-effect',
      'builtin',
      'external',
      'internal',
      'parent',
      'sibling',
      'index',
      'style',
      'object',
      'builtin-type',
      'external-type',
      'internal-type',
      'parent-type',
      'sibling-type',
      'index-type',
      'unknown',
    ],
    // An error will be thrown when the field is set to `undefined`, so give an empty array as the default value
    internalPattern: options?.sortImports?.internalPattern ?? [],
  }],
  'perfectionist/sort-interfaces': 'off',
  'perfectionist/sort-intersection-types': 'off',
  'perfectionist/sort-jsx-props': 'off',
  'perfectionist/sort-maps': 'off',
  'perfectionist/sort-modules': 'off',
  'perfectionist/sort-named-exports': 'off',
  'perfectionist/sort-named-imports': ['error', {
    groupKind: 'values-first',
  }],
  'perfectionist/sort-object-types': 'off',
  'perfectionist/sort-objects': 'off',
  'perfectionist/sort-sets': 'error',
  'perfectionist/sort-switch-case': 'off',
  'perfectionist/sort-union-types': 'off',
  'perfectionist/sort-variable-declarations': 'off',
})

export type PerfectionistOptions = OverridesOptions<Partial<PerfectionistRules>> & RulesOptions<PerfectionistRulesOptions>
export const perfectionist = (options: PerfectionistOptions = {}): Linter.Config[] => {
  const { overrides, rules } = options
  return [{
    name: 'anytinz/perfectionist/rules',
    plugins: {
      perfectionist: pluginPerfectionist,
    },
    rules: {
      ...resolvePerfectionistRules(rules),
      ...overrides,
    },
    settings: {
      perfectionist: {
        type: 'natural',
        ignoreCase: false,
      },
    },
  }]
}
