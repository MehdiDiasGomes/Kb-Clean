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
    titleKey: 'services.offerings.wasteBins.title',
    descriptionKey: 'services.offerings.wasteBins.description',
    ctaKey: 'services.offerings.wasteBins.cta',
    ctaLabelKey: 'services.offerings.wasteBins.ctaLabel',
    href: '/services/waste-bins',
    icon: 'Trash2',
  },
  {
    titleKey: 'services.offerings.bioWaste.title',
    descriptionKey: 'services.offerings.bioWaste.description',
    ctaKey: 'services.offerings.bioWaste.cta',
    ctaLabelKey: 'services.offerings.bioWaste.ctaLabel',
    href: '/services/bio-waste',
    icon: 'Recycle',
  },
  {
    titleKey: 'services.offerings.bulkContainers.title',
    descriptionKey: 'services.offerings.bulkContainers.description',
    ctaKey: 'services.offerings.bulkContainers.cta',
    ctaLabelKey: 'services.offerings.bulkContainers.ctaLabel',
    href: '/services/bulk-containers',
    icon: 'Building2',
  },
]
