export type CategorieId =
  | "chance"
  | "coups"
  | "services"
  | "materiel"
  | "resultats"
  | "expressions"
  | "personnages";

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
