/**
 * Triggers visibility state when element enters viewport using Intersection Observer.
 * @param threshold - Percentage of element visibility required to trigger (0-1)
 * @returns Object containing element ref and visibility state
 */
export const useScrollAnimation = (
  threshold = 0.1,
): { elementRef: Ref<HTMLElement | null>; isVisible: Ref<boolean> } => {
  const isVisible: Ref<boolean> = ref(false)
  const elementRef: Ref<HTMLElement | null> = ref(null)

  onMounted(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            isVisible.value = true
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin: '0px',
      },
    )

    if (elementRef.value) {
      observer.observe(elementRef.value)
    }

    onUnmounted(() => {
      if (elementRef.value) {
        observer.unobserve(elementRef.value)
      }
    })
  })

  return {
    elementRef,
    isVisible,
  }
}
