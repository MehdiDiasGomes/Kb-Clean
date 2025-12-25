<template>
  <component
    :is="iconComponent"
    :size="props.size"
    :color="props.color"
    :stroke-width="props.strokeWidth"
  />
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import * as icons from 'lucide-vue-next'

interface Props {
  name: keyof typeof icons
  size?: number
  color?: string
  strokeWidth?: number
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  color: 'currentColor',
  strokeWidth: 2,
})

const iconComponent = computed((): Component => {
  const icon = icons[props.name]
  return icon as unknown as Component
})
</script>
