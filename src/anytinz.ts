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
import type { Linter } from 'eslint'
import type { TypescriptOptions } from './configs/typescript'
import type { OverridesOptions } from './types/options'

export type SortOptions = {
  packageJson?: boolean
  tsconfig?: boolean
  devcontainerJson?: boolean
}

const normalizeOptions = <T extends Partial<Record<PropertyKey, unknown>>>(options: T | boolean | undefined): T | false => {
  return options === true ? {} as T : options ?? false
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
  solid?: boolean
  vue?: boolean
  tailwindcss?: boolean
  sort?: boolean | Partial<Record<'packageJson' | 'tsconfig', boolean>>
}
export const anytinz = (options: AnytinzOptions = {}, ...custom: Linter.Config[]): Linter.Config[] => {
  const {
    solid: solidOptions = false,
    vue: vueOptions = false,
    tailwindcss: tailwindcssOptions = false,
  } = options
  const typescriptOptions = normalizeOptions(options.typescript ?? true)
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

  const typescriptParserExtraFileExtensions: string[] = typescriptOptions === false
    ? []
    : typescriptOptions.parserOptions?.extraFileExtensions ?? []
  if (vueOptions) {
    typescriptParserExtraFileExtensions.push('.vue')
  }

  if (typescriptOptions !== false) {
    configs.push(...typescript({
      ...typescriptOptions,
      parserOptions: {
        ...typescriptOptions.parserOptions,
        extraFileExtensions: typescriptParserExtraFileExtensions,
      },
    }))
  }
  if (solidOptions) {
    configs.push(...solid())
  }
  if (vueOptions) {
    configs.push(...vue({ typescript: Boolean(typescriptOptions) }))
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
