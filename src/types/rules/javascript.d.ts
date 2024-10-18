import type { RemovePrefix } from '../../helpers/remove-prefix'
import type { JavascriptPrimitiveRules } from './javascript-primitive'
import type { NRules } from './n'
import type { StylisticRules } from './stylistic'

export type JavascriptRules = Omit<JavascriptPrimitiveRules, RemovePrefix<keyof StylisticRules | keyof NRules, 'style/' | 'n/'>>
