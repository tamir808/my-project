"use client";

import Link from "next/link";
import { Menu, X, Heart, ChevronDown } from "lucide-react";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function SavedCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs on the client side after the component mounts
    const saved = JSON.parse(localStorage.getItem("savedUniversities") || "[]");
    setCount(saved.length);

    // Listen for storage changes to update the count
    const handleStorageChange = () => {
      const updated = JSON.parse(
        localStorage.getItem("savedUniversities") || "[]"
      );
      setCount(updated.length);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  if (count === 0) return null;

  return (
    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
      {count}
    </span>
  );
}

function CountrySelect() {
  return (
    <div className="relative">
      <Suspense fallback={<div className="w-10 h-10" />}>
        <CountrySelectContent />
      </Suspense>
    </div>
  );
}

function CountrySelectContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  const countries = [
    { code: "usa", name: "United States", flag: "🇺🇸" },
    { code: "uk", name: "United Kingdom", flag: "🇬🇧" },
    { code: "canada", name: "Canada", flag: "🇨🇦" },
    { code: "australia", name: "Australia", flag: "🇦🇺" },
    { code: "germany", name: "Germany", flag: "🇩🇪" },
    { code: "ireland", name: "Ireland", flag: "🇮🇪" },
  ];

  useEffect(() => {
    const country = searchParams.get("destination") || "";
    if (country) {
      setSelectedCountry(country);
    }
  }, [searchParams]);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country.code);
    setIsOpen(false);
    router.push(`/country/${country.code}`);
  };

  const selected =
    countries.find((c) => c.code === selectedCountry) || countries[0];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg hover:bg-muted transition-colors"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="text-base">{selected.flag}</span>
        <span className="hidden md:inline">{selected.code}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-background rounded-lg shadow-lg border border-border/50 z-50">
          <div className="p-1">
            {countries.map((country) => (
              <Link
                key={country.code}
                href={`/country/${country.code}`}
                onClick={() => handleCountrySelect(country)}
                className={`block w-full text-left px-4 py-2 text-sm flex items-center gap-2 rounded-md ${
                  selectedCountry === country.code
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-muted/50"
                }`}
              >
                <span className="text-base">{country.flag}</span>
                <span>{country.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary via-primary/80 to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-sm shadow-md group-hover:shadow-lg group-hover:glow-primary transition-all duration-300">
              SG
            </div>
            <span className="font-bold text-foreground hidden sm:inline text-lg tracking-tight">
              StudyConnect
            </span>
          </Link>

          <div className="hidden md:flex items-center gap 4">
            <Link
              href="/"
              className="text-foreground/80 hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/port"
              className="text-foreground/80 hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
            >
              About us
            </Link>
            <div className="h-6 w-px bg-border/50 mx-2" />
            <CountrySelect />
            <Link
              href="/saved"
              className="relative p-2 text-foreground/70 hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary/5"
              aria-label="Saved Universities"
            >
              <Heart className="w-5 h-5" />
              <SavedCount />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <Link
              href="/port"
              className="text-foreground/80 hover:text-primary transition flex items-center gap-2 py-2 px-3 -mx-3 rounded-lg hover:bg-muted/50"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <div className="py-2 -mx-3 px-3">
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                Countries
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { code: "usa", name: "United States", flag: "🇺🇸" },
                  { code: "uk", name: "United Kingdom", flag: "🇬🇧" },
                  { code: "canada", name: "Canada", flag: "🇨🇦" },
                  { code: "australia", name: "Australia", flag: "🇦🇺" },
                  { code: "germany", name: "Germany", flag: "🇩🇪" },
                  { code: "ireland", name: "Ireland", flag: "🇮🇪" },
                ].map((country) => (
                  <Link
                    key={country.code}
                    href={`/country/${country.code}`}
                    className="flex items-center gap-3 text-foreground/80 hover:text-primary transition py-2 px-3 -mx-3 rounded-lg hover:bg-muted/50"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-lg">{country.flag}</span>
                    <span>{country.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <Link
                href="/login"
                className="flex-1 px-4 py-2 text-foreground/70 hover:text-primary transition font-medium text-sm border border-border/40 rounded-lg text-center"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="flex-1 px-4 py-2 gradient-primary text-primary-foreground rounded-lg hover:shadow-lg transition font-semibold text-sm text-center"
              >
                Get Started
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
