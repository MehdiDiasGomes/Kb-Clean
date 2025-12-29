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
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
</script>
