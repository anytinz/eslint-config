/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

export interface PerfectionistRules {
  /**
   * Enforce sorted arrays before include method.
   * @see https://perfectionist.dev/rules/sort-array-includes
   */
  'perfectionist/sort-array-includes'?: Linter.RuleEntry<PerfectionistSortArrayIncludes>
  /**
   * Enforce sorted Astro attributes.
   * @see https://perfectionist.dev/rules/sort-astro-attributes
   */
  'perfectionist/sort-astro-attributes'?: Linter.RuleEntry<PerfectionistSortAstroAttributes>
  /**
   * Enforce sorted classes.
   * @see https://perfectionist.dev/rules/sort-classes
   */
  'perfectionist/sort-classes'?: Linter.RuleEntry<PerfectionistSortClasses>
  /**
   * Enforce sorted TypeScript enums.
   * @see https://perfectionist.dev/rules/sort-enums
   */
  'perfectionist/sort-enums'?: Linter.RuleEntry<PerfectionistSortEnums>
  /**
   * Enforce sorted exports.
   * @see https://perfectionist.dev/rules/sort-exports
   */
  'perfectionist/sort-exports'?: Linter.RuleEntry<PerfectionistSortExports>
  /**
   * Enforce sorted imports.
   * @see https://perfectionist.dev/rules/sort-imports
   */
  'perfectionist/sort-imports'?: Linter.RuleEntry<PerfectionistSortImports>
  /**
   * Enforce sorted interface properties.
   * @see https://perfectionist.dev/rules/sort-interfaces
   */
  'perfectionist/sort-interfaces'?: Linter.RuleEntry<PerfectionistSortInterfaces>
  /**
   * Enforce sorted intersection types.
   * @see https://perfectionist.dev/rules/sort-intersection-types
   */
  'perfectionist/sort-intersection-types'?: Linter.RuleEntry<PerfectionistSortIntersectionTypes>
  /**
   * Enforce sorted JSX props.
   * @see https://perfectionist.dev/rules/sort-jsx-props
   */
  'perfectionist/sort-jsx-props'?: Linter.RuleEntry<PerfectionistSortJsxProps>
  /**
   * Enforce sorted Map elements.
   * @see https://perfectionist.dev/rules/sort-maps
   */
  'perfectionist/sort-maps'?: Linter.RuleEntry<PerfectionistSortMaps>
  /**
   * Enforce sorted named exports.
   * @see https://perfectionist.dev/rules/sort-named-exports
   */
  'perfectionist/sort-named-exports'?: Linter.RuleEntry<PerfectionistSortNamedExports>
  /**
   * Enforce sorted named imports.
   * @see https://perfectionist.dev/rules/sort-named-imports
   */
  'perfectionist/sort-named-imports'?: Linter.RuleEntry<PerfectionistSortNamedImports>
  /**
   * Enforce sorted object types.
   * @see https://perfectionist.dev/rules/sort-object-types
   */
  'perfectionist/sort-object-types'?: Linter.RuleEntry<PerfectionistSortObjectTypes>
  /**
   * Enforce sorted objects.
   * @see https://perfectionist.dev/rules/sort-objects
   */
  'perfectionist/sort-objects'?: Linter.RuleEntry<PerfectionistSortObjects>
  /**
   * Enforce sorted sets.
   * @see https://perfectionist.dev/rules/sort-sets
   */
  'perfectionist/sort-sets'?: Linter.RuleEntry<PerfectionistSortSets>
  /**
   * Enforce sorted Svelte attributes.
   * @see https://perfectionist.dev/rules/sort-svelte-attributes
   */
  'perfectionist/sort-svelte-attributes'?: Linter.RuleEntry<PerfectionistSortSvelteAttributes>
  /**
   * Enforce sorted switch cases.
   * @see https://perfectionist.dev/rules/sort-switch-case
   */
  'perfectionist/sort-switch-case'?: Linter.RuleEntry<PerfectionistSortSwitchCase>
  /**
   * Enforce sorted union types.
   * @see https://perfectionist.dev/rules/sort-union-types
   */
  'perfectionist/sort-union-types'?: Linter.RuleEntry<PerfectionistSortUnionTypes>
  /**
   * Enforce sorted variable declarations.
   * @see https://perfectionist.dev/rules/sort-variable-declarations
   */
  'perfectionist/sort-variable-declarations'?: Linter.RuleEntry<PerfectionistSortVariableDeclarations>
  /**
   * Enforce sorted Vue attributes.
   * @see https://perfectionist.dev/rules/sort-vue-attributes
   */
  'perfectionist/sort-vue-attributes'?: Linter.RuleEntry<PerfectionistSortVueAttributes>
}

