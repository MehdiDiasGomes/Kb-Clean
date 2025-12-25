<template>
  <div class="container mx-auto max-w-7xl px-4 py-16">
    <section class="text-center">
      <h1 class="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
        {{ $t('nav.home') }} - KB Clean
      </h1>
      <p class="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
        Bienvenue sur notre site de nettoyage professionnel.
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <NuxtLink
          to="/qui-sommes-nous"
          class="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          {{ $t('nav.about') }}
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="rounded-lg border border-input bg-card px-6 py-3 font-medium text-card-foreground transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          {{ $t('nav.contact') }}
        </NuxtLink>
      </div>
    </section>

    <section class="mt-20 grid gap-8 md:grid-cols-3">
      <div class="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md">
        <h2 class="mb-3 text-xl font-semibold text-card-foreground">
          {{ $t('nav.services.binWashing') }}
        </h2>
        <p class="text-muted-foreground">
          Service professionnel de lavage de bacs à déchets pour entreprises et particuliers.
        </p>
      </div>
      <div class="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md">
        <h2 class="mb-3 text-xl font-semibold text-card-foreground">
          {{ $t('nav.services.windowCleaning') }}
        </h2>
        <p class="text-muted-foreground">
          Nettoyage de vitres pour locaux professionnels et résidentiels.
        </p>
      </div>
      <div class="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md">
        <h2 class="mb-3 text-xl font-semibold text-card-foreground">
          {{ $t('nav.services.facilityMaintenance') }}
        </h2>
        <p class="text-muted-foreground">
          Entretien complet de vos locaux avec des produits écologiques.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
</script>
