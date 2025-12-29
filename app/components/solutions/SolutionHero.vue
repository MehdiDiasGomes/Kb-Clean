<template>
  <section class="hero-fade-in relative bg-linear-to-br from-background to-muted">
    <PageContainer>
      <div class="page-padding-x py-16 lg:py-24">
        <div class="mx-auto max-w-7xl">
          <div class="grid items-center gap-8 lg:grid-cols-12 lg:gap-16">
            <div class="space-y-6 lg:col-span-5 lg:space-y-8">
              <h1 class="font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
                <slot name="title">
                  {{ title }}
                </slot>
              </h1>

              <div v-if="stats" class="rounded-lg bg-primary/10 p-6 backdrop-blur-sm">
                <p class="text-xl font-semibold text-primary sm:text-2xl">
                  {{ stats }}
                </p>
              </div>

              <p v-if="subtitle" class="text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {{ subtitle }}
              </p>

              <div v-if="ctaText && ctaLink">
                <ButtonCta :to="ctaLink" :aria-label="ctaAriaLabel">
                  {{ ctaText }}
                </ButtonCta>
              </div>
            </div>

            <div class="lg:col-span-7">
              <NuxtImg
                v-if="imageSrc"
                :src="imageSrc"
                :alt="imageAlt"
                class="aspect-4/3 h-auto w-full object-cover"
                loading="eager"
                width="800"
                height="600"
              />
              <div
                v-else
                class="flex aspect-4/3 w-full items-center justify-center bg-linear-to-br from-primary/30 to-secondary/30"
              >
                <div class="text-center">
                  <p class="text-xl font-semibold text-foreground">
                    {{ imagePlaceholder }}
                  </p>
                  <p class="mt-2 text-sm text-muted-foreground">
                    {{ imageDescription }}
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
export interface SolutionHeroProps {
  title?: string
  subtitle?: string
  stats?: string
  ctaText?: string
  ctaLink?: string
  ctaAriaLabel?: string
  imageSrc?: string
  imageAlt: string
  imagePlaceholder?: string
  imageDescription?: string
}

withDefaults(defineProps<SolutionHeroProps>(), {
  title: '',
  subtitle: '',
  stats: '',
  ctaText: '',
  ctaLink: '',
  ctaAriaLabel: '',
  imageSrc: '',
  imagePlaceholder: 'Image Required',
  imageDescription: 'Please provide image',
})
</script>

<style scoped>
.hero-fade-in {
  animation: fadeIn 1.5s cubic-bezier(0.22, 1, 0.36, 1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
