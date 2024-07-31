import R from 'remeda'

export const convertToFormData = (obj: any, form?: FormData, namespace: string = ''): FormData => {
  let formData: FormData = form || new FormData()
  if (R.isPlainObject(obj)) {
    for (let p in obj) {
      convertToFormData(obj[p], formData, namespace ? `${namespace}[${p}]` : p)
    }
  } else if (R.isDate(obj)) {
    formData.append(namespace, `${obj.getFullYear()}-${obj.getMonth() + 1}-${obj.getDate()}`)
  } else if (Array.isArray(obj)) {
    obj.forEach((e) => convertToFormData(e, formData, namespace ? `${namespace}[]` : ''))
  } else formData.append(namespace, obj)
  return formData
}
