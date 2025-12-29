<template>
  <span class="relative inline-block">
    <span class="relative z-10">
      <slot />
    </span>
    <svg
      class="absolute -bottom-2 left-0 w-full"
      viewBox="0 0 200 20"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M 0 15 Q 50 12, 100 13 T 200 15"
        stroke="currentColor"
        stroke-width="2"
        fill="none"
        class="text-primary"
      />
      <path
        d="M 0 18 Q 50 15, 100 16 T 200 18"
        stroke="currentColor"
        stroke-width="2"
        fill="none"
        class="text-primary"
      />
    </svg>
  </span>
</template>

<script setup lang="ts"></script>
