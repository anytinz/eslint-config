import type { Linter } from 'eslint'

export const normalizeSeverityAndOptions = <T extends unknown[] | []>(value: Linter.RuleEntry<T>): Linter.RuleSeverityAndOptions<T> => {
  // eslint-disable-next-line ts/no-unsafe-type-assertion
  return Array.isArray(value) ? value : [value] as unknown as Linter.RuleSeverityAndOptions<T>
}
