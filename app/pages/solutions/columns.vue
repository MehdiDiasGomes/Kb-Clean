<template>
  <div>
    <SolutionsSolutionHero
      :subtitle="$t('columns.hero.subtitle')"
      :cta-text="$t('columns.hero.cta')"
      cta-link="/contact"
      :cta-aria-label="$t('columns.hero.ctaLabel')"
      background-image="/images/columns/hero-bg.webp"
      :background-image-alt="$t('columns.hero.backgroundImageAlt')"
      image-alt=""
    >
      <template #title>
        {{ $t('columns.hero.titleBefore') }}
        <UnderlinedText class="pb-2">{{ $t('columns.hero.titleHighlight') }}</UnderlinedText>
      </template>
    </SolutionsSolutionHero>

    <SolutionsSolutionFeatures
      :title="$t('columns.features.title')"
      :description-line1="$t('columns.features.descriptionLine1')"
      :description-line2="$t('columns.features.descriptionLine2')"
      :features="features"
    />

    <SolutionsSolutionTextBlock
      :title="$t('columns.process.title')"
      :description-line1="$t('columns.process.descriptionLine1')"
      :description-line2="$t('columns.process.descriptionLine2')"
    />

    <SolutionsSolutionSteps :steps="steps" />
  </div>
</template>

<script setup lang="ts">
import type { Feature } from '@/components/solutions/SolutionFeatures.vue'
import type { ProcessStep } from '@/components/solutions/SolutionSteps.vue'

definePageMeta({
  layout: 'default',
})

const { t } = useI18n()

useSeoMeta({
  title: () => t('seo.solutions.columns.title'),
  description: () => t('seo.solutions.columns.description'),
  ogTitle: () => t('seo.solutions.columns.title'),
  ogDescription: () => t('seo.solutions.columns.description'),
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

const features = computed((): Feature[] => [
  {
    title: t('columns.features.items.washer.title'),
    description: t('columns.features.items.washer.description'),
    icon: 'Truck',
  },
  {
    title: t('columns.features.items.pressure.title'),
    description: t('columns.features.items.pressure.description'),
    icon: 'Droplets',
  },
  {
    title: t('columns.features.items.recycling.title'),
    description: t('columns.features.items.recycling.description'),
    icon: 'Recycle',
  },
  {
    title: t('columns.features.items.training.title'),
    description: t('columns.features.items.training.description'),
    icon: 'GraduationCap',
  },
])

const steps = computed((): ProcessStep[] => [
  {
    number: 1,
    title: t('columns.steps.interior.title'),
    description: t('columns.steps.interior.description'),
    icon: '/images/rolling_bins/icons/interior-washing.webp',
  },
  {
    number: 2,
    title: t('columns.steps.exterior.title'),
    description: t('columns.steps.exterior.description'),
    icon: '/images/rolling_bins/icons/exterior-washing.webp',
  },
  {
    number: 3,
    title: t('columns.steps.opening.title'),
    description: t('columns.steps.opening.description'),
    icon: '/images/rolling_bins/icons/finishing-touches.webp',
  },
])
</script>
