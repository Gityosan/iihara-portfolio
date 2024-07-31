// @vitest-environment nuxt
import { useDisplay } from '@/composables/useDisplay'
import { mountSuspended } from '@nuxt/test-utils/runtime'

// ダミーコンポーネントの定義
const DummyComponent = defineComponent({
  template: '<div></div>',
  setup() {
    return useDisplay()
  }
})

describe('useDisplay', () => {
  let wrapper: ReturnType<typeof mountSuspended>
  beforeEach(async () => {
    wrapper = await mountSuspended(DummyComponent, {
      global: { mocks: { $nuxt: { context: {} } } }
    })

    // ウィンドウのサイズを設定
    global.innerWidth = 1024
    window.dispatchEvent(new Event('resize'))
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should handle multiple breakpoints correctly', async () => {
    // 初期サイズでのテスト
    expect(wrapper.setupState.xs.value).toBe(false)
    expect(wrapper.setupState.sm.value).toBe(false)
    expect(wrapper.setupState.md.value).toBe(false)
    expect(wrapper.setupState.lg.value).toBe(true)
    expect(wrapper.setupState.xl.value).toBe(false)
    expect(wrapper.setupState.smAndUp.value).toBe(true)
    expect(wrapper.setupState.mdAndUp.value).toBe(true)
    expect(wrapper.setupState.lgAndUp.value).toBe(true)
    expect(wrapper.setupState.smAndDown.value).toBe(false)
    expect(wrapper.setupState.mdAndDown.value).toBe(false)
    expect(wrapper.setupState.lgAndDown.value).toBe(true)

    // サイズ変更
    global.innerWidth = 500
    window.dispatchEvent(new Event('resize'))

    expect(wrapper.setupState.xs.value).toBe(true)
    expect(wrapper.setupState.sm.value).toBe(false)
    expect(wrapper.setupState.md.value).toBe(false)
    expect(wrapper.setupState.lg.value).toBe(false)
    expect(wrapper.setupState.xl.value).toBe(false)
    expect(wrapper.setupState.smAndUp.value).toBe(false)
    expect(wrapper.setupState.mdAndUp.value).toBe(false)
    expect(wrapper.setupState.lgAndUp.value).toBe(false)
    expect(wrapper.setupState.smAndDown.value).toBe(true)
    expect(wrapper.setupState.mdAndDown.value).toBe(true)
    expect(wrapper.setupState.lgAndDown.value).toBe(true)

    // 別のサイズに再変更
    global.innerWidth = 800
    window.dispatchEvent(new Event('resize'))

    expect(wrapper.setupState.xs.value).toBe(false)
    expect(wrapper.setupState.sm.value).toBe(false)
    expect(wrapper.setupState.md.value).toBe(true)
    expect(wrapper.setupState.lg.value).toBe(false)
    expect(wrapper.setupState.xl.value).toBe(false)
    expect(wrapper.setupState.smAndUp.value).toBe(true)
    expect(wrapper.setupState.mdAndUp.value).toBe(true)
    expect(wrapper.setupState.lgAndUp.value).toBe(false)
    expect(wrapper.setupState.smAndDown.value).toBe(false)
    expect(wrapper.setupState.mdAndDown.value).toBe(true)
    expect(wrapper.setupState.lgAndDown.value).toBe(true)
  })
})
