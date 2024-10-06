import type { Linter } from 'eslint'

export const normalizeSeverityAndOptions = <T extends unknown[] | []>(value: Linter.RuleEntry<T>): [Linter.RuleSeverity, ...Partial<T>] => {
  return Array.isArray(value) ? value : [value] as never
}
