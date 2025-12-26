<template>
  <div>
    <HeroSection />

    <section class="py-16">
      <PageContainer>
        <div class="grid gap-8 md:grid-cols-3">
          <div
            class="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
          >
            <h2 class="mb-3 text-xl font-semibold text-card-foreground">
              {{ $t('nav.services.binWashing') }}
            </h2>
            <p class="text-muted-foreground">
              Service professionnel de lavage de bacs à déchets pour entreprises et particuliers.
            </p>
          </div>
          <div
            class="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
          >
            <h2 class="mb-3 text-xl font-semibold text-card-foreground">
              {{ $t('nav.services.windowCleaning') }}
            </h2>
            <p class="text-muted-foreground">
              Nettoyage de vitres pour locaux professionnels et résidentiels.
            </p>
          </div>
          <div
            class="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
          >
            <h2 class="mb-3 text-xl font-semibold text-card-foreground">
              {{ $t('nav.services.facilityMaintenance') }}
            </h2>
            <p class="text-muted-foreground">
              Entretien complet de vos locaux avec des produits écologiques.
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
</script>
