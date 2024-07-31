export const isObject = (v: unknown): v is Record<string, unknown> =>
  v !== null && typeof v === 'object' && !Array.isArray(v)
export const isFile = (v: unknown): v is File => v instanceof File
export const isEmptyObject = (v: unknown): v is Record<string, unknown> =>
  isObject(v) && !Object.keys(v).length
