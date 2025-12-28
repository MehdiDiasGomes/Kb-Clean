export type ClientCard = {
  titleKey: string
  descriptionKey: string
  image?: string
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
    titleKey: 'clients.types.manufacturers.title',
    descriptionKey: 'clients.types.manufacturers.description',
    image: '/images/clients/task_03.webp',
  },
  {
    titleKey: 'clients.types.collectors.title',
    descriptionKey: 'clients.types.collectors.description',
    image: '/images/clients/task_04.webp',
  },
]
