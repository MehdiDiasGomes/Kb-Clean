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
    labelKey: 'nav.solutions.title',
    items: [
      {
        labelKey: 'nav.solutions.wheeledBins',
        href: '/solutions/bacs-roulants',
      },
      {
        labelKey: 'nav.solutions.bioWasteShelters',
        href: '/solutions/abris-bacs-biodechets',
      },
      {
        labelKey: 'nav.solutions.columns',
        href: '/solutions/colonnes',
      },
    ],
  },
  {
    labelKey: 'nav.contact',
    href: '/contact',
  },
]
