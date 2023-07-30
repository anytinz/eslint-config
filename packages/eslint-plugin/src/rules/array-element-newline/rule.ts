import { ASTUtils, TSESTree } from '@typescript-eslint/utils'
import { createRule } from '@anytinz/eslint-plugin/utils'
import type {
  ASTElement,
  ASTElementsRelationship,
  AdvancedOptionValue,
  AdvancedOptions,
  NormalizedOptionValue,
  NormalizedOptions,
  Options,
  RuleFunction,
} from './type'
import type { SourceCode } from '@typescript-eslint/utils/ts-eslint'

export const ARRAY_ELEMENT_NEWLINE_NAME = 'array-element-newline'

export enum MessageIds {
  UNEXPECTED_LINE_BREAK = 'unexpectedLineBreak',
  MISSING_LINE_BREAK = 'missingLineBreak',
}

const isAdvancedOptions = (options?: Options): options is AdvancedOptions => (
  typeof options === 'object'
  && (TSESTree.AST_NODE_TYPES.ArrayExpression in options || TSESTree.AST_NODE_TYPES.ArrayPattern in options)
)

const normalizeOptionValue = (options?: AdvancedOptionValue): NormalizedOptionValue => {
  const defaultNormalizedOptions: NormalizedOptionValue = {
    consistent: false,
    multiline: false,
    minItems: 0,
  }

  if (options === 'always') { return defaultNormalizedOptions }
  if (options === 'never') { return { ...defaultNormalizedOptions, minItems: Infinity } }
  if (options === 'consistent') { return { ...defaultNormalizedOptions, consistent: true } }
  if (options === 'multiline') { return { ...defaultNormalizedOptions, multiline: true } }

  return { ...defaultNormalizedOptions, ...options }
}

export const normalizeOptions = (options: Options = 'always'): NormalizedOptions => {
  if (isAdvancedOptions(options)) {
    return {
      ArrayExpression: normalizeOptionValue(options.ArrayExpression),
      ArrayPattern: normalizeOptionValue(options.ArrayPattern),
    }
  }

  const value = normalizeOptionValue(options)

  return {
    ArrayExpression: value,
    ArrayPattern: value,
  }
}

const getElementsRelationships = (
  sourceCode: SourceCode,
  elements: ASTElement[],
): ASTElementsRelationship[] => (elements
  .map((element, index, array) => {
    const previousElement = array[index - 1]

    if (!previousElement || !element || index === 0) { return undefined }

    const commaToken = sourceCode.getFirstTokenBetween(previousElement, element, ASTUtils.isCommaToken)
    const lastTokenOfPrevious = commaToken && sourceCode.getTokenBefore(commaToken)
    const firstTokenOfCurrent = commaToken && sourceCode.getTokenAfter(commaToken)

    const relationship: ASTElementsRelationship = {
      lastTokenOfPrevious,
      firstTokenOfCurrent,
      onSameLine: lastTokenOfPrevious
        && firstTokenOfCurrent
        && ASTUtils.isTokenOnSameLine(lastTokenOfPrevious, firstTokenOfCurrent),
    }

    return relationship
  })
  .filter((value): value is ASTElementsRelationship => typeof value !== 'undefined')
)

