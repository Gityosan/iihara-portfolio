import { ref, readonly, onMounted, onBeforeUnmount } from 'vue'

export function useDisplay(
  {
    smBoundary = 568,
    mdBoundary = 768,
    lgBoundary = 992,
    xlBoundary = 1304
  }: {
    smBoundary: number
    mdBoundary: number
    lgBoundary: number
    xlBoundary: number
  } = {
    smBoundary: 568,
    mdBoundary: 768,
    lgBoundary: 992,
    xlBoundary: 1304
  }
) {
  const xs = ref<boolean>(false)
  const sm = ref<boolean>(false)
  const md = ref<boolean>(false)
  const lg = ref<boolean>(false)
  const xl = ref<boolean>(false)
  const smAndUp = ref<boolean>(false)
  const mdAndUp = ref<boolean>(false)
  const lgAndUp = ref<boolean>(false)
  const smAndDown = ref<boolean>(false)
  const mdAndDown = ref<boolean>(false)
  const lgAndDown = ref<boolean>(false)
  const calcDisplay = () => {
    const width = window.innerWidth
    xs.value = width < smBoundary
    sm.value = width >= smBoundary && width < mdBoundary
    md.value = width >= mdBoundary && width < lgBoundary
    lg.value = width >= lgBoundary && width < xlBoundary
    xl.value = width >= xlBoundary
    smAndUp.value = width >= smBoundary
    mdAndUp.value = width >= mdBoundary
    lgAndUp.value = width >= lgBoundary
    smAndDown.value = width < mdBoundary
    mdAndDown.value = width < lgBoundary
    lgAndDown.value = width < xlBoundary
  }
  onMounted(() => {
    calcDisplay()
    window.addEventListener('resize', calcDisplay)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', calcDisplay)
  })
  return {
    xs: readonly(xs),
    sm: readonly(sm),
    md: readonly(md),
    lg: readonly(lg),
    xl: readonly(xl),
    smAndUp: readonly(smAndUp),
    mdAndUp: readonly(mdAndUp),
    lgAndUp: readonly(lgAndUp),
    smAndDown: readonly(smAndDown),
    mdAndDown: readonly(mdAndDown),
    lgAndDown: readonly(lgAndDown)
  }
}
