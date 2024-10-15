import { cwd } from 'node:process'
import parserTypescript from '@typescript-eslint/parser'
import { GLOB_TS, GLOB_TSX } from '../globs'
import { extendsRuleOptions } from '../helpers/extends-rule-options'
import { pluginTypescript } from '../plugins.js'
import { resolveJavascriptRules } from './javascript'
import type { ParserOptions } from '@typescript-eslint/parser'
import type { Linter } from 'eslint'
import type { CommonOptions } from '../types/options'
import type { JavascriptRules } from '../types/rules/javascript'
import type { TypescriptRules } from '../types/rules/typescript'

type JavascriptForExtendedRules = {
  [K in keyof JavascriptRules as `ts/${K}` extends keyof TypescriptRules ? K : never]: 'off'
}
type TypescriptExtendedRules = JavascriptForExtendedRules & Pick<TypescriptRules, `ts/${keyof JavascriptForExtendedRules}`>
export const resolveTypescriptRules = (): Required<JavascriptForExtendedRules & TypescriptRules> => {
  const javascriptRules = resolveJavascriptRules()
  const extendedRules: Required<TypescriptExtendedRules> = {
    'class-methods-use-this': 'off',
    'ts/class-methods-use-this': javascriptRules['class-methods-use-this'],

    'consistent-return': 'off',
    'ts/consistent-return': 'off',

    'default-param-last': 'off',
    'ts/default-param-last': javascriptRules['default-param-last'],

    'dot-notation': 'off',
    'ts/dot-notation': javascriptRules['dot-notation'],

    'init-declarations': 'off',
    'ts/init-declarations': javascriptRules['init-declarations'],

    'max-params': 'off',
    'ts/max-params': extendsRuleOptions(javascriptRules['max-params'], (...[ruleOptions]) => (typeof ruleOptions === 'number' ? [{ max: ruleOptions }] : [])),

    'no-array-constructor': 'off',
    'ts/no-array-constructor': javascriptRules['no-array-constructor'],

    'no-dupe-class-members': 'off',
    'ts/no-dupe-class-members': javascriptRules['no-dupe-class-members'],

    'no-empty-function': 'off',
    'ts/no-empty-function': javascriptRules['no-empty-function'],

    'no-implied-eval': 'off',
    'ts/no-implied-eval': javascriptRules['no-implied-eval'],

    'no-invalid-this': 'off',
    'ts/no-invalid-this': javascriptRules['no-invalid-this'],

    'no-loop-func': 'off',
    'ts/no-loop-func': javascriptRules['no-loop-func'],

    'no-loss-of-precision': 'off',
    'ts/no-loss-of-precision': javascriptRules['no-loss-of-precision'],

    'no-magic-numbers': 'off',
    'ts/no-magic-numbers': javascriptRules['no-magic-numbers'],

    'no-redeclare': 'off',
    'ts/no-redeclare': javascriptRules['no-redeclare'],

    'no-restricted-imports': 'off',
    'ts/no-restricted-imports': javascriptRules['no-restricted-imports'],

    'no-shadow': 'off',
    'ts/no-shadow': javascriptRules['no-shadow'],

    'no-unused-expressions': 'off',
    'ts/no-unused-expressions': javascriptRules['no-unused-expressions'],

    'no-unused-vars': 'off',
    'ts/no-unused-vars': javascriptRules['no-unused-vars'],

    'no-use-before-define': 'off',
    'ts/no-use-before-define': javascriptRules['no-use-before-define'],

    'no-useless-constructor': 'off',
    'ts/no-useless-constructor': javascriptRules['no-useless-constructor'],

    'prefer-destructuring': 'off',
    'ts/prefer-destructuring': javascriptRules['prefer-destructuring'],

    'prefer-promise-reject-errors': 'off',
    'ts/prefer-promise-reject-errors': javascriptRules['prefer-promise-reject-errors'],

    'require-await': 'off',
    'ts/require-await': javascriptRules['require-await'],
  }
  const rules: Required<Omit<TypescriptRules, `ts/${keyof JavascriptForExtendedRules}`>> = {
    'ts/adjacent-overload-signatures': 'error',
    'ts/array-type': 'error',
    'ts/await-thenable': 'error',
    'ts/ban-ts-comment': 'error',
    'ts/ban-tslint-comment': 'error',
    'ts/class-literal-property-style': 'error',
    'ts/consistent-generic-constructors': 'error',
    'ts/consistent-indexed-object-style': 'error',
    'ts/consistent-type-assertions': 'error',
    'ts/consistent-type-definitions': 'off',
    'ts/consistent-type-exports': 'error',
    'ts/consistent-type-imports': 'error',
    'ts/explicit-function-return-type': 'error',
    'ts/explicit-member-accessibility': 'error',
    'ts/explicit-module-boundary-types': 'error',
    'ts/member-ordering': 'off',
    'ts/method-signature-style': 'error',
    'ts/naming-convention': ['error', {
      selector: 'function',
      format: ['camelCase', 'PascalCase'],
    }],
    'ts/no-array-delete': 'error',
    'ts/no-base-to-string': 'error',
    'ts/no-confusing-non-null-assertion': 'error',
    'ts/no-confusing-void-expression': 'error',
    'ts/no-deprecated': 'error',
    'ts/no-duplicate-enum-values': 'error',
    'ts/no-duplicate-type-constituents': 'error',
    'ts/no-dynamic-delete': 'error',
    'ts/no-empty-interface': 'off',
    'ts/no-empty-object-type': ['error', { allowInterfaces: 'with-single-extends' }],
    'ts/no-explicit-any': 'error',
    'ts/no-extra-non-null-assertion': 'error',
    'ts/no-extraneous-class': ['error', {
      allowConstructorOnly: true,
      allowWithDecorator: true,
    }],
    'ts/no-floating-promises': 'error',
    'ts/no-for-in-array': 'error',
    'ts/no-import-type-side-effects': 'error',
    'ts/no-inferrable-types': 'error',
    'ts/no-invalid-void-type': 'error',
    'ts/no-meaningless-void-operator': 'error',
    'ts/no-misused-new': 'error',
    'ts/no-misused-promises': 'error',
    'ts/no-mixed-enums': 'error',
    'ts/no-namespace': 'error',
    'ts/no-non-null-asserted-nullish-coalescing': 'error',
    'ts/no-non-null-asserted-optional-chain': 'error',
    'ts/no-non-null-assertion': 'error',
    'ts/no-redundant-type-constituents': 'error',
    'ts/no-require-imports': 'error',
    'ts/no-restricted-types': 'off',
    'ts/no-this-alias': 'error',
    'ts/no-type-alias': 'off',
    'ts/no-unnecessary-boolean-literal-compare': 'error',
    'ts/no-unnecessary-condition': 'error',
    'ts/no-unnecessary-parameter-property-assignment': 'error',
    'ts/no-unnecessary-qualifier': 'error',
    'ts/no-unnecessary-template-expression': 'error',
    'ts/no-unnecessary-type-arguments': 'error',
    'ts/no-unnecessary-type-assertion': 'error',
    'ts/no-unnecessary-type-constraint': 'error',
    'ts/no-unnecessary-type-parameters': 'error',
    'ts/no-unsafe-argument': 'error',
    'ts/no-unsafe-assignment': 'error',
    'ts/no-unsafe-call': 'error',
    'ts/no-unsafe-declaration-merging': 'error',
    'ts/no-unsafe-enum-comparison': 'error',
    'ts/no-unsafe-function-type': 'error',
    'ts/no-unsafe-member-access': 'error',
    'ts/no-unsafe-return': 'error',
    'ts/no-unsafe-unary-minus': 'error',
    'ts/no-useless-empty-export': 'error',
    'ts/no-var-requires': 'error',
    'ts/no-wrapper-object-types': 'error',
    'ts/non-nullable-type-assertion-style': 'error',

    // 'no-throw-literal': 'off',
    'ts/only-throw-error': ['error', { allowThrowingAny: true, allowThrowingUnknown: true }],

    'ts/parameter-properties': 'off',
    'ts/prefer-as-const': 'error',
    'ts/prefer-enum-initializers': 'off',
    'ts/prefer-find': 'error',
    'ts/prefer-for-of': 'error',
    'ts/prefer-function-type': 'error',
    'ts/prefer-includes': 'error',
    'ts/prefer-literal-enum-member': 'error',
    'ts/prefer-namespace-keyword': 'error',
    'ts/prefer-nullish-coalescing': 'error',
    'ts/prefer-optional-chain': 'error',
    'ts/prefer-readonly': 'error',
    'ts/prefer-readonly-parameter-types': 'off',
    'ts/prefer-reduce-type-parameter': 'error',
    'ts/prefer-regexp-exec': 'error',
    'ts/prefer-return-this-type': 'error',
    'ts/prefer-string-starts-ends-with': 'error',
    'ts/prefer-ts-expect-error': 'error',
    'ts/promise-function-async': 'error',
    'ts/require-array-sort-compare': 'error',
    'ts/restrict-plus-operands': 'error',
    'ts/restrict-template-expressions': 'error',

    // 'no-return-await': 'off',
    'ts/return-await': 'error',

    'ts/sort-type-constituents': 'off',
    'ts/strict-boolean-expressions': 'error',
    'ts/switch-exhaustiveness-check': 'error',
    'ts/triple-slash-reference': 'error',
    'ts/typedef': 'off',
    'ts/unbound-method': 'off',
    'ts/unified-signatures': 'error',
    'ts/use-unknown-in-catch-callback-variable': 'error',
  }
  return {
    ...rules,
    ...extendedRules,
  }
}

export type TypescriptOptions = CommonOptions<Partial<JavascriptForExtendedRules & TypescriptRules>> & {
  parserOptions?: ParserOptions
}
export const typescript = (options: TypescriptOptions = {}): Linter.Config[] => {
  const {
    overrides,
    parserOptions,
  } = options
  return [{
    name: 'anytinz/typescript/rules',
    files: [
      GLOB_TS,
      GLOB_TSX,
      ...parserOptions?.extraFileExtensions
        ? parserOptions.extraFileExtensions.map((extension) => `**/*${extension}`)
        : [],
    ],
    languageOptions: {
      parser: parserTypescript,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        projectService: {
          allowDefaultProject: ['./*.js'],
        },
        tsconfigRootDir: cwd(),
        ...parserOptions,
      } satisfies ParserOptions,
    },
    plugins: {
      ts: pluginTypescript,
    },
    rules: {
      ...resolveTypescriptRules(),
      ...overrides,
    },
  }]
}
