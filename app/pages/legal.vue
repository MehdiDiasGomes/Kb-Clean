<template>
  <div class="page-padding-x min-h-screen bg-background py-16 md:py-24">
    <div ref="elementRef" :class="['mx-auto max-w-4xl scroll-animate', isVisible && 'is-visible']">
      <div class="space-y-12">
        <div class="space-y-4 text-center">
          <h1 class="font-heading text-3xl text-foreground sm:text-4xl md:text-5xl">
            {{ $t('legal.title') }}
          </h1>
          <p class="text-sm text-muted-foreground">
            {{ $t('legal.lastUpdate') }} {{ lastUpdateDate }}
          </p>
        </div>

        <div class="space-y-8">
          <section class="space-y-4">
            <h2 class="font-heading text-2xl font-bold text-foreground">
              {{ $t('legal.publisher.title') }}
            </h2>
            <div class="space-y-2 text-muted-foreground">
              <p>
                <strong class="text-foreground">{{ $t('legal.publisher.company') }}:</strong>
                KB Clean
              </p>
              <p>
                <strong class="text-foreground">{{ $t('legal.publisher.address') }}:</strong>
                {{ $t('contact.info.address.line1') }}, {{ $t('contact.info.address.line2') }}
              </p>
              <p>
                <strong class="text-foreground">{{ $t('legal.publisher.email') }}:</strong>
                {{ $t('contact.info.email.address') }}
              </p>
              <p>
                <strong class="text-foreground">{{ $t('legal.publisher.phone') }}:</strong>
                {{ $t('contact.info.phone.display') }}
              </p>
            </div>
          </section>

          <section class="space-y-4">
            <h2 class="font-heading text-2xl font-bold text-foreground">
              {{ $t('legal.hosting.title') }}
            </h2>
            <p class="text-muted-foreground">
              {{ $t('legal.hosting.content') }}
            </p>
          </section>

          <section class="space-y-4">
            <h2 class="font-heading text-2xl font-bold text-foreground">
              {{ $t('legal.intellectualProperty.title') }}
            </h2>
            <p class="text-muted-foreground">
              {{ $t('legal.intellectualProperty.content') }}
            </p>
          </section>

          <section class="space-y-4">
            <h2 class="font-heading text-2xl font-bold text-foreground">
              {{ $t('legal.personalData.title') }}
            </h2>
            <p class="text-muted-foreground">
              {{ $t('legal.personalData.content') }}
            </p>
          </section>

          <section class="space-y-4">
            <h2 class="font-heading text-2xl font-bold text-foreground">
              {{ $t('legal.cookies.title') }}
            </h2>
            <p class="text-muted-foreground">
              {{ $t('legal.cookies.content') }}
            </p>
          </section>

          <section class="space-y-4">
            <h2 class="font-heading text-2xl font-bold text-foreground">
              {{ $t('legal.liability.title') }}
            </h2>
            <p class="text-muted-foreground">
              {{ $t('legal.liability.content') }}
            </p>
          </section>

          <section class="space-y-4">
            <h2 class="font-heading text-2xl font-bold text-foreground">
              {{ $t('legal.applicableLaw.title') }}
            </h2>
            <p class="text-muted-foreground">
              {{ $t('legal.applicableLaw.content') }}
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { elementRef, isVisible } = useScrollAnimation(0.1)

const lastUpdateDate = computed((): string => '04/01/2025')

definePageMeta({
  layout: 'default',
})

useSeoMeta({
  title: 'Mentions légales - KB Clean',
  description:
    "Mentions légales de KB Clean. Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation du site.",
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
