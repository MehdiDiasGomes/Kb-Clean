<template>
  <div class="flex min-h-screen flex-col">
    <Navbar />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from './footer.vue'
import Navbar from './navbar.vue'
</script>
