export type RemovePrefix<T extends string, P extends string> = T extends `${P}${infer R extends string}` ? R : T
