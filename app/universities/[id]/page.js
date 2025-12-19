"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { universities } from "../../results/page";
import {
  FaGlobe,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaUsers,
  FaDollarSign,
  FaStar,
  FaCalendarAlt,
  FaHeart,
} from "react-icons/fa";

export default function UniversityDetail() {
  const router = useRouter();
  const params = useParams();

  const university = universities.find(
    (uni) =>
      uni.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "") === params.id
  );

  if (!university) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>University not found</p>
      </div>
    );
  }

  /* ---------------- SAVE LOGIC ---------------- */

  const STORAGE_KEY = "savedUniversities";

  const universityToSave = {
    id: university.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, ""),
    name: university.name,
    country: university.country,
    image: university.image,
    majors: university.majors,
    website: university.website || `https://www.${university.name.toLowerCase().replace(/\s+/g, '')}.edu`
  };

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    setIsSaved(saved.some((u) => u.id === universityToSave.id));
  }, []);

  const toggleSave = () => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

    if (isSaved) {
      const updated = saved.filter((u) => u.id !== universityToSave.id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setIsSaved(false);
    } else {
      saved.push(universityToSave);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
      setIsSaved(true);
    }
  };

  /* ---------------- MOCK DATA ---------------- */

  const popularMajors = [...university.majors].slice(0, 5);

  const universityData = {
    ranking: Math.floor(Math.random() * 50) + 1,
    students: Math.floor(Math.random() * 30000) + 10000,
    acceptanceRate: (Math.random() * 30 + 5).toFixed(1) + "%",
    tuition: {
      international: `$${(Math.random() * 40000 + 15000).toLocaleString()}/year`,
    },
    applicationDeadlines: {
      fall: "January 15",
    },
  };

  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => router.back()}
            className="text-muted-foreground mb-6 hover:text-primary transition-colors"
          >
            Back
          </button>

          <div className="bg-card rounded-2xl border p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src={university.image}
                  alt={university.name}
                  className="rounded-xl w-full h-56 object-cover"
                />
              </div>

              <div className="md:w-2/3 flex flex-col justify-between">
                <div>
                  <h1 className="text-4xl font-bold mb-2">
                    {university.name}
                  </h1>

                  <div className="flex items-center text-muted-foreground mb-4">
                    <FaMapMarkerAlt className="mr-2" />
                    {university.country}
                  </div>

                  <div className="flex gap-4 mb-6">
                    <span className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" /> Rank #
                      {universityData.ranking}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaUsers /> {universityData.students.toLocaleString()}+
                      students
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link
                    href={`/apply?university=${encodeURIComponent(
                      university.name
                    )}`}
                    className="px-6 py-2 bg-primary text-white rounded-lg"
                  >
                    Apply Now
                  </Link>

                  <button
                    onClick={toggleSave}
                    className={`px-6 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors
                      ${
                        isSaved
                          ? "bg-green-100 text-green-700 border border-green-200"
                          : "border bg-card hover:bg-gray-50"
                      }`}
                  >
                    <FaHeart className={isSaved ? "fill-current text-green-600" : ""} />
                    {isSaved ? "Saved" : "Save University"}
                  </button>

                  <a
                    href={university.website || `https://www.${university.name.toLowerCase().replace(/\s+/g, '')}.edu`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 flex items-center gap-2 hover:underline"
                  >
                    <FaGlobe /> Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card p-8 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-4">
                About {university.name}
              </h2>
              <p>
                {university.name} is a leading institution known for excellence
                in {popularMajors.join(", ")}.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Popular Programs</h2>
              <div className="grid gap-4">
                {popularMajors.map((major, i) => (
                  <div key={i} className="border p-4 rounded-lg">
                    {major}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-2xl border">
              <h3 className="font-semibold mb-4">Quick Facts</h3>

              <div className="flex items-center gap-3 mb-3">
                <FaGraduationCap />
                Acceptance: {universityData.acceptanceRate}
              </div>

              <div className="flex items-center gap-3 mb-3">
                <FaDollarSign />
                Tuition: {universityData.tuition.international}
              </div>

              <div className="flex items-center gap-3">
                <FaCalendarAlt />
                Deadline: {universityData.applicationDeadlines.fall}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
