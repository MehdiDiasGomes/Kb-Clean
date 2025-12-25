<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        variant="ghost"
        size="icon"
        :aria-label="$t('common.selectLanguage')"
      >
        <Icon
          name="Languages"
          :size="20"
        />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>{{ $t('common.language') }}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem
        v-for="loc in allLocales"
        :key="loc.code"
        :class="{ 'bg-accent': currentLocale === loc.code }"
        @click="switchLanguage(loc.code)"
      >
        <span class="flex items-center gap-2">
          <Icon
            v-if="currentLocale === loc.code"
            name="Check"
            :size="16"
          />
          <span :class="{ 'ml-6': currentLocale !== loc.code }">
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

const allLocales = computed(
  () => locales.value as Array<{ code: string; name: string }>,
)

const switchLanguage = (newLocale: string): void => {
  setLocale(newLocale as 'fr' | 'en')
}
</script>
