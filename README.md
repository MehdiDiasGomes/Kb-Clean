# KleanBac 🧹

**Solutions de nettoyage écologiques pour contenants à déchets**

KleanBac est une plateforme web moderne offrant des services professionnels de nettoyage et de désinfection pour bacs à déchets. Avec une approche 100% écologique et des solutions adaptées à chaque segment, nous transformons l'hygiène urbaine en engagement environnemental.

## 🌟 Caractéristiques

- **Services Diversifiés**: Solutions complètes pour bacs roulants, abris biodéchets, conteneurs collectifs
- **Formules Flexibles**: One-time, mensuelle, trimestrielle, semestrielle, abonnement, copropriété, professionnel, collectivités et personnalisées
- **100% Écologique**: -80% consommation d'eau, produits 100% biodégradables, énergie électrique
- **Multilingue**: Support complet en français et anglais
- **Design Moderne**: Interface responsive optimisée pour tous les appareils
- **Accessibilité**: Conforme aux standards WCAG AA pour une expérience inclusive

## 🏗️ Architecture Technique

```
app/
├── pages/              # Pages Nuxt (routing automatique)
├── components/         # Composants Vue réutilisables
│   └── ui/            # Composants shadcn-nuxt
├── layouts/           # Layouts Nuxt
├── composables/       # Composables Vue (logique réutilisable)
├── utils/             # Fonctions utilitaires partagées
├── types/             # Types TypeScript complexes
├── constants/         # Constantes globales
├── assets/            # Ressources statiques
│   └── css/           # Tailwind v4 avec thème personnalisé
└── i18n/              # Traductions (EN/FR)
    └── locales/
        ├── en/
        └── fr/
```

## 🎨 Stack Technique

- **Framework**: Nuxt 4
- **Styling**: Tailwind CSS v4 avec `@tailwindcss/vite`
- **Composants**: shadcn-nuxt
- **Langage**: TypeScript
- **Package Manager**: Bun
- **Linting**: ESLint + Prettier
- **Icônes**: Lucide Vue Next

## 📋 Pages Principales

| Page | Description |
|------|------------|
| **Home** | Page d'accueil avec hero section et stats |
| **Solutions** | Présentation des services de nettoyage |
| **Plans** | Tous les formules disponibles |
| **About** | Qui sommes-nous et nos valeurs |
| **Contact** | Formulaire de contact et informations |
| **FAQ** | Questions fréquemment posées |
| **Legal** | Mentions légales |
| **Privacy** | Politique de confidentialité |

## 🚀 Commandes Disponibles

```bash
# Démarrer le serveur de développement
bun run dev

# Build pour la production
bun run build

# Aperçu de la build production
bun run preview

# Linting avec corrections automatiques
bun run lint:fix

# Vérifier le formatage
bun run format:check

# Formater tous les fichiers
bun run format
```

## 📱 Responsive Design

- **Mobile First**: Optimisé pour mobile, tablette et desktop
- **Breakpoints Tailwind**: sm, md, lg, xl, 2xl
- **Composants Adaptatifs**: Layouts responsifs par défaut
- **Images Optimisées**: Lazy loading et formats modernes

## 🌍 Internationalisation

L'application supporte le français et l'anglais avec:
- Switching de langue fluide
- URLs localisées
- Contenu complet traduit
- SEO multilingue

## ♿ Accessibilité

Conforme aux normes WCAG AA:
- Navigation au clavier fonctionnelle
- ARIA labels sur tous les éléments interactifs
- Alt text sur les images
- Contraste de couleurs adéquat
- Focus states visibles
- Support des lecteurs d'écran

## 🔍 SEO

- Meta tags optimisés par page
- Open Graph pour le partage social
- Structured data (JSON-LD)
- Sitemap XML
- Robots.txt configuré
- Performance optimisée (Core Web Vitals)

## 📦 Dépendances Principales

```json
{
  "nuxt": "^4",
  "tailwindcss": "^4",
  "shadcn-nuxt": "latest",
  "lucide-vue-next": "latest",
  "@nuxt/eslint": "latest"
}
```

## 🎯 Standards de Code

- **TypeScript Strict**: Typage explicite obligatoire
- **Arrow Functions**: Syntaxe fonctionnelle exclusive
- **ESLint**: Linting strict avec a11y
- **Prettier**: Formatage uniforme (2 espaces, pas de semicolons)
- **Max 350 lignes/fichier**: Pour maintenabilité
- **No Comments**: Code auto-explicatif

## 📧 Contact

Pour toute question ou demande:
- Email: `contact@kleanbac.fr`
- Téléphone: `00 00 00 00 00`
- Adresse: Les Portes de l'Orne, Rue André Marie Ampère, 57360 Amnéville, France

---

**KleanBac** - *Vers un environnement plus propre, de manière écologique* 🌱
