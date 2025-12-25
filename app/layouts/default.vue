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
import Navbar from './navbar.vue'
import Footer from './footer.vue'
</script>
