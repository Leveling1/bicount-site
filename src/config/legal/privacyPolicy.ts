import { legalLastUpdated } from '@/config/legal/shared';

export const privacyPolicyContent = {
  title: 'Politique de confidentialité',
  description: 'Informations essentielles sur la collecte, l’utilisation et la protection des données personnelles dans Bicount.',
  lead: 'Cette politique explique comment Bicount traite les informations liées à l’utilisation du site et de l’application.',
  updatedAt: legalLastUpdated,
  sections: [
    {
      title: '1. Données que nous pouvons collecter',
      paragraphs: [
        'Selon ton usage, Bicount peut traiter des informations de compte, des données techniques de navigation, des identifiants d’appareil, des préférences produit et des informations liées aux fonctionnalités utilisées.',
        'Lorsque tu saisis des données financières dans l’application, ces données peuvent également être stockées ou synchronisées selon les fonctionnalités actives.'
      ]
    },
    {
      title: '2. Finalités du traitement',
      paragraphs: [
        'Ces informations sont utilisées pour faire fonctionner le service, sécuriser les accès, améliorer l’expérience utilisateur, répondre aux demandes de support, assurer certaines notifications et maintenir la qualité du produit.',
        'Nous utilisons aussi certaines données pour prévenir les abus, diagnostiquer les incidents et piloter l’évolution du service.'
      ]
    },
    {
      title: '3. Partage limité',
      paragraphs: [
        'Bicount ne vend pas les données personnelles à des tiers.',
        'Certaines données peuvent être traitées par des prestataires techniques, d’hébergement, d’authentification, d’analyse ou de notification lorsque cela est nécessaire au fonctionnement du service.'
      ]
    },
    {
      title: '4. Conservation',
      paragraphs: [
        'Les données sont conservées pendant la durée nécessaire au fonctionnement du service, au respect des obligations légales et à la gestion raisonnable de la relation utilisateur.',
        'La durée exacte peut varier selon la nature des données, les obligations réglementaires et l’état du compte.'
      ]
    },
    {
      title: '5. Sécurité',
      paragraphs: [
        'Nous mettons en place des mesures techniques et organisationnelles raisonnables pour protéger les données contre l’accès non autorisé, la perte, l’altération ou la divulgation abusive.',
        'Aucune méthode de transmission ou de stockage n’offre toutefois une garantie absolue.'
      ]
    },
    {
      title: '6. Tes droits',
      paragraphs: [
        'Selon la loi applicable, tu peux demander l’accès, la correction ou la suppression de certaines données, ainsi que formuler des demandes liées à leur traitement.',
        'Nous pourrons demander des informations complémentaires pour vérifier ton identité avant de traiter certaines demandes.'
      ]
    },
    {
      title: '7. Contact',
      paragraphs: [
        'Pour toute question relative à la confidentialité ou à l’exercice de tes droits, tu peux contacter Bicount via les canaux officiels publiés par le produit.'
      ]
    }
  ]
};
