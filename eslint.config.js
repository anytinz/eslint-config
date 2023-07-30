import { anytinzConfig } from '@anytinz/eslint-config'

const config = [
  ...anytinzConfig,
  {
    files: ['**/*.{ts,mts,cts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
]

// eslint-disable-next-line import/no-default-export
export default config
