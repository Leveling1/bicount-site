import { legalLastUpdated } from '@/config/legal/shared';

export const usagePolicyContent = {
  title: 'Politique d’usage acceptable',
  description: 'Règles d’usage acceptable applicables au site et à l’application Bicount.',
  lead: 'Cette politique décrit les comportements autorisés et interdits lors de l’utilisation de Bicount.',
  updatedAt: legalLastUpdated,
  sections: [
    {
      title: '1. Utilisation autorisée',
      paragraphs: [
        'Bicount peut être utilisé pour suivre des dépenses, organiser des informations financières personnelles ou partagées et accéder aux contenus publics du produit.',
        'L’utilisation doit rester conforme à la loi, aux présentes règles et à l’objectif normal du service.'
      ]
    },
    {
      title: '2. Activités interdites',
      paragraphs: [
        'Il est interdit de tenter de contourner les mécanismes de sécurité, de perturber les serveurs, de scraper abusivement le site ou de lancer des actions automatisées non autorisées.',
        'Il est également interdit d’utiliser Bicount pour frauder, usurper une identité, diffuser des contenus illicites ou manipuler des données de manière trompeuse.'
      ]
    },
    {
      title: '3. Qualité et sincérité des contenus',
      paragraphs: [
        'Les informations saisies dans Bicount doivent rester sincères, exactes et pertinentes pour l’usage attendu.',
        'Tu ne dois pas injecter de contenus malveillants, de données trompeuses ou d’informations destinées à nuire au service ou à d’autres utilisateurs.'
      ]
    },
    {
      title: '4. Respect des autres utilisateurs',
      paragraphs: [
        'Lorsque des fonctions partagées sont disponibles, tu dois utiliser Bicount dans un esprit de coopération et de respect.',
        'Tout comportement abusif, harcelant, trompeur ou destiné à exploiter d’autres utilisateurs est interdit.'
      ]
    },
    {
      title: '5. Mesures de protection',
      paragraphs: [
        'En cas de non-respect de cette politique, Bicount peut suspendre ou limiter l’accès au service, désactiver certaines fonctionnalités ou prendre toute mesure raisonnable nécessaire à la sécurité de la plateforme.',
        'Ces mesures peuvent intervenir sans préavis lorsque la sécurité, l’intégrité du service ou la conformité légale l’exigent.'
      ]
    },
    {
      title: '6. Signalement',
      paragraphs: [
        'Si tu observes un usage abusif ou un comportement dangereux, nous t’invitons à le signaler par les canaux de contact officiels de Bicount.'
      ]
    }
  ]
};
