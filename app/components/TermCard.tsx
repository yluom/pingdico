"use client";

import { Terme, CATEGORIES } from "@/app/types/terme";

interface TermCardProps {
  terme: Terme;
  isHighlighted?: boolean;
}

export default function TermCard({ terme, isHighlighted = false }: TermCardProps) {
  const category = CATEGORIES.find((c) => c.id === terme.categorie);

  return (
    <article
      className={`group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 ${
        isHighlighted
          ? "ring-4 ring-[var(--color-primary)] ring-offset-2 scale-[1.02] shadow-2xl shadow-[var(--color-primary)]/30"
          : "shadow-lg shadow-[var(--color-secondary)]/5 hover:shadow-xl hover:shadow-[var(--color-secondary)]/10 hover:-translate-y-1"
      }`}
    >
      {/* Highlight glow animation */}
      {isHighlighted && (
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/10 via-transparent to-[var(--color-primary)]/10 animate-pulse" />
      )}

      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-secondary)]" />

      <div className="relative p-5">
        {/* Header: Emoji + Title + Category */}
        <div className="flex items-start gap-3 mb-4">
          {/* Emoji badge */}
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[var(--color-secondary)]/5 to-[var(--color-secondary)]/10 rounded-xl text-2xl group-hover:scale-110 transition-transform duration-300">
            {terme.emoji}
          </div>

          <div className="flex-1 min-w-0">
            {/* Term name */}
            <h3 className="font-black text-xl text-[var(--color-secondary)] leading-tight mb-1 group-hover:text-[var(--color-primary)] transition-colors duration-300">
              {terme.terme}
            </h3>

            {/* Category badge */}
            {category && (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-secondary)]/60 bg-[var(--color-secondary)]/5 px-2 py-0.5 rounded-full">
                <span>{category.emoji}</span>
                <span>{category.label}</span>
              </span>
            )}
          </div>
        </div>

        {/* Definition */}
        <p className="text-[var(--color-foreground)]/80 text-sm leading-relaxed mb-4">
          {terme.definition}
        </p>

        {/* Example */}
        <div className="relative pl-4 mb-4 border-l-3 border-[var(--color-primary)]/30">
          <p className="text-sm italic text-[var(--color-secondary)]/70">
            {terme.exemple}
          </p>
        </div>

        {/* Synonyms */}
        {terme.synonymes.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            <span className="text-xs font-semibold text-[var(--color-secondary)]/50 uppercase tracking-wide mr-1">
              Syn.
            </span>
            {terme.synonymes.map((syn) => (
              <span
                key={syn}
                className="inline-block px-2.5 py-1 text-xs font-medium bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-full border border-[var(--color-accent)]/20"
              >
                {syn}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Decorative corner element */}
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[var(--color-secondary)]/3 to-transparent rounded-tl-[100%] pointer-events-none" />
    </article>
  );
}
