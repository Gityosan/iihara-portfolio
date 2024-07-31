// @vitest-environment nuxt
import { mountSuspended } from '@nuxt/test-utils/runtime'
import AtomText from '@/components/atom/text/index.vue'
const props = {
  text: 'sample',
  fontSize: 'text-subtitle-1',
  fontWeight: 'font-weight-bold',
  color: 'text-black',
  lineHeight: 'line-height-sm'
}
describe('AtomText', async () => {
  const wrapper = await mountSuspended(AtomText, { props })
  const element = wrapper.find('p')
  test('data display', () => {
    expect(element.text()).toBe(props.text)
  })
  test('class check', () => {
    expect(element.attributes('class')).contain('text-subtitle-1')
    expect(element.attributes('class')).contain('font-weight-bold')
    expect(element.attributes('class')).contain('text-black')
    expect(element.attributes('class')).contain('line-height-sm')
  })
})
