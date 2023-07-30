export const importRules = {
  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md}
   */
  'import/export': 'error',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-deprecated.md}
   */
  'import/no-deprecated': 'error',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-empty-named-blocks.md}
   */
  'import/no-empty-named-blocks': 'error',

  /**
   * off: have some issues when use pnpm
   * @todo enable?
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md}
   */
  'import/no-extraneous-dependencies': 'off',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md}
   */
  'import/no-mutable-exports': 'error',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md}
   */
  'import/no-named-as-default': 'error',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md}
   */
  'import/no-named-as-default-member': 'error',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unused-modules.md}
   */
  'import/no-unused-modules': 'off',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-amd.md}
   */
  'import/no-amd': 'error',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-commonjs.md}
   */
  'import/no-commonjs': 'error',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-import-module-exports.md}
   */
  'import/no-import-module-exports': 'error',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-nodejs-modules.md}
   */
  'import/no-nodejs-modules': 'off',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/unambiguous.md}
   */
  'import/unambiguous': 'off',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md}
   */
  'import/default': 'error',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md}
   */
  'import/named': 'error',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md}
   */
  'import/namespace': 'error',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md}
   */
  'import/no-absolute-path': 'error',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md}
   */
  'import/no-cycle': 'error',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md}
   */
  'import/no-dynamic-require': 'error',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-internal-modules.md}
   */
  'import/no-internal-modules': 'off',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md}
   */
  'import/no-relative-packages': 'error',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-parent-imports.md}
   */
  'import/no-relative-parent-imports': 'off',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md}
   */
  'import/no-restricted-paths': 'off',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md}
   */
  'import/no-self-import': 'error',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md}
   * @todo enable
   * off: issue https://github.com/import-js/eslint-plugin-import/issues/1810
   */
  // 'import/no-unresolved': [
  //   'error',
  //   {
  //     commonjs: true,
  //     amd: true,
  //     caseSensitiveStrict: true,
  //   },
  // ],
  'import/no-unresolved': 'off',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md}
   */
  'import/no-useless-path-segments': ['error', { commonjs: true }],

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md}
   */
  'import/no-webpack-loader-syntax': 'error',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/consistent-type-specifier-style.md}
   */
  'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/dynamic-import-chunkname.md}
   */
  'import/dynamic-import-chunkname': 'off',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md}
   */
  'import/exports-last': 'off',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md}
   */
  'import/extensions': ['error', 'always'],

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md}
   */
  'import/first': 'error',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/group-exports.md}
   */
  'import/group-exports': 'off',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/max-dependencies.md}
   */
  'import/max-dependencies': 'off',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md}
   */
  'import/newline-after-import': 'error',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md}
   */
  'import/no-anonymous-default-export': 'error',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md}
   */
  'import/no-default-export': 'error',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md}
   */
  'import/no-duplicates': 'error',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md}
   */
  'import/no-named-default': 'error',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-export.md}
   */
  'import/no-named-export': 'off',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-namespace.md}
   */
  'import/no-namespace': 'off',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unassigned-import.md}
   */
  'import/no-unassigned-import': 'off',

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md}
   */
  'import/order': [
    'error',
    {
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
        'object',
        'type',
        'unknown',
      ],
      pathGroups: [
        {
          pattern: './**/*.{css,scss,sass,less,styl,stylus}',
          group: 'unknown',
          position: 'after',
        },
      ],
      'newlines-between': 'never',
      alphabetize: { order: 'asc', caseInsensitive: true },
      warnOnUnassignedImports: true,
    },
  ],

  /**
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md}
   */
  'import/prefer-default-export': 'off',
}