/* ======= Declarations ======= */
// ----- perfectionist/sort-array-includes -----
type PerfectionistSortArrayIncludes = []|[{
  
  type?: ("alphabetical" | "natural" | "line-length")
  
  order?: ("asc" | "desc")
  
  matcher?: ("minimatch" | "regex")
  
  ignoreCase?: boolean
  
  groupKind?: ("mixed" | "literals-first" | "spreads-first")
  
  partitionByComment?: (string[] | boolean | string)
  
  partitionByNewLine?: boolean
}]
// ----- perfectionist/sort-astro-attributes -----
type PerfectionistSortAstroAttributes = []|[{
  
  type?: ("alphabetical" | "natural" | "line-length")
  
  order?: ("asc" | "desc")
  
  matcher?: ("minimatch" | "regex")
  
  ignoreCase?: boolean
  
  groups?: (string | string[])[]
  
  customGroups?: {
    [k: string]: (string | string[]) | undefined
  }
}]
// ----- perfectionist/sort-classes -----
type PerfectionistSortClasses = []|[{
  
  type?: ("alphabetical" | "natural" | "line-length")
  
  order?: ("asc" | "desc")
  
  matcher?: ("minimatch" | "regex")
  
  ignoreCase?: boolean
  
  partitionByComment?: (string[] | boolean | string)
  
  groups?: (string | string[])[]
  
  customGroups?: ({
    [k: string]: (string | string[]) | undefined
  } | ({
    
    groupName?: string
    
    type?: ("alphabetical" | "line-length" | "natural" | "unsorted")
    
    order?: ("desc" | "asc")
    anyOf?: {
      
      selector?: ("accessor-property" | "index-signature" | "constructor" | "static-block" | "get-method" | "set-method" | "function-property" | "property" | "method")
      
      modifiers?: ("protected" | "private" | "public" | "static" | "abstract" | "override" | "readonly" | "decorated" | "declare" | "optional")[]
      
      elementNamePattern?: string
      
      decoratorNamePattern?: string
    }[]
  } | {
    
    groupName?: string
    
    type?: ("alphabetical" | "line-length" | "natural" | "unsorted")
    
    order?: ("desc" | "asc")
    
    selector?: ("accessor-property" | "index-signature" | "constructor" | "static-block" | "get-method" | "set-method" | "function-property" | "property" | "method")
    
    modifiers?: ("protected" | "private" | "public" | "static" | "abstract" | "override" | "readonly" | "decorated" | "declare" | "optional")[]
    
    elementNamePattern?: string
    
    decoratorNamePattern?: string
  })[])
}]
// ----- perfectionist/sort-enums -----
type PerfectionistSortEnums = []|[{
  
  type?: ("alphabetical" | "natural" | "line-length")
  
  order?: ("asc" | "desc")
  
  matcher?: ("minimatch" | "regex")
  
  ignoreCase?: boolean
  
  sortByValue?: boolean
  
  forceNumericSort?: boolean
  
  partitionByComment?: (string[] | boolean | string)
  
  partitionByNewLine?: boolean
}]
// ----- perfectionist/sort-exports -----
type PerfectionistSortExports = []|[{
  
  type?: ("alphabetical" | "natural" | "line-length")
  
  order?: ("asc" | "desc")
  
  matcher?: ("minimatch" | "regex")
  
  ignoreCase?: boolean
  
  partitionByComment?: (string[] | boolean | string)
  
  partitionByNewLine?: boolean
  
  groupKind?: ("mixed" | "values-first" | "types-first")
}]
// ----- perfectionist/sort-imports -----
type PerfectionistSortImports = []|[_PerfectionistSortImportsSortImports]
type _PerfectionistSortImportsSortImports = (_PerfectionistSortImportsMaxLineLengthRequiresLineLengthType & {
  
  type?: ("alphabetical" | "natural" | "line-length")
  
  order?: ("asc" | "desc")
  
  matcher?: ("minimatch" | "regex")
  
  ignoreCase?: boolean
  
  internalPattern?: string[]
  
  sortSideEffects?: boolean
  
  newlinesBetween?: ("ignore" | "always" | "never")
  
  maxLineLength?: number
  
  groups?: (string | string[])[]
  
  customGroups?: {
    type?: {
      [k: string]: unknown | undefined
    }
    value?: {
      [k: string]: unknown | undefined
    }
  }
  
  environment?: ("node" | "bun")
})
type _PerfectionistSortImportsMaxLineLengthRequiresLineLengthType = ({
  [k: string]: unknown | undefined
} | _PerfectionistSortImports_IsLineLength)
interface _PerfectionistSortImports_IsLineLength {
  type: "line-length"
  [k: string]: unknown | undefined
}
// ----- perfectionist/sort-interfaces -----
type PerfectionistSortInterfaces = []|[{
  
  type?: ("alphabetical" | "natural" | "line-length")
  
  order?: ("asc" | "desc")
  
  matcher?: ("minimatch" | "regex")
  
  ignoreCase?: boolean
  
  ignorePattern?: string[]
  
  partitionByComment?: (boolean | string | string[])
  
  partitionByNewLine?: boolean
  
  groupKind?: ("mixed" | "optional-first" | "required-first")
  
  groups?: (string | string[])[]
  
  customGroups?: {
    [k: string]: (string | string[]) | undefined
  }
}]
// ----- perfectionist/sort-intersection-types -----
type PerfectionistSortIntersectionTypes = []|[{
  
  type?: ("alphabetical" | "natural" | "line-length")
  
  order?: ("asc" | "desc")
  
  matcher?: ("minimatch" | "regex")
  
  ignoreCase?: boolean
  
  groups?: (string | string[])[]
  
  partitionByComment?: (string[] | boolean | string)
  
  partitionByNewLine?: boolean
}]
// ----- perfectionist/sort-jsx-props -----
type PerfectionistSortJsxProps = []|[{
  
  type?: ("alphabetical" | "natural" | "line-length")
  
  order?: ("asc" | "desc")
  
  matcher?: ("minimatch" | "regex")
  
  ignoreCase?: boolean
  
  ignorePattern?: string[]
  
  groups?: (string | string[])[]
  
  customGroups?: {
    [k: string]: (string | string[]) | undefined
  }
}]
// ----- perfectionist/sort-maps -----
type PerfectionistSortMaps = []|[{
  
  type?: ("alphabetical" | "natural" | "line-length")
  
  order?: ("asc" | "desc")
  
  matcher?: ("minimatch" | "regex")
  
  ignoreCase?: boolean
  
  partitionByComment?: (string[] | boolean | string)
  
  partitionByNewLine?: boolean
}]
// ----- perfectionist/sort-named-exports -----
type PerfectionistSortNamedExports = []|[{
  
  type?: ("alphabetical" | "natural" | "line-length")
  
  order?: ("asc" | "desc")
  
  matcher?: ("minimatch" | "regex")
  
  ignoreCase?: boolean
  
  groupKind?: ("mixed" | "values-first" | "types-first")
  
  partitionByComment?: (string[] | boolean | string)
  
  partitionByNewLine?: boolean
}]
// ----- perfectionist/sort-named-imports -----
type PerfectionistSortNamedImports = []|[{
  
  type?: ("alphabetical" | "natural" | "line-length")
  
  order?: ("asc" | "desc")
  
  matcher?: ("minimatch" | "regex")
  
  ignoreCase?: boolean
  
  ignoreAlias?: boolean
  
  groupKind?: ("mixed" | "values-first" | "types-first")
  
  partitionByComment?: (string[] | boolean | string)
  
  partitionByNewLine?: boolean
}]
// ----- perfectionist/sort-object-types -----
type PerfectionistSortObjectTypes = []|[{
  
  type?: ("alphabetical" | "natural" | "line-length")
  
  order?: ("asc" | "desc")
  
  matcher?: ("minimatch" | "regex")
  
  ignoreCase?: boolean
  
  partitionByComment?: (string[] | boolean | string)
  
  partitionByNewLine?: boolean
  
  groupKind?: ("mixed" | "required-first" | "optional-first")
  
  groups?: (string | string[])[]
  
  customGroups?: {
    [k: string]: (string | string[]) | undefined
  }
}]
// ----- perfectionist/sort-objects -----
type PerfectionistSortObjects = []|[{
  
  type?: ("alphabetical" | "natural" | "line-length")
  
  order?: ("asc" | "desc")
  
  matcher?: ("minimatch" | "regex")
  
  ignoreCase?: boolean
  
  partitionByComment?: (string[] | boolean | string)
  
  partitionByNewLine?: boolean
  
  styledComponents?: boolean
  
  destructureOnly?: boolean
  
  ignorePattern?: string[]
  
  groups?: (string | string[])[]
  
  customGroups?: {
    [k: string]: (string | string[]) | undefined
  }
}]
// ----- perfectionist/sort-sets -----
type PerfectionistSortSets = []|[{
  
  type?: ("alphabetical" | "natural" | "line-length")
  
  order?: ("asc" | "desc")
  
  matcher?: ("minimatch" | "regex")
  
  ignoreCase?: boolean
  
  groupKind?: ("mixed" | "literals-first" | "spreads-first")
  
  partitionByComment?: (string[] | boolean | string)
  
  partitionByNewLine?: boolean
}]
// ----- perfectionist/sort-svelte-attributes -----
type PerfectionistSortSvelteAttributes = []|[{
  
  type?: ("alphabetical" | "natural" | "line-length")
  
  order?: ("asc" | "desc")
  
  matcher?: ("minimatch" | "regex")
  
  ignoreCase?: boolean
  
  groups?: (string | string[])[]
  
  customGroups?: {
    [k: string]: (string | string[]) | undefined
  }
}]
// ----- perfectionist/sort-switch-case -----
type PerfectionistSortSwitchCase = []|[{
  
  type?: ("alphabetical" | "natural" | "line-length")
  
  order?: ("asc" | "desc")
  
  ignoreCase?: boolean
}]
// ----- perfectionist/sort-union-types -----
type PerfectionistSortUnionTypes = []|[{
  
  type?: ("alphabetical" | "natural" | "line-length")
  
  order?: ("asc" | "desc")
  
  matcher?: ("minimatch" | "regex")
  
  ignoreCase?: boolean
  
  groups?: (string | string[])[]
  
  partitionByComment?: (string[] | boolean | string)
  
  partitionByNewLine?: boolean
}]
// ----- perfectionist/sort-variable-declarations -----
type PerfectionistSortVariableDeclarations = []|[{
  
  type?: ("alphabetical" | "natural" | "line-length")
  
  order?: ("asc" | "desc")
  
  matcher?: ("minimatch" | "regex")
  
  ignoreCase?: boolean
  
  partitionByComment?: (string[] | boolean | string)
  
  partitionByNewLine?: boolean
}]
// ----- perfectionist/sort-vue-attributes -----
type PerfectionistSortVueAttributes = []|[{
  
  type?: ("alphabetical" | "natural" | "line-length")
  
  order?: ("asc" | "desc")
  
  matcher?: ("minimatch" | "regex")
  
  ignoreCase?: boolean
  
  groups?: (string | string[])[]
  
  customGroups?: {
    [k: string]: (string | string[]) | undefined
  }
}]