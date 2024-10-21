export const normalizeOptions = <T extends Partial<Record<PropertyKey, unknown>>>(options: T | boolean | undefined): T | undefined => {
  if (options === true) { return {} as T }
  if (options === false || options === undefined) { return undefined }
  return options
}
