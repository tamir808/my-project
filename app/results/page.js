"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaHeart, FaRegHeart, FaSearch as Search } from "react-icons/fa";

export const universities = [
  // USA
  {
    name: "Purdue University",
    country: "USA",
    website: "https://www.purdue.edu/",
    image:
      "https://www.purdue.edu/home/wp-content/uploads/2025/04/PurdueEdu-spring-Explore-slider-PMU.jpg",
    majors: [
      "Computer Science",
      "Business",
      "Economics",
      "Psychology",
      "Biology",
      "Engineering",
      "Law",
      "Medicine",
      "Art",
      "Political Science",
      "Sociology",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Philosophy",
      "History",
      "English",
      "Music",
      "Environmental Science",
      "Statistics",
      "Anthropology",
      "Education",
      "Finance",
      "Marketing",
      "International Relations",
      "Public Health",
      "Neuroscience",
      "Architecture",
      "Design",
      "Journalism",
      "Data Science",
    ],
  },
  {
    name: "Stevenson University",
    country: "USA",
    website: "https://www.stevenson.edu/",
    image:
      "https://www.stevenson.edu/wp-content/uploads/homepage-still3-1024x572.jpg",
    majors: [
      "Computer Science",
      "Business",
      "Engineering",
      "Law",
      "Medicine",
      "Psychology",
      "Biology",
      "Economics",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Philosophy",
      "History",
      "Sociology",
      "Political Science",
      "Music",
      "Design",
      "Architecture",
      "Statistics",
      "Education",
      "Finance",
      "Marketing",
      "Neuroscience",
      "Public Health",
      "Environmental Science",
      "Anthropology",
      "Journalism",
      "Data Science",
      "Linguistics",
      "Art",
      "Media Studies",
    ],
  },
  {
    name: "University of Alabama",
    country: "USA",
    website:
      "https://admissions.ua.edu/bold/?utm_source=google&utm_medium=performance_max&utm_campaign=academic_prestige&utm_term=is_parent&gad_source=1&gad_campaignid=23290138231&gbraid=0AAAAADA1qzkrUZkyCRxWgiqFEMNsbUyVi&gclid=Cj0KCQiAxonKBhC1ARIsAIHq_lurSkDFhCsXRccv6FZ8C4nMVhVENLTMRcpxR-YjP8MZTjdtS5QQxEwaAm_8EALw_wcB",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/cd/University-of-Alabama-EngineeringResearchCenter-01.jpg",
    majors: [
      "Computer Science",
      "Business",
      "Law",
      "Medicine",
      "Engineering",
      "Economics",
      "Psychology",
      "Philosophy",
      "History",
      "Politics",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Linguistics",
      "Sociology",
      "Anthropology",
      "Education",
      "Music",
      "Design",
      "Environmental Science",
      "Finance",
      "Marketing",
      "Journalism",
      "Architecture",
      "Public Health",
      "Neuroscience",
      "Statistics",
      "Data Science",
      "Art History",
    ],
  },
  {
    name: "Harvard University",
    country: "USA",
    website: "https://www.harvard.edu/",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    majors: [
      "Computer Science",
      "Business",
      "Economics",
      "Psychology",
      "Biology",
      "Engineering",
      "Law",
      "Medicine",
      "Art",
      "Political Science",
      "Sociology",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Philosophy",
      "History",
      "English",
      "Music",
      "Environmental Science",
      "Statistics",
      "Anthropology",
      "Education",
      "Finance",
      "Marketing",
      "International Relations",
      "Public Health",
      "Neuroscience",
      "Architecture",
      "Design",
      "Journalism",
      "Data Science",
    ],
  },
  {
    name: "Massachusetts Institute of Technology (MIT)",
    country: "USA",
    website: "https://www.mit.edu/",
    image:
      "https://images.unsplash.com/photo-1523961130371-6efc38681eeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    majors: [
      "Computer Science",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Physics",
      "Mathematics",
      "Aerospace Engineering",
      "Biology",
      "Chemistry",
      "Economics",
      "Business",
      "Architecture",
      "Political Science",
      "Statistics",
      "Environmental Science",
      "Neuroscience",
      "Design",
      "Finance",
      "Materials Science",
      "Media Studies",
      "Robotics",
      "Urban Studies",
      "Linguistics",
      "Philosophy",
      "Psychology",
      "Music",
      "Civil Engineering",
      "Data Science",
      "Industrial Engineering",
      "Bioengineering",
      "Energy Studies",
    ],
  },
  {
    name: "Stanford University",
    country: "USA",
    website: "https://www.stanford.edu/",
    image:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    majors: [
      "Computer Science",
      "Business",
      "Engineering",
      "Law",
      "Medicine",
      "Psychology",
      "Biology",
      "Economics",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Philosophy",
      "History",
      "Sociology",
      "Political Science",
      "Music",
      "Design",
      "Architecture",
      "Statistics",
      "Education",
      "Finance",
      "Marketing",
      "Neuroscience",
      "Public Health",
      "Environmental Science",
      "Anthropology",
      "Journalism",
      "Data Science",
      "Linguistics",
      "Art",
      "Media Studies",
    ],
  },
  {
    name: "California Institute of Technology (Caltech)",
    country: "USA",
    website: "https://www.caltech.edu/",
    image:
      "https://images.unsplash.com/photo-1549558549-415fe4c37b60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    majors: [
      "Computer Science",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Physics",
      "Mathematics",
      "Aerospace Engineering",
      "Biology",
      "Chemistry",
      "Economics",
      "Business",
      "Architecture",
      "Political Science",
      "Statistics",
      "Environmental Science",
      "Neuroscience",
      "Design",
      "Finance",
      "Materials Science",
      "Media Studies",
      "Robotics",
      "Urban Studies",
      "Linguistics",
      "Philosophy",
      "Psychology",
      "Music",
      "Civil Engineering",
      "Data Science",
      "Industrial Engineering",
      "Bioengineering",
      "Energy Studies",
    ],
  },

  // Canada
  {
    name: "University of Toronto",
    country: "Canada",
    website: "https://www.utoronto.ca/",
    image:
      "https://images.unsplash.com/photo-1589998055333-7fce5a08a0c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    majors: [
      "Computer Science",
      "Business",
      "Engineering",
      "Medicine",
      "Law",
      "Psychology",
      "Biology",
      "Chemistry",
      "Economics",
      "Political Science",
      "Mathematics",
      "Physics",
      "Philosophy",
      "History",
      "Music",
      "Sociology",
      "Education",
      "Nursing",
      "Finance",
      "Marketing",
      "Environmental Science",
      "Statistics",
      "Anthropology",
      "Architecture",
      "Design",
      "Journalism",
      "Linguistics",
      "Neuroscience",
      "Public Health",
      "Data Science",
    ],
  },
  {
    name: "McGill University",
    country: "Canada",
    website: "https://www.mcgill.ca/",
    image:
      "https://images.unsplash.com/photo-1579783483450-650d9e5c29f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    majors: [
      "Computer Science",
      "Engineering",
      "Business",
      "Medicine",
      "Law",
      "Economics",
      "Psychology",
      "Biology",
      "Chemistry",
      "Mathematics",
      "Physics",
      "Philosophy",
      "History",
      "Sociology",
      "Political Science",
      "Music",
      "Education",
      "Architecture",
      "Design",
      "Finance",
      "Marketing",
      "Statistics",
      "Environmental Science",
      "Journalism",
      "Neuroscience",
      "Public Health",
      "Data Science",
      "Anthropology",
      "Art",
      "Linguistics",
    ],
  },
  {
    name: "University of British Columbia (UBC)",
    country: "Canada",
    website: "https://www.ubc.ca/",
    image:
      "https://images.unsplash.com/photo-1523050853548-5f2e6b3b5b6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    majors: [
      "Computer Science",
      "Engineering",
      "Business",
      "Law",
      "Medicine",
      "Economics",
      "Psychology",
      "Biology",
      "Chemistry",
      "Mathematics",
      "Physics",
      "Philosophy",
      "History",
      "Sociology",
      "Political Science",
      "Music",
      "Education",
      "Architecture",
      "Design",
      "Finance",
      "Marketing",
      "Statistics",
      "Environmental Science",
      "Journalism",
      "Neuroscience",
      "Public Health",
      "Data Science",
      "Anthropology",
      "Art",
      "Linguistics",
    ],
  },

  // UK
  {
    name: "University of Oxford",
    country: "UK",
    website: "https://www.ox.ac.uk/",
    image:
      "https://drascoedu.com/wp-content/uploads/2022/01/most-beautiful-campuses-oxford-university.webp",
    majors: [
      "Computer Science",
      "Business",
      "Law",
      "Medicine",
      "Engineering",
      "Economics",
      "Psychology",
      "Philosophy",
      "History",
      "Politics",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Linguistics",
      "Sociology",
      "Anthropology",
      "Education",
      "Music",
      "Design",
      "Environmental Science",
      "Finance",
      "Marketing",
      "Journalism",
      "Architecture",
      "Public Health",
      "Neuroscience",
      "Statistics",
      "Data Science",
      "Art History",
    ],
  },
  {
    name: "University of Cambridge",
    country: "UK",
    website: "https://www.cam.ac.uk/",
    image:
      "https://images.unsplash.com/20/cambridge.JPG?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8dW5pdmVyc2l0eXxlbnwwfHx8fDE3NjUyMDc3NDB8MA&ixlib=rb-4.1.0",
    majors: [
      "Computer Science",
      "Business",
      "Engineering",
      "Law",
      "Medicine",
      "Economics",
      "Psychology",
      "Philosophy",
      "History",
      "Politics",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Linguistics",
      "Sociology",
      "Anthropology",
      "Education",
      "Music",
      "Design",
      "Environmental Science",
      "Finance",
      "Marketing",
      "Journalism",
      "Architecture",
      "Public Health",
      "Neuroscience",
      "Statistics",
      "Data Science",
      "Art History",
    ],
  },
  {
    name: "Imperial College London",
    country: "UK",
    website: "https://www.imperial.ac.uk/",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    majors: [
      "Computer Science",
      "Engineering",
      "Medicine",
      "Business",
      "Economics",
      "Physics",
      "Mathematics",
      "Chemistry",
      "Biology",
      "Data Science",
      "Robotics",
      "Neuroscience",
      "Statistics",
      "Finance",
      "Marketing",
      "Environmental Science",
      "Architecture",
      "Design",
      "Materials Science",
      "Urban Studies",
      "Industrial Engineering",
      "Energy Studies",
      "Bioengineering",
      "Public Health",
      "Political Science",
      "Philosophy",
      "Psychology",
      "Sociology",
      "Journalism",
      "Music",
    ],
  },

  // Australia
  {
    name: "University of Melbourne",
    country: "Australia",
    website: "https://www.unimelb.edu.au/",
    image:
      "https://images.unsplash.com/photo-1523050853548-5f2e6b3b5b6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    majors: [
      "Computer Science",
      "Business",
      "Law",
      "Medicine",
      "Engineering",
      "Economics",
      "Psychology",
      "Arts",
      "Architecture",
      "Design",
      "Mathematics",
      "Physics",
      "Biology",
      "Chemistry",
      "Statistics",
      "Finance",
      "Marketing",
      "Political Science",
      "Environmental Science",
      "Philosophy",
      "History",
      "Journalism",
      "Sociology",
      "Education",
      "Music",
      "Anthropology",
      "Neuroscience",
      "Public Health",
      "Nursing",
      "Data Science",
    ],
  },
  {
    name: "University of Sydney",
    country: "Australia",
    website: "https://www.sydney.edu.au/",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    majors: [
      "Computer Science",
      "Business",
      "Engineering",
      "Law",
      "Medicine",
      "Economics",
      "Psychology",
      "Arts",
      "Architecture",
      "Design",
      "Mathematics",
      "Physics",
      "Biology",
      "Chemistry",
      "Statistics",
      "Finance",
      "Marketing",
      "Political Science",
      "Environmental Science",
      "Philosophy",
      "History",
      "Journalism",
      "Sociology",
      "Education",
      "Music",
      "Anthropology",
      "Neuroscience",
      "Public Health",
      "Nursing",
      "Data Science",
    ],
  },
  {
    name: "Australian National University",
    country: "Australia",
    website: "https://www.anu.edu.au/",
    image:
      "https://images.unsplash.com/photo-1561501878-aabd62634533?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    majors: [
      "Computer Science",
      "Business",
      "Engineering",
      "Law",
      "Medicine",
      "Economics",
      "Psychology",
      "Arts",
      "Architecture",
      "Design",
      "Mathematics",
      "Physics",
      "Biology",
      "Chemistry",
      "Statistics",
      "Finance",
      "Marketing",
      "Political Science",
      "Environmental Science",
      "Philosophy",
      "History",
      "Journalism",
      "Sociology",
      "Education",
      "Music",
      "Anthropology",
      "Neuroscience",
      "Public Health",
      "Nursing",
      "Data Science",
    ],
  },

  // Germany
  {
    name: "Technical University of Munich",
    country: "Germany",
    website: "https://www.tum.de/",
    image:
      "https://images.unsplash.com/photo-1561485440-3ed9663d9b9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    majors: [
      "Mechanical Engineering",
      "Electrical Engineering",
      "Computer Science",
      "Physics",
      "Mathematics",
      "Chemistry",
      "Biology",
      "Architecture",
      "Design",
      "Economics",
      "Business",
      "Environmental Science",
      "Data Science",
      "Robotics",
      "Materials Science",
      "Finance",
      "Marketing",
      "Urban Studies",
      "Industrial Engineering",
      "Public Policy",
      "Philosophy",
      "Psychology",
      "Statistics",
      "Media Studies",
      "Energy Studies",
      "Neuroscience",
      "Education",
      "Law",
      "Political Science",
      "Journalism",
    ],
  },
  {
    name: "RWTH Aachen University",
    country: "Germany",
    website: "https://www.rwth-aachen.de/",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    majors: [
      "Mechanical Engineering",
      "Electrical Engineering",
      "Computer Science",
      "Physics",
      "Mathematics",
      "Chemistry",
      "Biology",
      "Architecture",
      "Design",
      "Economics",
      "Business",
      "Environmental Science",
      "Data Science",
      "Robotics",
      "Materials Science",
      "Finance",
      "Marketing",
      "Urban Studies",
      "Industrial Engineering",
      "Public Policy",
      "Philosophy",
      "Psychology",
      "Statistics",
      "Media Studies",
      "Energy Studies",
      "Neuroscience",
      "Education",
      "Law",
      "Political Science",
      "Journalism",
    ],
  },
  {
    name: "University of Heidelberg",
    country: "Germany",
    website: "https://www.uni-heidelberg.de/",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    majors: [
      "Medicine",
      "Law",
      "Business",
      "Economics",
      "Psychology",
      "Computer Science",
      "Biology",
      "Chemistry",
      "Physics",
      "Mathematics",
      "Philosophy",
      "History",
      "Sociology",
      "Political Science",
      "Education",
      "Architecture",
      "Design",
      "Finance",
      "Marketing",
      "Statistics",
      "Environmental Science",
      "Journalism",
      "Neuroscience",
      "Public Health",
      "Data Science",
      "Anthropology",
      "Music",
      "Linguistics",
      "Art",
      "Media Studies",
    ],
  },

  // Ireland
  {
    name: "Trinity College Dublin",
    country: "Ireland",
    website: "https://www.tcd.ie/",
    image:
      "https://images.unsplash.com/photo-1583381601748-0c88e7a0e5f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    majors: [
      "Computer Science",
      "Business",
      "Economics",
      "Psychology",
      "Law",
      "Engineering",
      "Medicine",
      "History",
      "English",
      "Philosophy",
      "Music",
      "Architecture",
      "Design",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Finance",
      "Marketing",
      "Political Science",
      "Sociology",
      "Anthropology",
      "Education",
      "Environmental Science",
      "Statistics",
      "International Relations",
      "Journalism",
      "Data Science",
      "Neuroscience",
      "Public Health",
    ],
  },
  {
    name: "University College Dublin",
    country: "Ireland",
    website: "https://www.ucd.ie/",
    image:
      "https://images.unsplash.com/photo-1589998055333-7fce5a08a0c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    majors: [
      "Computer Science",
      "Business",
      "Economics",
      "Psychology",
      "Law",
      "Engineering",
      "Medicine",
      "History",
      "English",
      "Philosophy",
      "Music",
      "Architecture",
      "Design",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Finance",
      "Marketing",
      "Political Science",
      "Sociology",
      "Anthropology",
      "Education",
      "Environmental Science",
      "Statistics",
      "International Relations",
      "Journalism",
      "Data Science",
      "Neuroscience",
      "Public Health",
    ],
  },
  {
    name: "National University of Ireland, Galway",
    country: "Ireland",
    website: "https://www.nuigalway.ie/",
    image:
      "https://images.unsplash.com/photo-1523050853548-5f2e6b3b5b6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    majors: [
      "Computer Science",
      "Business",
      "Economics",
      "Psychology",
      "Law",
      "Engineering",
      "Medicine",
      "History",
      "English",
      "Philosophy",
      "Music",
      "Architecture",
      "Design",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Finance",
      "Marketing",
      "Political Science",
      "Sociology",
      "Anthropology",
      "Education",
      "Environmental Science",
      "Statistics",
      "International Relations",
      "Journalism",
      "Data Science",
      "Neuroscience",
      "Public Health",
    ],
  },
];

