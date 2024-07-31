import { convertToFormData } from '@/utils/form-data'

describe('convertToFormData function', () => {
  it('converts simple objects to FormData', () => {
    const params = { name: 'John', age: 30 }
    const form = convertToFormData(params)
    const response = []
    for (let e of form.entries()) {
      response.push(e)
    }
    expect(response).toStrictEqual([
      ['name', 'John'],
      ['age', '30'] // 注意: 数値は文字列に変換される
    ])
  })

  it('handles nested objects correctly', () => {
    const params = {
      user: {
        name: 'Jane',
        details: { age: 25, city: 'New York' }
      }
    }
    const form = convertToFormData(params)
    const response = []
    for (let e of form.entries()) {
      response.push(e)
    }
    expect(response).toStrictEqual([
      ['user[name]', 'Jane'],
      ['user[details][age]', '25'],
      ['user[details][city]', 'New York']
    ])
  })

  it('handles arrays correctly', () => {
    const params = {
      hobbies: ['reading', 'sports']
    }
    const form = convertToFormData(params)
    const response = []
    for (let e of form.entries()) {
      response.push(e)
    }
    expect(response).toStrictEqual([
      ['hobbies[]', 'reading'],
      ['hobbies[]', 'sports']
    ])
  })

  it('handles File objects correctly', () => {
    const file = new File(['content'], 'test.txt', { type: 'text/plain' })
    const params = { file: file }
    const form = convertToFormData(params)
    const response = []
    for (let e of form.entries()) {
      response.push(e)
    }
    expect(response).toStrictEqual([['file', file]])
  })
})