export const arrayElementNewline = createRule<[Options], MessageIds>({
  name: ARRAY_ELEMENT_NEWLINE_NAME,
  meta: {
    docs: {
      description: 'Enforce line breaks after each array element',
      recommended: 'stylistic',
    },
    fixable: 'whitespace',
    messages: {
      [MessageIds.UNEXPECTED_LINE_BREAK]: 'There should be no linebreak here.',
      [MessageIds.MISSING_LINE_BREAK]: 'There should be a linebreak after this element.',
    },
    type: 'layout',
    schema: {
      definitions: {
        behavior: {
          type: 'string',
          enum: ['always', 'never', 'consistent', 'multiline'],
        },
        basicOptions: {
          type: 'object',
          additionalProperties: false,
          properties: {
            multiline: { type: 'boolean' },
            consistent: { type: 'boolean' },
            minItems: { type: 'integer', minimum: 0 },
          },
        },
        advancedOptionValue: {
          oneOf: [
            { $ref: '#/definitions/behavior' },
            { $ref: '#/definitions/basicOptions' },
          ],
        },
        advancedOptions: {
          type: 'object',
          additionalProperties: false,
          properties: {
            ArrayExpression: { $ref: '#/definitions/advancedOptionValue' },
            ArrayPattern: { $ref: '#/definitions/advancedOptionValue' },
          },
          minProperties: 1,
        },
      },
      type: 'array',
      items: [
        {
          oneOf: [
            { $ref: '#/definitions/behavior' },
            { $ref: '#/definitions/basicOptions' },
            { $ref: '#/definitions/advancedOptions' },
          ],
        },
      ],
    },
  },
  defaultOptions: ['always'],
  create: (context, optionsWithDefault) => {
    const sourceCode = context.getSourceCode()
    const normalizedOptions = normalizeOptions(optionsWithDefault[0])

    const reportNoLineBreak = (token: TSESTree.Token | null): void => {
      const tokenBefore = token && sourceCode.getTokenBefore(token, { includeComments: true })

      if (!tokenBefore) { return }

      context.report({
        loc: {
          start: tokenBefore.loc.end,
          end: token.loc.start,
        },
        messageId: MessageIds.UNEXPECTED_LINE_BREAK,
        fix: (fixer) => {
          if (ASTUtils.isCommentToken(tokenBefore)) { return null }
          if (!ASTUtils.isTokenOnSameLine(tokenBefore, token)) {
            return fixer.replaceTextRange([tokenBefore.range[1], token.range[0]], ' ')
          }

          const twoTokensBefore = sourceCode.getTokenBefore(tokenBefore, { includeComments: true })

          if (!twoTokensBefore || ASTUtils.isCommentToken(twoTokensBefore)) { return null }

          return fixer.replaceTextRange([twoTokensBefore.range[1], tokenBefore.range[0]], '')
        },
      })
    }

    const reportRequiredLineBreak = (token: TSESTree.Token | null): void => {
      const tokenBefore = token && sourceCode.getTokenBefore(token, { includeComments: true })

      if (!tokenBefore) { return }

      context.report({
        loc: {
          start: tokenBefore.loc.end,
          end: token.loc.start,
        },
        messageId: MessageIds.MISSING_LINE_BREAK,
        fix: (fixer) => fixer.replaceTextRange([tokenBefore.range[1], token.range[0]], '\n'),
      })
    }

    const check: RuleFunction = (node) => {
      const { type, elements } = node
      const options = normalizedOptions[type]

      const openBracket = sourceCode.getFirstToken(node)
      const closeBracket = sourceCode.getLastToken(node)
      const arrayHasLinebreaks = openBracket && closeBracket && !ASTUtils.isTokenOnSameLine(openBracket, closeBracket)

      const elementsRelationships = getElementsRelationships(sourceCode, elements)
      const elementsLinebreaksCount = elementsRelationships.filter(({ onSameLine }) => onSameLine === false).length
      const elementsHasLinebreaks = elementsLinebreaksCount > 0 && elementsLinebreaksCount < elements.length

      const needLinebreaks = (options.multiline && arrayHasLinebreaks !== null)
        || (options.consistent && elementsHasLinebreaks)
        || (!options.multiline && !options.consistent && options.minItems <= elements.length)

      elementsRelationships.forEach(({ firstTokenOfCurrent, onSameLine }) => {
        if (onSameLine === null) { return }
        if (needLinebreaks && onSameLine) { reportRequiredLineBreak(firstTokenOfCurrent) }
        if (!needLinebreaks && !onSameLine) { reportNoLineBreak(firstTokenOfCurrent) }
      })
    }

    return {
      ArrayExpression: check,
      ArrayPattern: check,
    }
  },
})
