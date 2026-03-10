<template>
  <NuxtLink
    :to="{ path: '/contact', query: { type: 'demo' } }"
    :aria-label="$t('clients.ctaLabel')"
    class="group relative flex flex-col items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 px-8 py-6 text-center shadow-lg transition-all duration-300 hover:scale-104 active:scale-90 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:flex-row sm:gap-4 sm:px-10 sm:py-5"
  >
    <div
      class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-12"
    >
      <Icon name="CalendarCheck" class="h-6 w-6 text-white" aria-hidden="true" />
    </div>
    <div class="flex flex-col items-center gap-1 sm:items-start">
      <span class="text-lg font-bold text-white sm:text-xl">
        {{ $t('clients.cta') }}
      </span>
      <span class="text-sm text-white/80">
        {{ $t('clients.ctaSubtext') }}
      </span>
    </div>
    <Icon
      name="ArrowRight"
      class="hidden h-6 w-6 text-white transition-transform duration-300 group-hover:translate-x-1 sm:block"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      aria-hidden="true"
    />
  </NuxtLink>
</template>

<script setup lang="ts"></script>
