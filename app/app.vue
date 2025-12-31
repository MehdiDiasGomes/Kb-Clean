<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Toaster position="top-right" rich-colors />
  </div>
</template>

<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'
</script>
