import { GLOB_INGORES } from '../globs'
import type { Linter } from 'eslint'

export const ingores = (value: string[] = []): Linter.Config[] => [{
  name: 'anytinz/ingores',
  ignores: [
    ...GLOB_INGORES,
    ...value,
  ],
}]
