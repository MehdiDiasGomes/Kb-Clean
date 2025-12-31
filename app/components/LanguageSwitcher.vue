<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" size="icon" :aria-label="$t('common.selectLanguage')">
        <Icon name="Languages" :size="20" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="w-54">
      <DropdownMenuLabel>{{ $t('common.language') }}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem
        v-for="loc in allLocales"
        :key="loc.code"
        class="py-3"
        @click="switchLanguage(loc.code)"
      >
        <span class="flex items-center gap-3">
          <Icon v-if="currentLocale === loc.code" name="Check" :size="16" class="shrink-0" />
          <span v-else class="w-4 shrink-0" />
          <span class="shrink-0 text-lg" aria-hidden="true">
            {{ loc.code === 'fr' ? '🇫🇷' : '🇬🇧' }}
          </span>
          <span>
            {{ $t(`common.${loc.code === 'fr' ? 'french' : 'english'}`) }}
          </span>
        </span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const { locale, locales, setLocale } = useI18n<{ fr: object; en: object }>()

const currentLocale = computed((): string => locale.value)

const allLocales = computed(() => locales.value as Array<{ code: string; name: string }>)

const switchLanguage = (newLocale: string): void => {
  setLocale(newLocale as 'fr' | 'en')
}
</script>
