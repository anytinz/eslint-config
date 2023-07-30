import { ARRAY_ELEMENT_NEWLINE_NAME, arrayElementNewline } from './rules/array-element-newline'

export const plugin = {
  rules: {
    [ARRAY_ELEMENT_NEWLINE_NAME]: arrayElementNewline,
  },
}
