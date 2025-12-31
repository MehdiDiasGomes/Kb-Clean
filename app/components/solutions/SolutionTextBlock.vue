<template>
  <section class="bg-background py-16 lg:py-24">
    <PageContainer>
      <div ref="elementRef" :class="['page-padding-x scroll-animate', isVisible && 'is-visible']">
        <div class="mx-auto max-w-4xl space-y-8 text-center">
          <h2 class="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            {{ title }}
          </h2>
          <div class="space-y-4 text-lg text-muted-foreground sm:text-xl">
            <p>{{ descriptionLine1 }}</p>
            <p>{{ descriptionLine2 }}</p>
          </div>
        </div>
      </div>
    </PageContainer>
  </section>
</template>

<script setup lang="ts">
export interface SolutionTextBlockProps {
  title: string
  descriptionLine1: string
  descriptionLine2: string
}

defineProps<SolutionTextBlockProps>()

const { elementRef, isVisible } = useScrollAnimation(0.3)
</script>

<style scoped>
.scroll-animate {
  opacity: 0;
  transform: translateY(30px);
}

.scroll-animate.is-visible {
  opacity: 1;
  transform: translateY(0);
  transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);
}
</style>
