import { string, url, safeParse } from 'valibot'

const urlSchema = string([url()])
export const typeSafetyFileUrl = (file?: File | string | null): string => {
  if (!file) return ''
  else if (typeof file === 'string') {
    const validationResult = safeParse(urlSchema, file)
    return validationResult.success ? file : ''
  } else if (file instanceof File) return URL.createObjectURL(file)
  else return ''
}
