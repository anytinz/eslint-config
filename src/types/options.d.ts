import type { Linter } from 'eslint'

export type CommonOptions<Rules extends Linter.RulesRecord> = {
  overrides?: Partial<Rules>
}
