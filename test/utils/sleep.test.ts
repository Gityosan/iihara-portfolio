import { sleep } from '@/utils/sleep'

describe('sleep function', () => {
  // Test to check if sleep delays for the default duration
  it('should delay execution for 1 second by default', async () => {
    const start = new Date().getTime()
    await sleep()
    const end = new Date().getTime()
    const duration = end - start
    expect(duration).toBeGreaterThanOrEqual(1000) // Checking for at least 1000 milliseconds
    expect(duration).toBeLessThan(1100) // Provide a small buffer to account for timing inconsistencies
  })

  // Test to check if sleep can delay for a custom duration
  it('should delay execution for a custom duration', async () => {
    const customWaitSeconds = 2
    const start = new Date().getTime()
    await sleep(customWaitSeconds)
    const end = new Date().getTime()
    const duration = end - start
    expect(duration).toBeGreaterThanOrEqual(2000) // Check for at least 2000 milliseconds
    expect(duration).toBeLessThan(2100) // Provide a small buffer
  })

  // Test using mocked setTimeout to ensure it's called correctly
  it('should call setTimeout with correct timing', async () => {
    const spySetTimeout = vi.spyOn(global, 'setTimeout')
    const customWaitSeconds = 3
    await sleep(customWaitSeconds)
    expect(spySetTimeout).toHaveBeenCalledWith(expect.any(Function), 3000)
    spySetTimeout.mockRestore() // Restore original function after the test
  })
})
