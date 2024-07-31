import { isObject, isFile, isEmptyObject } from '@/utils/type-guard'

describe('Utility Functions', () => {
  describe('isObject', () => {
    it('should return true for plain objects', () => {
      expect(isObject({})).toBe(true)
      expect(isObject({ key: 'value' })).toBe(true)
      expect(isObject(new Date())).toBe(true)
      expect(isObject(new File([''], 'filename'))).toBe(true)
    })

    it('should return false for non-objects', () => {
      expect(isObject(null)).toBe(false)
      expect(isObject(123)).toBe(false)
      expect(isObject('string')).toBe(false)
      expect(isObject([])).toBe(false)
    })
  })

  describe('isFile', () => {
    it('should return true for File objects', () => {
      // 注意: File オブジェクトのテストはブラウザ環境でのみ意味を持ちます
      const file = new File(['content'], 'test.txt', { type: 'text/plain' })
      expect(isFile(file)).toBe(true)
    })

    it('should return false for non-File objects', () => {
      expect(isFile({})).toBe(false)
      expect(isFile(new Date())).toBe(false)
    })
  })

  describe('isEmptyObject', () => {
    it('should return true for empty objects', () => {
      expect(isEmptyObject({})).toBe(true)
    })

    it('should return false for non-empty objects', () => {
      expect(isEmptyObject({ key: 'value' })).toBe(false)
    })

    it('should return false for non-objects', () => {
      expect(isEmptyObject([])).toBe(false)
      expect(isEmptyObject(null)).toBe(false)
    })
  })
})
