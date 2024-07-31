import { typeSafetyFileUrl } from '@/utils/file'

describe('typeSafetyFileUrl function', () => {
  // Test for null input
  it('should return an empty string if input is null', async () => {
    const result = await typeSafetyFileUrl(null)
    expect(result).toBe('')
  })

  // Test for undefined input
  it('should return an empty string if input is undefined', async () => {
    const result = await typeSafetyFileUrl(undefined)
    expect(result).toBe('')
  })

  // Test for NaN input
  it('should return an empty string if input is NaN', async () => {
    const result = await typeSafetyFileUrl(NaN as any)
    expect(result).toBe('')
  })

  // Test for empty string input
  it('should return an empty string if input is an empty string', async () => {
    const result = await typeSafetyFileUrl('')
    expect(result).toBe('')
  })

  // Test for object input
  it('should return an empty string if input is an object', async () => {
    const result = await typeSafetyFileUrl({} as any)
    expect(result).toBe('')
  })

  // Test for array input
  it('should return an empty string if input is an array', async () => {
    const result = await typeSafetyFileUrl([] as any)
    expect(result).toBe('')
  })

  // Test for number input
  it('should return an empty string if input is an number', async () => {
    const result = await typeSafetyFileUrl(1 as any)
    expect(result).toBe('')
  })

  // Test for valid string input
  it('should return the input string if input is a valid string', async () => {
    const testUrl = 'http://example.com/image.png'
    const result = await typeSafetyFileUrl(testUrl)
    expect(result).toBe(testUrl)
  })

  // Test for invalid string input
  it('should return the input string if input is a invalid string', async () => {
    const result = await typeSafetyFileUrl('valibot')
    expect(result).toBe('')
  })

  // Test for File input
  it('should return a blob URL if input is a File object', async () => {
    // Mocking a File object
    const blob = new Blob([''], { type: 'image/png' })
    const file = new File([blob], 'test.png', { type: 'image/png' })

    // Mocking URL.createObjectURL
    const expectedUrl = 'blob:http://example.com/d41d8cd98f00b204e9800998ecf8427e'
    const mockCreateObjectURL = vi.fn().mockReturnValue(expectedUrl)
    global.URL.createObjectURL = mockCreateObjectURL

    const result = await typeSafetyFileUrl(file)
    expect(result).toBe(expectedUrl)
    expect(mockCreateObjectURL).toHaveBeenCalledWith(file)

    // Restore the original function
    mockCreateObjectURL.mockRestore()
  })
})
