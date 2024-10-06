import { JavascriptPrimitiveRules } from './javascript-primitive'
import { StylisticRules } from './stylistic'
import { NRules } from './n'
import type { RemovePrefix } from '../../helpers/remove-prefix'

export type JavascriptRules = Omit<JavascriptPrimitiveRules, RemovePrefix<keyof StylisticRules | keyof NRules, 'style/' | 'n/'>>
