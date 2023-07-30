import { coreRules } from '@anytinz/eslint-config'

export const vueRules = {
  /**
   * @todo with custom rule
   * @see {@link https://eslint.vuejs.org/rules/array-bracket-newline.html}
   */
  'vue/array-bracket-newline': coreRules['array-bracket-newline'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/array-bracket-spacing.html}
   */
  'vue/array-bracket-spacing': coreRules['array-bracket-spacing'],

  /**
   * @todo with custom rule
   * @see {@link https://eslint.vuejs.org/rules/array-element-newline.html}
   */
  'vue/array-element-newline': coreRules['array-element-newline'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/arrow-spacing.html}
   */
  'vue/arrow-spacing': coreRules['arrow-spacing'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/attribute-hyphenation.html}
   */
  'vue/attribute-hyphenation': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/attributes-order.html}
   */
  'vue/attributes-order': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/block-lang.html}
   */
  'vue/block-lang': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/block-spacing.html}
   */
  'vue/block-spacing': coreRules['block-spacing'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/block-tag-newline.html}
   */
  'vue/block-tag-newline': [
    'error',
    {
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
    },
  ],

  /**
   * @see {@link https://eslint.vuejs.org/rules/brace-style.html}
   */
  'vue/brace-style': coreRules['brace-style'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/camelcase.html}
   */
  'vue/camelcase': coreRules.camelcase,

  /**
   * @see {@link https://eslint.vuejs.org/rules/comma-dangle.html}
   */
  'vue/comma-dangle': coreRules['comma-dangle'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/comma-spacing.html}
   */
  'vue/comma-spacing': coreRules['comma-spacing'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/comma-style.html}
   */
  'vue/comma-style': coreRules['comma-style'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/comment-directive.html}
   */
  'vue/comment-directive': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/component-api-style.html}
   */
  'vue/component-api-style': ['error', ['script-setup']],

  /**
   * @see {@link https://eslint.vuejs.org/rules/component-definition-name-casing.html}
   */
  'vue/component-definition-name-casing': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/component-name-in-template-casing.html}
   */
  'vue/component-name-in-template-casing': ['error', 'PascalCase', { registeredComponentsOnly: false }],

  /**
   * @see {@link https://eslint.vuejs.org/rules/component-options-name-casing.html}
   */
  'vue/component-options-name-casing': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/component-tags-order.html}
   */
  'vue/component-tags-order': ['error', { order: ['script', 'template', 'style'] }],

  /**
   * @see {@link https://eslint.vuejs.org/rules/custom-event-name-casing.html}
   */
  'vue/custom-event-name-casing': 'error',

  /**
   * @todo only enable on typescript env
   * @see {@link https://eslint.vuejs.org/rules/define-emits-declaration.html}
   */
  'vue/define-emits-declaration': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/define-macros-order.html}
   */
  'vue/define-macros-order': [
    'error',
    { order: ['defineOptions', 'defineSlots', 'defineProps', 'defineEmits'] },
  ],

  /**
   * @todo only enable on typescript env
   * @see {@link https://eslint.vuejs.org/rules/define-props-declaration.html}
   */
  'vue/define-props-declaration': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/dot-location.html}
   */
  'vue/dot-location': coreRules['dot-location'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/dot-notation.html}
   */
  'vue/dot-notation': coreRules['dot-notation'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/dot-notation.html}
   */
  'vue/eqeqeq': coreRules.eqeqeq,

  /**
   * @see {@link https://eslint.vuejs.org/rules/first-attribute-linebreak.html}
   */
  'vue/first-attribute-linebreak': ['error', { singleline: 'beside', multiline: 'below' }],

  /**
   * @see {@link https://eslint.vuejs.org/rules/func-call-spacing.html}
   */
  'vue/func-call-spacing': coreRules['func-call-spacing'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/html-button-has-type.html}
   */
  'vue/html-button-has-type': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/html-closing-bracket-newline.html}
   */
  'vue/html-closing-bracket-newline': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html}
   */
  'vue/html-closing-bracket-spacing': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/html-comment-content-newline.html}
   */
  'vue/html-comment-content-newline': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/html-comment-content-spacing.html}
   */
  'vue/html-comment-content-spacing': ['error', 'always', { exceptions: ['-'] }],

  /**
   * @see {@link https://eslint.vuejs.org/rules/html-comment-indent.html}
   */
  'vue/html-comment-indent': coreRules.indent,

  /**
   * @see {@link https://eslint.vuejs.org/rules/html-end-tags.html}
   */
  'vue/html-end-tags': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/html-indent.html}
   */
  'vue/html-indent': coreRules.indent,

  /**
   * @see {@link https://eslint.vuejs.org/rules/html-quotes.html}
   */
  'vue/html-quotes': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/html-self-closing.html}
   */
  'vue/html-self-closing': ['error', { html: { void: 'always' } }],

  /**
   * @see {@link https://eslint.vuejs.org/rules/jsx-uses-vars.html}
   */
  'vue/jsx-uses-vars': coreRules['no-unused-vars'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/key-spacing.html}
   */
  'vue/key-spacing': coreRules['key-spacing'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/keyword-spacing.html}
   */
  'vue/keyword-spacing': coreRules['keyword-spacing'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/match-component-file-name.html}
   */
  'vue/match-component-file-name': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/match-component-import-name.html}
   */
  'vue/match-component-import-name': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/max-attributes-per-line.html}
   */
  'vue/max-attributes-per-line': ['error', { singleline: Infinity, multiline: 1 }],

  /**
   * @see {@link https://eslint.vuejs.org/rules/max-len.html}
   */
  'vue/max-len': coreRules['max-len'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/max-lines-per-block.html}
   */
  'vue/max-lines-per-block': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/multi-word-component-names.html}
   */
  'vue/multi-word-component-names': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html}
   */
  'vue/multiline-html-element-content-newline': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/multiline-ternary.html}
   */
  'vue/multiline-ternary': coreRules['multiline-ternary'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html}
   */
  'vue/mustache-interpolation-spacing': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/new-line-between-multi-line-property.html}
   */
  'vue/new-line-between-multi-line-property': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/next-tick-style.html}
   */
  'vue/next-tick-style': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-arrow-functions-in-watch.html}
   */
  'vue/no-arrow-functions-in-watch': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-async-in-computed-properties.html}
   */
  'vue/no-async-in-computed-properties': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-bare-strings-in-template.html}
   */
  'vue/no-bare-strings-in-template': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-boolean-default.html}
   */
  'vue/no-boolean-default': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-child-content.html}
   */
  'vue/no-child-content': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-computed-properties-in-data.html}
   */
  'vue/no-computed-properties-in-data': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-console.html}
   */
  'vue/no-console': coreRules['no-console'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-constant-condition.html}
   */
  'vue/no-constant-condition': coreRules['no-constant-condition'],

  /**
   * off: only available at vue 2
   * @see {@link https://eslint.vuejs.org/rules/no-custom-modifiers-on-v-model.html}
   */
  'vue/no-custom-modifiers-on-v-model': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html}
   */
  'vue/no-deprecated-data-object-declaration': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html}
   */
  'vue/no-deprecated-destroyed-lifecycle': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html}
   */
  'vue/no-deprecated-dollar-listeners-api': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html}
   */
  'vue/no-deprecated-dollar-scopedslots-api': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-events-api.html}
   */
  'vue/no-deprecated-events-api': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-filter.html}
   */
  'vue/no-deprecated-filter': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-functional-template.html}
   */
  'vue/no-deprecated-functional-template': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html}
   */
  'vue/no-deprecated-html-element-is': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-inline-template.html}
   */
  'vue/no-deprecated-inline-template': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html}
   */
  'vue/no-deprecated-props-default-this': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-router-link-tag-prop.html}
   */
  'vue/no-deprecated-router-link-tag-prop': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html}
   */
  'vue/no-deprecated-slot-attribute': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-slot-scope-attribute.html}
   */
  'vue/no-deprecated-slot-scope-attribute': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html}
   */
  'vue/no-deprecated-v-bind-sync': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-v-is.html}
   */
  'vue/no-deprecated-v-is': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html}
   */
  'vue/no-deprecated-v-on-native-modifier': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html}
   */
  'vue/no-deprecated-v-on-number-modifiers': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-vue-config-keycodes.html}
   */
  'vue/no-deprecated-vue-config-keycodes': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-dupe-keys.html}
   */
  'vue/no-dupe-keys': coreRules['no-dupe-keys'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-dupe-v-else-if.html}
   */
  'vue/no-dupe-v-else-if': coreRules['no-dupe-else-if'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-duplicate-attr-inheritance.html}
   */
  'vue/no-duplicate-attr-inheritance': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-duplicate-attributes.html}
   */
  'vue/no-duplicate-attributes': ['error', { allowCoexistClass: false, allowCoexistStyle: false }],

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-empty-component-block.html}
   */
  'vue/no-empty-component-block': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-empty-pattern.html}
   */
  'vue/no-empty-pattern': coreRules['no-empty-pattern'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-export-in-script-setup.html}
   */
  'vue/no-export-in-script-setup': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-expose-after-await.html}
   */
  'vue/no-expose-after-await': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-extra-parens.html}
   */
  'vue/no-extra-parens': coreRules['no-extra-parens'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-irregular-whitespace.html}
   */
  'vue/no-irregular-whitespace': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-lifecycle-after-await.html}
   */
  'vue/no-lifecycle-after-await': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-lone-template.html}
   */
  'vue/no-lone-template': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-loss-of-precision.html}
   */
  'vue/no-loss-of-precision': coreRules['no-loss-of-precision'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-multi-spaces.html}
   */
  'vue/no-multi-spaces': coreRules['no-multi-spaces'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-multiple-objects-in-class.html}
   */
  'vue/no-multiple-objects-in-class': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-multiple-slot-args.html}
   */
  'vue/no-multiple-slot-args': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-multiple-template-root.html}
   */
  'vue/no-multiple-template-root': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-mutating-props.html}
   */
  'vue/no-mutating-props': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-parsing-error.html}
   */
  'vue/no-parsing-error': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-potential-component-option-typo.html}
   */
  'vue/no-potential-component-option-typo': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-ref-as-operand.html}
   */
  'vue/no-ref-as-operand': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-ref-object-destructure.html}
   */
  'vue/no-ref-object-destructure': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-required-prop-with-default.html}
   */
  'vue/no-required-prop-with-default': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-reserved-component-names.html}
   */
  'vue/no-reserved-component-names': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-reserved-keys.html}
   */
  'vue/no-reserved-keys': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-reserved-props.html}
   */
  'vue/no-reserved-props': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-restricted-block.html}
   */
  'vue/no-restricted-block': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-restricted-call-after-await.html}
   */
  'vue/no-restricted-call-after-await': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-restricted-class.html}
   */
  'vue/no-restricted-class': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-restricted-component-names.html}
   */
  'vue/no-restricted-component-names': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-restricted-component-options.html}
   */
  'vue/no-restricted-component-options': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-restricted-custom-event.html}
   */
  'vue/no-restricted-custom-event': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-restricted-html-elements.html}
   */
  'vue/no-restricted-html-elements': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-restricted-props.html}
   */
  'vue/no-restricted-props': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-restricted-static-attribute.html}
   */
  'vue/no-restricted-static-attribute': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-restricted-syntax.html}
   */
  'vue/no-restricted-syntax': coreRules['no-restricted-syntax'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-restricted-v-bind.html}
   */
  'vue/no-restricted-v-bind': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-root-v-if.html}
   */
  'vue/no-root-v-if': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-setup-props-destructure.html}
   */
  'vue/no-setup-props-destructure': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-shared-component-data.html}
   */
  'vue/no-shared-component-data': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html}
   */
  'vue/no-side-effects-in-computed-properties': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-spaces-around-equal-signs-in-attribute.html}
   */
  'vue/no-spaces-around-equal-signs-in-attribute': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-sparse-arrays.html}
   */
  'vue/no-sparse-arrays': coreRules['no-sparse-arrays'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-static-inline-styles.html}
   */
  'vue/no-static-inline-styles': ['error', { allowBinding: true }],

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-template-key.html}
   */
  'vue/no-template-key': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-template-shadow.html}
   */
  'vue/no-template-shadow': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-template-target-blank.html}
   */
  'vue/no-template-target-blank': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-textarea-mustache.html}
   */
  'vue/no-textarea-mustache': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-this-in-before-route-enter.html}
   */
  'vue/no-this-in-before-route-enter': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-undef-components.html}
   */
  'vue/no-undef-components': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-undef-properties.html}
   */
  'vue/no-undef-properties': 'error',

  /**
   * @todo
   * @see {@link https://eslint.vuejs.org/rules/no-unsupported-features.html}
   */
  'vue/no-unsupported-features': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-unused-components.html}
   */
  'vue/no-unused-components': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-unused-properties.html}
   */
  'vue/no-unused-properties': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-unused-refs.html}
   */
  'vue/no-unused-refs': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-unused-vars.html}
   */
  'vue/no-unused-vars': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-use-computed-property-like-method.html}
   */
  'vue/no-use-computed-property-like-method': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html}
   */
  'vue/no-use-v-if-with-v-for': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-useless-concat.html}
   */
  'vue/no-useless-concat': coreRules['no-useless-concat'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-useless-mustaches.html}
   */
  'vue/no-useless-mustaches': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-useless-template-attributes.html}
   */
  'vue/no-useless-template-attributes': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-useless-v-bind.html}
   */
  'vue/no-useless-v-bind': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html}
   */
  'vue/no-v-for-template-key-on-child': 'error',

  /**
   * off: only available at vue 2
   * @see {@link https://eslint.vuejs.org/rules/no-v-for-template-key.html}
   */
  'vue/no-v-for-template-key': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-v-html.html}
   */
  'vue/no-v-html': 'error',

  /**
   * off: only available at vue 2
   * @see {@link https://eslint.vuejs.org/rules/no-v-model-argument.html}
   */
  'vue/no-v-model-argument': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-v-text-v-html-on-component.html}
   */
  'vue/no-v-text-v-html-on-component': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-v-text.html}
   */
  'vue/no-v-text': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/no-watch-after-await.html}
   */
  'vue/no-watch-after-await': 'error',

  /**
   * @todo with custom rule
   * @see {@link https://eslint.vuejs.org/rules/object-curly-newline.html}
   */
  'vue/object-curly-newline': coreRules['object-curly-newline'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/object-curly-spacing.html}
   */
  'vue/object-curly-spacing': coreRules['object-curly-spacing'],

  /**
   * @todo with custom rule
   * @see {@link https://eslint.vuejs.org/rules/object-property-newline.html}
   */
  'vue/object-property-newline': coreRules['object-property-newline'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/object-shorthand.html}
   */
  'vue/object-shorthand': coreRules['object-shorthand'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/one-component-per-file.html}
   */
  'vue/one-component-per-file': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/operator-linebreak.html}
   */
  'vue/operator-linebreak': coreRules['operator-linebreak'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/order-in-components.html}
   */
  'vue/order-in-components': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/padding-line-between-blocks.html}
   */
  'vue/padding-line-between-blocks': ['error', 'never'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/padding-line-between-tags.html}
   */
  'vue/padding-line-between-tags': ['error', [{ blankLine: 'never', prev: '*', next: '*' }]],

  /**
   * @see {@link https://eslint.vuejs.org/rules/padding-lines-in-component-definition.html}
   */
  'vue/padding-lines-in-component-definition': ['error', { betweenOptions: 'never' }],

  /**
   * @see {@link https://eslint.vuejs.org/rules/prefer-define-options.html}
   */
  'vue/prefer-define-options': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/prefer-import-from-vue.html}
   */
  'vue/prefer-import-from-vue': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/prefer-prop-type-boolean-first.html}
   */
  'vue/prefer-prop-type-boolean-first': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/prefer-separate-static-class.html}
   */
  'vue/prefer-separate-static-class': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/prefer-template.html}
   */
  'vue/prefer-template': coreRules['prefer-template'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/prefer-true-attribute-shorthand.html}
   */
  'vue/prefer-true-attribute-shorthand': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/prop-name-casing.html}
   */
  'vue/prop-name-casing': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/quote-props.html}
   */
  'vue/quote-props': coreRules['quote-props'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/require-component-is.html}
   */
  'vue/require-component-is': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/require-default-prop.html}
   */
  'vue/require-default-prop': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/require-direct-export.html}
   */
  'vue/require-direct-export': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/require-emit-validator.html}
   */
  'vue/require-emit-validator': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/require-explicit-emits.html}
   */
  'vue/require-explicit-emits': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/require-expose.html}
   */
  'vue/require-expose': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/require-macro-variable-name.html}
   */
  'vue/require-macro-variable-name': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/require-name-property.html}
   */
  'vue/require-name-property': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/require-prop-comment.html}
   */
  'vue/require-prop-comment': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/require-prop-type-constructor.html}
   */
  'vue/require-prop-type-constructor': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/require-prop-types.html}
   */
  'vue/require-prop-types': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/require-render-return.html}
   */
  'vue/require-render-return': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/require-slots-as-functions.html}
   */
  'vue/require-slots-as-functions': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/require-toggle-inside-transition.html}
   */
  'vue/require-toggle-inside-transition': 'error',

  /**
   * @todo only enable on typescript env
   * @see {@link https://eslint.vuejs.org/rules/require-typed-ref.html}
   */
  'vue/require-typed-ref': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/require-v-for-key.html}
   */
  'vue/require-v-for-key': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/require-valid-default-prop.html}
   */
  'vue/require-valid-default-prop': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/return-in-computed-property.html}
   */
  'vue/return-in-computed-property': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/return-in-emits-validator.html}
   */
  'vue/return-in-emits-validator': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/script-indent.html}
   */
  indent: 'off',
  'vue/script-indent': coreRules.indent,

  /**
   * @see {@link https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html}
   */
  'vue/singleline-html-element-content-newline': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/sort-keys.html}
   */
  'vue/sort-keys': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/space-in-parens.html}
   */
  'vue/space-in-parens': coreRules['space-in-parens'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/space-infix-ops.html}
   */
  'vue/space-infix-ops': coreRules['space-infix-ops'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/space-unary-ops.html}
   */
  'vue/space-unary-ops': coreRules['space-unary-ops'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/static-class-names-order.html}
   */
  'vue/static-class-names-order': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/template-curly-spacing.html}
   */
  'vue/template-curly-spacing': coreRules['template-curly-spacing'],

  /**
   * @see {@link https://eslint.vuejs.org/rules/this-in-template.html}
   */
  'vue/this-in-template': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/use-v-on-exact.html}
   */
  'vue/use-v-on-exact': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/v-bind-style.html}
   */
  'vue/v-bind-style': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/v-for-delimiter-style.html}
   */
  'vue/v-for-delimiter-style': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/v-on-event-hyphenation.html}
   */
  'vue/v-on-event-hyphenation': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/v-on-handler-style.html}
   */
  'vue/v-on-handler-style': ['error', ['method', 'inline-function']],

  /**
   * @see {@link https://eslint.vuejs.org/rules/v-on-style.html}
   */
  'vue/v-on-style': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/v-slot-style.html}
   */
  'vue/v-slot-style': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/valid-attribute-name.html}
   */
  'vue/valid-attribute-name': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/valid-define-emits.html}
   */
  'vue/valid-define-emits': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/valid-define-options.html}
   */
  'vue/valid-define-options': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/valid-define-props.html}
   */
  'vue/valid-define-props': 'error',

  /**
   * off: only available at vue 2
   * @see {@link https://eslint.vuejs.org/rules/valid-model-definition.html}
   */
  'vue/valid-model-definition': 'off',

  /**
   * @see {@link https://eslint.vuejs.org/rules/valid-next-tick.html}
   */
  'vue/valid-next-tick': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/valid-template-root.html}
   */
  'vue/valid-template-root': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/valid-v-bind-sync.html}
   */
  'vue/valid-v-bind-sync': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/valid-v-bind.html}
   */
  'vue/valid-v-bind': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/valid-v-cloak.html}
   */
  'vue/valid-v-cloak': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/valid-v-else-if.html}
   */
  'vue/valid-v-else-if': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/valid-v-else.html}
   */
  'vue/valid-v-else': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/valid-v-for.html}
   */
  'vue/valid-v-for': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/valid-v-html.html}
   */
  'vue/valid-v-html': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/valid-v-if.html}
   */
  'vue/valid-v-if': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/valid-v-is.html}
   */
  'vue/valid-v-is': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/valid-v-memo.html}
   */
  'vue/valid-v-memo': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/valid-v-model.html}
   */
  'vue/valid-v-model': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/valid-v-on.html}
   */
  'vue/valid-v-on': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/valid-v-once.html}
   */
  'vue/valid-v-once': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/valid-v-pre.html}
   */
  'vue/valid-v-pre': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/valid-v-show.html}
   */
  'vue/valid-v-show': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/valid-v-slot.html}
   */
  'vue/valid-v-slot': 'error',

  /**
   * @see {@link https://eslint.vuejs.org/rules/valid-v-text.html}
   */
  'vue/valid-v-text': 'error',
}
