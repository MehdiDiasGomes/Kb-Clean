<template>
  <section class="page-padding-x bg-muted py-16 md:py-24">
    <div ref="elementRef" :class="['mx-auto max-w-7xl scroll-animate', isVisible && 'is-visible']">
      <div class="space-y-16">
        <div class="space-y-8 text-center">
          <h2
            class="font-subheading text-2xl italic text-foreground sm:text-3xl md:text-4xl lg:text-5xl"
          >
            {{ $t('clients.sectionTitle.prefix') }}
            <strong>{{ $t('clients.sectionTitle.bold') }}</strong>
            {{ $t('clients.sectionTitle.suffix') }}
          </h2>

          <div class="mx-auto max-w-3xl space-y-4">
            <p class="text-base text-muted-foreground md:text-lg">
              {{ $t('clients.intro.line1.prefix') }}
              <strong>{{ $t('clients.intro.line1.bold1') }}</strong>
              {{ $t('clients.intro.line1.middle')
              }}<strong>{{ $t('clients.intro.line1.bold2') }}</strong>
              {{ $t('clients.intro.line1.suffix') }}
            </p>
            <p class="text-base text-muted-foreground md:text-lg">
              {{ $t('clients.intro.line2.prefix') }}
              <strong>{{ $t('clients.intro.line2.bold1') }}</strong>
              {{ $t('clients.intro.line2.middle') }}
              <strong>{{ $t('clients.intro.line2.bold2') }}</strong>
              {{ $t('clients.intro.line2.middle2') }}
              <strong>{{ $t('clients.intro.line2.bold3') }}</strong>
              {{ $t('clients.intro.line2.suffix') }}
            </p>
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-8">
          <div
            v-for="client in clientCards"
            :key="client.titleKey"
            class="flex w-full flex-col items-center space-y-6 rounded-2xl bg-card p-8 text-center transition-shadow hover:shadow-lg md:w-[calc(50%-1rem)] nth-3:md:w-full"
          >
            <div class="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <NuxtImg
                v-if="client.image"
                :src="client.image"
                :alt="$t(client.titleKey)"
                class="h-10 w-10 object-contain"
                width="40"
                height="40"
              />
              <Icon
                v-else
                :name="client.icon ?? 'Building2'"
                class="h-8 w-8 text-primary"
                aria-hidden="true"
              />
            </div>
            <h3 class="text-xl font-bold text-card-foreground">
              {{ $t(client.titleKey) }}
            </h3>
            <p class="text-sm leading-relaxed text-muted-foreground">
              {{ $t(client.descriptionKey) }}
            </p>
          </div>
        </div>

        <div class="flex justify-center">
          <CtaFreeDemo />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { clientCards } from '@/constants/clients'

const { elementRef, isVisible } = useScrollAnimation(0.4)
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
