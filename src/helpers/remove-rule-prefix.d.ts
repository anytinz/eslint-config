import type { RemovePrefix } from './remove-prefix'

export type RemoveRulePrefix<T extends object, Prefix extends string> = {
  [K in keyof T as RemovePrefix<K, `${Prefix}/`>]: T[K]
}
