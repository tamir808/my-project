"use client"

import { Search, Globe, BookOpen, Award, ArrowRight } from "lucide-react"
import { useState } from "react"
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedMajor, setSelectedMajor] = useState('');
  
  // All available majors from universities data
  const allMajors = [
    'Computer Science',
    'Business',
    'Economics',
    'Psychology',
    'Biology',
    'Engineering',
    'Law',
    'Medicine',
    'Art',
    'Political Science',
    'Sociology',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Philosophy',
    'History',
    'English',
    'Music',
    'Environmental Science',
    'Statistics',
    'Anthropology',
    'Education',
    'Finance',
    'Marketing',
    'International Relations',
    'Public Health',
    'Neuroscience',
    'Architecture',
    'Design',
    'Journalism',
    'Data Science',
    'Mechanical Engineering',
    'Electrical Engineering',
    'Aerospace Engineering',
    'Materials Science',
    'Media Studies',
    'Robotics',
    'Urban Studies',
    'Linguistics',
    'Civil Engineering',
    'Industrial Engineering',
    'Bioengineering',
    'Energy Studies'
  ].sort((a, b) => a.localeCompare(b)); // Sort alphabetically

  const handleSearch = (e) => {
    e.preventDefault();
    if (selectedCountry && selectedMajor) {
      router.push(`/results?major=${encodeURIComponent(selectedMajor)}&destination=${encodeURIComponent(selectedCountry)}`);
    }
  };


  return (
    <section className="relative bg-background pt-32 pb-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8 pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div
        className="absolute bottom-0 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none animate-pulse"
        style={{ animationDelay: "2s" }}
      />


      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 text-balance leading-tight tracking-tight">
            Education Should Never Be Limited by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-black">
              Wealth or Borders
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Discover thousands of scholarships across every major, country, and university. Your path to global
            education starts here.
          </p>
        </div>


        <div className="glass-effect rounded-2xl p-8 md:p-12 border border-border/50 premium-shadow-lg backdrop-blur-xl">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            <div className="md:col-span-5">
              <div className="relative">
                <select
                  className="w-full pl-4 pr-10 py-3 bg-background border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-foreground appearance-none"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  required
                >
                  <option value="" disabled>Select a country</option>
                  <option value="USA">🇺🇸 United States</option>
                  <option value="UK">🇬🇧 United Kingdom</option>
                  <option value="Canada">🇨🇦 Canada</option>
                  <option value="Australia">🇦🇺 Australia</option>
                  <option value="Germany">🇩🇪 Germany</option>
                  <option value="Ireland">🇮🇪 Ireland</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-muted-foreground">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative">
                <select
                  className="w-full pl-4 pr-10 py-3 bg-background border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-foreground appearance-none"
                  value={selectedMajor}
                  onChange={(e) => setSelectedMajor(e.target.value)}
                  required
                >
                  <option value="" disabled>Select a major</option>
                  {allMajors.map((major) => (
                    <option key={major} value={major}>{major}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-muted-foreground">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <button 
                type="submit"
                className={`w-full h-[42px] rounded-lg hover:shadow-lg transition-all duration-300 font-semibold whitespace-nowrap transform flex items-center justify-center gap-2 group 
                     gradient-primary text-primary-foreground hover:glow-primary hover:scale-105' }`}
              >
                Search
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
