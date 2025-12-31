<template>
  <div class="w-full px-4 py-3" role="group" :aria-label="$t('common.language')">
    <div class="mb-2 text-sm font-medium">
      {{ $t('common.language') }}
    </div>
    <!-- eslint-disable vuejs-accessibility/form-control-has-label -->
    <Select :model-value="currentLocale" @update:model-value="switchLanguage">
      <SelectTrigger class="w-full" :aria-label="$t('common.selectLanguage')">
        <SelectValue>
          <span class="flex items-center gap-3">
            <span class="shrink-0 text-lg" aria-hidden="true">
              {{ currentLocale === 'fr' ? '🇫🇷' : '🇬🇧' }}
            </span>
            <span>
              {{ $t(`common.${currentLocale === 'fr' ? 'french' : 'english'}`) }}
            </span>
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem v-for="loc in allLocales" :key="loc.code" :value="loc.code">
          <span class="flex items-center gap-3">
            <span class="shrink-0 text-lg" aria-hidden="true">
              {{ loc.code === 'fr' ? '🇫🇷' : '🇬🇧' }}
            </span>
            <span>
              {{ $t(`common.${loc.code === 'fr' ? 'french' : 'english'}`) }}
            </span>
          </span>
        </SelectItem>
      </SelectContent>
    </Select>
    <!-- eslint-enable vuejs-accessibility/form-control-has-label -->
  </div>
</template>

<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const { locale, locales, setLocale } = useI18n<{ fr: object; en: object }>()

const currentLocale = computed((): string => locale.value)

const allLocales = computed(() => locales.value as Array<{ code: string; name: string }>)

const switchLanguage = (newLocale: string | number | null): void => {
  if (typeof newLocale === 'string') {
    setLocale(newLocale as 'fr' | 'en')
  }
}
</script>
