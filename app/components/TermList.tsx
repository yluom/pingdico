"use client";

import { Terme } from "@/app/types/terme";
import TermCard from "./TermCard";

interface TermListProps {
  termes: Terme[];
  highlightedId: string | null;
}

export default function TermList({ termes, highlightedId }: TermListProps) {
  if (termes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <div className="text-6xl mb-4">🏓</div>
        <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-2">
          Aucun terme trouvé
        </h3>
        <p className="text-[var(--color-foreground)]/60 max-w-sm">
          Essaie avec d&apos;autres mots-clés ou explore les catégories !
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {termes.map((terme, index) => (
        <div
          key={terme.id}
          id={`terme-${terme.id}`}
          className="animate-fadeIn"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <TermCard terme={terme} isHighlighted={highlightedId === terme.id} />
        </div>
      ))}
    </div>
  );
}
