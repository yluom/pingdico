"use client";

import { useState, useRef, useEffect } from "react";
import { Categorie, CategorieId } from "@/app/types/terme";

interface CategoryFilterProps {
  categories: Categorie[];
  selected: CategorieId | null;
  onSelect: (categoryId: CategorieId | null) => void;
}

export default function CategoryFilter({
  categories,
  selected,
  onSelect,
}: CategoryFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCategory = selected
    ? categories.find((c) => c.id === selected)
    : null;

  const handleSelect = (id: CategorieId | null) => {
    onSelect(id);
    setIsOpen(false);
  };

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div className="w-full">
      {/* Mobile: Modern dropdown */}
      <div className="relative sm:hidden" ref={dropdownRef}>
        {/* Trigger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 w-full flex items-center justify-between gap-3 px-4 py-3 bg-white rounded-2xl border-2 border-[var(--color-secondary)]/10 shadow-sm active:scale-[0.98] transition-all duration-200"
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">
              {selectedCategory ? selectedCategory.emoji : "✨"}
            </span>
            <span className="font-semibold text-[var(--color-foreground)]">
              {selectedCategory ? selectedCategory.label : "Toutes catégories"}
            </span>
          </div>
          <svg
            className={`w-5 h-5 text-[var(--color-secondary)]/50 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown panel */}
        <div
          className={`absolute left-0 right-0 top-full mt-2 z-50 transition-all duration-300 ease-out ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="p-2 bg-white rounded-2xl border-2 border-[var(--color-secondary)]/10 shadow-xl">
            {/* All option */}
            <button
              onClick={() => handleSelect(null)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                selected === null
                  ? "bg-[var(--color-secondary)] text-white"
                  : "hover:bg-[var(--color-secondary)]/5"
              }`}
            >
              <span className="text-xl">✨</span>
              <span className="font-medium">Toutes catégories</span>
              {selected === null && (
                <svg className="w-5 h-5 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>

            {/* Category options */}
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleSelect(category.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  selected === category.id
                    ? "bg-[var(--color-primary)] text-white"
                    : "hover:bg-[var(--color-primary)]/5"
                }`}
              >
                <span className="text-xl">{category.emoji}</span>
                <span className="font-medium">{category.label}</span>
                {selected === category.id && (
                  <svg className="w-5 h-5 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: Horizontal pills */}
      <div className="hidden sm:flex flex-wrap gap-2">
        <button
          onClick={() => onSelect(null)}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-200 ${
            selected === null
              ? "bg-[var(--color-secondary)] text-white shadow-md shadow-[var(--color-secondary)]/30 scale-105"
              : "bg-white text-[var(--color-secondary)] border-2 border-[var(--color-secondary)]/10 hover:border-[var(--color-secondary)]/30 hover:bg-[var(--color-secondary)]/5"
          }`}
        >
          <span>✨</span>
          <span>Tous</span>
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelect(category.id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-200 ${
              selected === category.id
                ? "bg-[var(--color-primary)] text-white shadow-md shadow-[var(--color-primary)]/30 scale-105"
                : "bg-white text-[var(--color-foreground)] border-2 border-[var(--color-secondary)]/10 hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/5"
            }`}
          >
            <span>{category.emoji}</span>
            <span>{category.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
