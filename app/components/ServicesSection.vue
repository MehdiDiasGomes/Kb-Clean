<template>
  <section class="page-padding-x bg-background py-16 md:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="space-y-16">
        <div class="space-y-8 text-center">
          <h2
            class="font-subheading text-2xl italic text-foreground sm:text-3xl md:text-4xl lg:text-5xl"
          >
            {{ $t('services.sectionTitle') }}
          </h2>

          <div class="mx-auto max-w-3xl space-y-4">
            <p class="text-base text-muted-foreground md:text-lg">
              {{ $t('services.intro.line1') }}
            </p>
            <p class="text-base text-muted-foreground md:text-lg">
              {{ $t('services.intro.line2') }}
            </p>
            <p class="text-base font-semibold text-foreground md:text-lg">
              {{ $t('services.intro.line3') }}
            </p>
          </div>
        </div>

        <div class="grid gap-8 md:grid-cols-3">
          <div
            v-for="service in serviceCards"
            :key="service.href"
            class="flex flex-col items-center space-y-6 rounded-3xl bg-primary px-6 py-10 text-center shadow-lg transition-transform hover:scale-105"
          >
            <div class="flex h-24 w-24 items-center justify-center">
              <Icon :name="service.icon" class="h-20 w-20 text-card" aria-hidden="true" />
            </div>
            <h3 class="text-2xl font-bold text-card">
              {{ $t(service.titleKey) }}
            </h3>
            <p class="flex-1 text-base leading-relaxed text-primary-foreground">
              {{ $t(service.descriptionKey) }}
            </p>
            <NuxtLink
              :to="service.href"
              class="group inline-flex items-center gap-2 rounded-full border-2 border-secondary bg-secondary px-6 py-3 text-base font-bold text-secondary-foreground transition-all hover:bg-transparent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              :aria-label="$t(service.ctaLabelKey)"
            >
              {{ $t(service.ctaKey) }}
              <Icon
                name="ArrowRight"
                class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { serviceCards } from '@/constants/services'
</script>
