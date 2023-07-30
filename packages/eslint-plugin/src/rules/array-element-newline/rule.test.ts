import { TSESLint } from '@typescript-eslint/utils'
import { expect, test } from 'vitest'
import { require } from '../../utils/require.util'
import { ARRAY_ELEMENT_NEWLINE_NAME, MessageIds, arrayElementNewline, normalizeOptions } from './rule'
import type { Options } from './type'

test('normalized options', () => {
  expect(normalizeOptions()).toStrictEqual({
    ArrayExpression: { multiline: false, consistent: false, minItems: 0 },
    ArrayPattern: { multiline: false, consistent: false, minItems: 0 },
  })

  expect(normalizeOptions('always')).toStrictEqual({
    ArrayExpression: { multiline: false, consistent: false, minItems: 0 },
    ArrayPattern: { multiline: false, consistent: false, minItems: 0 },
  })

  expect(normalizeOptions('never')).toStrictEqual({
    ArrayExpression: { multiline: false, consistent: false, minItems: Infinity },
    ArrayPattern: { multiline: false, consistent: false, minItems: Infinity },
  })

  expect(normalizeOptions('consistent')).toStrictEqual({
    ArrayExpression: { multiline: false, consistent: true, minItems: 0 },
    ArrayPattern: { multiline: false, consistent: true, minItems: 0 },
  })

  expect(normalizeOptions('multiline')).toStrictEqual({
    ArrayExpression: { multiline: true, consistent: false, minItems: 0 },
    ArrayPattern: { multiline: true, consistent: false, minItems: 0 },
  })

  expect(normalizeOptions({ multiline: true })).toStrictEqual({
    ArrayExpression: { multiline: true, consistent: false, minItems: 0 },
    ArrayPattern: { multiline: true, consistent: false, minItems: 0 },
  })

  expect(normalizeOptions({ consistent: true })).toStrictEqual({
    ArrayExpression: { multiline: false, consistent: true, minItems: 0 },
    ArrayPattern: { multiline: false, consistent: true, minItems: 0 },
  })

  expect(normalizeOptions({ minItems: 3 })).toStrictEqual({
    ArrayExpression: { multiline: false, consistent: false, minItems: 3 },
    ArrayPattern: { multiline: false, consistent: false, minItems: 3 },
  })
})

