import { writeFile } from 'node:fs/promises'
import { kebabCase } from 'change-case'
import { pluginsToRulesDTS } from 'eslint-typegen/core'
import { builtinRules } from 'eslint/use-at-your-own-risk'
import {
  pluginEslintComments,
  pluginImportX,
  pluginJsonc,
  pluginN,
  pluginPerfectionist,
  pluginSolid,
  pluginStylistic,
  pluginTailwindcss,
  pluginTypescript,
  pluginUnicorn,
  pluginVue,
} from '../src/plugins.js'
import type { ESLint } from 'eslint'

type PluginRecord = {
  plugin: ESLint.Plugin
  name: string
  prefix: string
}
const pluginRecords: PluginRecord[] = [
  // eslint-disable-next-line ts/no-deprecated
  { plugin: { rules: Object.fromEntries(builtinRules) }, name: 'JavascriptPrimitive', prefix: '' },
  { plugin: pluginEslintComments, name: 'EslintComments', prefix: 'eslint-comments' },
  { plugin: pluginImportX, name: 'ImportX', prefix: 'import' },
  { plugin: pluginJsonc, name: 'Jsonc', prefix: 'jsonc' },
  { plugin: pluginN, name: 'N', prefix: 'n' },
  { plugin: pluginPerfectionist, name: 'Perfectionist', prefix: 'perfectionist' },
  { plugin: pluginSolid, name: 'Solid', prefix: 'solid' },
  { plugin: pluginStylistic, name: 'Stylistic', prefix: 'style' },
  { plugin: pluginTailwindcss, name: 'Tailwindcss', prefix: 'tailwindcss' },
  { plugin: pluginTypescript, name: 'Typescript', prefix: 'ts' },
  { plugin: pluginUnicorn, name: 'Unicorn', prefix: 'unicorn' },
  { plugin: pluginVue, name: 'Vue', prefix: 'vue' },
]

await Promise.all(pluginRecords.map(async ({ plugin, name, prefix }) => {
  const dts = await pluginsToRulesDTS({ [prefix]: plugin }, { exportTypeName: `${name}Rules`, includeAugmentation: false })
  const path = `src/types/rules/${kebabCase(name)}.d.ts`
  await writeFile(path, dts)
}))
