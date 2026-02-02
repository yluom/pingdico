# PingDico — Product Requirements Document

> **"Le dico qui gratte"**
> Dictionnaire en ligne du jargon pongiste français

---

## 1. Vision & Objectifs

### 1.1 Vision
Créer LA référence en ligne du vocabulaire et des expressions utilisées par les pongistes francophones. Un site fun, accessible et communautaire qui célèbre la richesse linguistique de ce sport.

### 1.2 Objectifs
- **Éduquer** : Permettre aux débutants de comprendre le jargon du club
- **Divertir** : Proposer une expérience ludique et décalée
- **Préserver** : Documenter un patrimoine linguistique oral souvent non-écrit
- **Rassembler** : Créer un sentiment d'appartenance à la communauté pongiste

### 1.3 Public cible
| Segment | Description | Besoin principal |
|---------|-------------|------------------|
| **Débutants** | Nouveaux licenciés, curieux | Comprendre ce qu'on dit au club |
| **Joueurs confirmés** | Licenciés réguliers | Rigoler, partager, se reconnaître |
| **Curieux** | Non-joueurs | Découvrir un univers décalé |

---

## 2. Positionnement

### 2.1 Ton & Personnalité
- **Décalé** : Humour de vestiaire, autodérision
- **Authentique** : Vocabulaire réel, pas inventé
- **Accessible** : Pas élitiste, tout le monde est bienvenu
- **Visuel** : Emojis, illustrations, couleurs vives

### 2.2 Tagline
> *"Le dico qui gratte"*

Alternatives :
- *"Parle pongiste couramment"*
- *"Pour enfin comprendre ton club"*

---

## 3. Périmètre fonctionnel

### 3.1 MVP (Version 1.0)

#### 🏠 Page unique (SPA)
| Élément | Description |
|---------|-------------|
| **Header** | Logo, nom "PingDico", tagline |
| **Recherche** | Champ de recherche instantanée (filtrage client-side) |
| **Bouton aléatoire** | "🎲 Un mot au hasard" — affiche un terme random |
| **Filtres par catégorie** | Boutons/tags pour filtrer les termes |
| **Liste des termes** | Cards avec : terme, définition, exemple d'usage, catégorie, variantes régionales |
| **Footer** | Crédits, lien GitHub, contact |

#### 📂 Catégories de termes
| Icône | Catégorie | Description |
|-------|-----------|-------------|
| 🍀 | **Chance** | Les grattes, carottes et coups de bol |
| 💥 | **Coups** | Techniques et gestes du jeu |
| 🎯 | **Services** | Types de services et leur jargon |
| 🔧 | **Matériel** | Raquettes, revêtements, accessoires |
| 📊 | **Résultats** | Victoires, défaites, classement |
| 🗣️ | **Expressions** | Phrases et locutions courantes |
| 🎭 | **Personnages** | Types de joueurs et leurs travers |

#### 📇 Structure d'un terme
```json
{
  "id": "carotte",
  "terme": "Carotte",
  "definition": "Point gagné par la chance pure, généralement grâce à un filet favorable ou un bord de table.",
  "exemple": "\"Il m'a mis 6 carottes en un set, j'étais dégoûté.\"",
  "categorie": "chance",
  "emoji": "🥕",
  "variantes": [
    { "terme": "Kartoffel", "pays": "🇩🇪", "note": "Patate en allemand" },
    { "terme": "Point de cul", "pays": "🇧🇪", "note": "Belgique, familier" }
  ],
  "synonymes": ["gratte", "bol"],
  "niveau": 1
}
```

### 3.2 Évolutions futures (V2+)

