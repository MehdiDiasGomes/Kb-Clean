<template>
  <section class="page-padding-x bg-muted py-16 md:py-24">
    <div class="mx-auto max-w-7xl">
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

        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="client in clientCards"
            :key="client.titleKey"
            class="flex flex-col items-center space-y-4 rounded-2xl bg-card p-6 text-center transition-shadow hover:shadow-lg"
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
              <Icon v-else :name="client.icon!" class="h-8 w-8 text-primary" aria-hidden="true" />
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
          <NuxtLink
            to="/contact"
            class="group inline-flex items-center gap-2 rounded-full border-2 border-secondary bg-secondary px-8 py-4 text-lg font-bold text-secondary-foreground transition-all hover:bg-transparent hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            :aria-label="$t('clients.ctaLabel')"
          >
            {{ $t('clients.cta') }}
            <Icon
              name="ArrowRight"
              class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { clientCards } from '@/constants/clients'
</script>
