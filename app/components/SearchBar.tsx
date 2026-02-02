"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Glow effect when focused */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-primary)]/0 via-[var(--color-primary)]/20 to-[var(--color-primary)]/0 rounded-2xl blur-lg opacity-0 transition-opacity duration-300 peer-focus:opacity-100" />

      <div className="relative">
        {/* Search icon */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Chercher un terme..."
          className="peer w-full bg-[var(--color-surface)] pl-12 pr-4 py-4 rounded-2xl text-[var(--color-foreground)] placeholder:text-white/40 border-2 border-[var(--color-muted)] shadow-lg shadow-black/20 focus:outline-none focus:border-[var(--color-primary)] focus:shadow-[var(--color-primary)]/20 transition-all duration-300 text-base sm:text-lg font-medium"
        />

        {/* Clear button */}
        {value && (
          <button
            onClick={() => onChange("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-[var(--color-primary)] transition-colors duration-200"
            aria-label="Effacer la recherche"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
