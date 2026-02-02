"use client";

interface HeaderProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  onRandomClick?: () => void;
}

export default function Header({ searchValue = "", onSearchChange, onRandomClick }: HeaderProps) {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#1A1A1A] py-3 px-4 sm:py-6 border-b-2 border-[var(--color-primary)]/30">
      {/* Decorative ping pong balls - hidden on mobile */}
      <div className="hidden sm:block absolute top-4 right-[10%] w-5 h-5 rounded-full bg-white/10 animate-bounce" style={{ animationDuration: '2s', animationDelay: '0.2s' }} />
      <div className="hidden sm:block absolute top-8 right-[25%] w-3 h-3 rounded-full bg-[var(--color-primary)]/30 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />

      {/* Mobile layout: logo+title left, search+random right */}
      <div className="sm:hidden relative mx-auto max-w-4xl flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-2xl drop-shadow-lg">🏓</span>
          <h1 className="font-black text-xl tracking-tight">
            <span className="text-white">Ping</span>
            <span className="text-[var(--color-primary)]">Dico</span>
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-white/50 text-sm">🔍</span>
            <input
              type="text"
              value={searchValue}
              onChange={(e) => onSearchChange?.(e.target.value)}
              placeholder="Rechercher..."
              className="w-32 pl-7 pr-2 py-1.5 text-sm rounded-lg bg-[var(--color-surface)] text-white placeholder-white/50 border border-[var(--color-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
            />
          </div>
          <button
            onClick={onRandomClick}
            className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-[var(--color-primary)] text-white text-lg hover:bg-[var(--color-primary)]/90 active:scale-95 transition-all"
            aria-label="Mot au hasard"
          >
            🎲
          </button>
        </div>
      </div>

      {/* Desktop layout: centered */}
      <div className="hidden sm:flex relative mx-auto max-w-4xl flex-col items-center gap-1">
        <div className="flex flex-col items-center gap-1">
          <span className="text-5xl drop-shadow-lg">🏓</span>
          <h1 className="font-black text-4xl md:text-5xl tracking-tight">
            <span className="text-white">Ping</span>
            <span className="text-[var(--color-primary)]">Dico</span>
          </h1>
        </div>

        {/* Tagline */}
        <div className="flex items-center justify-center gap-3 mt-1">
          <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-[var(--color-primary)]" />
          <p className="text-white/80 text-sm font-medium tracking-wide uppercase">
            Le dico qui gratte
          </p>
          <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-[var(--color-primary)]" />
        </div>
      </div>
    </header>
  );
}
