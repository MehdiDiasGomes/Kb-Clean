<template>
  <div>
    <PageContainer>
      <section class="page-padding-x py-16 lg:py-24">
        <div class="mx-auto max-w-7xl">
          <div class="space-y-12">
            <div
              ref="heroRef"
              :class="['text-center scroll-animate', isHeroVisible && 'is-visible']"
            >
              <h1 class="font-heading text-4xl text-foreground sm:text-5xl md:text-6xl">
                {{ $t('about.hero.titleBefore') }}
                {{ $t('about.hero.titleHighlight') }}
              </h1>
              <p class="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
                {{ $t('about.hero.subtitle') }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-muted/30 page-padding-x py-16 lg:py-24">
        <div class="mx-auto max-w-7xl">
          <div
            ref="missionRef"
            :class="['space-y-12 scroll-animate', isMissionVisible && 'is-visible']"
          >
            <div class="text-center">
              <h2 class="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                {{ $t('about.mission.title') }}
              </h2>
              <p class="mx-auto mt-4 max-w-3xl text-lg text-primary">
                {{ $t('about.mission.subtitle') }}
              </p>
              <p class="mx-auto mt-4 max-w-3xl text-muted-foreground">
                {{ $t('about.mission.description') }}
              </p>
            </div>

            <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div
                v-for="(value, key) in $tm('about.mission.values')"
                :key="key"
                class="value-card space-y-4 rounded-xl bg-background p-6 shadow-sm transition-all hover:shadow-md"
              >
                <Icon
                  :name="getValueIcon(key as string)"
                  :size="32"
                  class="text-primary"
                  aria-hidden="true"
                />
                <div>
                  <h3 class="font-heading text-xl font-bold text-foreground">
                    {{ value.title }}
                  </h3>
                  <p class="mt-2 text-sm text-muted-foreground">
                    {{ value.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="page-padding-x py-16 lg:py-24">
        <div class="mx-auto max-w-7xl">
          <div
            ref="expertiseRef"
            :class="['space-y-12 scroll-animate', isExpertiseVisible && 'is-visible']"
          >
            <div class="text-center">
              <h2 class="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                {{ $t('about.expertise.title') }}
              </h2>
              <p class="mx-auto mt-4 max-w-3xl text-lg text-primary">
                {{ $t('about.expertise.subtitle') }}
              </p>
              <p class="mx-auto mt-4 max-w-3xl text-muted-foreground">
                {{ $t('about.expertise.description') }}
              </p>
            </div>

            <div class="grid gap-8 md:grid-cols-3">
              <NuxtLink
                v-for="(service, key) in services"
                :key="key"
                :to="localePath(service.link)"
                class="group space-y-4 rounded-xl border border-border bg-background p-6 transition-all hover:border-primary hover:shadow-md"
                :aria-label="service.ariaLabel"
              >
                <Icon
                  :name="service.icon"
                  :size="40"
                  class="text-primary transition-transform group-hover:scale-110"
                  aria-hidden="true"
                />
                <div>
                  <h3
                    class="font-heading text-xl font-bold text-foreground transition-colors group-hover:text-primary"
                  >
                    {{ service.title }}
                  </h3>
                  <p class="mt-2 text-sm text-muted-foreground">
                    {{ service.description }}
                  </p>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-muted/30 page-padding-x py-16 lg:py-24">
        <div class="mx-auto max-w-7xl">
          <div
            ref="commitmentRef"
            :class="['space-y-12 scroll-animate', isCommitmentVisible && 'is-visible']"
          >
            <div class="text-center">
              <h2 class="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                {{ $t('about.commitment.title') }}
              </h2>
              <p class="mx-auto mt-4 max-w-3xl text-lg text-primary">
                {{ $t('about.commitment.subtitle') }}
              </p>
              <p class="mx-auto mt-4 max-w-3xl text-muted-foreground">
                {{ $t('about.commitment.description') }}
              </p>
            </div>

            <div class="grid gap-8 sm:grid-cols-2">
              <div
                v-for="(action, key) in $tm('about.commitment.actions')"
                :key="key"
                class="commitment-card space-y-4 rounded-xl bg-background p-6 shadow-sm"
              >
                <div class="flex items-start justify-between">
                  <Icon
                    :name="getCommitmentIcon(key as string)"
                    :size="28"
                    class="text-primary"
                    aria-hidden="true"
                  />
                  <span
                    class="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary"
                  >
                    {{ action.impact }}
                  </span>
                </div>
                <div>
                  <h3 class="font-heading text-xl font-bold text-foreground">
                    {{ action.title }}
                  </h3>
                  <p class="mt-2 text-sm text-muted-foreground">
                    {{ action.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="page-padding-x py-16 lg:py-24">
        <div class="mx-auto max-w-7xl">
          <div ref="teamRef" :class="['space-y-12 scroll-animate', isTeamVisible && 'is-visible']">
            <div class="text-center">
              <h2 class="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                {{ $t('about.team.title') }}
              </h2>
              <p class="mx-auto mt-4 max-w-3xl text-lg text-primary">
                {{ $t('about.team.subtitle') }}
              </p>
              <p class="mx-auto mt-4 max-w-3xl text-muted-foreground">
                {{ $t('about.team.description') }}
              </p>
            </div>

            <div class="rounded-xl bg-muted/30 p-8">
              <h3 class="mb-6 text-center font-heading text-xl font-bold text-foreground">
                {{ $t('about.team.certifications.title') }}
              </h3>
              <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                <div
                  v-for="(cert, key) in $tm('about.team.certifications.items')"
                  :key="key"
                  class="flex items-center gap-3 rounded-lg bg-background p-4"
                >
                  <Icon
                    name="CheckCircle"
                    :size="20"
                    class="shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span class="text-sm font-medium text-foreground">{{ cert }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="page-padding-x py-16 lg:py-24">
        <div class="mx-auto max-w-4xl">
          <div
            ref="ctaRef"
            :class="[
              'rounded-2xl bg-linear-to-br from-primary/10 to-primary/5 p-12 text-center scroll-animate lg:p-20',
              isCtaVisible && 'is-visible',
            ]"
          >
            <h2 class="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              {{ $t('about.cta.title') }}
            </h2>
            <p class="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {{ $t('about.cta.description') }}
            </p>
            <ButtonCta
              :to="localePath('/contact')"
              :text="$t('about.cta.button')"
              :aria-label="$t('about.cta.buttonLabel')"
              class="mt-8"
            />
          </div>
        </div>
      </section>
    </PageContainer>
  </div>
</template>

<script setup lang="ts">
import type * as icons from 'lucide-vue-next'

import { getAboutServices } from '@/constants/services'

definePageMeta({
  layout: 'default',
})

const { t } = useI18n()
const localePath = useLocalePath()

const { elementRef: heroRef, isVisible: isHeroVisible } = useScrollAnimation(0.2)
const { elementRef: missionRef, isVisible: isMissionVisible } = useScrollAnimation(0.2)
const { elementRef: expertiseRef, isVisible: isExpertiseVisible } = useScrollAnimation(0.2)
const { elementRef: commitmentRef, isVisible: isCommitmentVisible } = useScrollAnimation(0.2)
const { elementRef: teamRef, isVisible: isTeamVisible } = useScrollAnimation(0.2)
const { elementRef: ctaRef, isVisible: isCtaVisible } = useScrollAnimation(0.2)

const services = computed(() => getAboutServices(t))

const getValueIcon = (key: string): keyof typeof icons => {
  const iconMap: Record<string, keyof typeof icons> = {
    innovation: 'Lightbulb',
    ecology: 'Leaf',
    quality: 'Award',
    reliability: 'Shield',
  }
  return iconMap[key] || 'Circle'
}

const getCommitmentIcon = (key: string): keyof typeof icons => {
  const iconMap: Record<string, keyof typeof icons> = {
    water: 'Droplets',
    chemicals: 'Ban',
    emissions: 'Wind',
    goal: 'Target',
  }
  return iconMap[key] || 'Circle'
}
</script>

<style scoped>
.scroll-animate {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.scroll-animate.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
