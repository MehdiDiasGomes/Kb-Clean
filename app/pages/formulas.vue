<template>
  <div class="min-h-screen bg-gradient-to-b from-background to-muted/30">
    <div class="page-padding-x py-16 md:py-24">
      <div
        ref="headerRef"
        :class="['mx-auto max-w-4xl text-center scroll-animate', isHeaderVisible && 'is-visible']"
      >
        <div class="space-y-6">
          <h1 class="font-heading text-3xl text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            {{ $t('formulas.sectionTitle') }}
          </h1>

          <p class="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            {{ $t('formulas.intro') }}
          </p>
        </div>
      </div>

      <div
        ref="gridRef"
        :class="[
          'mx-auto mt-16 grid max-w-5xl gap-6 scroll-animate-up md:grid-cols-2',
          isGridVisible && 'is-visible',
        ]"
      >
        <div
          v-for="(formula, index) in formulaCards"
          :key="formula.id"
          :class="[
            'group relative overflow-hidden rounded-3xl border border-border/50 bg-card p-8 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl',
            getCardDelay(index),
          ]"
        >
          <div
            class="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150"
            aria-hidden="true"
          />

          <div class="relative space-y-6">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/70 shadow-lg transition-transform duration-300 group-hover:scale-110"
            >
              <Icon :name="formula.icon" class="h-7 w-7 text-white" aria-hidden="true" />
            </div>

            <div class="space-y-3">
              <h2 class="text-xl font-bold text-card-foreground md:text-2xl">
                {{ $t(formula.titleKey) }}
              </h2>
              <p class="text-sm leading-relaxed text-muted-foreground md:text-base">
                {{ $t(formula.descriptionKey) }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        ref="ctaRef"
        :class="[
          'mx-auto mt-16 flex max-w-2xl flex-col items-center gap-6 scroll-animate-up',
          isCtaVisible && 'is-visible',
        ]"
      >
        <p class="text-center text-muted-foreground">
          {{ $t('formulas.ctaIntro') }}
        </p>

        <CtaFreeDemo />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formulaCards } from '@/constants/formulas'

const { t } = useI18n()

const { elementRef: headerRef, isVisible: isHeaderVisible } = useScrollAnimation(0.1)
const { elementRef: gridRef, isVisible: isGridVisible } = useScrollAnimation(0.1)
const { elementRef: ctaRef, isVisible: isCtaVisible } = useScrollAnimation(0.1)

definePageMeta({
  layout: 'default',
})

useSeoMeta({
  title: () => t('seo.formulas.title'),
  description: () => t('seo.formulas.description'),
  ogTitle: () => t('seo.formulas.title'),
  ogDescription: () => t('seo.formulas.description'),
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

const getCardDelay = (index: number): string => {
  const delays = ['delay-0', 'delay-100', 'delay-200', 'delay-300']
  return delays[index] ?? 'delay-0'
}
</script>

<style scoped>
.scroll-animate {
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.scroll-animate.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.scroll-animate-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.scroll-animate-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.delay-0 {
  transition-delay: 0ms;
}

.delay-100 {
  transition-delay: 100ms;
}

.delay-200 {
  transition-delay: 200ms;
}

.delay-300 {
  transition-delay: 300ms;
}
</style>
