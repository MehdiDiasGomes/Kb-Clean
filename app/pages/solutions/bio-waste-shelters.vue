<template>
  <div>
    <SolutionsSolutionHero
      :subtitle="$t('bioWasteShelters.hero.subtitle')"
      :stats="$t('bioWasteShelters.hero.stats')"
      :cta-text="$t('bioWasteShelters.hero.cta')"
      cta-link="/contact"
      :cta-aria-label="$t('bioWasteShelters.hero.ctaLabel')"
      image-src="/images/bio_waste_shelters/hero.webp"
      :image-alt="$t('bioWasteShelters.hero.imageAlt')"
      :image-placeholder="$t('bioWasteShelters.hero.imagePlaceholder')"
      :image-description="$t('bioWasteShelters.hero.imageDescription')"
    >
      <template #title>
        {{ $t('bioWasteShelters.hero.titleBefore') }}
        <UnderlinedText>{{ $t('bioWasteShelters.hero.titleHighlight') }}</UnderlinedText>
      </template>
    </SolutionsSolutionHero>

    <SolutionsSolutionFeatures
      :title="$t('bioWasteShelters.features.title')"
      :description-line1="$t('bioWasteShelters.features.descriptionLine1')"
      :description-line2="$t('bioWasteShelters.features.descriptionLine2')"
      :features="features"
    />

    <SolutionsSolutionTextBlock
      :title="$t('bioWasteShelters.process.title')"
      :description-line1="$t('bioWasteShelters.process.descriptionLine1')"
      :description-line2="$t('bioWasteShelters.process.descriptionLine2')"
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

const features = computed((): Feature[] => [
  {
    title: t('bioWasteShelters.features.items.washer.title'),
    description: t('bioWasteShelters.features.items.washer.description'),
    icon: 'Truck',
  },
  {
    title: t('bioWasteShelters.features.items.pressure.title'),
    description: t('bioWasteShelters.features.items.pressure.description'),
    icon: 'Droplets',
  },
  {
    title: t('bioWasteShelters.features.items.recycling.title'),
    description: t('bioWasteShelters.features.items.recycling.description'),
    icon: 'Recycle',
  },
  {
    title: t('bioWasteShelters.features.items.training.title'),
    description: t('bioWasteShelters.features.items.training.description'),
    icon: 'GraduationCap',
  },
])

const steps = computed((): ProcessStep[] => [
  {
    number: 1,
    title: t('bioWasteShelters.steps.interior.title'),
    description: t('bioWasteShelters.steps.interior.description'),
    icon: '/images/rolling_bins/icons/interior-washing.webp',
  },
  {
    number: 2,
    title: t('bioWasteShelters.steps.exterior.title'),
    description: t('bioWasteShelters.steps.exterior.description'),
    icon: '/images/rolling_bins/icons/exterior-washing.webp',
  },
  {
    number: 3,
    title: t('bioWasteShelters.steps.hatch.title'),
    description: t('bioWasteShelters.steps.hatch.description'),
    icon: '/images/rolling_bins/icons/finishing-touches.webp',
  },
])
</script>
