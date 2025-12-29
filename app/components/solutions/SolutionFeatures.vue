<template>
  <section class="bg-muted/30 py-16 lg:py-24">
    <PageContainer>
      <div class="page-padding-x">
        <div
          ref="elementRef"
          :class="['mx-auto max-w-7xl space-y-12 scroll-animate', isVisible && 'is-visible']"
        >
          <div class="space-y-6 text-center">
            <h2 class="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              {{ title }}
            </h2>
            <div class="mx-auto max-w-4xl space-y-4 text-muted-foreground">
              <p class="text-lg sm:text-xl">{{ descriptionLine1 }}</p>
              <p class="text-lg sm:text-xl">{{ descriptionLine2 }}</p>
            </div>
          </div>

          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="feature-item flex flex-col items-center space-y-4 text-center"
              :style="{ transitionDelay: `${index * 0.25}s` }"
            >
              <div
                class="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 p-4"
              >
                <NuxtImg
                  v-if="feature.image"
                  :src="feature.image"
                  :alt="feature.title"
                  class="h-full w-full object-contain"
                  width="80"
                  height="80"
                />
                <Icon
                  v-else
                  :name="feature.icon ?? 'Sparkles'"
                  class="h-10 w-10 text-primary"
                  aria-hidden="true"
                />
              </div>
              <h3 class="font-heading text-xl font-bold text-foreground">
                {{ feature.title }}
              </h3>
              <p class="text-base font-medium text-muted-foreground">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  </section>
</template>

<script setup lang="ts">
import type { LucideIconName } from '@/constants/clients'

export interface Feature {
  title: string
  description: string
  image?: string
  icon?: LucideIconName
}

export interface SolutionFeaturesProps {
  title: string
  descriptionLine1: string
  descriptionLine2: string
  features: Feature[]
}

defineProps<SolutionFeaturesProps>()

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

.scroll-animate .feature-item {
  opacity: 0;
  transform: translateY(30px);
}

.scroll-animate.is-visible .feature-item {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}
</style>
