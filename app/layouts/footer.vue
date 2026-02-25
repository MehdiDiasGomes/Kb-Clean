<template>
  <footer class="border-t border-border bg-muted/30">
    <div class="container mx-auto max-w-7xl px-4 py-8">
      <div class="flex flex-col items-center gap-4">
        <nav class="flex flex-wrap justify-center gap-4" :aria-label="$t('nav.mainNavAriaLabel')">
          <NuxtLink
            :to="localePath('/privacy')"
            class="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {{ $t('footer.privacy') }}
          </NuxtLink>
          <span class="text-muted-foreground">•</span>
          <NuxtLink
            :to="localePath('/legal')"
            class="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {{ $t('footer.legal') }}
          </NuxtLink>
          <span class="text-muted-foreground">•</span>
          <NuxtLink
            :to="localePath('/faq')"
            class="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {{ $t('footer.faq') }}
          </NuxtLink>
        </nav>
        <p class="text-center text-sm text-muted-foreground">
          © {{ currentYear }} KleanBac. {{ $t('footer.copyright') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = computed((): number => new Date().getFullYear())
const localePath = useLocalePath()
</script>
