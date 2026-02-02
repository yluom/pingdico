"use client";

interface RandomWordButtonProps {
  onClick: () => void;
}

export default function RandomWordButton({ onClick }: RandomWordButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group relative inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-br from-[var(--color-primary)] to-[#B22D38] text-white font-bold rounded-xl shadow-lg shadow-[var(--color-primary)]/30 hover:shadow-xl hover:shadow-[var(--color-primary)]/40 hover:scale-105 active:scale-95 transition-all duration-200 overflow-hidden"
    >
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

      {/* Dice icon with bounce */}
      <span className="text-xl group-hover:animate-bounce" style={{ animationDuration: '0.5s' }}>
        🎲
      </span>

      <span className="relative text-sm sm:text-base tracking-wide">
        Mot au hasard
      </span>
    </button>
  );
}
