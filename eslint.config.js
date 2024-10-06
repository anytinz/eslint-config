import { anytinz } from '@anytinz/eslint-config'

export default anytinz({
  ingores: [
    '**/.editorconfig',
    '**/.gitignore',
    '**/.npmrc',
    'src/types/rules/*.d.ts',
  ],
})
