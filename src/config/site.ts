export const downloadUrl = import.meta.env.PUBLIC_DOWNLOAD_URL
  ?? 'https://drive.google.com/file/d/1rtjCjkhmAkX08v9ciMUfDrVRbDHWuIcD/view?usp=sharing?usp=sharing';
export const appScheme = 'bicount';

export const siteMeta = {
  title: 'Bicount | Application de gestion de dépenses et budget personnel',
  description: 'Bicount est une application mobile de gestion de dépenses et de budget personnel pour suivre cash, mobile money et banque au quotidien.',
  url: 'https://bicount.levelingcoder.com',
  image: 'https://bicount.levelingcoder.com/og-image.svg',
  icon: 'https://bicount.levelingcoder.com/favicon.png'
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Bicount',
  alternateName: 'Bicount App',
  url: siteMeta.url,
  logo: siteMeta.icon,
  description: siteMeta.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kinshasa',
    addressCountry: 'CD'
  }
};

export const navLinks = [
  { href: '#comment-ca-marche', label: 'Le produit' },
  { href: '#pro', label: 'Bicount Pro' },
  { href: '#principes', label: 'Principes' }
];

export const heroBenefits = [
  { icon: 'clock', text: 'Saisie rapide, même hors-ligne' },
  { icon: 'ledger', text: 'Cash, mobile money, banque' },
  { icon: 'trend', text: 'CDF et USD, perso et activité' }
] as const;

export const marketStats = [
  { value: '114M', label: 'habitants en RDC' },
  { value: '64,7M', label: 'connexions mobiles actives' },
  { value: '34,7M', label: 'internautes fin 2025' },
  { value: '500k+', label: 'téléchargements des apps mobile money leaders' }
];

export const problemCards = [
  { icon: 'clock', title: 'Dépenses non notées, oubliées', body: 'Sans outil adapté, les petites sorties d\'argent s\'accumulent sans laisser de trace lisible.' },
  { icon: 'cross', title: 'Perso et activité constamment mélangés', body: 'Confusion permanente entre argent de la maison et argent d\'activité. Impossible de mesurer la rentabilité réelle.' },
  { icon: 'alert', title: 'Impossible de planifier les prochains jours', body: 'Difficile de décider sereinement quand on ne voit pas clairement ce qui reste.' },
  { icon: 'coin', title: 'Stress budgétaire récurrent malgré tous les efforts', body: 'Beaucoup font des sacrifices réels, mais sans visibilité, la discipline ne suffit pas. Il faut un outil pensé pour cette réalité&nbsp;: cash, mobile money, revenus irréguliers.', wide: true }
] as const;

export const solutionCards = [
  { icon: 'clock', title: 'Saisie ultra-rapide', body: 'Quelques taps suffisent pour enregistrer une dépense en cash, en mobile money ou par carte, directement au moment où tu la fais — même sans connexion.', wide: true, variant: 'bars' },
  { icon: 'list', title: 'Catégories qui parlent vraiment', body: 'Nourriture, transport, data, loyer, business, famille… adaptées au quotidien réel, pas à un manuel de finances théorique.', variant: 'tags' },
  { icon: 'trend-rise', title: 'Vue claire de tes habitudes', body: 'Des graphiques simples pour voir où part ton argent chaque semaine et chaque mois, par catégories et par moyens de paiement.' }
] as const;

export const proHighlights = [
  'Sépare clairement dépenses perso et dépenses d\'activité dans la même application.',
  'Suis tes achats, tes charges et tes petites dépenses pro au jour le jour.',
  'Prépare une base d\'historique pour discuter avec un partenaire ou un financeur.'
];

export const identityNot = [
  'un wallet',
  'une banque',
  'une app de dettes entre amis',
  'un simple tableau Excel sur téléphone'
];

export const identityIs = [
  'le cockpit de tes dépenses au quotidien',
  'une app légère, offline-first, pensée pour des contextes où tout ne passe pas par la carte',
  'une porte d\'entrée future vers des services financiers utiles via des partenaires, sans complexifier ton expérience'
];

export const principles = [
  { name: 'Simplicité', body: 'Comprendre et utiliser l\'app en quelques minutes, sans formation préalable.' },
  { name: 'Clarté', body: 'Voir en un coup d\'œil où part l\'argent, sans ambiguïté ni surcharge visuelle.' },
  { name: 'Fiabilité', body: 'Des calculs, catégories et historiques cohérents sur lesquels tu peux compter chaque jour.' },
  { name: 'Accessibilité', body: 'App légère, frugale en data, simple à payer si certaines options deviennent payantes.' },
  { name: 'Progressivité', body: 'Ne pas complexifier le produit trop tôt. Chaque étape est justifiée par l\'usage réel.' }
];

export const timelineSteps = [
  { period: 'Aujourd\'hui', title: 'Discipline personnelle', body: 'Bicount t\'aide à noter tes dépenses perso et à relire tes habitudes chaque semaine.' },
  { period: 'Demain', title: 'Structuration de l\'activité', body: 'Bicount Pro t\'aide à structurer ton activité, séparer les flux et gagner du temps au quotidien.' },
  { period: 'Plus tard', title: 'Services financiers utiles', body: 'Grâce à des partenaires financiers, Bicount devient une porte d\'accès simple à des solutions utiles, sans transformer l\'app en usine à gaz.' }
];

export const inviteContent = {
  title: 'Invitation Bicount',
  heading: 'Quelqu\'un t\'a invité à rejoindre Bicount.',
  body: 'Ouvre l\'app pour accepter l\'invitation et retrouver directement tes comptes partagés, tes remboursements et tes rappels.',
  note: 'Après installation, rouvre ce lien depuis ton téléphone pour que Bicount ouvre automatiquement l\'invitation.'
};
