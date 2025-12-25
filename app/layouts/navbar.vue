<template>
  <header class="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
    <nav class="mx-auto flex items-center justify-between p-4" :aria-label="$t('nav.mainNavAriaLabel')">
      <NuxtLink to="/" class="flex items-center space-x-2" :aria-label="$t('common.backToHome')">
        <NuxtImg src="/images/kb_clean_logo_v1.webp" :alt="$t('common.logoAlt')" width="200" height="100" />
      </NuxtLink>

      <div class="flex items-center gap-2">
        <NavigationMenu class="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem v-for="item in navigationItems" :key="item.labelKey">
              <NavigationMenuTrigger v-if="item.items" class="text-sm font-medium text-foreground">
                {{ $t(item.labelKey) }}
              </NavigationMenuTrigger>

              <NavigationMenuLink v-else :href="item.href" class="text-sm font-medium text-foreground">
                {{ $t(item.labelKey) }}
              </NavigationMenuLink>

              <NavigationMenuContent v-if="item.items">
                <ul class="grid w-70 gap-2 p-3">
                  <li v-for="subItem in item.items" :key="subItem.labelKey">
                    <NavigationMenuLink :href="subItem.href">
                      <div class="p-2">
                        <div class="text-sm font-medium leading-none">
                          {{ $t(subItem.labelKey) }}
                        </div>
                      </div>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div class="max-md:hidden">
          <LanguageSwitcher />
        </div>
      </div>

      <Sheet v-model:open="mobileMenuOpen">
        <SheetTrigger as-child class="md:hidden">
          <Button variant="ghost" size="icon" :aria-label="$t('nav.openMenu')">
            <Icon name="Menu" :size="24" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" class="w-[85vw] max-w-sm">
          <SheetHeader class="border-b border-border pb-4">
            <SheetTitle class="text-left text-lg font-semibold">
              {{ $t('nav.menu') }}
            </SheetTitle>
          </SheetHeader>

          <nav class="mt-6 flex flex-col space-y-1" :aria-label="$t('nav.mobileNavAriaLabel')">
            <template v-for="item in navigationItems" :key="item.labelKey">
              <NuxtLink
v-if="!item.items" :to="item.href"
                class="rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-muted active:bg-muted/80"
                @click="mobileMenuOpen = false">
                {{ $t(item.labelKey) }}
              </NuxtLink>

              <div v-else class="overflow-hidden rounded-lg">
                <button
type="button"
                  class="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-muted active:bg-muted/80"
                  :aria-expanded="expandedItem === item.labelKey" :aria-label="getSubmenuAriaLabel(item.labelKey)"
                  @click="toggleSubmenu(item.labelKey)">
                  {{ $t(item.labelKey) }}
                  <Icon
:name="expandedItem === item.labelKey ? 'ChevronUp' : 'ChevronDown'" :size="18"
                    class="transition-transform duration-200" />
                </button>

                <Transition
enter-active-class="transition-all duration-200 ease-out"
                  enter-from-class="max-h-0 opacity-0" enter-to-class="max-h-96 opacity-100"
                  leave-active-class="transition-all duration-200 ease-in" leave-from-class="max-h-96 opacity-100"
                  leave-to-class="max-h-0 opacity-0">
                  <div v-if="expandedItem === item.labelKey" class="overflow-hidden bg-muted/50">
                    <NuxtLink
v-for="subItem in item.items" :key="subItem.labelKey" :to="subItem.href"
                      class="block border-l-2 border-border py-2.5 pl-8 pr-4 text-sm transition-colors hover:border-primary hover:bg-muted hover:text-foreground active:bg-muted/80"
                      @click="mobileMenuOpen = false">
                      {{ $t(subItem.labelKey) }}
                    </NuxtLink>
                  </div>
                </Transition>
              </div>
            </template>

            <LanguageSwitcherMobile />
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { navigationItems } from '@/constants/navbar'

const { t } = useI18n()

const mobileMenuOpen = ref<boolean>(false)
const expandedItem = ref<string | null>(null)

const toggleSubmenu = (labelKey: string): void => {
  expandedItem.value = expandedItem.value === labelKey ? null : labelKey
}

const getSubmenuAriaLabel = (labelKey: string): string => {
  const isExpanded = expandedItem.value === labelKey
  const action = isExpanded ? t('nav.closeSubmenu') : t('nav.openSubmenu')
  return `${action} ${t(labelKey)}`
}
</script>
