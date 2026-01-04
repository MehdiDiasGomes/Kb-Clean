<template>
  <div class="page-padding-x min-h-screen bg-background py-16 md:py-24">
    <div ref="elementRef" :class="['mx-auto max-w-7xl scroll-animate', isVisible && 'is-visible']">
      <div class="space-y-16">
        <div class="space-y-8 text-center">
          <h1
            class="font-heading text-3xl text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {{ $t('formulas.sectionTitle') }}
          </h1>

          <p class="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">
            {{ $t('formulas.intro') }}
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="formula in formulaCards"
            :key="formula.id"
            class="flex flex-col items-start space-y-6 rounded-3xl bg-card p-8 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            <div class="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Icon :name="formula.icon" class="h-8 w-8 text-primary" aria-hidden="true" />
            </div>
            <h2 class="text-xl font-bold text-card-foreground">
              {{ $t(formula.titleKey) }}
            </h2>
            <p class="flex-1 text-sm leading-relaxed text-muted-foreground">
              {{ $t(formula.descriptionKey) }}
            </p>
          </div>
        </div>

        <div class="flex justify-center pt-8">
          <ButtonCta to="/contact" :aria-label="$t('clients.ctaLabel')">
            {{ $t('clients.cta') }}
          </ButtonCta>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formulaCards } from '@/constants/formulas'

const { elementRef, isVisible } = useScrollAnimation(0.4)

definePageMeta({
  layout: 'default',
})

useSeoMeta({
  title: 'Nos formules - KB Clean',
  description:
    'Découvrez toutes nos formules de nettoyage et désinfection de bacs à déchets : ponctuelle, mensuelle, trimestrielle, semestrielle, annuelle et sur mesure.',
})
</script>

<style scoped>
.scroll-animate {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.scroll-animate.is-visible {
  opacity: 1;
  transform: translateX(0);
}
</style>
