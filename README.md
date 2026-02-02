# PingDico

**Le dico qui gratte** - Dictionnaire en ligne du jargon pongiste français.

## Stack technique

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Style**: Tailwind CSS v4
- **Fonts**: Geist Sans/Mono
- **Data**: JSON statique

## Commandes

```bash
npm run dev      # Serveur de dev sur localhost:3000
npm run build    # Build production
npm run start    # Lancer le build production
npm run lint     # ESLint
```

## Structure

```
app/
├── layout.tsx          # Root layout avec fonts Geist
├── page.tsx            # Page principale
├── globals.css         # Tailwind + CSS vars
├── data/termes.json    # Données des termes
├── types/terme.ts      # Types TypeScript
└── components/         # Composants React
```

## Catégories de termes

- 🍀 `chance` - Grattes, carottes
- 💥 `coups` - Techniques
- 🎯 `services` - Types de services
- 🔧 `materiel` - Raquettes, revêtements
- 📊 `resultats` - Scores, classement
- 🗣️ `expressions` - Phrases courantes
- 🎭 `personnages` - Types de joueurs

## Licence

MIT
