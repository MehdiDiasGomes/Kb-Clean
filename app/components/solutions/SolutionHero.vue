<template>
  <section class="relative">
    <NuxtImg
      v-if="backgroundImage"
      :src="backgroundImage"
      :alt="backgroundImageAlt"
      class="absolute inset-0 h-full w-full object-cover"
      width="1920"
      height="1080"
      loading="eager"
      aria-hidden="true"
    />

    <div
      v-if="backgroundImage"
      class="absolute inset-0 bg-linear-to-br from-primary/40 to-primary/90"
      aria-hidden="true"
    />

    <PageContainer>
      <div
        :class="[
          'relative page-padding-x py-16 lg:py-24',
          backgroundImage ? 'min-h-screen flex items-center' : '',
        ]"
      >
        <div class="mx-auto max-w-7xl">
          <div
            :class="[
              'grid items-center gap-8',
              backgroundImage ? 'lg:grid-cols-1' : 'lg:grid-cols-12 lg:gap-16',
            ]"
          >
            <div
              :class="[
                'fade-in-left space-y-6 lg:space-y-8',
                backgroundImage ? 'mx-auto max-w-3xl text-center' : 'lg:col-span-5',
              ]"
            >
              <h1
                :class="[
                  'font-heading text-4xl font-bold sm:text-5xl lg:text-6xl',
                  backgroundImage ? 'text-white' : 'text-foreground',
                ]"
              >
                <slot name="title">
                  {{ title }}
                </slot>
              </h1>

              <p
                v-if="subtitle"
                :class="[
                  'text-lg leading-relaxed sm:text-xl',
                  backgroundImage ? 'text-white/90' : 'text-muted-foreground',
                ]"
              >
                {{ subtitle }}
              </p>

              <div v-if="ctaText && ctaLink">
                <ButtonCta
                  :to="ctaLink"
                  :aria-label="ctaAriaLabel"
                  :variant="backgroundImage ? 'hero' : 'default'"
                >
                  {{ ctaText }}
                </ButtonCta>
              </div>
            </div>

            <div v-if="!backgroundImage" class="fade-in-right lg:col-span-7">
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
  backgroundImage?: string
  backgroundImageAlt?: string
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
  backgroundImage: '',
  backgroundImageAlt: '',
})
</script>

<style scoped>
.fade-in-left {
  animation: fadeInLeft 1s cubic-bezier(0.22, 1, 0.36, 1);
}

.fade-in-right {
  animation: fadeInRight 1s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
