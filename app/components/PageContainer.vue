<template>
  <div :class="containerClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
type ContainerSize = 'default' | 'narrow' | 'wide' | 'full'

const props = withDefaults(
  defineProps<{
    size?: ContainerSize
    noPadding?: boolean
  }>(),
  {
    size: 'default',
    noPadding: false,
  },
)

const containerClass = computed(() => {
  const classes = []

  if (!props.noPadding) {
    classes.push('page-padding-x')
  }

  if (props.size !== 'full') {
    classes.push('mx-auto')
  }

  switch (props.size) {
    case 'narrow':
      classes.push('max-w-4xl')
      break
    case 'wide':
      classes.push('max-w-screen-2xl')
      break
    case 'full':
      break
    default:
      classes.push('max-w-7xl')
  }

  return classes.join(' ')
})
</script>
