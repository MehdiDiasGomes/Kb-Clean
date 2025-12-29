<template>
  <div>
    <PageContainer>
      <section class="page-padding-x py-16 lg:py-24">
        <div class="mx-auto max-w-7xl">
          <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div class="space-y-6 lg:space-y-8">
              <h1 class="font-heading text-4xl text-foreground sm:text-5xl lg:text-6xl">
                {{ $t('rollingBins.hero.title') }}
              </h1>
              <p class="text-lg text-muted-foreground sm:text-xl">
                {{ $t('rollingBins.hero.subtitle') }}
              </p>
              <div>
                <Button as-child size="lg">
                  <NuxtLink to="/contact" :aria-label="$t('rollingBins.hero.ctaLabel')">
                    {{ $t('rollingBins.hero.cta') }}
                  </NuxtLink>
                </Button>
              </div>
            </div>

            <div class="relative">
              <NuxtImg
                src="/images/rolling_bins/hero.webp"
                :alt="$t('rollingBins.hero.imageAlt')"
                class="h-auto w-full rounded-lg object-cover shadow-2xl"
                loading="eager"
                width="800"
                height="600"
              />
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'

definePageMeta({
  layout: 'default',
})
</script>
