import type * as icons from 'lucide-vue-next'

export type ServiceCard = {
  titleKey: string
  descriptionKey: string
  ctaKey: string
  ctaLabelKey: string
  href: string
  icon: keyof typeof icons
}

export const serviceCards: ServiceCard[] = [
  {
    titleKey: 'solutions.offerings.wasteBins.title',
    descriptionKey: 'solutions.offerings.wasteBins.description',
    ctaKey: 'solutions.offerings.wasteBins.cta',
    ctaLabelKey: 'solutions.offerings.wasteBins.ctaLabel',
    href: '/services/waste-bins',
    icon: 'Trash2',
  },
  {
    titleKey: 'solutions.offerings.bioWaste.title',
    descriptionKey: 'solutions.offerings.bioWaste.description',
    ctaKey: 'solutions.offerings.bioWaste.cta',
    ctaLabelKey: 'solutions.offerings.bioWaste.ctaLabel',
    href: '/services/bio-waste',
    icon: 'Recycle',
  },
  {
    titleKey: 'solutions.offerings.bulkContainers.title',
    descriptionKey: 'solutions.offerings.bulkContainers.description',
    ctaKey: 'solutions.offerings.bulkContainers.cta',
    ctaLabelKey: 'solutions.offerings.bulkContainers.ctaLabel',
    href: '/services/bulk-containers',
    icon: 'Building2',
  },
]
