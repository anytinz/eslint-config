/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

export interface EslintCommentsRules {
  /**
   * require a `eslint-enable` comment for every `eslint-disable` comment
   * @see https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html
   */
  'eslint-comments/disable-enable-pair'?: Linter.RuleEntry<EslintCommentsDisableEnablePair>
  /**
   * disallow a `eslint-enable` comment for multiple `eslint-disable` comments
   * @see https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-aggregating-enable.html
   */
  'eslint-comments/no-aggregating-enable'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate `eslint-disable` comments
   * @see https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-duplicate-disable.html
   */
  'eslint-comments/no-duplicate-disable'?: Linter.RuleEntry<[]>
  /**
   * disallow `eslint-disable` comments about specific rules
   * @see https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-restricted-disable.html
   */
  'eslint-comments/no-restricted-disable'?: Linter.RuleEntry<EslintCommentsNoRestrictedDisable>
  /**
   * disallow `eslint-disable` comments without rule names
   * @see https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html
   */
  'eslint-comments/no-unlimited-disable'?: Linter.RuleEntry<[]>
  /**
   * disallow unused `eslint-disable` comments
   * @see https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html
   */
  'eslint-comments/no-unused-disable'?: Linter.RuleEntry<[]>
  /**
   * disallow unused `eslint-enable` comments
   * @see https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-enable.html
   */
  'eslint-comments/no-unused-enable'?: Linter.RuleEntry<[]>
  /**
   * disallow ESLint directive-comments
   * @see https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-use.html
   */
  'eslint-comments/no-use'?: Linter.RuleEntry<EslintCommentsNoUse>
  /**
   * require include descriptions in ESLint directive-comments
   * @see https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/require-description.html
   */
  'eslint-comments/require-description'?: Linter.RuleEntry<EslintCommentsRequireDescription>
}

/* ======= Declarations ======= */
// ----- eslint-comments/disable-enable-pair -----
type EslintCommentsDisableEnablePair = []|[{
  allowWholeFile?: boolean
}]
// ----- eslint-comments/no-restricted-disable -----
type EslintCommentsNoRestrictedDisable = string[]
// ----- eslint-comments/no-use -----
type EslintCommentsNoUse = []|[{
  allow?: ("eslint" | "eslint-disable" | "eslint-disable-line" | "eslint-disable-next-line" | "eslint-enable" | "eslint-env" | "exported" | "global" | "globals")[]
}]
// ----- eslint-comments/require-description -----
type EslintCommentsRequireDescription = []|[{
  ignore?: ("eslint" | "eslint-disable" | "eslint-disable-line" | "eslint-disable-next-line" | "eslint-enable" | "eslint-env" | "exported" | "global" | "globals")[]
}]