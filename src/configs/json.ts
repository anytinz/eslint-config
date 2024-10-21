import parserJsonc from 'jsonc-eslint-parser'
import { GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from '../globs'
import { pluginJsonc } from '../plugins.js'
import { resolveStylisticRules } from './stylistic'
import type { Linter } from 'eslint'
import type { RemovePrefix } from '../helpers/remove-prefix'
import type { OverridesOptions } from '../types/options'
import type { JsoncRules } from '../types/rules/jsonc'
import type { StylisticRules } from '../types/rules/stylistic'

type JsoncStylisticRules = Pick<
  JsoncRules,
  Extract<
    keyof JsoncRules,
    `jsonc/${Exclude<
      RemovePrefix<keyof StylisticRules, 'style/'>,
      'comma-dangle' | 'no-floating-decimal' | 'quote-props' | 'quotes' | 'space-unary-ops'
    >}`
  >
>

export const resolveJsonStylisticRules = (): Required<JsoncStylisticRules> => {
  const stylisticRules = resolveStylisticRules()
  const rules: Required<JsoncStylisticRules> = {
    'jsonc/array-bracket-newline': stylisticRules['style/array-bracket-newline'],
    'jsonc/array-bracket-spacing': stylisticRules['style/array-bracket-spacing'],
    'jsonc/array-element-newline': stylisticRules['style/array-element-newline'],
    'jsonc/comma-style': stylisticRules['style/comma-style'],
    'jsonc/indent': stylisticRules['style/indent'],
    'jsonc/key-spacing': stylisticRules['style/key-spacing'],
    'jsonc/object-curly-newline': stylisticRules['style/object-curly-newline'],
    'jsonc/object-curly-spacing': stylisticRules['style/object-curly-spacing'],
    'jsonc/object-property-newline': stylisticRules['style/object-property-newline'],
  }
  return rules
}

export type JsonOptions = OverridesOptions<Partial<JsoncRules>>
export const json = (options: JsonOptions = {}): Linter.Config[] => {
  const { overrides } = options
  return [
    {
      name: 'anytinz/json/setup',
      files: [GLOB_JSON, GLOB_JSONC, GLOB_JSON5],
      languageOptions: {
        parser: parserJsonc,
      },
      plugins: {
        jsonc: pluginJsonc,
      },
      rules: resolveJsonStylisticRules(),
    },
    {
      name: 'anytinz/json/rules',
      files: [GLOB_JSON],
      ignores: [
        '**/tsconfig.json',
        '**/tsconfig.*.json',
        '**/devcontainer.json',
      ],
      rules: {
        ...pluginJsonc.configs['recommended-with-json'].rules as Linter.RulesRecord,
        ...overrides,
      },
    },
    {
      name: 'anytinz/jsonc/rules',
      files: [
        GLOB_JSONC,
        '**/tsconfig.json',
        '**/tsconfig.*.json',
        '**/devcontainer.json',
      ],
      rules: {
        ...pluginJsonc.configs['recommended-with-jsonc'].rules as Linter.RulesRecord,
        ...overrides,
      },
    },
    {
      name: 'anytinz/json5/rules',
      files: [GLOB_JSON5],
      rules: {
        ...pluginJsonc.configs['recommended-with-json5'].rules as Linter.RulesRecord,
        ...overrides,
      },
    },
  ]
}
