<template>
  <div class="page-padding-x min-h-screen bg-background py-16 md:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="space-y-12">
        <div class="space-y-4 text-center">
          <h1 class="font-heading text-3xl text-foreground sm:text-4xl md:text-5xl">
            {{ $t('faq.title') }}
          </h1>
          <p class="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            {{ $t('faq.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
          <div
            ref="accordionRef"
            :class="['scroll-animate-left', isAccordionVisible && 'is-visible']"
          >
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
          </div>

          <div
            ref="sidebarRef"
            :class="[
              'flex flex-col items-center space-y-6 scroll-animate-right lg:sticky lg:top-24 lg:self-start',
              isSidebarVisible && 'is-visible',
            ]"
          >
            <NuxtImg
              src="/images/illustrations/faq.svg"
              alt="FAQ illustration"
              class="h-auto w-full max-w-64"
            />
            <div class="space-y-4 text-center">
              <h2 class="text-2xl font-bold text-foreground">
                {{ $t('faq.sidebar.title') }}
              </h2>
              <p class="text-muted-foreground">
                {{ $t('faq.sidebar.subtitle') }}
              </p>
              <ButtonCta to="/contact" :aria-label="$t('faq.sidebar.ctaLabel')">
                {{ $t('faq.sidebar.cta') }}
              </ButtonCta>
            </div>
          </div>
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

const { elementRef: accordionRef, isVisible: isAccordionVisible } = useScrollAnimation(0.1)
const { elementRef: sidebarRef, isVisible: isSidebarVisible } = useScrollAnimation(0.1)

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
.scroll-animate-left {
  opacity: 0;
  transform: translateX(-40px);
  transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.scroll-animate-left.is-visible {
  opacity: 1;
  transform: translateX(0);
}

.scroll-animate-right {
  opacity: 0;
  transform: translateX(40px);
  transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s;
}

.scroll-animate-right.is-visible {
  opacity: 1;
  transform: translateX(0);
}
</style>
