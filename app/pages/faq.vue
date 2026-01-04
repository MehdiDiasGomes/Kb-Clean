<template>
  <div class="page-padding-x min-h-screen bg-background py-16 md:py-24">
    <div ref="elementRef" :class="['mx-auto max-w-4xl scroll-animate', isVisible && 'is-visible']">
      <div class="space-y-12">
        <div class="space-y-4 text-center">
          <h1 class="font-heading text-3xl text-foreground sm:text-4xl md:text-5xl">
            {{ $t('faq.title') }}
          </h1>
          <p class="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            {{ $t('faq.subtitle') }}
          </p>
        </div>

        <Accordion type="single" class="w-full space-y-4" collapsible>
          <AccordionItem
            v-for="(item, index) in $tm('faq.questions')"
            :key="index"
            :value="`item-${index}`"
            class="rounded-lg border border-border bg-card px-6 last:border-b"
          >
            <AccordionTrigger class="text-left font-medium text-foreground hover:no-underline">
              {{ item.question }}
            </AccordionTrigger>
            <AccordionContent class="text-muted-foreground">
              <div v-if="item.answer" class="pt-2">
                {{ item.answer }}
              </div>
              <div v-if="item.details" class="space-y-2 pt-2">
                <p>{{ item.details.intro }}</p>
                <ul class="list-disc space-y-1 pl-6">
                  <li v-for="(detail, detailIndex) in item.details.items" :key="detailIndex">
                    {{ detail }}
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div class="mt-12 rounded-lg bg-muted/50 p-8 text-center">
          <h2 class="mb-4 text-xl font-bold text-foreground">
            {{ $t('faq.contactSection.title') }}
          </h2>
          <p class="mb-6 text-muted-foreground">
            {{ $t('faq.contactSection.description') }}
          </p>
          <ButtonCta to="/contact" :aria-label="$t('faq.contactSection.ctaLabel')">
            {{ $t('faq.contactSection.cta') }}
          </ButtonCta>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const { elementRef, isVisible } = useScrollAnimation(0.1)

definePageMeta({
  layout: 'default',
})

useSeoMeta({
  title: 'FAQ - KB Clean',
  description:
    'Questions fréquentes sur nos services de nettoyage de bacs à déchets. Efficacité, écologie, fréquence, durée des interventions.',
})
</script>

<style scoped>
.scroll-animate {
  opacity: 0;
  transform: translateY(20px);
  transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);
}

.scroll-animate.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
