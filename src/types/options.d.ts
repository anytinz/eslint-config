import type { Linter } from 'eslint'

export type OverridesOptions<Rules extends Linter.RulesRecord> = {
  overrides?: Partial<Rules>
}
