import type * as icons from 'lucide-vue-next'

export type FormulaCard = {
  id: string
  titleKey: string
  descriptionKey: string
  icon: keyof typeof icons
}

export const formulaCards: FormulaCard[] = [
  {
    id: 'one-time',
    titleKey: 'formulas.oneTime.title',
    descriptionKey: 'formulas.oneTime.description',
    icon: 'Zap',
  },
  {
    id: 'monthly',
    titleKey: 'formulas.monthly.title',
    descriptionKey: 'formulas.monthly.description',
    icon: 'Calendar',
  },
  {
    id: 'quarterly',
    titleKey: 'formulas.quarterly.title',
    descriptionKey: 'formulas.quarterly.description',
    icon: 'CalendarRange',
  },
  {
    id: 'biannual',
    titleKey: 'formulas.biannual.title',
    descriptionKey: 'formulas.biannual.description',
    icon: 'CalendarClock',
  },
  {
    id: 'annual',
    titleKey: 'formulas.annual.title',
    descriptionKey: 'formulas.annual.description',
    icon: 'CalendarCheck',
  },
  {
    id: 'subscription-individual',
    titleKey: 'formulas.subscriptionIndividual.title',
    descriptionKey: 'formulas.subscriptionIndividual.description',
    icon: 'User',
  },
  {
    id: 'condominium',
    titleKey: 'formulas.condominium.title',
    descriptionKey: 'formulas.condominium.description',
    icon: 'Building',
  },
  {
    id: 'professional',
    titleKey: 'formulas.professional.title',
    descriptionKey: 'formulas.professional.description',
    icon: 'Briefcase',
  },
  {
    id: 'municipality',
    titleKey: 'formulas.municipality.title',
    descriptionKey: 'formulas.municipality.description',
    icon: 'LandmarkIcon',
  },
  {
    id: 'custom',
    titleKey: 'formulas.custom.title',
    descriptionKey: 'formulas.custom.description',
    icon: 'Settings',
  },
]
