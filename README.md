# bicount-site

Landing Bicount reconstruite avec `Astro + React` pour `bicount.levelingcoder.com`.

## Stack
- Astro statique
- React pour les comportements client ciblés
- TypeScript
- CSS global découpé en petits fichiers

## Commandes
- `npm run dev`
- `npm run check`
- `npm run build`
- `npm run preview`

## Structure
- `src/pages/` contient les routes Astro
- `src/components/` contient les sections et composants communs
- `src/components/react/` contient les interactions hydratées
- `public/` contient les assets statiques, `/.well-known`, `robots.txt` et `sitemap.xml`
- `scripts/` contient les scripts projet

## Déploiement
La GitHub Action :
- installe les dépendances
- vérifie le projet
- build `dist/`
- déploie `dist/` par FTP sur `main`

Secrets attendus :
- `FTP_HOST`
- `FTP_USERNAME`
- `FTP_PASSWORD`
- `FTP_PORT`
- `FTP_TARGET`
