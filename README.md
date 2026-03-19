# bicount-site

Landing page statique de Bicount pour `bicount.levelingcoder.com`.

## Stack
- HTML semantique
- CSS mobile-first decoupe en petits fichiers
- JavaScript modulaire sans dependance
- Build Node natif qui copie `src/` vers `dist/`

## Commandes
- `npm run check` verifie les liens locaux et la limite de 200 lignes
- `npm run build` genere `dist/`

## Structure
- `src/` contient la landing et les assets deployes
- `scripts/` contient les scripts de build et de verification
- `.github/workflows/ci-cd.yml` gere la CI/CD
- `AGENTS.md` documente les regles projet

## Deploy
Le workflow deploye automatiquement le contenu de `dist/` par FTP sur `main`.

Secrets attendus dans GitHub:
- `FTP_HOST`
- `FTP_USERNAME`
- `FTP_PASSWORD`
- `FTP_PORT`
- `FTP_TARGET`