test('rule', () => {
  const VALID = [
    // default
    // "always"
    // { minItems: 0 }
    { code: 'var foo = [];', options: ['always'] },
    { code: 'var foo = [1];', options: ['always'] },
    { code: 'var foo = [1, \n2];', options: ['always'] },
    { code: 'var foo = [1, //any comment\n2];', options: ['always'] },
    { code: 'var foo = [//any comment\n1,\n2];', options: ['always'] },
    { code: 'var foo = [1,\n2 //any comment\n];', options: ['always'] },
    { code: 'var foo = [1,\n2,\n3];', options: ['always'] },
    { code: 'var foo = [1,\n(2)];', options: ['always'] },
    { code: 'var foo = [1\n, (2)];', options: ['always'] },
    { code: 'var foo = [1\n, (2\n, 3)];', options: ['always'] },
    { code: 'var foo = [1,\n(   2   ),\n3];', options: ['always'] },
    { code: 'var foo = [1,\n((((2)))),\n3];', options: ['always'] },
    { code: 'var foo = [1,\n(\n2\n),\n3];', options: ['always'] },
    { code: 'var foo = [1,\n(2)\n, 3];', options: ['always'] },
    { code: 'var foo = [1\n, 2\n, 3];', options: ['always'] },
    { code: 'var foo = [1,\n2,\n,\n3];', options: ['always'] },
    { code: 'var foo = [\nfunction () {\ndosomething();\n},\nfunction () {\ndosomething();\n}\n];', options: ['always'] },
    { code: 'var foo = [1,\n[2,\n3],\n4]', options: ['always'] },
    { code: 'var foo = [\n[1,\n2],\n3,\n[\n4]]', options: ['always'] },
    { code: 'var foo = [[],\n[\n[]]]', options: ['always'] },

    // // "never"
    // // { minItems: Infinity }
    { code: 'var foo = [];', options: ['never'] },
    { code: 'var foo = [1];', options: ['never'] },
    { code: 'var foo = [1, 2];', options: ['never'] },
    { code: 'var foo = [\n1, 2];', options: ['never'] },
    { code: 'var foo = [1, 2\n];', options: ['never'] },
    { code: 'var foo = [1, /*any comment*/ 2];', options: ['never'] },
    { code: 'var foo = [ /*any comment*/ 1, 2];', options: ['never'] },
    { code: 'var foo = /*any comment*/ [1, 2];', options: ['never'] },
    { code: 'var foo = [1, 2, 3];', options: ['never'] },
    { code: 'var foo = [1, (\n2\n), 3];', options: ['never'] },
    { code: 'var foo = [function () {\ndosomething();\n}, function () {\ndosomething();\n}];', options: ['never'] },
    { code: 'var foo = [1, [\n1, 2\n]]', options: ['never'] },

    // // "consistent"
    // // { consistent: true }
    { code: 'var foo = [];', options: ['consistent'] },
    { code: 'var foo = [1];', options: ['consistent'] },
    { code: 'var foo = [1, 2];', options: ['consistent'] },
    { code: 'var foo = [1,\n2];', options: ['consistent'] },
    { code: 'var foo = [1, 2, 3];', options: ['consistent'] },
    { code: 'var foo = [1,\n2,\n3];', options: ['consistent'] },
    { code: 'var foo = [1,\n2,\n,\n3];', options: ['consistent'] },
    { code: 'var foo = [1, //any comment\n2];', options: ['consistent'] },
    { code: 'var foo = [ /*any comment*/ 1, 2];', options: ['consistent'] },
    { code: 'var foo = [1, (\n2\n), 3];', options: ['consistent'] },
    { code: 'var foo = [1,\n(2)\n, 3];', options: ['consistent'] },
    { code: 'var foo = [\nfunction () {\ndosomething();\n},\nfunction () {\ndosomething();\n}\n];', options: ['consistent'] },
    { code: 'var foo = [\nfunction () {\ndosomething();\n}, function () {\ndosomething();\n}\n];', options: ['consistent'] },
    { code: 'var foo = [\nfunction () {\ndosomething();\n},\nfunction () {\ndosomething();\n},\nfunction () {\ndosomething();\n}];', options: ['consistent'] },
    { code: 'var foo = [\nfunction () {\ndosomething();\n}, function () {\ndosomething();\n}, function () {\ndosomething();\n}];', options: ['consistent'] },
    { code: 'var foo = [1,\n[\n2, 3,\n]\n];', options: ['consistent'] },
    { code: 'var foo = [\n1,\n[2\n, 3\n,]\n];', options: ['consistent'] },
    { code: 'var foo = [\n1, [2,\n3]];', options: ['consistent'] },

    // // "multiline"
    // // { multiline: true }
    { code: 'var foo = [];', options: ['multiline'] },
    { code: 'var foo = [1];', options: ['multiline'] },
    { code: 'var foo = [1, 2];', options: ['multiline'] },
    { code: 'var foo = [1,\n2];', options: ['multiline'] },
    { code: 'var foo = [\n1,\n2,\n3];', options: ['multiline'] },
    { code: 'var foo = [1,\n2,\n3\n];', options: ['multiline'] },
    { code: 'var foo = [1\n, 2\n, 3];', options: ['multiline'] },
    { code: 'var foo = [\n1\n, 2\n, 3\n];', options: ['multiline'] },
    { code: 'var foo = [\n1,\n2,\n3\n];', options: ['multiline'] },
    { code: 'var foo = [1 /*any comment*/ ,2];', options: ['multiline'] },
    { code: 'var foo = [ /*any comment*/ 1,2];', options: ['multiline'] },
    { code: 'var foo = [1, /*any comment*/\n2];', options: ['multiline'] },
    { code: 'var foo = [1, //any comment\n2];', options: ['multiline'] },
    { code: 'var foo = [\n1, //any comment\n2];', options: ['multiline'] },
    { code: 'var foo = [1,\n(\n2\n),\n3];', options: ['multiline'] },
    { code: 'var foo = [1,\n[\n],\n3];', options: ['multiline'] },
    { code: 'var foo = [1,\n[2, 3],\n4];', options: ['multiline'] },
    { code: 'var foo = [1,\n[2,\n3],\n4];', options: ['multiline'] },
    { code: 'var foo = [function () {\ndosomething();\n},\nfunction () {\ndosomething();\n}];', options: ['multiline'] },

    // // { minItems: 3 }
    { code: 'var foo = [];', options: [{ minItems: 3 }] },
    { code: 'var foo = [1];', options: [{ minItems: 3 }] },
    { code: 'var foo = [1, 2];', options: [{ minItems: 3 }] },
    { code: 'var foo = [1,\n2,\n3];', options: [{ minItems: 3 }] },
    { code: 'var foo = [\nfunction () {\ndosomething();\n}, function () {\ndosomething();\n}\n];', options: [{ minItems: 3 }] },
    { code: 'var foo = [[1, 2], [[\n1,\n2,\n3]]];', options: [{ minItems: 3 }] },
  ] satisfies TSESLint.ValidTestCase<[Options]>[]

  const INVALID = [
    // default
    // 'always'
    // { minItems: 0 }
    {
      code: 'var foo = [1, 2];',
      output: 'var foo = [1,\n2];',
      options: ['always'],
      errors: [
        {
          messageId: MessageIds.MISSING_LINE_BREAK,
          line: 1,
          column: 14,
          endLine: 1,
          endColumn: 15,
        },
      ],
    },
    // {
    //   code: "var foo = [1, 2, 3];",
    //   output: "var foo = [1,\n2,\n3];",
    //   options: ['always'],
    //   errors: [
    //     {
    //       messageId: MessageIds.MISSING_LINE_BREAK,
    //       line: 1,
    //       column: 14,
    //       endLine: 1,
    //       endColumn: 15,
    //     },
    //     {
    //       messageId: MessageIds.MISSING_LINE_BREAK,
    //       line: 1,
    //       column: 17,
    //       endLine: 1,
    //       endColumn: 18,
    //     },
    //   ]
    // },
    // {
    //   code: "var foo = [1,2, 3];",
    //   output: "var foo = [1,\n2,\n3];",
    //   options: ["always"],
    //   errors: [
    //     {
    //       messageId: MessageIds.MISSING_LINE_BREAK,
    //       line: 1,
    //       column: 14,
    //       endLine: 1,
    //       endColumn: 14,
    //     },
    //     {
    //       messageId: MessageIds.MISSING_LINE_BREAK,
    //       line: 1,
    //       column: 16,
    //       endLine: 1,
    //       endColumn: 17,
    //     }
    //   ]
    // },
  ] satisfies TSESLint.InvalidTestCase<MessageIds, [Options]>[]

  TSESLint.RuleTester.it = (text, callback): void => {
    expect(callback, text).not.toThrowError()
  }

  const ruleTester = new TSESLint.RuleTester({
    parser: require.resolve('@typescript-eslint/parser'),
  })

  ruleTester.run(ARRAY_ELEMENT_NEWLINE_NAME, arrayElementNewline, {
    valid: VALID,
    invalid: INVALID,
  })
})
