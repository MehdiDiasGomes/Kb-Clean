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
    href: '/solutions/rolling-bins',
    icon: 'Trash2',
  },
  {
    titleKey: 'solutions.offerings.bioWaste.title',
    descriptionKey: 'solutions.offerings.bioWaste.description',
    ctaKey: 'solutions.offerings.bioWaste.cta',
    ctaLabelKey: 'solutions.offerings.bioWaste.ctaLabel',
    href: '/solutions/bio-waste-shelters',
    icon: 'Recycle',
  },
  {
    titleKey: 'solutions.offerings.bulkContainers.title',
    descriptionKey: 'solutions.offerings.bulkContainers.description',
    ctaKey: 'solutions.offerings.bulkContainers.cta',
    ctaLabelKey: 'solutions.offerings.bulkContainers.ctaLabel',
    href: '/solutions/columns',
    icon: 'Building2',
  },
]

export type AboutService = {
  title: string
  description: string
  icon: keyof typeof icons
  link: string
  ariaLabel: string
}

export const getAboutServices = (t: (key: string) => string): AboutService[] => [
  {
    title: t('about.expertise.services.wheeledBins.title'),
    description: t('about.expertise.services.wheeledBins.description'),
    icon: 'Trash2',
    link: '/solutions/rolling-bins',
    ariaLabel: t('about.expertise.services.wheeledBins.ariaLabel'),
  },
  {
    title: t('about.expertise.services.bioWasteShelters.title'),
    description: t('about.expertise.services.bioWasteShelters.description'),
    icon: 'Recycle',
    link: '/solutions/bio-waste-shelters',
    ariaLabel: t('about.expertise.services.bioWasteShelters.ariaLabel'),
  },
  {
    title: t('about.expertise.services.columns.title'),
    description: t('about.expertise.services.columns.description'),
    icon: 'Archive',
    link: '/solutions/columns',
    ariaLabel: t('about.expertise.services.columns.ariaLabel'),
  },
]
