<template>
  <section class="bg-muted/30 py-16 lg:py-24">
    <PageContainer>
      <div class="page-padding-x">
        <div
          ref="elementRef"
          :class="['mx-auto max-w-7xl scroll-animate', isVisible && 'is-visible']"
        >
          <div class="grid gap-12 md:grid-cols-3">
            <div
              v-for="(step, index) in steps"
              :key="index"
              class="step-item flex flex-col space-y-6"
              :style="{ transitionDelay: `${index * 0.2}s` }"
            >
              <div
                class="flex aspect-square w-full items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 transition-all duration-500 hover:from-primary/20 hover:to-primary/10"
              >
                <Icon
                  :name="step.icon"
                  class="h-24 w-24 text-primary transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground"
                >
                  {{ step.number }}
                </div>
                <div class="space-y-2">
                  <h3 class="font-heading text-xl font-bold text-foreground">
                    {{ step.title }}
                  </h3>
                  <p class="text-base text-muted-foreground">
                    {{ step.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  </section>
</template>

<script setup lang="ts">
import type { LucideIconName } from '@/constants/clients'

export interface ProcessStep {
  number: number
  title: string
  description: string
  icon: LucideIconName
}

export interface SolutionStepsProps {
  steps: ProcessStep[]
}

defineProps<SolutionStepsProps>()

const { elementRef, isVisible } = useScrollAnimation(0.2)
</script>

<style scoped>
.scroll-animate {
  opacity: 0;
  transform: translateY(30px);
}

.scroll-animate.is-visible {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.scroll-animate .step-item {
  opacity: 0;
  transform: translateY(30px);
}

.scroll-animate.is-visible .step-item {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}
</style>
