import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'

const config = defineConfig({
  input: 'src/index.ts',
  output: {
    dir: './dist',
    preserveModules: true,
    sourcemap: true,
  },
  plugins: [typescript({ rootDir: './src' })],
  external: [
    'node:path',
    'node:process',
    '@stylistic/eslint-plugin',
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
    'confusing-browser-globals',
    'eslint-import-resolver-node',
    'eslint-import-resolver-typescript',
    'eslint-plugin-eslint-comments',
    'eslint-plugin-import-x',
    'eslint-plugin-jsonc',
    'eslint-plugin-n',
    'eslint-plugin-perfectionist',
    'eslint-plugin-solid',
    'eslint-plugin-tailwindcss',
    'eslint-plugin-unicorn',
    'eslint-plugin-vue',
    'globals',
    'jsonc-eslint-parser',
    'sort-package-json',
    'vue-eslint-parser',
  ],
})
export default config
