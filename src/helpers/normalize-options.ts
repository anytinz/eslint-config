export const normalizeOptions = <T extends Partial<Record<PropertyKey, unknown>>>(options: T | boolean | undefined): T | undefined => {
  // eslint-disable-next-line ts/no-unsafe-type-assertion
  if (options === true) { return {} as T }
  if (options === false || options === undefined) { return undefined }
  return options
}
