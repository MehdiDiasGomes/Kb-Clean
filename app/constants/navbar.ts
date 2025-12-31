export type NavItem = {
  labelKey: string
  href?: string
  items?: NavItem[]
}

export const navigationItems: NavItem[] = [
  {
    labelKey: 'nav.about',
    href: '/about',
  },
  {
    labelKey: 'nav.solutions.title',
    items: [
      {
        labelKey: 'nav.solutions.wheeledBins',
        href: '/solutions/rolling-bins',
      },
      {
        labelKey: 'nav.solutions.bioWasteShelters',
        href: '/solutions/bio-waste-shelters',
      },
      {
        labelKey: 'nav.solutions.columns',
        href: '/solutions/columns',
      },
    ],
  },
  {
    labelKey: 'nav.contact',
    href: '/contact',
  },
]
