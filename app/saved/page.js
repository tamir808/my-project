"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { ArrowRight, Globe } from "lucide-react";

export default function SavedUniversities() {
  const [savedUniversities, setSavedUniversities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("savedUniversities") || "[]"
    );
    setSavedUniversities(saved);
    setLoading(false);
  }, []);

  const removeFromSaved = (id) => {
    const updated = savedUniversities.filter((uni) => uni.id !== id);
    setSavedUniversities(updated);
    localStorage.setItem("savedUniversities", JSON.stringify(updated));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading saved universities…</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-background px-4">
      <div className="max-w-7xl mx-auto pt-32 pb-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Saved Universities
            </span>
          </h1>
          <p className="text-muted-foreground">
            {savedUniversities.length > 0
              ? `You’ve saved ${savedUniversities.length} universities`
              : "You haven’t saved any universities yet"}
          </p>
        </div>

        {savedUniversities.length === 0 ? (
          <div className="text-center py-20 border rounded-2xl">
            <FaHeart className="mx-auto mb-4 text-primary/50 w-10 h-10" />
            <p className="text-muted-foreground">
              Start saving universities to see them here
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedUniversities.map((university) => (
              <div
                key={university.id}
                className="bg-card rounded-2xl overflow-hidden border hover:shadow-lg transition"
              >
                <div className="relative h-48">
                  <img
                    src={university.image}
                    alt={university.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => removeFromSaved(university.id)}
                    className="absolute top-4 right-4 bg-background/80 p-2 rounded-full text-red-500"
                    aria-label="Remove from saved"
                  >
                    <FaHeart className="w-5 h-5 fill-current" />
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">
                    {university.name}
                  </h3>

                  <div className="flex items-center text-muted-foreground mb-4">
                    <Globe className="w-4 h-4 mr-1" />
                    {university.country}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {university.majors?.slice(0, 3).map((major, i) => (
                      <span
                        key={i}
                        className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                      >
                        {major}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/universities/${encodeURIComponent(
                      university.name
                    )}`}
                    className="inline-flex items-center text-primary text-sm hover:underline"
                  >
                    View details
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
