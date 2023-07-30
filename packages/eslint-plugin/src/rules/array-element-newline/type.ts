import type { TSESTree } from '@typescript-eslint/utils'

export type Behavior = 'always' | 'never' | 'consistent' | 'multiline'

export interface BasicOptions {
  multiline?: boolean
  consistent?: boolean
  minItems?: number
}

export type AdvancedOptionValue = Behavior | BasicOptions
export type AdvancedOptions = Partial<Record<ASTNodeType, AdvancedOptionValue>>

export type Options = Behavior | BasicOptions | AdvancedOptions

export type NormalizedOptionValue = Required<BasicOptions>
export type NormalizedOptions = Record<ASTNodeType, NormalizedOptionValue>

export type ASTNodeType = TSESTree.AST_NODE_TYPES.ArrayExpression | TSESTree.AST_NODE_TYPES.ArrayPattern
export type ASTElement = (TSESTree.ArrayExpression | TSESTree.ArrayPattern)['elements'][number]
export type ASTNode = TSESTree.ArrayExpression | TSESTree.ArrayPattern
export type RuleFunction = (node: ASTNode) => void

export interface ASTElementsRelationship {
  lastTokenOfPrevious: TSESTree.Token | null
  firstTokenOfCurrent: TSESTree.Token | null
  onSameLine: boolean | null
}
