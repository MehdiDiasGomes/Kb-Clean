export type NavItem = {
  labelKey: string
  href?: string
  items?: NavItem[]
}

export const navigationItems: NavItem[] = [
  {
    labelKey: 'nav.about',
    href: '/qui-sommes-nous',
  },
  {
    labelKey: 'nav.services.title',
    items: [
      {
        labelKey: 'nav.services.binWashing',
        href: '/services/lavage-bac-dechets',
      },
      {
        labelKey: 'nav.services.windowCleaning',
        href: '/services/nettoyage-vitres',
      },
      {
        labelKey: 'nav.services.facilityMaintenance',
        href: '/services/entretien-locaux',
      },
    ],
  },
  {
    labelKey: 'nav.contact',
    href: '/contact',
  },
]
