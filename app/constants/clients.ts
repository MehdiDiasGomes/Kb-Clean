import type * as icons from 'lucide-vue-next'

export type LucideIconName = keyof typeof icons

export type ClientCard = {
  titleKey: string
  descriptionKey: string
  image?: string
  icon?: LucideIconName
}

export const clientCards: ClientCard[] = [
  {
    titleKey: 'clients.types.municipalities.title',
    descriptionKey: 'clients.types.municipalities.description',
    image: '/images/clients/task_01.webp',
  },
  {
    titleKey: 'clients.types.businesses.title',
    descriptionKey: 'clients.types.businesses.description',
    image: '/images/clients/task_02.webp',
  },
  {
    titleKey: 'clients.types.individuals.title',
    descriptionKey: 'clients.types.individuals.description',
    image: '/images/clients/task_03.webp',
  },
]
