<template>
  <section class="relative w-full h-screen overflow-hidden">
    <div class="absolute inset-0">
      <NuxtImg
        src="/images/kb_clean_hero.webp"
        :alt="$t('hero.imageAlt')"
        class="h-full w-full object-cover scale-105 hero-image"
        width="1920"
        loading="eager"
        fetchpriority="high"
      />

      <div
        class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-primary/30"
        aria-hidden="true"
      />

      <div
        class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
        aria-hidden="true"
      />
    </div>

    <div class="absolute top-20 right-10 hidden lg:block" aria-hidden="true">
      <div class="floating-shape h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
    </div>
    <div class="absolute bottom-40 left-10 hidden lg:block" aria-hidden="true">
      <div class="floating-shape-delayed h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />
    </div>

    <div class="relative z-10 flex h-full flex-col px-4 sm:px-6 lg:px-8">
      <div class="mx-auto w-full max-w-7xl flex-1 flex items-center py-20 lg:py-24">
        <div class="grid gap-6 lg:grid-cols-2 lg:gap-10 items-center w-full">
          <div class="space-y-4 sm:space-y-6">
            <div class="hero-badge inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 backdrop-blur-sm border border-primary/30">
              <span class="relative flex h-2 w-2">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span class="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span class="text-sm font-medium text-white">
                {{ $t('hero.badge') }}
              </span>
            </div>

            <div class="space-y-2 sm:space-y-3">
              <h1 class="hero-title">
                <span class="block text-4xl font-heading font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {{ $t('hero.title') }}
                </span>
              </h1>
              <p class="hero-highlight text-lg font-heading text-white/90 sm:text-xl lg:text-2xl leading-tight max-w-2xl">
                {{ $t('hero.titleHighlight') }}
              </p>
            </div>

            <p class="hero-subtitle text-sm font-body text-white/70 sm:text-base max-w-xl leading-relaxed">
              {{ $t('hero.subtitle') }}
            </p>

            <div class="hero-cta flex flex-col gap-3 sm:flex-row sm:items-center">
              <NuxtLink
                :to="localePath('/contact')"
                class="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                :aria-label="$t('hero.ctaPrimaryAriaLabel')"
              >
                {{ $t('hero.ctaPrimary') }}
                <Icon
                  name="ArrowRight"
                  class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </NuxtLink>

              <NuxtLink
                :to="localePath('/about')"
                class="group inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                :aria-label="$t('hero.ctaSecondaryAriaLabel')"
              >
                {{ $t('hero.ctaSecondary') }}
                <Icon
                  name="Play"
                  class="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
              </NuxtLink>
            </div>
          </div>

          <div class="hero-stats hidden lg:flex flex-col justify-center">
            <div class="grid grid-cols-1 gap-4">
              <div
                v-for="(stat, index) in stats"
                :key="stat.key"
                class="stat-card group"
                :style="{ animationDelay: `${1.2 + index * 0.15}s` }"
              >
                <div class="flex items-center gap-3 rounded-xl bg-white/5 p-4 backdrop-blur-md border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                  <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                    <Icon
                      :name="stat.icon"
                      class="h-6 w-6 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p class="text-2xl font-heading font-bold text-white">
                      {{ stat.value }}
                    </p>
                    <p class="text-xs text-white/60">
                      {{ stat.label }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hero-stats-mobile mt-6 grid grid-cols-3 gap-2 lg:hidden">
          <div
            v-for="stat in stats"
            :key="stat.key"
            class="flex flex-col items-center rounded-lg bg-white/5 p-2 backdrop-blur-sm border border-white/10"
          >
            <p class="text-lg font-heading font-bold text-primary sm:text-xl">
              {{ stat.value }}
            </p>
            <p class="text-[10px] text-white/60 text-center leading-tight">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>

      <div class="scroll-indicator pb-6 flex justify-center">
        <button
          type="button"
          class="flex flex-col items-center gap-1 text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-full p-2"
          :aria-label="$t('hero.scrollIndicator')"
          @click="scrollToContent"
        >
          <span class="text-[10px] font-medium uppercase tracking-widest hidden sm:block">
            {{ $t('hero.scrollIndicator') }}
          </span>
          <div class="flex h-8 w-5 items-start justify-center rounded-full border-2 border-white/30 p-1">
            <div class="scroll-dot h-1.5 w-1 rounded-full bg-white" />
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type StatItem = {
  key: string
  value: string
  label: string
  icon: string
}

const { t } = useI18n()
const localePath = useLocalePath()

const stats = computed((): StatItem[] => [
  {
    key: 'water',
    value: t('hero.stats.water.value'),
    label: t('hero.stats.water.label'),
    icon: 'Droplets',
  },
  {
    key: 'chemical',
    value: t('hero.stats.chemical.value'),
    label: t('hero.stats.chemical.label'),
    icon: 'Leaf',
  },
  {
    key: 'co2',
    value: t('hero.stats.co2.value'),
    label: t('hero.stats.co2.label'),
    icon: 'Wind',
  },
])

const scrollToContent = (): void => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth',
  })
}
</script>

<style scoped>
.hero-image {
  animation: heroZoom 20s ease-out forwards;
}

@keyframes heroZoom {
  from {
    transform: scale(1.05);
  }
  to {
    transform: scale(1);
  }
}

.hero-badge {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeSlideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards;
}

.hero-title {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeSlideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s forwards;
}

.hero-highlight {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeSlideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.6s forwards;
}

.hero-subtitle {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeSlideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.8s forwards;
}

.hero-cta {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeSlideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 1s forwards;
}

.hero-stats-mobile {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeSlideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 1.2s forwards;
}

.stat-card {
  opacity: 0;
  transform: translateX(30px);
  animation: fadeSlideLeft 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.scroll-indicator {
  opacity: 0;
  animation: fadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) 1.5s forwards;
}

.scroll-dot {
  animation: scrollBounce 2s ease-in-out infinite;
}

.floating-shape {
  animation: float 8s ease-in-out infinite;
}

.floating-shape-delayed {
  animation: float 8s ease-in-out infinite 2s;
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeSlideLeft {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scrollBounce {
  0%,
  100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(12px);
    opacity: 0.3;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}
</style>
