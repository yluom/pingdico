export type CategorieId =
  | "chance"
  | "coups"
  | "services"
  | "materiel"
  | "resultats"
  | "expressions"
  | "personnages";

export interface Categorie {
  id: CategorieId;
  label: string;
  emoji: string;
}

export interface Terme {
  id: string;
  terme: string;
  definition: string;
  exemple: string;
  categorie: CategorieId;
  emoji: string;
  synonymes: string[];
  priority: number;
}

export const CATEGORIES: Categorie[] = [
  { id: "chance", label: "Chance", emoji: "🍀" },
  { id: "coups", label: "Coups", emoji: "💥" },
  { id: "services", label: "Services", emoji: "🎯" },
  { id: "materiel", label: "Matériel", emoji: "🔧" },
  { id: "resultats", label: "Résultats", emoji: "📊" },
  { id: "expressions", label: "Expressions", emoji: "🗣️" },
  { id: "personnages", label: "Personnages", emoji: "🎭" },
];
