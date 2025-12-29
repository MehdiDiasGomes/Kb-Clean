<template>
  <div>
    <SolutionsSolutionHero
      :subtitle="$t('rollingBins.hero.subtitle')"
      :stats="$t('rollingBins.hero.stats')"
      :cta-text="$t('rollingBins.hero.cta')"
      cta-link="/contact"
      :cta-aria-label="$t('rollingBins.hero.ctaLabel')"
      image-src="/images/rolling_bins/hero.webp"
      :image-alt="$t('rollingBins.hero.imageAlt')"
      :image-placeholder="$t('rollingBins.hero.imagePlaceholder')"
      :image-description="$t('rollingBins.hero.imageDescription')"
    >
      <template #title>
        {{ $t('rollingBins.hero.titleBefore') }}
        <UnderlinedText>{{ $t('rollingBins.hero.titleHighlight') }}</UnderlinedText>
      </template>
    </SolutionsSolutionHero>

    <SolutionsSolutionFeatures
      :title="$t('rollingBins.features.title')"
      :description-line1="$t('rollingBins.features.descriptionLine1')"
      :description-line2="$t('rollingBins.features.descriptionLine2')"
      :features="features"
    />
  </div>
</template>

<script setup lang="ts">
import type { Feature } from '@/components/solutions/SolutionFeatures.vue'

definePageMeta({
  layout: 'default',
})

const { t } = useI18n()

const features = computed((): Feature[] => [
  {
    title: t('rollingBins.features.items.washer.title'),
    description: t('rollingBins.features.items.washer.description'),
    icon: 'Truck',
  },
  {
    title: t('rollingBins.features.items.pressure.title'),
    description: t('rollingBins.features.items.pressure.description'),
    icon: 'Droplets',
  },
  {
    title: t('rollingBins.features.items.recycling.title'),
    description: t('rollingBins.features.items.recycling.description'),
    icon: 'Recycle',
  },
  {
    title: t('rollingBins.features.items.training.title'),
    description: t('rollingBins.features.items.training.description'),
    icon: 'GraduationCap',
  },
])
</script>
