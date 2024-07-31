import { convertKeyToSnakeCase } from '@/utils/string-case'
import { convertToFormData } from '@/utils/form-data'
export const queries = (...args: (string | string[])[]): string => {
  const validQueries = args.flat(Infinity).filter((v) => !!v)
  if (!validQueries.length) return ''
  return `?${validQueries.join('&')}`
}
export const convertToUrlQuery = (params: unknown): string[] => {
  const formData = convertToFormData(convertKeyToSnakeCase(params))
  const keyValues: string[] = []
  formData.forEach((v, k) => keyValues.push(`${k}=${v}`))
  return keyValues
}
