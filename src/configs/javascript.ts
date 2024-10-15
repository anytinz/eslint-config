import confusingBrowserGlobals from 'confusing-browser-globals'
import globals from 'globals'
import type { Linter } from 'eslint'
import type { CommonOptions } from '../types/options'
import type { JavascriptRules } from '../types/rules/javascript'

export const resolveJavascriptRules = (): Required<JavascriptRules> => ({
  'accessor-pairs': 'error',
  'array-callback-return': 'error',
  'arrow-body-style': 'off',
  'block-scoped-var': 'error',
  camelcase: ['error', {
    properties: 'never',
  }],
  'capitalized-comments': 'off',
  'class-methods-use-this': 'error',
  complexity: 'off',
  'consistent-return': 'error',
  'consistent-this': 'error',
  'constructor-super': 'error',
  curly: 'error',
  'default-case': 'error',
  'default-case-last': 'error',
  'default-param-last': 'error',
  'dot-notation': 'error',
  eqeqeq: 'error',
  'for-direction': 'error',
  'func-name-matching': 'error',
  'func-names': 'error',
  'func-style': 'error',
  'getter-return': 'error',
  'grouped-accessor-pairs': 'error',
  'guard-for-in': 'error',
  'id-blacklist': 'off',
  'id-denylist': 'off',
  'id-length': 'off',
  'id-match': 'off',
  'indent-legacy': 'off',
  'init-declarations': 'error',
  'lines-around-directive': 'off',
  'logical-assignment-operators': ['error', 'never'],
  'max-classes-per-file': 'error',
  'max-depth': 'off',
  'max-lines': 'off',
  'max-lines-per-function': 'off',
  'max-nested-callbacks': 'off',
  'max-params': 'off',
  'max-statements': 'off',
  'new-cap': ['error', { capIsNew: false }],
  'newline-after-var': 'off',
  'newline-before-return': 'off',
  'no-alert': 'error',
  'no-array-constructor': 'error',
  'no-async-promise-executor': 'error',
  'no-await-in-loop': 'error',
  'no-bitwise': 'error',
  'no-buffer-constructor': 'off',
  'no-caller': 'error',
  'no-case-declarations': 'error',
  'no-catch-shadow': 'off',
  'no-class-assign': 'error',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': ['error', 'always'],
  'no-console': 'error',
  'no-const-assign': 'error',
  'no-constant-binary-expression': 'error',
  'no-constant-condition': 'error',
  'no-constructor-return': 'error',
  'no-continue': 'error',
  'no-control-regex': 'error',
  'no-debugger': 'error',
  'no-delete-var': 'error',
  'no-div-regex': 'error',
  'no-dupe-args': 'error',
  'no-dupe-class-members': 'error',
  'no-dupe-else-if': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-duplicate-imports': 'off',
  'no-else-return': 'error',
  'no-empty': 'error',
  'no-empty-character-class': 'error',
  'no-empty-function': 'error',
  'no-empty-pattern': 'error',
  'no-empty-static-block': 'error',
  'no-eq-null': 'error',
  'no-eval': 'error',
  'no-ex-assign': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-extra-boolean-cast': 'error',
  'no-extra-label': 'error',
  'no-fallthrough': 'error',
  'no-func-assign': 'error',
  'no-global-assign': 'error',
  'no-implicit-coercion': ['error', { boolean: false }],
  'no-implicit-globals': 'off',
  'no-implied-eval': 'error',
  'no-import-assign': 'error',
  'no-inline-comments': 'error',
  'no-inner-declarations': 'error',
  'no-invalid-regexp': 'error',
  'no-invalid-this': 'error',
  'no-irregular-whitespace': 'error',
  'no-iterator': 'error',
  'no-label-var': 'error',
  'no-labels': 'error',
  'no-lone-blocks': 'error',
  'no-lonely-if': 'error',
  'no-loop-func': 'error',
  'no-loss-of-precision': 'error',
  'no-magic-numbers': 'off',
  'no-misleading-character-class': 'error',
  'no-multi-assign': 'error',
  'no-multi-str': 'error',
  'no-native-reassign': 'off',
  'no-negated-condition': 'off',
  'no-negated-in-lhs': 'off',
  'no-nested-ternary': 'error',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-native-nonconstructor': 'error',
  'no-new-object': 'off',
  'no-new-symbol': 'off',
  'no-new-wrappers': 'error',
  'no-nonoctal-decimal-escape': 'error',
  'no-obj-calls': 'error',
  'no-object-constructor': 'error',
  'no-octal': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': ['error', { props: false }],
  'no-plusplus': 'error',
  'no-promise-executor-return': 'error',
  'no-proto': 'error',
  'no-prototype-builtins': 'error',
  'no-redeclare': 'error',
  'no-regex-spaces': 'error',
  /**
   * {@link https://github.com/airbnb/javascript/blob/e6080c7beed96700a599e7d86f1517bdc8269366/packages/eslint-config-airbnb-base/rules/es6.js#L65 eslint-config-airbnb-base}
   */
  'no-restricted-exports': ['error', { restrictedNamedExports: ['default', 'then'] }],
  /**
   * restricted list and messages is quote from
   * {@link https://github.com/airbnb/javascript/blob/01f046dc0567e4495762e8e4fc4dde7b87dd5eb8/packages/eslint-config-airbnb-base/rules/variables.js#LL19 eslint-config-airbnb-base}
   */
  'no-restricted-globals': [
    'error',
    {
      name: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      name: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    ...confusingBrowserGlobals,
  ],
  'no-restricted-imports': 'off',
  'no-restricted-modules': 'off',
  /**
   * restricted list and messages is quote from
   * {@link https://github.com/airbnb/javascript/blob/01f046dc0567e4495762e8e4fc4dde7b87dd5eb8/packages/eslint-config-airbnb-base/rules/style.js#L340 eslint-config-airbnb-base}
   */
  'no-restricted-properties': [
    'error',
    {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    },
    {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    },
    {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    },
    {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    },
  ],
  /**
   * restricted list and messages is quote from
   * {@link https://github.com/airbnb/javascript/blob/01f046dc0567e4495762e8e4fc4dde7b87dd5eb8/packages/eslint-config-airbnb-base/rules/style.js#L340 eslint-config-airbnb-base}
   */
  'no-restricted-syntax': [
    'error',
    {
      selector: 'ForInStatement',
      message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    },
    {
      selector: 'ForOfStatement',
      message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
    },
    {
      selector: 'LabeledStatement',
      message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    },
    {
      selector: 'WithStatement',
      message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    },
  ],
  'no-return-assign': ['error', 'always'],
  'no-return-await': 'off',
  'no-script-url': 'error',
  'no-self-assign': 'error',
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-setter-return': 'error',
  'no-shadow': 'error',
  'no-shadow-restricted-names': 'error',
  'no-spaced-func': 'off',
  'no-sparse-arrays': 'error',
  'no-template-curly-in-string': 'error',
  'no-ternary': 'off',
  'no-this-before-super': 'error',
  'no-throw-literal': 'error',
  'no-undef': 'error',
  'no-undef-init': 'error',
  'no-undefined': 'off',
  'no-underscore-dangle': ['error', {
    enforceInMethodNames: true,
    enforceInClassFields: true,
  }],
  'no-unexpected-multiline': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-unneeded-ternary': 'error',
  'no-unreachable': 'error',
  'no-unreachable-loop': 'error',
  'no-unsafe-finally': 'error',
  'no-unsafe-negation': ['error', { enforceForOrderingRelations: true }],
  'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
  'no-unused-expressions': 'error',
  'no-unused-labels': 'error',
  'no-unused-private-class-members': 'error',
  'no-unused-vars': ['error', { ignoreRestSiblings: true }],
  'no-use-before-define': 'error',
  'no-useless-assignment': 'error',
  'no-useless-backreference': 'error',
  'no-useless-call': 'error',
  'no-useless-catch': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-concat': 'error',
  'no-useless-constructor': 'error',
  'no-useless-escape': 'error',
  'no-useless-rename': 'error',
  'no-useless-return': 'error',
  'no-var': 'error',
  'no-void': ['error', { allowAsStatement: true }],
  'no-warning-comments': 'off',
  'no-with': 'error',
  'object-shorthand': 'error',
  'one-var': ['error', 'never'],
  'operator-assignment': 'error',
  'prefer-arrow-callback': 'error',
  'prefer-const': 'error',
  'prefer-destructuring': 'off',
  'prefer-exponentiation-operator': 'error',
  'prefer-named-capture-group': 'error',
  'prefer-numeric-literals': 'error',
  'prefer-object-has-own': 'error',
  'prefer-object-spread': 'error',
  'prefer-promise-reject-errors': 'error',
  'prefer-reflect': 'off',
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  radix: 'error',
  'require-atomic-updates': 'error',
  'require-await': 'error',
  'require-unicode-regexp': 'error',
  'require-yield': 'error',
  'sort-imports': 'off',
  'sort-keys': 'off',
  'sort-vars': 'off',
  strict: 'error',
  'symbol-description': 'error',
  'unicode-bom': 'error',
  'use-isnan': 'error',
  'valid-typeof': 'error',
  'vars-on-top': 'error',
  yoda: 'error',
})

export type JavascriptOptions = CommonOptions<Partial<JavascriptRules>>
export const javascript = (options: JavascriptOptions = {}): Linter.Config[] => {
  return [
    {
      name: 'anytinz/javascript/rules',
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        globals: {
          ...globals.browser,
          ...globals.node,
          ...globals.es2025,
          document: 'readonly',
          navigator: 'readonly',
          window: 'readonly',
        },
        parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      rules: {
        ...resolveJavascriptRules(),
        ...options.overrides,
      },
    },
    {
      name: 'anytinz/javascript/overrides/ts',
      rules: {
        'no-undef': 'off',
      },
    },
  ]
}
