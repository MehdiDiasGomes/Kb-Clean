import about from './en/about'
import faq from './en/faq'
import legal from './en/legal'
import privacy from './en/privacy'
import solutions from './en/solutions'

export default {
  nav: {
    home: 'Home',
    about: 'About us',
    solutions: {
      title: 'Our solutions',
      wheeledBins: 'Wheeled bins',
      bioWasteShelters: 'Bio-waste shelters',
      columns: 'Columns',
    },
    formulas: 'Our Plans',
    contact: 'Contact us',
    menu: 'Menu',
    mainNavAriaLabel: 'Main navigation',
    mobileNavAriaLabel: 'Mobile navigation menu',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close menu',
    openSubmenu: 'Open menu',
    closeSubmenu: 'Close menu',
  },
  hero: {
    title: 'KB Clean',
    titleHighlight: 'The reference for cleaning and disinfecting your bins and containers',
    subtitle: 'Professional solutions for spotless bins',
    ctaPrimary: 'Contact us',
    imageAlt: 'KB Clean waste container cleaning services',
  },
  solutions: {
    sectionTitle: 'KB Clean supports you for a cleaner environment',
    intro: {
      line1:
        'Regular cleaning of your containers eliminates bad odors and limits bacterial proliferation.',
      line2: 'Clean bins mean better health and a commitment to responsible waste sorting.',
      line3:
        'Our goal: To guarantee you efficient and 100% eco-friendly cleaning designed for your hygiene and the planet',
    },
    offerings: {
      wasteBins: {
        title: 'Wheeled bins',
        description:
          'Interior and exterior cleaning of your wheeled bins with our high-performance washing system.',
        cta: 'Learn more',
        ctaLabel: 'Discover our wheeled bin cleaning service',
      },
      bioWaste: {
        title: 'Bio-waste shelters',
        description:
          'Hygiene for your bio-waste shelters ensured by an efficient and environmentally friendly process.',
        cta: 'Learn more',
        ctaLabel: 'Discover our bio-waste shelter cleaning service',
      },
      bulkContainers: {
        title: 'Bulk containers',
        description:
          'All your bulk containers washed with hot water and high pressure to eliminate residue and bacteria.',
        cta: 'Learn more',
        ctaLabel: 'Discover our bulk container cleaning service',
      },
    },
  },
  formulas: {
    sectionTitle: 'Our Plans',
    intro: 'Discover our different plans adapted to all needs',
    viewAll: 'View all our plans',
    viewAllLabel: 'Discover all available plans',
    oneTime: {
      title: 'One-Time Service',
      description:
        'Complete cleaning and disinfection of your waste bins, with no commitment. Ideal for occasional needs or a thorough renewal cleaning.',
    },
    monthly: {
      title: 'Monthly Plan',
      description:
        'Regular monthly cleaning to ensure clean, healthy, odor-free bins all year round. Convenient and hassle-free solution.',
    },
    quarterly: {
      title: 'Quarterly Plan',
      description:
        'Scheduled maintenance every three months. Perfect for maintaining good hygiene while managing your budget.',
    },
    biannual: {
      title: 'Biannual Plan',
      description:
        'Two interventions per year to keep bins clean and limit nuisances. Simple and economical plan.',
    },
    annual: {
      title: 'Annual Plan',
      description:
        'An annual maintenance program planned in advance. Ideal for individuals looking for a turnkey solution.',
    },
    subscriptionIndividual: {
      title: 'Individual Subscription',
      description:
        'A recurring service adapted to your household rhythm. Automatic scheduling and guaranteed peace of mind.',
    },
    condominium: {
      title: 'Condominium Plan',
      description:
        'Regular cleaning of shared bins and containers. A solution adapted to the needs of residences and property managers.',
    },
    professional: {
      title: 'Professional Plan',
      description:
        'Designed for shops, restaurants and businesses. Interventions scheduled according to business activity and professional constraints.',
    },
    municipality: {
      title: 'Municipality Plan',
      description:
        'Maintenance of waste bins and columns in compliance with hygiene standards. Sustainable and eco-friendly solution adapted to local authorities.',
    },
    custom: {
      title: 'Custom Plan',
      description:
        'A personalized plan according to your specific needs. Frequency, number of bins and type of intervention adapted to your situation.',
    },
  },
  clients: {
    sectionTitle: {
      prefix: 'Tailored solutions for',
      bold: 'all stakeholders',
      suffix: 'in urban sanitation',
    },
    intro: {
      line1: {
        prefix: 'KB Clean serves',
        bold1: 'all professionals',
        middle: 'for whom',
        bold2: 'container hygiene',
        suffix: 'is essential.',
      },
      line2: {
        prefix: 'Our',
        bold1: 'mobile expertise',
        middle: 'and',
        bold2: 'strict protocols',
        middle2: 'guarantee',
        bold3: 'fast, reliable service',
        suffix: 'that meets health standards.',
      },
    },
    types: {
      municipalities: {
        title: 'Municipalities',
        description:
          'Cleaning and disinfection of wheeled bins, bio-waste shelters and containers for local authorities',
      },
      businesses: {
        title: 'Businesses',
        description: 'Wheeled bin cleaning solutions tailored to private business needs',
      },
      individuals: {
        title: 'Homeowners',
        description:
          'Waste bins are one of the main sources of bacteria and bad odors around the home. KB Clean cleans, disinfects and sanitizes your bins directly at your home, for a healthier, cleaner and more pleasant environment every day.',
      },
    },
    cta: 'Contact us',
    ctaLabel: 'Contact us for a personalized quote',
  },
  footer: {
    copyright: 'All rights reserved.',
    privacy: 'Privacy Policy',
    legal: 'Legal Notice',
    faq: 'FAQ',
  },
  privacy,
  legal,
  faq,
  contact: {
    title: "Let's Get In Touch",
    form: {
      subtitle: 'Or fill out the form below',
      lastName: {
        label: 'Last Name',
        placeholder: 'Smith',
      },
      firstName: {
        label: 'First Name',
        placeholder: 'John',
      },
      email: {
        label: 'Email Address',
        placeholder: "john.smith{'@'}example.com",
      },
      phone: {
        label: 'Phone',
        optional: '(optional)',
        placeholder: '+1 234 567 8900',
      },
      isBusiness: {
        label: 'I represent a business',
      },
      companyName: {
        label: 'Company Name',
        optional: '(optional)',
        placeholder: 'KB Clean LLC',
      },
      requestType: {
        label: 'Request Type',
        placeholder: 'Select an option',
        options: {
          demo: 'Schedule a demonstration',
          callback: 'Request a callback for more information',
          quote: 'Request a quote',
        },
      },
      message: {
        label: 'Message',
        placeholder: 'Describe your needs...',
      },
      submit: 'Submit',
      submitting: 'Submitting...',
      success: 'Your message has been sent successfully!',
      error: 'An error occurred. Please try again.',
      validation: {
        lastNameRequired: 'Last name is required',
        lastNameMin: 'Last name must be at least 2 characters',
        firstNameRequired: 'First name is required',
        firstNameMin: 'First name must be at least 2 characters',
        emailRequired: 'Email address is required',
        emailInvalid: 'Email address is invalid',
        companyNameRequired: 'Company name is required',
        companyNameMin: 'Company name must be at least 2 characters',
        requestTypeRequired: 'Please select a request type',
        messageRequired: 'Message is required',
        messageMin: 'Message must be at least 10 characters',
      },
    },
    info: {
      title: 'Information',
      address: {
        title: 'Address',
        line1: '123 Clean Street',
        line2: '75001 Paris, France',
      },
      phone: {
        title: 'Phone',
        number: '0000000',
        display: '00 00 00 00 00',
      },
      email: {
        title: 'Email',
        address: "contact{'@'}kbclean.fr",
      },
      hours: {
        title: 'Business Hours',
        weekdays: 'Mon - Fri: 9:00 AM - 6:00 PM',
        weekend: 'Sat - Sun: Closed',
      },
    },
  },
  about,
  ...solutions,
  common: {
    logoAlt: 'KB Clean Logo',
    backToHome: 'Back to home page',
    language: 'Language',
    selectLanguage: 'Select language',
    french: 'Français',
    english: 'English',
    required: 'required',
    skipToContent: 'Skip to main content',
  },
}
