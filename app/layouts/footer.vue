<template>
  <footer class="bg-navy-950 pb-8 pt-16">
    <div class="border-t border-line/50 mb-12" aria-hidden="true" />
    <div class="mx-auto max-w-[1180px] px-8">
      <div class="mb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Colonne 1 : Brand -->
        <div>
          <div class="mb-4 flex items-center gap-1.5">
            <span class="text-xl font-black text-white">BINOVYA</span>
            <span class="text-lg text-turquoise">●</span>
          </div>
          <p class="mb-5 text-[13px] leading-relaxed text-[#7d93a8]">
            {{ $t('footer.brand.tagline') }}
          </p>
          <div class="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="$t('footer.social.facebook')"
              class="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-[#7d93a8] transition-colors hover:border-turquoise hover:text-turquoise"
            >
              <Icon name="Facebook" :size="16" aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="$t('footer.social.instagram')"
              class="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-[#7d93a8] transition-colors hover:border-turquoise hover:text-turquoise"
            >
              <Icon name="Instagram" :size="16" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="$t('footer.social.linkedin')"
              class="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-[#7d93a8] transition-colors hover:border-turquoise hover:text-turquoise"
            >
              <Icon name="Linkedin" :size="16" aria-hidden="true" />
            </a>
          </div>
        </div>

        <!-- Colonne 2 : Contact -->
        <div>
          <h3 class="mb-4 text-sm font-black uppercase tracking-wider text-white">{{ $t('footer.contact.title') }}</h3>
          <ul class="space-y-2.5 text-[13px] text-[#7d93a8]">
<li class="flex items-center gap-2">
              <Icon name="Mail" :size="14" aria-hidden="true" class="text-turquoise" />
              <a href="mailto:contact@binovya.fr" class="transition-colors hover:text-white">contact@binovya.fr</a>
            </li>
            <li class="flex items-center gap-2">
              <Icon name="Globe" :size="14" aria-hidden="true" class="text-turquoise" />
              <a
                href="https://binovya.fr"
                target="_blank"
                rel="noopener noreferrer"
                class="transition-colors hover:text-white"
              >binovya.fr</a>
            </li>
          </ul>
        </div>

        <!-- Colonne 3 : Engagements -->
        <div>
          <h3 class="mb-4 text-sm font-black uppercase tracking-wider text-white">{{ $t('footer.commitments.title') }}</h3>
          <ul class="space-y-2 text-[13px] text-[#7d93a8]">
            <li>{{ $t('footer.commitments.eco') }}</li>
            <li>{{ $t('footer.commitments.steam') }}</li>
            <li>{{ $t('footer.commitments.quality') }}</li>
          </ul>
        </div>

        <!-- Colonne 4 : Informations -->
        <div>
          <h3 class="mb-4 text-sm font-black uppercase tracking-wider text-white">{{ $t('footer.info.title') }}</h3>
          <ul class="space-y-2 text-[13px] text-[#7d93a8]">
            <li>
              <NuxtLink :to="localePath('/legal')" class="transition-colors hover:text-white">{{ $t('footer.info.legal') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/formulas')" class="transition-colors hover:text-white">{{ $t('footer.info.cgv') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/privacy')" class="transition-colors hover:text-white">{{ $t('footer.info.privacy') }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-line/50 pt-6 text-center text-[12px] text-[#7d93a8]">
        © {{ currentYear }} BINOVYA — {{ $t('footer.copyright') }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = computed((): number => new Date().getFullYear())
const localePath = useLocalePath()
</script>
