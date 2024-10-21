import { eslintComments } from './configs/comments'
import { importX } from './configs/import-x'
import { ingores } from './configs/ingores'
import { javascript } from './configs/javascript'
import { json } from './configs/json'
import { n } from './configs/n'
import { perfectionist } from './configs/perfectionist'
import { solid } from './configs/solid'
import { sortDevcontainerJson, sortPackageJson, sortTsconfig } from './configs/sort'
import { stylistic } from './configs/stylistic'
import { tailwindcss } from './configs/tailwindcss'
import { typescript } from './configs/typescript'
import { unicorn } from './configs/unicorn'
import { vue } from './configs/vue'
import { normalizeOptions } from './helpers/normalize-options'
import type { Linter } from 'eslint'
import type { SolidOptions } from './configs/solid'
import type { TailwindcssOptions } from './configs/tailwindcss'
import type { TypescriptOptions } from './configs/typescript'
import type { VueOptions } from './configs/vue'
import type { OverridesOptions } from './types/options'

export type SortOptions = {
  packageJson?: boolean
  tsconfig?: boolean
  devcontainerJson?: boolean
}

const normalizeSortOptions = (options: SortOptions | boolean | undefined): Required<SortOptions> => {
  if (options === true || options === undefined) { return { packageJson: true, tsconfig: true, devcontainerJson: true } }
  if (options === false) { return { packageJson: false, tsconfig: false, devcontainerJson: false } }
  return {
    packageJson: options.packageJson ?? true,
    tsconfig: options.tsconfig ?? true,
    devcontainerJson: options.devcontainerJson ?? true,
  }
}

export type AnytinzOptions = {
  ingores?: string[]
  typescript?: Omit<TypescriptOptions, keyof OverridesOptions<never>> | boolean
  solid?: Omit<SolidOptions, keyof OverridesOptions<never>> | boolean
  vue?: Omit<VueOptions, keyof OverridesOptions<never>> | boolean
  tailwindcss?: Omit<TailwindcssOptions, keyof OverridesOptions<never>> | boolean
  sort?: boolean | Partial<Record<'packageJson' | 'tsconfig', boolean>>
}
export const anytinz = (options: AnytinzOptions = {}, ...custom: Linter.Config[]): Linter.Config[] => {
  const typescriptOptions = normalizeOptions(options.typescript ?? true)
  const solidOptions = normalizeOptions(options.solid)
  const vueOptions = normalizeOptions(options.vue)
  const tailwindcssOptions = normalizeOptions(options.tailwindcss)
  const sortOptions = normalizeSortOptions(options.sort)
  const configs: Linter.Config[] = [
    ...ingores(options.ingores),
    ...eslintComments(),
    ...javascript(),
    ...importX(),
    ...n(),
    ...unicorn(),
    ...perfectionist(),
    ...stylistic(),
    ...json(),
  ]

  const typescriptParserExtraFileExtensions: string[] = typescriptOptions?.parserOptions?.extraFileExtensions ?? []
  if (vueOptions) {
    typescriptParserExtraFileExtensions.push('.vue')
  }

  if (typescriptOptions) {
    configs.push(...typescript({
      ...typescriptOptions,
      parserOptions: {
        ...typescriptOptions.parserOptions,
        extraFileExtensions: typescriptParserExtraFileExtensions,
      },
    }))
  }
  if (solidOptions) {
    configs.push(...solid(solidOptions))
  }
  if (vueOptions) {
    const typescriptOptionsForVue = normalizeOptions(vueOptions.typescript ?? typescriptOptions)
    configs.push(...vue({
      ...vueOptions,
      typescript: typescriptOptionsForVue,
    }))
  }
  if (tailwindcssOptions) {
    configs.push(...tailwindcss())
  }
  if (sortOptions.packageJson) {
    configs.push(...sortPackageJson())
  }
  if (sortOptions.tsconfig) {
    configs.push(...sortTsconfig())
  }
  if (sortOptions.devcontainerJson) {
    configs.push(...sortDevcontainerJson())
  }

  configs.push(...custom)

  return configs
}
