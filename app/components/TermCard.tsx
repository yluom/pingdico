"use client";

import { Terme } from "@/app/types/terme";

interface TermCardProps {
  terme: Terme;
  isHighlighted?: boolean;
  onClick?: (id: string) => void;
}

export default function TermCard({ terme, isHighlighted = false, onClick }: TermCardProps) {
  const handleClick = () => {
    window.history.pushState(null, "", `#${terme.id}`);
    onClick?.(terme.id);
  };

  return (
    <article
      onClick={handleClick}
      className={`group relative bg-[var(--color-surface)] rounded-2xl overflow-hidden transition-all duration-500 border border-[var(--color-muted)] cursor-pointer ${
        isHighlighted
          ? "ring-4 ring-[var(--color-primary)] ring-offset-2 ring-offset-[var(--color-background)] scale-[1.02] shadow-2xl shadow-[var(--color-primary)]/30"
          : "shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-[var(--color-primary)]/20 hover:-translate-y-1"
      }`}
    >
      {/* Highlight glow animation */}
      {isHighlighted && (
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/10 via-transparent to-[var(--color-primary)]/10 animate-pulse" />
      )}

      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-primary)]" />

      <div className="relative p-5">
        {/* Header: Emoji + Title + Category */}
        <div className="flex items-start gap-3 mb-4">
          {/* Emoji badge */}
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[var(--color-muted)] to-[var(--color-secondary)] rounded-xl text-2xl group-hover:scale-110 transition-transform duration-300">
            {terme.emoji}
          </div>

          <div className="flex-1 min-w-0">
            {/* Term name + Synonyms inline */}
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1">
              <h3 className="font-black text-xl text-white leading-tight group-hover:text-[var(--color-primary)] transition-colors duration-300">
                {terme.terme}
              </h3>
              {terme.synonymes.length > 0 && (
                <div className="flex flex-wrap items-center gap-1">
                  {terme.synonymes.map((syn) => (
                    <span
                      key={syn}
                      className="inline-block px-1.5 py-0.5 text-[10px] font-medium bg-[var(--color-accent)]/15 text-[var(--color-accent)] rounded border border-[var(--color-accent)]/30"
                    >
                      {syn}
                    </span>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Definition */}
        <p className="text-[var(--color-foreground)]/80 text-sm leading-relaxed mb-4">
          {terme.definition}
        </p>

        {/* Example */}
        <div className="relative pl-4 border-l-3 border-[var(--color-primary)]/50">
          <p className="text-sm italic text-white/70">
            {terme.exemple}
          </p>
        </div>
      </div>

      {/* Decorative corner element */}
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[var(--color-primary)]/10 to-transparent rounded-tl-[100%] pointer-events-none" />
    </article>
  );
}
