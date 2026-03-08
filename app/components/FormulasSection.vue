<template>
  <section class="page-padding-x bg-background py-16 md:py-24">
    <div ref="elementRef" :class="['mx-auto max-w-7xl scroll-animate', isVisible && 'is-visible']">
      <div class="space-y-16">
        <div class="space-y-8 text-center">
          <h2
            class="font-subheading text-2xl italic text-foreground sm:text-3xl md:text-4xl lg:text-5xl"
          >
            {{ $t('formulas.sectionTitle') }}
          </h2>

          <p class="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">
            {{ $t('formulas.intro') }}
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <div
            v-for="(formula, index) in displayedFormulas"
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

            <div class="relative flex flex-col items-center space-y-6 text-center">
              <div
                class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/70 shadow-lg transition-transform duration-300 group-hover:scale-110"
              >
                <Icon :name="formula.icon" class="h-7 w-7 text-white" aria-hidden="true" />
              </div>

              <div class="space-y-3">
                <h3 class="text-xl font-bold text-card-foreground">
                  {{ $t(formula.titleKey) }}
                </h3>
                <p class="text-sm leading-relaxed text-muted-foreground">
                  {{ $t(formula.descriptionKey) }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center">
          <NuxtLink
            :to="localePath('/formulas')"
            class="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            :aria-label="$t('formulas.viewAllLabel')"
          >
            {{ $t('formulas.viewAll') }}
            <Icon
              name="ArrowRight"
              class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { formulaCards } from '@/constants/formulas'

const { elementRef, isVisible } = useScrollAnimation(0.4)
const localePath = useLocalePath()

const displayedFormulas = formulaCards.slice(0, 3)

const getCardDelay = (index: number): string => {
  const delays = ['delay-0', 'delay-100', 'delay-200']
  return delays[index] ?? 'delay-0'
}
</script>

<style scoped>
.scroll-animate {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.scroll-animate.is-visible {
  opacity: 1;
  transform: translateX(0);
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
</style>
