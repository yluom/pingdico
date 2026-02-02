"use client";

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-[var(--color-secondary)] via-[#1E3A5F] to-[#152a47] py-3 px-4 sm:py-6">
      {/* Decorative ping pong balls - hidden on mobile */}
      <div className="hidden sm:block absolute top-4 right-[10%] w-5 h-5 rounded-full bg-white/10 animate-bounce" style={{ animationDuration: '2s', animationDelay: '0.2s' }} />
      <div className="hidden sm:block absolute top-8 right-[25%] w-3 h-3 rounded-full bg-[var(--color-primary)]/20 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />

      <div className="relative mx-auto max-w-4xl flex items-center justify-center gap-3 sm:flex-col sm:gap-1">
        {/* Logo + Title inline on mobile */}
        <div className="flex items-center gap-2 sm:flex-col sm:gap-1">
          <span className="text-3xl sm:text-5xl drop-shadow-lg">🏓</span>
          <h1 className="font-black text-2xl sm:text-4xl md:text-5xl tracking-tight">
            <span className="text-white">Ping</span>
            <span className="text-[var(--color-primary)]">Dico</span>
          </h1>
        </div>

        {/* Tagline - hidden on mobile */}
        <div className="hidden sm:flex items-center justify-center gap-3 mt-1">
          <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-[var(--color-primary)]/60" />
          <p className="text-white/80 text-sm font-medium tracking-wide uppercase">
            Le dico qui gratte
          </p>
          <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-[var(--color-primary)]/60" />
        </div>
      </div>
    </header>
  );
}
