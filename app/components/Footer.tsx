"use client";

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] py-8 px-4 overflow-hidden border-t border-[var(--color-muted)]">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative text-center">
        <p className="text-white/80 font-medium">
          Fait avec passion pour le ping pong{" "}
          <span className="inline-block animate-bounce" style={{ animationDuration: "1s" }}>
            🏓
          </span>
        </p>
        <p className="text-white/40 text-sm mt-2">
          <a
            href="https://github.com/yluom/pingdico"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-primary)] transition-colors"
          >
            Source
          </a>
        </p>
      </div>
    </footer>
  );
}
