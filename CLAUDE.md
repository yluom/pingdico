# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PingDico ("Le dico qui gratte") - Dictionnaire en ligne du jargon pongiste français. SPA avec données JSON statiques.

## Commands

```bash
npm run dev      # Start dev server on localhost:3000
npm run build    # Production build
npm run start    # Run production build
npm run lint     # ESLint (eslint-config-next)
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19
- **Language**: TypeScript (strict mode)
- **Style**: Tailwind CSS v4 (via @tailwindcss/postcss)
- **Fonts**: Geist Sans/Mono via next/font
- **Data**: JSON statique dans `app/data/termes.json`

## Architecture

```
app/
├── layout.tsx          # Root layout avec fonts Geist
├── page.tsx            # Page principale (client component)
├── globals.css         # Tailwind + CSS vars thème sombre
├── types/
│   └── terme.ts        # Interfaces TypeScript
├── data/
│   └── termes.json     # 16 termes statiques
└── components/
    ├── Header.tsx
    ├── SearchBar.tsx
    ├── TermCard.tsx
    ├── TermList.tsx
    ├── RandomWordButton.tsx
    └── Footer.tsx
```

Path alias: `@/*` → root directory

## Design Specs

### Palette (thème sombre)
| Usage | Code |
|-------|------|
| Fond | `#0D0D0D` |
| Texte | `#F5F5F5` |
| Primary (rouge) | `#E63946` |
| Accent | `#FF4D5A` |
| Secondary | `#1A1A1A` |
| Surface | `#161616` |
| Muted | `#2A2A2A` |

### Catégories de termes
- 🍀 `chance` - Grattes, carottes
- 💥 `coups` - Techniques
- 🎯 `services` - Types de services
- 🔧 `materiel` - Raquettes, revêtements
- 📊 `resultats` - Scores, classement
- 🗣️ `expressions` - Phrases courantes
- 🎭 `personnages` - Types de joueurs

### Structure d'un terme
```typescript
interface Terme {
  id: string;
  terme: string;
  definition: string;
  exemple: string;
  categorie: CategorieId;
  emoji: string;
  synonymes: string[];
  priority: number;
}
```

## Guidelines

- Mobile-first (70%+ trafic attendu sur mobile)
- Ton décalé, humour de vestiaire, jamais méchant
- Lighthouse score cible: 90+
- Ne jamais commiter sans demande explicite de l'utilisateur
- Ne jamais lancer le serveur de dev (`npm run dev`)
