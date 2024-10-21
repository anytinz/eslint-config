import { GLOB_JSX, GLOB_TSX } from '../globs'
import { pluginSolid } from '../plugins.js'
import type { Linter } from 'eslint'
import type { OverridesOptions } from '../types/options'
import type { SolidRules } from '../types/rules/solid'

export const resolveSolidRules = (): Required<SolidRules> => ({
  'solid/components-return-once': 'error',
  'solid/event-handlers': 'error',
  'solid/imports': 'error',
  'solid/jsx-no-duplicate-props': 'error',
  'solid/jsx-no-script-url': 'error',
  'solid/jsx-no-undef': 'error',
  'solid/jsx-uses-vars': 'error',
  'solid/no-array-handlers': 'error',
  'solid/no-destructure': 'error',
  'solid/no-innerhtml': ['error', { allowStatic: true }],
  'solid/no-proxy-apis': 'off',
  'solid/no-react-deps': 'error',
  'solid/no-react-specific-props': 'error',
  'solid/no-unknown-namespaces': 'error',
  'solid/prefer-classlist': 'off',
  'solid/prefer-for': 'error',
  'solid/prefer-show': 'error',
  'solid/reactivity': 'error',
  'solid/self-closing-comp': 'error',
  'solid/style-prop': 'error',
})

export type SolidOptions = OverridesOptions<Partial<SolidRules>>
export const solid = (options: SolidOptions = {}): Linter.Config[] => {
  return [{
    name: 'anytinz/solid/rules',
    files: [GLOB_JSX, GLOB_TSX],
    plugins: {
      solid: pluginSolid,
    },
    rules: {
      ...resolveSolidRules(),
      ...options.overrides,
    },
  }]
}
