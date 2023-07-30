import { coreRules } from './core.js'

export const typescriptRules = {
  /**
   * @see {@link https://typescript-eslint.io/rules/adjacent-overload-signatures}
   */
  '@typescript-eslint/adjacent-overload-signatures': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/array-type}
   */
  '@typescript-eslint/array-type': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/await-thenable}
   */
  '@typescript-eslint/await-thenable': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/ban-ts-comment}
   */
  '@typescript-eslint/ban-ts-comment': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/ban-tslint-comment}
   */
  '@typescript-eslint/ban-tslint-comment': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/ban-types}
   */
  '@typescript-eslint/ban-types': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/block-spacing}
   */
  'block-spacing': 'off',
  '@typescript-eslint/block-spacing': coreRules['block-spacing'],

  /**
   * @see {@link https://typescript-eslint.io/rules/brace-style}
   */
  'brace-style': 'off',
  '@typescript-eslint/brace-style': coreRules['brace-style'],

  /**
   * @see {@link https://typescript-eslint.io/rules/class-literal-property-style}
   */
  '@typescript-eslint/class-literal-property-style': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/comma-dangle}
   */
  'comma-dangle': 'off',
  '@typescript-eslint/comma-dangle': coreRules['comma-dangle'],

  /**
   * @see {@link https://typescript-eslint.io/rules/comma-spacing}
   */
  'comma-spacing': 'off',
  '@typescript-eslint/comma-spacing': coreRules['comma-spacing'],

  /**
   * @see {@link https://typescript-eslint.io/rules/consistent-generic-constructors}
   */
  '@typescript-eslint/consistent-generic-constructors': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/consistent-indexed-object-style}
   */
  '@typescript-eslint/consistent-indexed-object-style': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/consistent-type-assertions}
   */
  '@typescript-eslint/consistent-type-assertions': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/consistent-type-definitions}
   */
  '@typescript-eslint/consistent-type-definitions': 'off',

  /**
   * @see {@link https://typescript-eslint.io/rules/consistent-type-exports}
   */
  '@typescript-eslint/consistent-type-exports': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/consistent-type-imports}
   */
  '@typescript-eslint/consistent-type-imports': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/default-param-last}
   */
  'default-param-last': 'off',
  '@typescript-eslint/default-param-last': coreRules['default-param-last'],

  /**
   * @see {@link https://typescript-eslint.io/rules/dot-notation}
   */
  'dot-notation': 'off',
  '@typescript-eslint/dot-notation': coreRules['dot-notation'],

  /**
   * @see {@link https://typescript-eslint.io/rules/explicit-function-return-type}
   */
  '@typescript-eslint/explicit-function-return-type': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/explicit-member-accessibility}
   */
  '@typescript-eslint/explicit-member-accessibility': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/explicit-module-boundary-types}
   */
  '@typescript-eslint/explicit-module-boundary-types': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/func-call-spacing}
   */
  'func-call-spacing': 'off',
  '@typescript-eslint/func-call-spacing': coreRules['func-call-spacing'],

  /**
   * @see {@link https://typescript-eslint.io/rules/indent}
   */
  indent: 'off',
  '@typescript-eslint/indent': coreRules.indent,

  /**
   * @see {@link https://typescript-eslint.io/rules/init-declarations}
   */
  'init-declarations': 'off',
  '@typescript-eslint/init-declarations': coreRules['init-declarations'],

  /**
   * @see {@link https://typescript-eslint.io/rules/key-spacing}
   */
  'key-spacing': 'off',
  '@typescript-eslint/key-spacing': coreRules['key-spacing'],

  /**
   * @see {@link https://typescript-eslint.io/rules/keyword-spacing}
   */
  'keyword-spacing': 'off',
  '@typescript-eslint/keyword-spacing': coreRules['keyword-spacing'],

  /**
   * @see {@link https://typescript-eslint.io/rules/lines-around-comment}
   */
  'lines-around-comment': 'off',
  // issue: https://github.com/typescript-eslint/typescript-eslint/issues/6636
  // '@typescript-eslint/lines-around-comment': coreRules['lines-around-comment'],
  '@typescript-eslint/lines-around-comment': [
    'error',
    {
      beforeBlockComment: true,
      allowBlockStart: true,
      allowBlockEnd: true,
      allowObjectStart: true,
      allowObjectEnd: true,
      allowArrayStart: true,
      allowArrayEnd: true,
      allowClassStart: true,
      allowClassEnd: true,
    },
  ],

  /**
   * @see {@link https://typescript-eslint.io/rules/lines-between-class-members}
   */
  'lines-between-class-members': 'off',
  '@typescript-eslint/lines-between-class-members': coreRules['lines-between-class-members'],

  /**
   * @see {@link https://typescript-eslint.io/rules/member-delimiter-style}
   */
  '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],

  /**
   * @tdo enable?
   * @see {@link https://typescript-eslint.io/rules/member-ordering}
   */
  '@typescript-eslint/member-ordering': 'off',

  /**
   * @see {@link https://typescript-eslint.io/rules/method-signature-style}
   */
  '@typescript-eslint/method-signature-style': 'error',

  /**
   * take over rule ```camelcase```
   * @see {@link https://typescript-eslint.io/rules/naming-convention}
   */
  camelcase: 'off',
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'function',
      format: ['camelCase', 'PascalCase'],
    },
  ],

  /**
   * @see {@link https://typescript-eslint.io/rules/no-array-constructor}
   */
  'no-array-constructor': 'off',
  '@typescript-eslint/no-array-constructor': coreRules['no-array-constructor'],

  /**
   * @see {@link https://typescript-eslint.io/rules/no-base-to-string}
   */
  '@typescript-eslint/no-base-to-string': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-confusing-non-null-assertion}
   */
  '@typescript-eslint/no-confusing-non-null-assertion': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-confusing-void-expression}
   */
  '@typescript-eslint/no-confusing-void-expression': 'error',

  /**
   * ts(2393) & ts(2300)
   * @see {@link https://typescript-eslint.io/rules/no-dupe-class-members}
   */
  'no-dupe-class-members': 'off',
  '@typescript-eslint/no-dupe-class-members': coreRules['no-dupe-class-members'],

  /**
   * @see {@link https://typescript-eslint.io/rules/no-duplicate-enum-values}
   */
  '@typescript-eslint/no-duplicate-enum-values': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-duplicate-imports}
   */
  'no-duplicate-imports': 'off',
  '@typescript-eslint/no-duplicate-imports': coreRules['no-duplicate-imports'],

  /**
   * @see {@link https://typescript-eslint.io/rules/no-duplicate-type-constituents}
   */
  '@typescript-eslint/no-duplicate-type-constituents': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-dynamic-delete}
   */
  '@typescript-eslint/no-dynamic-delete': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-empty-function}
   */
  'no-empty-function': 'off',
  '@typescript-eslint/no-empty-function': coreRules['no-empty-function'],

  /**
   * @see {@link https://typescript-eslint.io/rules/no-empty-interface}
   */
  '@typescript-eslint/no-empty-interface': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-explicit-any}
   */
  '@typescript-eslint/no-explicit-any': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-extra-non-null-assertion}
   */
  '@typescript-eslint/no-extra-non-null-assertion': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-extra-parens}
   */
  'no-extra-parens': 'off',
  '@typescript-eslint/no-extra-parens': coreRules['no-extra-parens'],

  /**
   * @see {@link https://typescript-eslint.io/rules/no-extra-semi}
   */
  'no-extra-semi': 'off',
  '@typescript-eslint/no-extra-semi': coreRules['no-extra-semi'],

  /**
   * @see {@link https://typescript-eslint.io/rules/no-extraneous-class}
   */
  '@typescript-eslint/no-extraneous-class': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-floating-promises}
   */
  '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],

  /**
   * @see {@link https://typescript-eslint.io/rules/no-for-in-array}
   */
  '@typescript-eslint/no-for-in-array': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-implicit-any-catch}
   */
  '@typescript-eslint/no-implicit-any-catch': 'off',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-implied-eval}
   */
  'no-implied-eval': 'off',
  '@typescript-eslint/no-implied-eval': coreRules['no-implied-eval'],

  /**
   * @see {@link https://typescript-eslint.io/rules/no-import-type-side-effects}
   */
  '@typescript-eslint/no-import-type-side-effects': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-inferrable-types}
   */
  '@typescript-eslint/no-inferrable-types': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-invalid-this}
   */
  'no-invalid-this': 'off',
  '@typescript-eslint/no-invalid-this': coreRules['no-invalid-this'],

  /**
   * @see {@link https://typescript-eslint.io/rules/no-invalid-void-type}
   */
  '@typescript-eslint/no-invalid-void-type': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-loop-func}
   */
  'no-loop-func': 'off',
  '@typescript-eslint/no-loop-func': coreRules['no-loop-func'],

  /**
   * @see {@link https://typescript-eslint.io/rules/no-loss-of-precision}
   */
  'no-loss-of-precision': 'off',
  '@typescript-eslint/no-loss-of-precision': coreRules['no-loss-of-precision'],

  /**
   * @see {@link https://typescript-eslint.io/rules/no-magic-numbers}
   */
  'no-magic-numbers': 'off',
  '@typescript-eslint/no-magic-numbers': coreRules['no-magic-numbers'],

  /**
   * @see {@link https://typescript-eslint.io/rules/no-meaningless-void-operator}
   */
  '@typescript-eslint/no-meaningless-void-operator': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-misused-new}
   */
  '@typescript-eslint/no-misused-new': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-misused-promises}
   */
  '@typescript-eslint/no-misused-promises': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-mixed-enums}
   */
  '@typescript-eslint/no-mixed-enums': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-namespace}
   */
  '@typescript-eslint/no-namespace': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing}
   */
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain}
   */
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-non-null-assertion}
   */
  '@typescript-eslint/no-non-null-assertion': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-parameter-properties}
   */
  '@typescript-eslint/no-parameter-properties': 'off',

  /**
   * ts(2451)
   * @see {@link https://typescript-eslint.io/rules/no-redeclare}
   */
  'no-redeclare': 'off',
  '@typescript-eslint/no-redeclare': coreRules['no-redeclare'],

  /**
   * @see {@link https://typescript-eslint.io/rules/no-redundant-type-constituents}
   */
  '@typescript-eslint/no-redundant-type-constituents': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-require-imports}
   */
  '@typescript-eslint/no-require-imports': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-restricted-imports}
   */
  'no-restricted-imports': 'off',
  '@typescript-eslint/no-restricted-imports': coreRules['no-restricted-imports'],

  /**
   * @see {@link https://typescript-eslint.io/rules/no-shadow}
   */
  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': coreRules['no-shadow'],

  /**
   * @see {@link https://typescript-eslint.io/rules/no-this-alias}
   */
  '@typescript-eslint/no-this-alias': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-throw-literal}
   */
  'no-throw-literal': 'off',
  '@typescript-eslint/no-throw-literal': coreRules['no-throw-literal'],

  /**
   * @see {@link https://typescript-eslint.io/rules/no-type-alias}
   */
  '@typescript-eslint/no-type-alias': 'off',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare}
   */
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-unnecessary-condition}
   */
  '@typescript-eslint/no-unnecessary-condition': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-unnecessary-qualifier}
   */
  '@typescript-eslint/no-unnecessary-qualifier': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-unnecessary-type-arguments}
   */
  '@typescript-eslint/no-unnecessary-type-arguments': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-unnecessary-type-assertion}
   */
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-unnecessary-type-constraint}
   */
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-unsafe-argument}
   */
  '@typescript-eslint/no-unsafe-argument': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-unsafe-assignment}
   */
  '@typescript-eslint/no-unsafe-assignment': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-unsafe-call}
   */
  '@typescript-eslint/no-unsafe-call': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-unsafe-declaration-merging}
   */
  '@typescript-eslint/no-unsafe-declaration-merging': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-unsafe-enum-comparison}
   */
  '@typescript-eslint/no-unsafe-enum-comparison': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-unsafe-member-access}
   */
  '@typescript-eslint/no-unsafe-member-access': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-unsafe-return}
   */
  '@typescript-eslint/no-unsafe-return': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-unused-expressions}
   */
  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': coreRules['no-unused-expressions'],

  /**
   * @see {@link https://typescript-eslint.io/rules/no-unused-vars}
   */
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': coreRules['no-unused-vars'],

  /**
   * @see {@link https://typescript-eslint.io/rules/no-use-before-define}
   */
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': coreRules['no-use-before-define'],

  /**
   * @see {@link https://typescript-eslint.io/rules/no-useless-constructor}
   */
  'no-useless-constructor': 'off',
  '@typescript-eslint/no-useless-constructor': coreRules['no-useless-constructor'],

  /**
   * @see {@link https://typescript-eslint.io/rules/no-useless-empty-export}
   */
  '@typescript-eslint/no-useless-empty-export': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/no-var-requires}
   */
  '@typescript-eslint/no-var-requires': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/non-nullable-type-assertion-style}
   */
  '@typescript-eslint/non-nullable-type-assertion-style': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/object-curly-spacing}
   */
  'object-curly-spacing': 'off',
  '@typescript-eslint/object-curly-spacing': coreRules['object-curly-spacing'],

  /**
   * @see {@link https://typescript-eslint.io/rules/padding-line-between-statements}
   */
  'padding-line-between-statements': 'off',
  '@typescript-eslint/padding-line-between-statements': coreRules['padding-line-between-statements'],

  /**
   * @see {@link https://typescript-eslint.io/rules/parameter-properties}
   */
  '@typescript-eslint/parameter-properties': 'off',

  /**
   * @see {@link https://typescript-eslint.io/rules/prefer-as-const}
   */
  '@typescript-eslint/prefer-as-const': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/prefer-enum-initializers}
   */
  '@typescript-eslint/prefer-enum-initializers': 'off',

  /**
   * @see {@link https://typescript-eslint.io/rules/prefer-for-of}
   */
  '@typescript-eslint/prefer-for-of': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/prefer-function-type}
   */
  '@typescript-eslint/prefer-function-type': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/prefer-includes}
   */
  '@typescript-eslint/prefer-includes': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/prefer-literal-enum-member}
   */
  '@typescript-eslint/prefer-literal-enum-member': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/prefer-namespace-keyword}
   */
  '@typescript-eslint/prefer-namespace-keyword': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/prefer-nullish-coalescing}
   */
  '@typescript-eslint/prefer-nullish-coalescing': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/prefer-optional-chain}
   */
  '@typescript-eslint/prefer-optional-chain': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/prefer-readonly}
   */
  '@typescript-eslint/prefer-readonly': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/prefer-readonly-parameter-types}
   */
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',

  /**
   * @see {@link https://typescript-eslint.io/rules/prefer-reduce-type-parameter}
   */
  '@typescript-eslint/prefer-reduce-type-parameter': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/prefer-regexp-exec}
   */
  '@typescript-eslint/prefer-regexp-exec': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/prefer-return-this-type}
   */
  '@typescript-eslint/prefer-return-this-type': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/prefer-string-starts-ends-with}
   */
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/prefer-ts-expect-error}
   */
  '@typescript-eslint/prefer-ts-expect-error': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/promise-function-async}
   */
  '@typescript-eslint/promise-function-async': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/quotes}
   */
  quotes: 'off',
  '@typescript-eslint/quotes': coreRules.quotes,

  /**
   * @see {@link https://typescript-eslint.io/rules/require-array-sort-compare}
   */
  '@typescript-eslint/require-array-sort-compare': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/require-await}
   */
  'require-await': 'off',
  '@typescript-eslint/require-await': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/restrict-plus-operands}
   */
  '@typescript-eslint/restrict-plus-operands': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/restrict-template-expressions}
   */
  '@typescript-eslint/restrict-template-expressions': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/return-await}
   */
  'no-return-await': 'off',
  '@typescript-eslint/return-await': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/semi}
   */
  semi: 'off',
  '@typescript-eslint/semi': coreRules.semi,

  /**
   * @see {@link https://typescript-eslint.io/rules/sort-type-constituents}
   */
  '@typescript-eslint/sort-type-constituents': 'off',

  /**
   * @see {@link https://typescript-eslint.io/rules/sort-type-union-intersection-members}
   */
  '@typescript-eslint/sort-type-union-intersection-members': 'off',

  /**
   * @see {@link https://typescript-eslint.io/rules/space-before-blocks}
   */
  'space-before-blocks': 'off',
  '@typescript-eslint/space-before-blocks': coreRules['space-before-blocks'],

  /**
   * @see {@link https://typescript-eslint.io/rules/space-before-function-paren}
   */
  'space-before-function-paren': 'off',
  '@typescript-eslint/space-before-function-paren': coreRules['space-before-function-paren'],

  /**
   * @see {@link https://typescript-eslint.io/rules/space-infix-ops}
   */
  'space-infix-ops': 'off',
  '@typescript-eslint/space-infix-ops': coreRules['space-infix-ops'],

  /**
   * @see {@link https://typescript-eslint.io/rules/strict-boolean-expressions}
   */
  '@typescript-eslint/strict-boolean-expressions': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/switch-exhaustiveness-check}
   */
  '@typescript-eslint/switch-exhaustiveness-check': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/triple-slash-reference}
   */
  '@typescript-eslint/triple-slash-reference': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/type-annotation-spacing}
   */
  '@typescript-eslint/type-annotation-spacing': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/typedef}
   */
  '@typescript-eslint/typedef': 'off',

  /**
   * @see {@link https://typescript-eslint.io/rules/unbound-method}
   */
  '@typescript-eslint/unbound-method': 'error',

  /**
   * @see {@link https://typescript-eslint.io/rules/unified-signatures}
   */
  '@typescript-eslint/unified-signatures': 'error',

  // ts(2335) & ts(2377)
  'constructor-super': 'off',

  // ts(2378)
  'getter-return': 'off',

  // ts(2588)
  'no-const-assign': 'off',

  // ts(2300)
  'no-dupe-args': 'off',

  // ts(1117)
  'no-dupe-keys': 'off',

  // ts(2539)
  'no-func-assign': 'off',

  // ts(2539) & ts(2540)
  'no-import-assign': 'off',

  // ts(7009)
  'no-new-symbol': 'off',

  // ts(2349)
  'no-obj-calls': 'off',

  // ts(2408)
  'no-setter-return': 'off',

  // ts(2376)
  'no-this-before-super': 'off',

  // ts(2304)
  'no-undef': 'off',

  // ts(7027)
  'no-unreachable': 'off',

  // ts(2365) & ts(2360) & ts(2358)
  'no-unsafe-negation': 'off',

  // ts(2367)
  'valid-typeof': 'off',

  'import/named': 'off',
  'import/no-named-as-default-member': 'off',
  'import/no-unresolved': 'off',
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      mjs: 'never',
      cjs: 'never',
      ts: 'never',
      mts: 'never',
      cts: 'never',
    },
  ],
}
