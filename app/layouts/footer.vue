<template>
  <footer class="border-t border-border bg-muted/30">
    <div class="container mx-auto max-w-7xl px-4 py-8">
      <p class="text-center text-sm text-muted-foreground">
        © {{ currentYear }} KB Clean. {{ $t('footer.copyright') }}
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = computed((): number => new Date().getFullYear())
</script>
