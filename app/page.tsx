"use client";

import { useState, useCallback } from "react";
import { Terme, CATEGORIES, CategorieId } from "@/app/types/terme";
import termesData from "@/app/data/termes.json";
import Header from "@/app/components/Header";
import SearchBar from "@/app/components/SearchBar";
import RandomWordButton from "@/app/components/RandomWordButton";
import CategoryFilter from "@/app/components/CategoryFilter";
import TermList from "@/app/components/TermList";
import Footer from "@/app/components/Footer";

const termes = termesData as Terme[];

function normalizeString(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategorieId | null>(null);
  const [highlightedTermId, setHighlightedTermId] = useState<string | null>(null);

  const filteredTermes = termes.filter((terme) => {
    const normalizedQuery = normalizeString(searchQuery);

    const matchesSearch =
      searchQuery === "" ||
      normalizeString(terme.terme).includes(normalizedQuery) ||
      normalizeString(terme.definition).includes(normalizedQuery) ||
      terme.synonymes.some((syn) => normalizeString(syn).includes(normalizedQuery));

    const matchesCategory =
      selectedCategory === null || terme.categorie === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleSearchChange = useCallback((value: string) => {
    setSearchQuery(value);
    setHighlightedTermId(null);
  }, []);

  const handleCategorySelect = useCallback((id: CategorieId | null) => {
    setSelectedCategory(id);
    setHighlightedTermId(null);
  }, []);

  const handleRandomWord = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * termes.length);
    const randomTerm = termes[randomIndex];

    setSearchQuery("");
    setSelectedCategory(null);
    setHighlightedTermId(randomTerm.id);

    setTimeout(() => {
      const element = document.getElementById(`terme-${randomTerm.id}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);

    setTimeout(() => {
      setHighlightedTermId(null);
    }, 3000);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)]">
      <Header />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-6 sm:py-8">
        {/* Search + Random */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <div className="flex-1 w-full">
            <SearchBar value={searchQuery} onChange={handleSearchChange} />
          </div>
          <RandomWordButton onClick={handleRandomWord} />
        </div>

        {/* Category filters */}
        <div className="relative z-40 mb-8">
          <CategoryFilter
            categories={CATEGORIES}
            selected={selectedCategory}
            onSelect={handleCategorySelect}
          />
        </div>

        {/* Results count */}
        <div className="mb-4 text-sm text-[var(--color-foreground)]/60">
          {filteredTermes.length} terme{filteredTermes.length !== 1 ? "s" : ""}{" "}
          {searchQuery && `pour "${searchQuery}"`}
          {selectedCategory && ` dans ${CATEGORIES.find((c) => c.id === selectedCategory)?.label}`}
        </div>

        {/* Terms grid */}
        <TermList termes={filteredTermes} highlightedId={highlightedTermId} />
      </main>

      <Footer />
    </div>
  );
}