| Priorité | Fonctionnalité | Description |
|----------|----------------|-------------|
| P1 | **Quiz interactif** | "C'est quoi une roulette ?" — format QCM |
| P1 | **Partage social** | Bouton pour partager un terme sur les réseaux |
| P2 | **Mode sombre** | Toggle dark/light mode |
| P2 | **PWA** | Installation mobile, mode hors-ligne |
| P2 | **Mot du jour** | Affichage d'un terme différent chaque jour |
| P3 | **Proposer un terme** | Formulaire (via Google Form ou GitHub Issues) |
| P3 | **Statistiques** | Compteur de termes, visiteurs |

---

## 4. Contenu

### 4.1 Termes identifiés (base initiale)

#### 🍀 Chance
- Carotte, Gratte, Gratte au filet, Gratte à la table, Double gratte
- Roulette, Sifflante, Coin de table, Net/Let

#### 💥 Coups
- Topspin/Top/Lift, Contre-top, Bloc, Flip, Virgule
- Smash/Frappe/Coup terminal, Poussette, Amorti
- Démarrer, Faux top, Pivot, Défense

#### 🎯 Services
- Service marteau, Service bombe, Service mou
- Service rentrant, Service chinois, Service infirmerie/deux rebonds

#### 🔧 Matériel
- Plaque, Bois, Palette, Mousse
- Backside, Picot long (PL), Soft, Anti-top, Combi
- Tensor, Dwell time

#### 📊 Résultats
- Perf, Contre, Belle, Ace, Indiv

#### 🗣️ Expressions
- Balle lourde, Balle molle
- Point de passage, Ventre pongiste, Au coude
- Toucher de balle, Prendre cher, Casser le rythme
- Deux balles, Tournante

#### 🎭 Personnages & Maladies
- Testonite, Equipment Junkie (EJ), Carotteur
- Crabe à picots, Défenseur chiant

### 4.2 Règles éditoriales
- **Définition** : 1-2 phrases max, langage simple
- **Exemple** : Phrase entre guillemets, "entendue au club"
- **Ton** : Léger, parfois moqueur, jamais méchant
- **Validation** : Terme réellement utilisé (sources : forums, Wikipedia, expérience)

---

## 5. Design & UX

### 5.1 Principes
- **Mobile-first** : 70%+ du trafic attendu sur mobile
- **Scroll infini** : Pas de pagination, tout sur une page
- **Feedback instantané** : Recherche et filtres sans rechargement
- **Fun visuel** : Couleurs vives, emojis, micro-animations

### 5.2 Palette couleurs (proposition)
| Usage | Couleur | Code |
|-------|---------|------|
| Primaire | Orange vif | `#FF6B35` |
| Secondaire | Bleu table | `#1E3A5F` |
| Accent | Vert succès | `#2ECC71` |
| Fond | Blanc cassé | `#FAFAFA` |
| Texte | Gris foncé | `#2D3436` |

### 5.3 Typographie
- **Titres** : Font bold, moderne, sans-serif (Inter, Poppins)
- **Corps** : Lisible, 16px minimum sur mobile
- **Code/Termes** : Légèrement stylisé pour ressortir

### 5.4 Wireframe simplifié
```
┌──────────────────────────────────────────────────┐
│  🏓 PINGDICO          [🔍 Rechercher...]         │
│  Le dico qui gratte                              │
├──────────────────────────────────────────────────┤
│                                                  │
│  [🎲 Mot au hasard]                              │
│                                                  │
│  [🍀 Chance] [💥 Coups] [🎯 Services] [🔧 Matos] │
│  [📊 Résultats] [🗣️ Expressions] [🎭 Persos]    │
│                                                  │
├──────────────────────────────────────────────────┤
│  ┌────────────────────────────────────────────┐  │
│  │ 🥕 CAROTTE                           🍀    │  │
│  │                                            │  │
│  │ Point gagné par la chance pure (filet,    │  │
│  │ bord de table...).                        │  │
│  │                                            │  │
│  │ 💬 "Il m'a mis 6 carottes, le salaud"     │  │
│  │                                            │  │
│  │ 🌍 🇩🇪 Kartoffel · 🇧🇪 Point de cul        │  │
│  └────────────────────────────────────────────┘  │
│                                                  │
│  ┌────────────────────────────────────────────┐  │
│  │ 🎱 GRATTE                            🍀    │  │
│  │ ...                                        │  │
│  └────────────────────────────────────────────┘  │
│                                                  │
│  (... autres termes)                             │
│                                                  │
├──────────────────────────────────────────────────┤
│  Fait avec 🏓 par des pongistes                  │
│  [GitHub] [Contact]                              │
└──────────────────────────────────────────────────┘
```

