<template>
  <section class="relative w-full hero-fade-in">
    <div class="relative w-full h-screen">
      <NuxtImg
        src="/images/kb_clean_hero.webp"
        :alt="$t('hero.imageAlt')"
        class="w-full h-screen object-cover"
        width="1920"
        loading="eager"
        fetchpriority="high"
      />

      <div
        class="absolute inset-0 bg-linear-to-br from-primary/50 to-primary/90"
        aria-hidden="true"
      />

      <div class="absolute inset-0 flex items-start justify-start">
        <div class="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-5xl py-12 sm:py-16 md:py-20">
          <div class="flex flex-col items-start space-y-6 sm:space-y-8">
            <div class="space-y-3 sm:space-y-4">
              <h1
                class="text-4xl font-heading tracking-wide text-white sm:text-5xl md:text-6xl"
              >
                {{ $t('hero.title') }}
              </h1>
              <p
                class="text-4xl font-heading tracking-wide text-white sm:text-5xl md:text-5xl"
              >
                {{ $t('hero.titleHighlight') }}
              </p>
            </div>

            <p
              class="text-base font-body text-white/90 sm:text-lg md:text-xl max-w-3xl leading-relaxed"
            >
              {{ $t('hero.subtitle') }}
            </p>

            <div class="flex flex-col gap-4 sm:flex-row pt-4">
              <NuxtLink
                to="/contact"
                class="group relative inline-flex items-center gap-2 text-base sm:text-lg font-bold text-white"
              >
                <span class="relative">
                  {{ $t('hero.ctaPrimary') }}
                  <span
                    class="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full"
                    aria-hidden="true"
                  />
                </span>
                <Icon
                  name="ArrowRight"
                  class="h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-2"
                  aria-hidden="true"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero-fade-in {
  animation: fadeIn 1.5s cubic-bezier(0.22, 1, 0.36, 1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
