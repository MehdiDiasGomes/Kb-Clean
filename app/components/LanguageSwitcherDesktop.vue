<template>
  <div role="group" :aria-label="$t('common.language')">
    <!-- eslint-disable vuejs-accessibility/form-control-has-label -->
    <Select :model-value="currentLocale" @update:model-value="switchLanguage">
      <SelectTrigger class="w-40" :aria-label="$t('common.selectLanguage')">
        <SelectValue>
          <span class="flex items-center gap-2">
            <span class="shrink-0 text-base">
              {{ currentLocale === 'fr' ? '🇫🇷' : '🇬🇧' }}
            </span>
            <span class="text-sm">
              {{ $t(`common.${currentLocale === 'fr' ? 'french' : 'english'}`) }}
            </span>
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem v-for="loc in allLocales" :key="loc.code" :value="loc.code">
          <span class="flex items-center gap-2">
            <span class="shrink-0 text-base">
              {{ loc.code === 'fr' ? '🇫🇷' : '🇬🇧' }}
            </span>
            <span class="text-sm">
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
