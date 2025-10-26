import { pluginStylistic } from '../plugins.js'
import type { Linter } from 'eslint'
import type { Except } from 'type-fest'
import type { OverridesOptions } from '../types/options'
import type { StylisticRules } from '../types/rules/stylistic'

export const resolveStylisticRules = (): Required<
  // ingore experimental rules
  Except<StylisticRules, 'style/exp-list-style'>
> => ({
  'style/array-bracket-newline': ['error', 'consistent'],
  'style/array-bracket-spacing': 'error',
  'style/array-element-newline': 'off',
  'style/arrow-parens': 'error',
  'style/arrow-spacing': 'error',
  'style/block-spacing': 'error',
  'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
  'style/comma-dangle': ['error', 'always-multiline'],
  'style/comma-spacing': 'error',
  'style/comma-style': ['error', 'last', {
    exceptions: {
      ArrayExpression: false,
      ArrayPattern: false,
      ArrowFunctionExpression: false,
      CallExpression: false,
      FunctionDeclaration: false,
      FunctionExpression: false,
      ImportDeclaration: false,
      ObjectExpression: false,
      ObjectPattern: false,
      VariableDeclaration: false,
      NewExpression: false,
    },
  }],
  'style/computed-property-spacing': 'error',
  'style/curly-newline': ['error', { consistent: true }],
  'style/dot-location': ['error', 'property'],
  'style/eol-last': 'error',
  'style/function-call-argument-newline': ['error', 'consistent'],
  'style/function-call-spacing': 'error',
  'style/function-paren-newline': ['error', 'multiline-arguments'],
  'style/generator-star-spacing': ['error', 'after'],
  'style/implicit-arrow-linebreak': 'error',
  'style/indent': ['error', 2],
  'style/indent-binary-ops': ['error', 2],
  'style/jsx-child-element-spacing': 'off',
  'style/jsx-closing-bracket-location': 'error',
  'style/jsx-closing-tag-location': 'error',
  'style/jsx-curly-brace-presence': ['error', {
    props: 'never',
    children: 'never',
    propElementValues: 'always',
  }],
  'style/jsx-curly-newline': ['error', {
    singleline: 'forbid',
    multiline: 'consistent',
  }],
  'style/jsx-curly-spacing': ['error', {
    when: 'never',
    children: true,
  }],
  'style/jsx-equals-spacing': 'error',
  'style/jsx-first-prop-new-line': ['error', 'multiline'],
  'style/jsx-function-call-newline': 'error',
  'style/jsx-indent': 'off',
  'style/jsx-indent-props': ['error', 2],
  'style/jsx-max-props-per-line': 'off',
  'style/jsx-newline': ['error', { prevent: true }],
  'style/jsx-one-expression-per-line': ['error', { allow: 'non-jsx' }],
  'style/jsx-pascal-case': 'error',
  'style/jsx-props-no-multi-spaces': 'off',
  'style/jsx-quotes': 'error',
  'style/jsx-self-closing-comp': 'error',
  'style/jsx-sort-props': 'off',
  'style/jsx-tag-spacing': ['error', { beforeClosing: 'never' }],
  'style/jsx-wrap-multilines': ['error', {
    declaration: 'parens-new-line',
    assignment: 'parens-new-line',
    return: 'parens-new-line',
    arrow: 'parens-new-line',
    condition: 'parens-new-line',
    logical: 'parens-new-line',
    prop: 'parens-new-line',
    propertyValue: 'parens-new-line',
  }],
  'style/key-spacing': 'error',
  'style/keyword-spacing': 'error',
  'style/line-comment-position': 'off',
  'style/linebreak-style': 'error',
  'style/lines-around-comment': 'off',
  'style/lines-between-class-members': 'error',
  'style/max-len': 'off',
  'style/max-statements-per-line': 'off',
  'style/member-delimiter-style': ['error', {
    multiline: {
      delimiter: 'none',
    },
  }],
  'style/multiline-comment-style': 'off',
  'style/multiline-ternary': ['error', 'always-multiline'],
  'style/new-parens': 'error',
  'style/newline-per-chained-call': 'off',
  'style/no-confusing-arrow': 'error',
  'style/no-extra-parens': ['error', 'all', {
    nestedBinaryExpressions: false,
    ignoreJSX: 'multi-line',
    ignoredNodes: [
      'ArrowFunctionExpression[body.type=ConditionalExpression]',
      "*[typeAnnotation.type='TSIntersectionType']",
      "*[typeAnnotation.type='TSUnionType']",
    ],
  }],
  'style/no-extra-semi': 'error',
  'style/no-floating-decimal': 'error',
  /**
   * operators groups is quote from
   * {@link https://github.com/airbnb/javascript/blob/b912288e4bf7fa46d9254d3cdfa190e9b59f36c0/packages/eslint-config-airbnb-base/rules/style.js#L296 eslint-config-airbnb-base}
   */
  'style/no-mixed-operators': ['error', {
    groups: [
      ['%', '**'],
      ['%', '+'],
      ['%', '-'],
      ['%', '*'],
      ['%', '/'],
      ['/', '*'],
      ['&', '|', '<<', '>>', '>>>'],
      ['==', '!=', '===', '!=='],
      ['&&', '||'],
    ],
    allowSamePrecedence: false,
  }],
  'style/no-mixed-spaces-and-tabs': 'error',
  'style/no-multi-spaces': 'error',
  'style/no-multiple-empty-lines': ['error', {
    max: 1,
  }],
  'style/no-tabs': 'error',
  'style/no-trailing-spaces': 'error',
  'style/no-whitespace-before-property': 'error',
  'style/nonblock-statement-body-position': 'error',
  'style/object-curly-newline': 'error',
  'style/object-curly-spacing': ['error', 'always'],
  'style/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
  'style/one-var-declaration-per-line': ['error', 'always'],
  'style/operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],
  'style/padded-blocks': ['error', 'never'],
  'style/padding-line-between-statements': 'off',
  'style/quote-props': ['error', 'as-needed'],
  'style/quotes': ['error', 'single', { avoidEscape: true }],
  'style/rest-spread-spacing': 'error',
  'style/semi': ['error', 'never'],
  'style/semi-spacing': 'error',
  'style/semi-style': ['error', 'first'],
  'style/space-before-blocks': 'error',
  'style/space-before-function-paren': ['error', {
    anonymous: 'always',
    named: 'never',
    asyncArrow: 'always',
  }],
  'style/space-in-parens': 'error',
  'style/space-infix-ops': 'error',
  'style/space-unary-ops': 'error',
  /**
   * options is quote from
   * {@link https://github.com/airbnb/javascript/blob/b912288e4bf7fa46d9254d3cdfa190e9b59f36c0/packages/eslint-config-airbnb-base/rules/style.js#L507 eslint-config-airbnb-base}
   */
  'style/spaced-comment': ['error', 'always', {
    line: {
      exceptions: ['-', '+'],
      markers: ['=', '!', '/'],
    },
    block: {
      exceptions: ['-', '+'],
      markers: ['=', '!', ':', '::'],
      balanced: true,
    },
  }],
  'style/switch-colon-spacing': 'error',
  'style/template-curly-spacing': 'error',
  'style/template-tag-spacing': 'error',
  'style/type-annotation-spacing': 'error',
  'style/type-generic-spacing': 'error',
  'style/type-named-tuple-spacing': 'error',
  'style/wrap-iife': ['error', 'inside'],
  'style/wrap-regex': 'off',
  'style/yield-star-spacing': 'error',

})

export type StylisticOptions = OverridesOptions<Partial<StylisticRules>>
export const stylistic = (options: StylisticOptions = {}): Linter.Config[] => {
  return [{
    name: 'anytinz/stylistic/rules',
    plugins: {
      style: pluginStylistic,
    },
    rules: {
      ...resolveStylisticRules(),
      ...options.overrides,
    },
  }]
}
