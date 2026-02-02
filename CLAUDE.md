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
- **Language**: TypeScript (strict mode)
- **Style**: Tailwind CSS v4 (via @tailwindcss/postcss)
- **Fonts**: Geist Sans/Mono via next/font
- **Data**: JSON statique (à créer dans `app/data/termes.json`)

## Architecture

```
app/
├── layout.tsx      # Root layout avec fonts Geist
├── page.tsx        # Page principale
├── globals.css     # Tailwind + CSS vars (--background, --foreground)
└── data/           # (à créer) JSON des termes
```

Path alias: `@/*` → root directory

## Design Specs (from PRD)

### Palette
| Usage | Code |
|-------|------|
| Primaire (orange) | `#FF6B35` |
| Secondaire (bleu table) | `#1E3A5F` |
| Accent (vert) | `#2ECC71` |
| Fond | `#FAFAFA` |
| Texte | `#2D3436` |

### Catégories de termes
- 🍀 `chance` - Grattes, carottes
- 💥 `coups` - Techniques
- 🎯 `services` - Types de services
- 🔧 `materiel` - Raquettes, revêtements
- 📊 `resultats` - Scores, classement
- 🗣️ `expressions` - Phrases courantes
- 🎭 `personnages` - Types de joueurs

### Structure d'un terme
```json
{
  "id": "carotte",
  "terme": "Carotte",
  "definition": "Point gagné par la chance pure...",
  "exemple": "\"Il m'a mis 6 carottes en un set\"",
  "categorie": "chance",
  "emoji": "🥕",
  "variantes": [{ "terme": "Kartoffel", "pays": "🇩🇪", "note": "..." }],
  "synonymes": ["gratte", "bol"],
  "niveau": 1
}
```

## Guidelines

- Mobile-first (70%+ trafic attendu sur mobile)
- Ton décalé, humour de vestiaire, jamais méchant
- Lighthouse score cible: 90+
- Ne jamais commiter sans demande explicite de l'utilisateur
