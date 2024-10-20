import { anytinz } from '@anytinz/eslint-config'

const config = anytinz({
  ingores: [
    'src/types/rules/*.d.ts',
    '!src/types/rules/javascript.d.ts',
  ],
})
export default config
