import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  input: './src/index.ts',
  output: {
    dir: './dist',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    typescript({
      tsconfig: '../../tsconfig.base.json',
      allowImportingTsExtensions: true,
      noEmit: true,
      outDir: './dist',
      include: './src/**',
    }),
  ],
})
