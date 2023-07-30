import confusingBrowserGlobals from 'confusing-browser-globals'

export const coreRules = {
  /**
   * @see {@link https://eslint.org/docs/latest/rules/accessor-pairs}
   */
  'accessor-pairs': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/array-bracket-newline}
   */
  'array-bracket-newline': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/array-bracket-spacing}
   */
  'array-bracket-spacing': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/array-callback-return}
   */
  'array-callback-return': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/array-element-newline}
   */
  'array-element-newline': 'off',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/arrow-body-style}
   */
  'arrow-body-style': 'off',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/arrow-parens}
   */
  'arrow-parens': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/arrow-spacing}
   */
  'arrow-spacing': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/block-scoped-var}
   */
  'block-scoped-var': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/block-spacing}
   */
  'block-spacing': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/brace-style}
   */
  'brace-style': ['error', '1tbs', { allowSingleLine: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/camelcase}
   */
  camelcase: 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/capitalized-comments}
   */
  'capitalized-comments': 'off',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/class-methods-use-this}
   */
  'class-methods-use-this': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/comma-dangle}
   */
  'comma-dangle': ['error', 'always-multiline'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/comma-spacing}
   */
  'comma-spacing': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/comma-style}
   */
  'comma-style': [
    'error',
    'last',
    {
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
    },
  ],

  /**
   * off: should check in code review
   *
   * @see {@link https://eslint.org/docs/latest/rules/complexity}
   */
  complexity: 'off',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/computed-property-spacing}
   */
  'computed-property-spacing': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/consistent-return}
   */
  'consistent-return': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/consistent-this}
   */
  'consistent-this': 'off',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/constructor-super}
   */
  'constructor-super': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/curly}
   */
  curly: 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/default-case}
   */
  'default-case': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/default-case-last}
   */
  'default-case-last': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/default-param-last}
   */
  'default-param-last': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/dot-location}
   */
  'dot-location': ['error', 'property'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/dot-notation}
   */
  'dot-notation': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/eol-last}
   */
  'eol-last': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/eqeqeq}
   */
  eqeqeq: 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/for-direction}
   */
  'for-direction': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/func-call-spacing}
   */
  'func-call-spacing': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/func-name-matching}
   */
  'func-name-matching': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/func-names}
   */
  'func-names': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/func-style}
   */
  'func-style': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/function-call-argument-newline}
   */
  'function-call-argument-newline': ['error', 'consistent'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/function-paren-newline}
   */
  'function-paren-newline': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/generator-star-spacing}
   */
  'generator-star-spacing': ['error', 'after'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/getter-return}
   */
  'getter-return': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/grouped-accessor-pairs}
   */
  'grouped-accessor-pairs': ['error', 'getBeforeSet'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/guard-for-in}
   */
  'guard-for-in': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/id-denylist}
   */
  'id-denylist': 'off',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/id-length}
   */
  'id-length': 'off',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/id-match}
   */
  'id-match': 'off',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/implicit-arrow-linebreak}
   */
  'implicit-arrow-linebreak': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/indent}
   */
  indent: ['error', 2],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/init-declarations}
   */
  'init-declarations': 'off',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/jsx-quotes}
   */
  'jsx-quotes': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/key-spacing}
   */
  'key-spacing': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/keyword-spacing}
   */
  'keyword-spacing': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/line-comment-position}
   */
  'line-comment-position': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/linebreak-style}
   */
  'linebreak-style': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/lines-around-comment}
   */
  'lines-around-comment': [
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
   * @see {@link https://eslint.org/docs/latest/rules/lines-between-class-members}
   */
  'lines-between-class-members': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/logical-assignment-operators}
   */
  'logical-assignment-operators': ['error', 'never'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/max-classes-per-file}
   */
  'max-classes-per-file': 'error',

  /**
   * off: should check in code review
   *
   * @see {@link https://eslint.org/docs/latest/rules/max-depth}
   */
  'max-depth': 'off',

  /**
   * off: should check in code review
   *
   * @see {@link https://eslint.org/docs/latest/rules/max-len}
   */
  'max-len': 'off',

  /**
   * off: should check in code review
   *
   * @see {@link https://eslint.org/docs/latest/rules/max-lines}
   */
  'max-lines': 'off',

  /**
   * off: should check in code review
   *
   * @see {@link https://eslint.org/docs/latest/rules/max-lines-per-function}
   */
  'max-lines-per-function': 'off',

  /**
   * off: should check in code review
   *
   * @see {@link https://eslint.org/docs/latest/rules/max-nested-callbacks}
   */
  'max-nested-callbacks': 'off',

  /**
   * off: should check in code review
   *
   * @see {@link https://eslint.org/docs/latest/rules/max-params}
   */
  'max-params': 'off',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/max-statements}
   */
  'max-statements': 'off',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/max-statements-per-line}
   */
  'max-statements-per-line': 'off',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/multiline-comment-style}
   */
  'multiline-comment-style': 'off',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/multiline-ternary}
   */
  'multiline-ternary': 'off',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/new-cap}
   */
  'new-cap': ['error', { capIsNew: false }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/new-parens}
   */
  'new-parens': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/newline-per-chained-call}
   */
  'newline-per-chained-call': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-alert}
   */
  'no-alert': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-array-constructor}
   */
  'no-array-constructor': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-async-promise-executor}
   */
  'no-async-promise-executor': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-await-in-loop}
   */
  'no-await-in-loop': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-bitwise}
   */
  'no-bitwise': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-caller}
   */
  'no-caller': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-case-declarations}
   */
  'no-case-declarations': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-class-assign}
   */
  'no-class-assign': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-compare-neg-zero}
   */
  'no-compare-neg-zero': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-cond-assign}
   */
  'no-cond-assign': ['error', 'always'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-confusing-arrow}
   */
  'no-confusing-arrow': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-console}
   */
  'no-console': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-const-assign}
   */
  'no-const-assign': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-constant-binary-expression}
   */
  'no-constant-binary-expression': 'error',

  /**
   * should allow in development environment
   *
   * @see {@link https://eslint.org/docs/latest/rules/no-constant-condition}
   */
  'no-constant-condition': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-constructor-return}
   */
  'no-constructor-return': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-continue}
   */
  'no-continue': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-control-regex}
   */
  'no-control-regex': 'error',

  /**
   * should allow in development environment
   *
   * @see {@link https://eslint.org/docs/latest/rules/no-debugger}
   */
  'no-debugger': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-delete-var}
   */
  'no-delete-var': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-div-regex}
   */
  'no-div-regex': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-dupe-args}
   */
  'no-dupe-args': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-dupe-class-members}
   */
  'no-dupe-class-members': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-dupe-else-if}
   */
  'no-dupe-else-if': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-dupe-keys}
   */
  'no-dupe-keys': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-duplicate-case}
   */
  'no-duplicate-case': 'error',

  /**
   * off: delegate to ```import/no-duplicates```
   *
   * @see {@link https://eslint.org/docs/latest/rules/no-duplicate-imports}
   */
  'no-duplicate-imports': 'off',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-else-return}
   */
  'no-else-return': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-empty}
   */
  'no-empty': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-empty-character-class}
   */
  'no-empty-character-class': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-empty-function}
   */
  'no-empty-function': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-empty-pattern}
   */
  'no-empty-pattern': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-empty-static-block}
   */
  'no-empty-static-block': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-eq-null}
   */
  'no-eq-null': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-eval}
   */
  'no-eval': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-ex-assign}
   */
  'no-ex-assign': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-extend-native}
   */
  'no-extend-native': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-extra-bind}
   */
  'no-extra-bind': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-extra-boolean-cast}
   */
  'no-extra-boolean-cast': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-extra-label}
   */
  'no-extra-label': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-extra-parens}
   */
  'no-extra-parens': 'off',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-extra-semi}
   */
  'no-extra-semi': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-fallthrough}
   */
  'no-fallthrough': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-floating-decimal}
   */
  'no-floating-decimal': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-func-assign}
   */
  'no-func-assign': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-global-assign}
   */
  'no-global-assign': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-implicit-coercion}
   */
  'no-implicit-coercion': ['error', { boolean: false }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-implicit-globals}
   */
  'no-implicit-globals': 'off',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-implied-eval}
   */
  'no-implied-eval': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-import-assign}
   */
  'no-import-assign': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-inline-comments}
   */
  'no-inline-comments': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-inner-declarations}
   */
  'no-inner-declarations': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-invalid-regexp}
   */
  'no-invalid-regexp': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-invalid-this}
   */
  'no-invalid-this': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-irregular-whitespace}
   */
  'no-irregular-whitespace': ['error', { skipJSXText: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-iterator}
   */
  'no-iterator': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-label-var}
   */
  'no-label-var': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-labels}
   */
  'no-labels': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-lone-blocks}
   */
  'no-lone-blocks': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-lonely-if}
   */
  'no-lonely-if': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-loop-func}
   */
  'no-loop-func': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-loss-of-precision}
   */
  'no-loss-of-precision': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-magic-numbers}
   */
  'no-magic-numbers': 'off',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-misleading-character-class}
   */
  'no-misleading-character-class': 'error',

  /**
   * operators groups is quote from
   * {@link https://github.com/airbnb/javascript/blob/01f046dc0567e4495762e8e4fc4dde7b87dd5eb8/packages/eslint-config-airbnb-base/rules/style.js#LL296 eslint-config-airbnb-base}
   *
   * @see {@link https://eslint.org/docs/latest/rules/no-mixed-operators}
   */
  'no-mixed-operators': [
    'error',
    {
      groups: [['%', '**'], ['%', '+'], ['%', '-'], ['%', '*'], ['%', '/'], ['/', '*'], ['&', '|', '<<', '>>', '>>>'], ['==', '!=', '===', '!=='], ['&&', '||']],
      allowSamePrecedence: false,
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs}
   */
  'no-mixed-spaces-and-tabs': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-multi-assign}
   */
  'no-multi-assign': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-multi-spaces}
   */
  'no-multi-spaces': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-multi-str}
   */
  'no-multi-str': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-multiple-empty-lines}
   */
  'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-negated-condition}
   */
  'no-negated-condition': 'off',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-nested-ternary}
   */
  'no-nested-ternary': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-new}
   */
  'no-new': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-new-func}
   */
  'no-new-func': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-new-native-nonconstructor}
   */
  'no-new-native-nonconstructor': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-new-object}
   */
  'no-new-object': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-new-symbol}
   */
  'no-new-symbol': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-new-wrappers}
   */
  'no-new-wrappers': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape}
   */
  'no-nonoctal-decimal-escape': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-obj-calls}
   */
  'no-obj-calls': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-octal}
   */
  'no-octal': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-octal-escape}
   */
  'no-octal-escape': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-param-reassign}
   */
  'no-param-reassign': ['error', { props: false }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-plusplus}
   */
  'no-plusplus': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-promise-executor-return}
   */
  'no-promise-executor-return': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-proto}
   */
  'no-proto': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-prototype-builtins}
   */
  'no-prototype-builtins': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-redeclare}
   */
  'no-redeclare': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-regex-spaces}
   */
  'no-regex-spaces': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-restricted-exports}
   */
  'no-restricted-exports': ['error', { restrictedNamedExports: ['default', 'then'] }],

  /**
   * restricted list and messages is quote from
   * {@link https://github.com/airbnb/javascript/blob/01f046dc0567e4495762e8e4fc4dde7b87dd5eb8/packages/eslint-config-airbnb-base/rules/variables.js#LL19 eslint-config-airbnb-base}
   *
   * @see {@link https://eslint.org/docs/latest/rules/no-restricted-globals}
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

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-restricted-imports}
   */
  'no-restricted-imports': 'off',

  /**
   * restricted list and messages is quote from
   * {@link https://github.com/airbnb/javascript/blob/01f046dc0567e4495762e8e4fc4dde7b87dd5eb8/packages/eslint-config-airbnb-base/rules/best-practices.js#LL259 eslint-config-airbnb-base}
   *
   * @see {@link https://eslint.org/docs/latest/rules/no-restricted-properties}
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
   *
   * @see {@link https://eslint.org/docs/latest/rules/no-restricted-syntax}
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

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-return-assign}
   */
  'no-return-assign': ['error', 'always'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-return-await}
   */
  'no-return-await': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-script-url}
   */
  'no-script-url': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-self-assign}
   */
  'no-self-assign': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-self-compare}
   */
  'no-self-compare': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-sequences}
   */
  'no-sequences': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-setter-return}
   */
  'no-setter-return': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-shadow}
   */
  'no-shadow': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-shadow-restricted-names}
   */
  'no-shadow-restricted-names': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-sparse-arrays}
   */
  'no-sparse-arrays': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-tabs}
   */
  'no-tabs': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-template-curly-in-string}
   */
  'no-template-curly-in-string': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-ternary}
   */
  'no-ternary': 'off',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-this-before-super}
   */
  'no-this-before-super': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-throw-literal}
   */
  'no-throw-literal': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-trailing-spaces}
   */
  'no-trailing-spaces': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-undef}
   */
  'no-undef': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-undef-init}
   */
  'no-undef-init': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-undefined}
   */
  'no-undefined': 'off',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-underscore-dangle}
   */
  'no-underscore-dangle': [
    'error',
    {
      enforceInMethodNames: true,
      enforceInClassFields: true,
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-unexpected-multiline}
   */
  'no-unexpected-multiline': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-unmodified-loop-condition}
   */
  'no-unmodified-loop-condition': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-unneeded-ternary}
   */
  'no-unneeded-ternary': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-unreachable}
   */
  'no-unreachable': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-unreachable-loop}
   */
  'no-unreachable-loop': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-unsafe-finally}
   */
  'no-unsafe-finally': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-unsafe-negation}
   */
  'no-unsafe-negation': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining}
   */
  'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-unused-expressions}
   */
  'no-unused-expressions': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-unused-labels}
   */
  'no-unused-labels': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-unused-private-class-members}
   */
  'no-unused-private-class-members': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-unused-vars}
   */
  'no-unused-vars': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-use-before-define}
   */
  'no-use-before-define': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-useless-backreference}
   */
  'no-useless-backreference': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-useless-call}
   */
  'no-useless-call': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-useless-catch}
   */
  'no-useless-catch': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-useless-computed-key}
   */
  'no-useless-computed-key': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-useless-concat}
   */
  'no-useless-concat': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-useless-constructor}
   */
  'no-useless-constructor': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-useless-escape}
   */
  'no-useless-escape': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-useless-rename}
   */
  'no-useless-rename': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-useless-return}
   */
  'no-useless-return': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-var}
   */
  'no-var': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-void}
   */
  'no-void': ['error', { allowAsStatement: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-warning-comments}
   */
  'no-warning-comments': 'off',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-whitespace-before-property}
   */
  'no-whitespace-before-property': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-with}
   */
  'no-with': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/nonblock-statement-body-position}
   */
  'nonblock-statement-body-position': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/object-curly-newline}
   */
  'object-curly-newline': ['error', { multiline: true, consistent: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/object-curly-spacing}
   */
  'object-curly-spacing': ['error', 'always'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/object-property-newline}
   */
  'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/object-shorthand}
   */
  'object-shorthand': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/one-var}
   */
  'one-var': ['error', 'never'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/one-var-declaration-per-line}
   */
  'one-var-declaration-per-line': ['error', 'always'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/operator-assignment}
   */
  'operator-assignment': ['error', 'always'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/operator-linebreak}
   */
  'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/padded-blocks}
   */
  'padded-blocks': ['error', 'never'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/padding-line-between-statements}
   */
  'padding-line-between-statements': 'off',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/prefer-arrow-callback}
   */
  'prefer-arrow-callback': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/prefer-const}
   */
  'prefer-const': ['error', { ignoreReadBeforeAssign: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/prefer-destructuring}
   */
  'prefer-destructuring': [
    'error',
    {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: false,
      },
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/prefer-exponentiation-operator}
   */
  'prefer-exponentiation-operator': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/prefer-named-capture-group}
   */
  'prefer-named-capture-group': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/prefer-numeric-literals}
   */
  'prefer-numeric-literals': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/prefer-object-has-own}
   */
  'prefer-object-has-own': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/prefer-object-spread}
   */
  'prefer-object-spread': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/prefer-promise-reject-errors}
   */
  'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/prefer-regex-literals}
   */
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/prefer-rest-params}
   */
  'prefer-rest-params': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/prefer-spread}
   */
  'prefer-spread': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/prefer-template}
   */
  'prefer-template': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/quote-props}
   */
  'quote-props': ['error', 'as-needed'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/quotes}
   */
  quotes: ['error', 'single', { avoidEscape: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/radix}
   */
  radix: 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/require-atomic-updates}
   */
  'require-atomic-updates': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/require-await}
   */
  'require-await': 'off',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/require-unicode-regexp}
   */
  'require-unicode-regexp': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/require-yield}
   */
  'require-yield': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/rest-spread-spacing}
   */
  'rest-spread-spacing': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/semi}
   */
  semi: ['error', 'never'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/semi-spacing}
   */
  'semi-spacing': ['error', { before: false, after: false }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/semi-style}
   */
  'semi-style': 'error',

  /**
   * delegate declaration statements to ```import/order```
   *
   * @see {@link https://eslint.org/docs/latest/rules/sort-imports}
   */
  'sort-imports': ['error', { ignoreDeclarationSort: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/sort-keys}
   */
  'sort-keys': 'off',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/sort-vars}
   */
  'sort-vars': 'off',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/space-before-blocks}
   */
  'space-before-blocks': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/space-before-function-paren}
   */
  'space-before-function-paren': [
    'error',
    {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/space-in-parens}
   */
  'space-in-parens': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/space-infix-ops}
   */
  'space-infix-ops': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/space-unary-ops}
   */
  'space-unary-ops': 'error',

  /**
   * options is quote from
   * {@link https://github.com/airbnb/javascript/blob/01f046dc0567e4495762e8e4fc4dde7b87dd5eb8/packages/eslint-config-airbnb-base/rules/style.js#L507 }
   *
   * @see {@link https://eslint.org/docs/latest/rules/spaced-comment}
   */
  'spaced-comment': [
    'error',
    'always',
    {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!', '/'],
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!', ':', '::'],
        balanced: true,
      },
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/strict}
   */
  strict: 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/switch-colon-spacing}
   */
  'switch-colon-spacing': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/symbol-description}
   */
  'symbol-description': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/template-curly-spacing}
   */
  'template-curly-spacing': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/template-tag-spacing}
   */
  'template-tag-spacing': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/unicode-bom}
   */
  'unicode-bom': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/use-isnan}
   */
  'use-isnan': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/valid-typeof}
   */
  'valid-typeof': ['error', { requireStringLiterals: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/vars-on-top}
   */
  'vars-on-top': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/wrap-iife}
   */
  'wrap-iife': ['error', 'inside'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/wrap-regex}
   */
  'wrap-regex': 'off',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/yield-star-spacing}
   */
  'yield-star-spacing': 'error',

  /**
   * @see {@link https://eslint.org/docs/latest/rules/yoda}
   */
  yoda: 'error',
}
