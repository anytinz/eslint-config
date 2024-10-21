
import parserTypescript from '@typescript-eslint/parser'
import parserVue from 'vue-eslint-parser'
import { GLOB_VUE } from '../globs'
import { extendsRuleOptions } from '../helpers/extends-rule-options'
import { pluginVue } from '../plugins.js'
import { resolveJavascriptRules } from './javascript'
import { resolveStylisticRules } from './stylistic'
import type { Linter } from 'eslint'
import type { RemovePrefix } from '../helpers/remove-prefix'
import type { OverridesOptions } from '../types/options'
import type { JavascriptRules } from '../types/rules/javascript'
import type { StylisticRules } from '../types/rules/stylistic'
import type { VueRules } from '../types/rules/vue'

type VueRulesExtendsCore = Pick<VueRules, Extract<Exclude<keyof VueRules, 'vue/no-unused-vars'>, `vue/${keyof JavascriptRules}`>>
type VueRulesExtendsStylistic = Pick<VueRules, Extract<keyof VueRules, `vue/${RemovePrefix<keyof StylisticRules, 'style/'>}`> | (
  | 'vue/html-comment-indent'
  | 'vue/html-indent'
  | 'vue/script-indent'
)>
export const resolveVueRules = (): Required<VueRules> => {
  const javascriptRules = resolveJavascriptRules()
  const stylisticRules = resolveStylisticRules()

  const rulesExtendsCore: Required<VueRulesExtendsCore> = {
    'vue/camelcase': javascriptRules.camelcase,
    'vue/dot-notation': javascriptRules['dot-notation'],
    'vue/eqeqeq': javascriptRules.eqeqeq,
    'vue/no-console': javascriptRules['no-console'],
    'vue/no-constant-condition': javascriptRules['no-constant-condition'],
    'vue/no-dupe-keys': javascriptRules['no-dupe-keys'],
    'vue/no-empty-pattern': javascriptRules['no-empty-pattern'],
    'vue/no-loss-of-precision': javascriptRules['no-loss-of-precision'],
    'vue/no-irregular-whitespace': javascriptRules['no-irregular-whitespace'],
    'vue/no-restricted-syntax': javascriptRules['no-restricted-syntax'],
    'vue/no-sparse-arrays': javascriptRules['no-sparse-arrays'],
    'vue/no-useless-concat': javascriptRules['no-useless-concat'],
    'vue/object-shorthand': javascriptRules['object-shorthand'],
    'vue/prefer-template': javascriptRules['prefer-template'],
    'vue/sort-keys': javascriptRules['sort-keys'],
  }
  const rulesExtendsStylistic: Required<VueRulesExtendsStylistic> = {
    'vue/array-bracket-newline': stylisticRules['style/array-bracket-newline'],
    'vue/array-bracket-spacing': stylisticRules['style/array-bracket-spacing'],
    'vue/array-element-newline': stylisticRules['style/array-element-newline'],
    'vue/arrow-spacing': stylisticRules['style/arrow-spacing'],
    'vue/block-spacing': stylisticRules['style/block-spacing'],
    'vue/brace-style': stylisticRules['style/brace-style'],
    'vue/comma-dangle': stylisticRules['style/comma-dangle'],
    'vue/comma-spacing': stylisticRules['style/comma-spacing'],
    'vue/comma-style': stylisticRules['style/comma-style'],
    'vue/dot-location': stylisticRules['style/dot-location'],
    'vue/func-call-spacing': stylisticRules['style/func-call-spacing'],
    'vue/html-comment-indent': extendsRuleOptions(stylisticRules['style/indent'], (...[indent]) => [indent]),
    'vue/html-indent': extendsRuleOptions(stylisticRules['style/indent'], (...[indent]) => [indent]),
    'vue/key-spacing': stylisticRules['style/key-spacing'],
    'vue/keyword-spacing': stylisticRules['style/keyword-spacing'],
    'vue/max-len': stylisticRules['style/max-len'],
    'vue/multiline-ternary': stylisticRules['style/multiline-ternary'],
    'vue/no-extra-parens': stylisticRules['style/no-extra-parens'],
    'vue/no-multi-spaces': extendsRuleOptions(stylisticRules['style/no-multi-spaces'], (...[options]) => [{ ignoreProperties: options?.exceptions?.Property ?? true }]),
    'vue/object-curly-newline': stylisticRules['style/object-curly-newline'],
    'vue/object-curly-spacing': stylisticRules['style/object-curly-spacing'],
    'vue/object-property-newline': stylisticRules['style/object-property-newline'],
    'vue/operator-linebreak': stylisticRules['style/operator-linebreak'],
    'vue/quote-props': stylisticRules['style/quote-props'],
    'vue/script-indent': extendsRuleOptions(stylisticRules['style/indent'], (...[indent]) => [indent]),
    'vue/space-in-parens': stylisticRules['style/space-in-parens'],
    'vue/space-infix-ops': stylisticRules['style/space-infix-ops'],
    'vue/space-unary-ops': stylisticRules['style/space-unary-ops'],
    'vue/template-curly-spacing': stylisticRules['style/template-curly-spacing'],
  }
  const rules: Required<Omit<VueRules, keyof VueRulesExtendsCore | keyof VueRulesExtendsStylistic>> = {
    'vue/attribute-hyphenation': 'error',
    'vue/attributes-order': 'error',
    'vue/block-lang': 'off',
    'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
    'vue/block-tag-newline': ['error', {
      singleline: 'always',
      multiline: 'always',
      blocks: {
        template: {
          maxEmptyLines: 0,
        },
        script: {
          maxEmptyLines: 1,
        },
      },
    }],
    'vue/comment-directive': 'off',
    'vue/component-api-style': ['error', ['script-setup']],
    'vue/component-definition-name-casing': 'error',
    'vue/component-name-in-template-casing': ['error', 'PascalCase', { registeredComponentsOnly: false }],
    'vue/component-options-name-casing': 'error',
    'vue/component-tags-order': ['error', { order: ['script', 'template', 'style'] }],
    'vue/custom-event-name-casing': 'error',
    'vue/define-emits-declaration': 'error',
    'vue/define-macros-order': [
      'error',
      { order: ['defineOptions', 'defineSlots', 'defineProps', 'defineEmits'] },
    ],
    'vue/define-props-declaration': 'error',
    'vue/enforce-style-attribute': 0,
    'vue/first-attribute-linebreak': ['error', { singleline: 'beside', multiline: 'below' }],
    'vue/html-button-has-type': 'error',
    'vue/html-closing-bracket-newline': 'error',
    'vue/html-closing-bracket-spacing': 'error',
    'vue/html-comment-content-newline': 'off',
    'vue/html-comment-content-spacing': ['error', 'always', { exceptions: ['-'] }],
    'vue/html-end-tags': 'error',
    'vue/html-quotes': 'error',
    'vue/html-self-closing': ['error', { html: { void: 'always' } }],
    'vue/jsx-uses-vars': 'error',
    'vue/match-component-file-name': 'off',
    'vue/match-component-import-name': 'error',
    'vue/max-attributes-per-line': ['error', { singleline: Infinity, multiline: 1 }],
    'vue/max-lines-per-block': 'off',
    'vue/max-props': 'off',
    'vue/max-template-depth': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/multiline-html-element-content-newline': 'error',
    'vue/mustache-interpolation-spacing': 'error',
    'vue/new-line-between-multi-line-property': 'off',
    'vue/next-tick-style': 'error',
    'vue/no-arrow-functions-in-watch': 'error',
    'vue/no-async-in-computed-properties': 'error',
    'vue/no-bare-strings-in-template': 'error',
    'vue/no-boolean-default': 'error',
    'vue/no-child-content': 'error',
    'vue/no-computed-properties-in-data': 'error',
    'vue/no-custom-modifiers-on-v-model': 'off',
    'vue/no-deprecated-data-object-declaration': 'error',
    'vue/no-deprecated-delete-set': 'error',
    'vue/no-deprecated-destroyed-lifecycle': 'error',
    'vue/no-deprecated-dollar-listeners-api': 'error',
    'vue/no-deprecated-dollar-scopedslots-api': 'error',
    'vue/no-deprecated-events-api': 'error',
    'vue/no-deprecated-filter': 'error',
    'vue/no-deprecated-functional-template': 'error',
    'vue/no-deprecated-html-element-is': 'error',
    'vue/no-deprecated-inline-template': 'error',
    'vue/no-deprecated-model-definition': 'error',
    'vue/no-deprecated-props-default-this': 'error',
    'vue/no-deprecated-router-link-tag-prop': 'error',
    'vue/no-deprecated-scope-attribute': 'error',
    'vue/no-deprecated-slot-attribute': 'error',
    'vue/no-deprecated-slot-scope-attribute': 'error',
    'vue/no-deprecated-v-bind-sync': 'error',
    'vue/no-deprecated-v-is': 'error',
    'vue/no-deprecated-v-on-native-modifier': 'error',
    'vue/no-deprecated-v-on-number-modifiers': 'error',
    'vue/no-deprecated-vue-config-keycodes': 'error',
    'vue/no-dupe-v-else-if': javascriptRules['no-dupe-else-if'],
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-duplicate-attributes': ['error', { allowCoexistClass: false, allowCoexistStyle: false }],
    'vue/no-empty-component-block': 'error',
    'vue/no-export-in-script-setup': 'error',
    'vue/no-expose-after-await': 'error',
    'vue/no-invalid-model-keys': 'off',
    'vue/no-lifecycle-after-await': 'error',
    'vue/no-lone-template': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-multiple-slot-args': 'error',
    'vue/no-multiple-template-root': 'error',
    'vue/no-mutating-props': 'error',
    'vue/no-parsing-error': 'error',
    'vue/no-potential-component-option-typo': 'error',
    'vue/no-ref-as-operand': 'error',
    'vue/no-ref-object-destructure': 'off',
    'vue/no-ref-object-reactivity-loss': 'error',
    'vue/no-required-prop-with-default': 'error',
    'vue/no-reserved-component-names': 'off',
    'vue/no-reserved-keys': 'error',
    'vue/no-reserved-props': 'error',
    'vue/no-restricted-block': 'off',
    'vue/no-restricted-call-after-await': 'off',
    'vue/no-restricted-class': 'off',
    'vue/no-restricted-component-names': 'off',
    'vue/no-restricted-component-options': 'off',
    'vue/no-restricted-custom-event': 'off',
    'vue/no-restricted-html-elements': 'off',
    'vue/no-restricted-props': 'off',
    'vue/no-restricted-static-attribute': 'off',
    'vue/no-restricted-v-bind': 'off',
    'vue/no-restricted-v-on': 'off',
    'vue/no-root-v-if': 'error',
    'vue/no-setup-props-destructure': 'off',
    'vue/no-setup-props-reactivity-loss': 'error',
    'vue/no-shared-component-data': 'error',
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/no-static-inline-styles': ['error', { allowBinding: true }],
    'vue/no-template-key': 'error',
    'vue/no-template-shadow': 'error',
    'vue/no-template-target-blank': 'error',
    'vue/no-textarea-mustache': 'error',
    'vue/no-this-in-before-route-enter': 'error',
    'vue/no-undef-components': 'error',
    'vue/no-undef-properties': 'error',
    'vue/no-unsupported-features': 'off',
    'vue/no-unused-components': 'error',
    'vue/no-unused-emit-declarations': 'error',
    'vue/no-unused-properties': 'error',
    'vue/no-unused-refs': 'error',
    'vue/no-unused-vars': 'error',
    'vue/no-use-computed-property-like-method': 'error',
    'vue/no-use-v-else-with-v-for': 'error',
    'vue/no-use-v-if-with-v-for': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-template-attributes': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/no-v-for-template-key-on-child': 'error',
    'vue/no-v-for-template-key': 'off',
    'vue/no-v-html': 'error',
    'vue/no-v-model-argument': 'off',
    'vue/no-v-text-v-html-on-component': 'error',
    'vue/no-v-text': 'error',
    'vue/no-watch-after-await': 'error',
    'vue/one-component-per-file': 'error',
    'vue/order-in-components': 'error',
    'vue/padding-line-between-blocks': ['error', 'never'],
    'vue/padding-line-between-tags': ['error', [{ blankLine: 'never', prev: '*', next: '*' }]],
    'vue/padding-lines-in-component-definition': ['error', { betweenOptions: 'never' }],
    'vue/prefer-define-options': 'error',
    'vue/prefer-import-from-vue': 'error',
    'vue/prefer-prop-type-boolean-first': 'error',
    'vue/prefer-separate-static-class': 'off',
    'vue/prefer-true-attribute-shorthand': 'error',
    'vue/prop-name-casing': 'error',
    'vue/require-component-is': 'error',
    'vue/require-default-export': 'error',
    'vue/require-default-prop': 'off',
    'vue/require-direct-export': 'error',
    'vue/require-emit-validator': 'error',
    'vue/require-explicit-emits': 'error',
    'vue/require-explicit-slots': 'error',
    'vue/require-expose': 'off',
    'vue/require-macro-variable-name': 'error',
    'vue/require-name-property': 'error',
    'vue/require-prop-comment': 'off',
    'vue/require-prop-type-constructor': 'error',
    'vue/require-prop-types': 'error',
    'vue/require-render-return': 'error',
    'vue/require-slots-as-functions': 'error',
    'vue/require-toggle-inside-transition': 'error',
    'vue/require-typed-object-prop': 'error',
    'vue/require-typed-ref': 'error',
    'vue/require-v-for-key': 'error',
    'vue/require-valid-default-prop': 'error',
    'vue/return-in-computed-property': 'error',
    'vue/return-in-emits-validator': 'error',
    'vue/script-setup-uses-vars': 'off',
    'vue/singleline-html-element-content-newline': 'error',
    'vue/static-class-names-order': 'off',
    'vue/this-in-template': 'error',
    'vue/use-v-on-exact': 'error',
    'vue/v-bind-style': 'error',
    'vue/v-for-delimiter-style': 'error',
    'vue/v-if-else-key': 'off',
    'vue/v-on-event-hyphenation': 'error',
    'vue/v-on-function-call': 'off',
    'vue/v-on-handler-style': ['error', ['method', 'inline-function']],
    'vue/v-on-style': 'error',
    'vue/v-slot-style': 'error',
    'vue/valid-attribute-name': 'error',
    'vue/valid-define-emits': 'error',
    'vue/valid-define-options': 'error',
    'vue/valid-define-props': 'error',
    'vue/valid-model-definition': 'off',
    'vue/valid-next-tick': 'error',
    'vue/valid-template-root': 'error',
    'vue/valid-v-bind-sync': 'error',
    'vue/valid-v-bind': 'error',
    'vue/valid-v-cloak': 'error',
    'vue/valid-v-else-if': 'error',
    'vue/valid-v-else': 'error',
    'vue/valid-v-for': 'error',
    'vue/valid-v-html': 'error',
    'vue/valid-v-if': 'error',
    'vue/valid-v-is': 'error',
    'vue/valid-v-memo': 'error',
    'vue/valid-v-model': 'error',
    'vue/valid-v-on': 'error',
    'vue/valid-v-once': 'error',
    'vue/valid-v-pre': 'error',
    'vue/valid-v-show': 'error',
    'vue/valid-v-slot': 'error',
    'vue/valid-v-text': 'error',
  }

  return {
    ...rules,
    ...rulesExtendsCore,
    ...rulesExtendsStylistic,
  }
}
export type VueOptions = OverridesOptions<Partial<VueRules>> & {
  typescript?: boolean
}
export const vue = (options: VueOptions = {}): Linter.Config[] => {
  const {
    overrides,
    typescript: typescriptOptions = true,
  } = options
  return [{
    name: 'anytinz/vue/rules',
    files: [GLOB_VUE],
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ...typescriptOptions
          ? {
            parser: parserTypescript,
            extraFileExtensions: ['.vue'],
            projectService: {
              allowDefaultProject: ['./*.js'],
            },
            tsconfigRootDir: import.meta.dirname,
          }
          : undefined,
      },
    },
    plugins: {
      vue: pluginVue,
    },
    rules: {
      ...resolveVueRules(),
      ...overrides,
    },
  }]
}
