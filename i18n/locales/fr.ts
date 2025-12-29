export default {
  nav: {
    home: 'Accueil',
    about: 'Qui sommes nous ?',
    solutions: {
      title: 'Nos solutions',
      wheeledBins: 'Bacs roulants',
      bioWasteShelters: 'Abris bacs biodéchets',
      columns: 'Colonnes',
    },
    contact: 'Nous contacter',
    menu: 'Menu',
    mainNavAriaLabel: 'Navigation principale',
    mobileNavAriaLabel: 'Menu de navigation mobile',
    openMenu: 'Ouvrir le menu de navigation',
    closeMenu: 'Fermer le menu',
    openSubmenu: 'Ouvrir le menu',
    closeSubmenu: 'Fermer le menu',
  },
  hero: {
    title: 'KB Clean',
    titleHighlight: 'Votre expert en hygiène des contenants',
    subtitle: 'Des solutions professionnelles pour des poubelles impeccables',
    ctaPrimary: 'Nous contacter',
    imageAlt: 'Services de lavage de contenants à déchets KB Clean',
  },
  solutions: {
    sectionTitle: 'KB Clean vous accompagne pour un environnement plus propre',
    intro: {
      line1:
        'Un nettoyage régulier de vos conteneurs élimine les mauvaises odeurs et limite la prolifération bactérienne.',
      line2: "Des bacs propres, c'est un geste santé et un engagement pour le tri responsable.",
      line3: 'Notre objectif 2027 : vous offrir un service de nettoyage 100% écologique !',
    },
    offerings: {
      wasteBins: {
        title: 'Bacs roulants',
        description:
          'Nettoyage intérieur et extérieur de vos bacs roulants grâce à notre système de lavage haute performance.',
        cta: 'En savoir plus',
        ctaLabel: 'Découvrir le service de nettoyage des bacs roulants',
      },
      bioWaste: {
        title: 'Abris biodéchets',
        description:
          "L'hygiène de vos abris biodéchets assurée par un procédé efficace et respectueux de l'environnement.",
        cta: 'En savoir plus',
        ctaLabel: 'Découvrir le service de nettoyage des abris biodéchets',
      },
      bulkContainers: {
        title: 'Conteneurs collectifs',
        description:
          "Tous vos conteneurs collectifs lavés à l'eau chaude et haute pression pour éliminer résidus et bactéries.",
        cta: 'En savoir plus',
        ctaLabel: 'Découvrir le service de nettoyage des conteneurs collectifs',
      },
    },
  },
  clients: {
    sectionTitle: {
      prefix: 'Des solutions adaptées à',
      bold: 'tous les acteurs',
      suffix: 'de la propreté urbaine',
    },
    intro: {
      line1: {
        prefix: 'KB Clean intervient auprès de',
        bold1: 'tous les professionnels',
        middle: "pour qui l'",
        bold2: 'hygiène des contenants',
        suffix: 'est essentielle.',
      },
      line2: {
        prefix: 'Notre',
        bold1: 'expertise mobile',
        middle: 'et nos',
        bold2: 'protocoles stricts',
        middle2: 'garantissent un service',
        bold3: 'rapide, fiable et conforme',
        suffix: 'aux normes sanitaires.',
      },
    },
    types: {
      municipalities: {
        title: 'Collectivités',
        description:
          'Nettoyage et désinfection de bacs roulants, abris biodéchets et conteneurs pour les municipalités',
      },
      businesses: {
        title: 'Entreprises',
        description:
          'Solutions de nettoyage de bacs roulants adaptées aux besoins des entreprises privées',
      },
      manufacturers: {
        title: 'Fabricants',
        description:
          "Service complet d'installation et d'entretien d'abris bacs pour les fabricants d'équipements",
      },
      collectors: {
        title: 'Collecteurs',
        description:
          'Service intégré de collecte et de nettoyage pour tous types de contenants à déchets',
      },
    },
    cta: 'Nous contacter',
    ctaLabel: 'Contactez-nous pour un devis personnalisé',
  },
  footer: {
    copyright: 'Tous droits réservés.',
  },
  contact: {
    title: 'Contactez-nous',
    form: {
      subtitle: 'Ou remplissez le formulaire ci-dessous',
      lastName: {
        label: 'Nom',
        placeholder: 'Dupont',
      },
      firstName: {
        label: 'Prénom',
        placeholder: 'Jean',
      },
      email: {
        label: 'Adresse email',
        placeholder: "jean.dupont{'@'}exemple.fr",
      },
      phone: {
        label: 'Téléphone',
        optional: '(optionnel)',
        placeholder: '+33 6 12 34 56 78',
      },
      isBusiness: {
        label: 'Je représente une entreprise',
      },
      companyName: {
        label: "Nom de l'entreprise",
        optional: '(optionnel)',
        placeholder: 'KB Clean SARL',
      },
      requestType: {
        label: 'Type de demande',
        placeholder: 'Sélectionnez une option',
        options: {
          demo: 'Prendre rendez-vous pour une démonstration',
          callback: "Être rappelé pour plus d'informations",
          quote: 'Demande de devis',
        },
      },
      message: {
        label: 'Message',
        placeholder: 'Décrivez votre besoin...',
      },
      submit: 'Envoyer',
      submitting: 'Envoi en cours...',
      success: 'Votre message a été envoyé avec succès !',
      error: 'Une erreur est survenue. Veuillez réessayer.',
      validation: {
        lastNameRequired: 'Le nom est obligatoire',
        lastNameMin: 'Le nom doit contenir au moins 2 caractères',
        firstNameRequired: 'Le prénom est obligatoire',
        firstNameMin: 'Le prénom doit contenir au moins 2 caractères',
        emailRequired: "L'adresse email est obligatoire",
        emailInvalid: "L'adresse email n'est pas valide",
        companyNameRequired: "Le nom de l'entreprise est obligatoire",
        companyNameMin: "Le nom de l'entreprise doit contenir au moins 2 caractères",
        requestTypeRequired: 'Veuillez sélectionner un type de demande',
        messageRequired: 'Le message est obligatoire',
        messageMin: 'Le message doit contenir au moins 10 caractères',
      },
    },
    info: {
      title: 'Informations',
      address: {
        title: 'Adresse',
        line1: '123 Rue de la Propreté',
        line2: '75001 Paris, France',
      },
      phone: {
        title: 'Téléphone',
        number: '+33123456789',
        display: '+33 1 23 45 67 89',
      },
      email: {
        title: 'Email',
        address: "contact{'@'}kbclean.fr",
      },
      hours: {
        title: 'Horaires',
        weekdays: 'Lun - Ven : 9h00 - 18h00',
        weekend: 'Sam - Dim : Fermé',
      },
    },
  },
  rollingBins: {
    hero: {
      titleBefore: 'Lavage professionnel de vos',
      titleHighlight: 'bacs roulants',
      stats: 'Un service régulier et fiable sur tout le territoire français',
      subtitle:
        'KB Clean assure la propreté et la désinfection complète de vos bacs grâce à notre technologie de lavage haute performance.',
      cta: 'Demander un devis',
      ctaLabel: 'Demander un devis pour le lavage de vos bacs roulants',
      imageAlt: 'Technologie de lavage haute performance KB Clean pour bacs roulants',
      imagePlaceholder: 'Image requise',
      imageDescription: 'Illustration montrant le processus de lavage des bacs roulants',
    },
  },
  common: {
    logoAlt: 'Logo KB Clean',
    backToHome: "Retour à la page d'accueil",
    language: 'Langue',
    selectLanguage: 'Sélectionner la langue',
    french: 'Français',
    english: 'English',
    required: 'obligatoire',
  },
}
