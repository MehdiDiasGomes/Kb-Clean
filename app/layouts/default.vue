<template>
  <div class="flex min-h-screen flex-col">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      {{ $t('common.skipToContent') }}
    </a>
    <Navbar />
    <main id="main-content" class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from './footer.vue'
import Navbar from './navbar.vue'
</script>
