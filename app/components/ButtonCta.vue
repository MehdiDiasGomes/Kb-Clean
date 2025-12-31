<template>
  <NuxtLink
    :to="props.to"
    :class="[
      'group inline-flex items-center gap-2 rounded-full border-2 border-secondary bg-secondary px-8 py-4 text-lg font-bold text-secondary-foreground transition-all hover:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      props.variant === 'hero'
        ? 'hover:border-white hover:text-white'
        : 'hover:text-secondary',
    ]"
    :aria-label="props.ariaLabel"
  >
    <slot>{{ props.text }}</slot>
    <Icon
      name="ArrowRight"
      class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    to: string
    ariaLabel?: string
    text?: string
    variant?: 'default' | 'hero'
  }>(),
  {
    ariaLabel: '',
    text: '',
    variant: 'default',
  },
)
</script>