---

## 6. Spécifications techniques

### 6.1 Stack
| Couche | Technologie | Justification |
|--------|-------------|---------------|
| **Framework** | React (Vite) | SPA moderne, rapide à dev |
| **Style** | Tailwind CSS | Prototypage rapide, responsive natif |
| **Données** | JSON statique | Pas de backend, simplicité |
| **Hébergement** | Vercel / Netlify / GitHub Pages | Gratuit, déploiement auto |
| **Domaine** | pingdico.fr | Ancrage français |

### 6.2 Architecture fichiers
```
pingdico/
├── public/
│   └── favicon.ico
├── src/
│   ├── data/
│   │   └── termes.json        # Base de données des termes
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── CategoryFilters.jsx
│   │   ├── TermCard.jsx
│   │   ├── TermList.jsx
│   │   ├── RandomButton.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── README.md
```

### 6.3 Performance
- **Lighthouse score cible** : 90+ sur toutes les métriques
- **Temps de chargement** : < 2s sur 3G
- **Bundle size** : < 100KB gzippé

### 6.4 SEO
- Meta title : "PingDico — Le dictionnaire du jargon pongiste"
- Meta description : "Découvrez le vocabulaire des pongistes : carotte, gratte, topspin... Tout le jargon du tennis de table expliqué avec humour."
- Open Graph pour partage social

---

## 7. Métriques de succès

### 7.1 KPIs
| Métrique | Cible V1 | Outil |
|----------|----------|-------|
| Visiteurs uniques / mois | 500 | Analytics |
| Temps moyen sur page | > 2 min | Analytics |
| Taux de rebond | < 50% | Analytics |
| Partages sociaux | 50 / mois | Compteur custom |
| Termes dans la base | 50+ | Manuel |

### 7.2 Feedback qualitatif
- Partages sur forums pongistes (tennis2table.com, tennis-de-table.com)
- Retours via formulaire contact
- Issues GitHub

---

## 8. Planning

### Phase 1 : MVP (2-3 jours)
- [ ] Setup projet React + Tailwind
- [ ] Création du fichier JSON avec 30+ termes
- [ ] Composants UI (Header, Cards, Filtres, Search)
- [ ] Responsive design
- [ ] Déploiement

### Phase 2 : Polish (1 semaine)
- [ ] Ajout de termes (objectif 50+)
- [ ] SEO & meta tags
- [ ] Achat domaine pingdico.fr
- [ ] Partage communauté pongiste

### Phase 3 : Évolutions (ongoing)
- [ ] Quiz interactif
- [ ] PWA
- [ ] Contributions externes

---

## 9. Risques & Mitigations

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Peu de trafic | Moyen | Partage sur forums spécialisés, SEO |
| Termes incorrects | Faible | Validation par sources multiples |
| Maintenance abandonnée | Faible | Open source, contributions externes |

---

## 10. Annexes

### 10.1 Sources de référence
- Wikipedia : Vocabulaire du tennis de table
- Forum tennis2table.com : Dico Ping
- Forum tennis-de-table.com : Le Jargon du tennis de table
- Sikana.tv : Tutoriels officiels

### 10.2 Inspiration design
- Urban Dictionary (format définitions)
- Le Petit Robert (légitimité linguistique)
- Emoji Kitchen (fun visuel)

---

*Document créé le 2 février 2026*
*Version 1.0*
