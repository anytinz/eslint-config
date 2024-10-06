import { normalizeSeverityAndOptions } from './normalize-severity-and-options'
import type { Linter } from 'eslint'

export const extendsRuleOptions = <T extends unknown[] | [], R extends unknown[] | []>(
  value: Linter.RuleEntry<T>,
  callback: (...options: Partial<T>) => R,
): Linter.RuleEntry<R> => {
  const [severity, ...options] = normalizeSeverityAndOptions(value)
  return [severity, ...callback(...options)]
}
