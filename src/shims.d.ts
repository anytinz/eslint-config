declare module 'eslint-import-resolver-node' {
  export namespace Resolver {
    export declare const resolve: (source: string, file: string, options?: Record<PropertyKey, unknown> | null) => { found: boolean; path?: string | null }
  }
}
declare module 'eslint-import-resolver-typescript' {
  export declare const resolve: (source: string, file: string, options?: Record<PropertyKey, unknown> | null) => { found: boolean; path?: string | null }
}