import { Suspense } from "react";

export default function Results() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  );
}

function ResultsContent() {
  const searchParams = useSearchParams();
  const major = searchParams.get("major") || "";
  const destination = searchParams.get("destination") || "";
  const [likedUniversities, setLikedUniversities] = useState([]);

  // Load liked universities from localStorage on component mount
  useEffect(() => {
    const savedLikes = localStorage.getItem("likedUniversities");
    if (savedLikes) {
      setLikedUniversities(JSON.parse(savedLikes));
    }
  }, []);

  // Toggle like status of a university
  const toggleLike = (university) => {
    const isLiked = likedUniversities.some((u) => u.name === university.name);
    let updatedLikes;

    if (isLiked) {
      updatedLikes = likedUniversities.filter(
        (u) => u.name !== university.name
      );
    } else {
      updatedLikes = [...likedUniversities, university];
    }

    setLikedUniversities(updatedLikes);
    localStorage.setItem("likedUniversities", JSON.stringify(updatedLikes));
  };

  // Map of country names to their codes
  const countryMap = {
    "united states": "USA",
    us: "USA",
    usa: "USA",
    "united kingdom": "UK",
    uk: "UK",
    germany: "Germany",
    france: "France",
    canada: "Canada",
    australia: "Australia",
    japan: "Japan",
    "south korea": "South Korea",
    singapore: "Singapore",
  };

  // Normalize the destination input
  const normalizedDestination = destination.toLowerCase();
  const countryCode = countryMap[normalizedDestination] || destination;

  const filtered = universities.filter((uni) => {
    // Check if the university's country matches the destination (case-insensitive)
    // or if the country code matches the mapped value
    const countryMatch =
      uni.country.toLowerCase() === normalizedDestination ||
      uni.country === countryCode ||
      countryMap[uni.country.toLowerCase()] === countryCode;

    // Check if any of the university's majors include the search term (case-insensitive)
    const majorMatch = uni.majors.some((m) =>
      m.toLowerCase().includes(major.toLowerCase())
    );

    return countryMatch && majorMatch;
  });

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8 pointer-events-none" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div
          className="absolute bottom-0 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {filtered.length > 0
                ? `Programs in ${destination}`
                : "No Results Found"}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {filtered.length > 0
                ? `Showing ${filtered.length} program${
                    filtered.length === 1 ? "" : "s"
                  } matching "${major}"`
                : `We couldn't find any programs matching "${major}" in ${destination}. Try adjusting your search.`}
            </p>
          </div>

          {filtered.length > 0 ? (
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((uni) => {
                const uniId = uni.name
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/^-+|-+$/g, "");

                return (
                  <div
                    key={uni.name}
                    className="group relative overflow-hidden bg-card rounded-2xl border border-border/40 hover:border-primary/40 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <Link
                      href={`/universities/${uniId}`}
                      className="block h-full"
                    >
                      <div className="h-48 overflow-hidden relative">
                        <img
                          src={uni.image}
                          alt={`${uni.name} campus`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-xl font-bold mb-1">
                              {uni.name}
                            </h3>
                            <p className="text-sm text-white/80">
                              {uni.country}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                              {uni.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {uni.country}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              toggleLike(uni);
                            }}
                            className="text-muted-foreground hover:text-red-500 transition-colors"
                            aria-label={
                              likedUniversities.some(
                                (u) => u.name === university.name
                              )
                                ? "Remove from favorites"
                                : "Add to favorites"
                            }
                          >
                            {likedUniversities.some(
                              (u) => u.name === uni.name
                            ) ? (
                              <FaHeart className="w-5 h-5 text-red-500" />
                            ) : (
                              <FaRegHeart className="w-5 h-5" />
                            )}
                          </button>
                        </div>

                        <div className="mt-4">
                          <h4 className="text-sm font-semibold text-foreground mb-2">
                            Available Majors:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {uni.majors
                              .filter((m) =>
                                m.toLowerCase().includes(major.toLowerCase())
                              )
                              .slice(0, 2)
                              .map((m, i) => (
                                <span
                                  key={i}
                                  className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                                >
                                  {m}
                                </span>
                              ))}
                            {uni.majors.filter((m) =>
                              m.toLowerCase().includes(major.toLowerCase())
                            ).length > 2 && (
                              <span className="text-xs text-muted-foreground">
                                +
                                {uni.majors.filter((m) =>
                                  m.toLowerCase().includes(major.toLowerCase())
                                ).length - 2}{" "}
                                more
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-border/40">
                          <span className="inline-flex items-center text-sm font-medium text-primary">
                            View details
                            <svg
                              className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="inline-block p-6 bg-primary/5 rounded-full mb-6">
                <svg
                  className="w-10 h-10 text-primary/50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                No matching programs found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search filters or browse our full list of
                universities.
              </p>
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Back to Search
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
