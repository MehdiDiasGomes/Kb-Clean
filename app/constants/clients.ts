import type * as icons from 'lucide-vue-next'

export type ClientCard = {
  titleKey: string
  descriptionKey: string
  icon?: keyof typeof icons
  image?: string
}

export const clientCards: ClientCard[] = [
  {
    titleKey: 'clients.types.municipalities.title',
    descriptionKey: 'clients.types.municipalities.description',
    image: '/images/services/task_01.webp',
  },
  {
    titleKey: 'clients.types.businesses.title',
    descriptionKey: 'clients.types.businesses.description',
    image: '/images/services/task_02.webp',
  },
  {
    titleKey: 'clients.types.manufacturers.title',
    descriptionKey: 'clients.types.manufacturers.description',
    icon: 'Warehouse',
  },
  {
    titleKey: 'clients.types.collectors.title',
    descriptionKey: 'clients.types.collectors.description',
    icon: 'Truck',
  },
]
