import R from 'remeda'
import { isObject, isFile } from '@/utils/type-guard'
export const toSnakeCase = (str: string): string => {
  return str
    .replace(/[-\s]/g, '_')
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .toLowerCase()
}
export const toLowerCamelCase = (str: string): string => {
  if (!str) return ''
  return str
    .replace(/[-_\s]([a-zA-Z])/g, (_m, p1) => p1.toUpperCase())
    .replace(str[0], str[0].toLowerCase())
}
export const toUpperCamelCase = (str: string): string => {
  if (!str) return ''
  return str
    .replace(/[-_\s]([a-zA-Z])/g, (_m, p1) => p1.toUpperCase())
    .replace(str[0], str[0].toUpperCase())
}

export const convertKeyToSnakeCase = <T = unknown>(obj: T): any => {
  if (obj === null || obj === undefined) return {}
  if (R.isDate(obj) || isFile(obj)) return obj
  if (Array.isArray(obj)) return obj.map(convertKeyToSnakeCase)
  if (isObject(obj)) {
    return Object.keys(obj).reduce(
      (acc, key) => {
        if (obj[key] === null || obj[key] === undefined) return acc
        const newKey = toSnakeCase(key)
        acc[newKey] = convertKeyToSnakeCase(obj[key])
        return acc
      },
      {} as Record<string, unknown>
    )
  }
  return obj
}

export const convertKeyToLowerCamelCase = <T = unknown>(obj: T): any => {
  if (obj === null || obj === undefined) return {}
  if (R.isDate(obj) || isFile(obj)) return obj
  if (Array.isArray(obj)) return obj.map(convertKeyToLowerCamelCase)
  if (isObject(obj)) {
    return Object.keys(obj).reduce(
      (acc, key) => {
        if (obj[key] === null || obj[key] === undefined) return acc
        const newKey = toLowerCamelCase(key)
        acc[newKey] = convertKeyToLowerCamelCase(obj[key])
        return acc
      },
      {} as Record<string, unknown>
    )
  }
  return obj
}

export const convertKeyToUpperCamelCase = <T = unknown>(obj: T): any => {
  if (obj === null || obj === undefined) return {}
  if (R.isDate(obj) || isFile(obj)) return obj
  if (Array.isArray(obj)) return obj.map(convertKeyToUpperCamelCase)
  if (isObject(obj)) {
    return Object.keys(obj).reduce(
      (acc, key) => {
        if (obj[key] === null || obj[key] === undefined) return acc
        const newKey = toUpperCamelCase(key)
        acc[newKey] = convertKeyToUpperCamelCase(obj[key])
        return acc
      },
      {} as Record<string, unknown>
    )
  }
  return obj
}
