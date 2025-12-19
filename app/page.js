'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaHandHoldingUsd, FaUserGraduate, FaGlobeAmericas } from 'react-icons/fa';
import { universities } from './results/page';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import TestimonialSection from '@/components/TestimonialSection';
import Image from 'next/image';
export default function Home() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [destination, setDestination] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  // Rest of your component code...

  const handleSearch = (e) => {
    e.preventDefault(); 
    if (searchTerm && destination) {
      router.push(`/results?major=${encodeURIComponent(searchTerm)}&destination=${encodeURIComponent(destination)}`);
    }
  };

  const destinations = [
    {
      id: 'canada',
      name: 'Canada',
      flag: '🇨🇦',
      image: 'https://www.travelandleisure.com/thmb/o9MYCC5GJyixJfG2-4EAkL0wTbE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-banff-national-park-BEAUTYCANADA0725-151eed60b36f492b8c8dd2c00e5a36a2.jpg',
      description: 'World-class education in a diverse and welcoming environment with stunning natural landscapes.',
      students: '642,000+',
      popularCities: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa'],
      averageTuition: 'CAD $20,000 - $30,000/year',
      popularPrograms: ['Computer Science', 'Business Administration', 'Engineering', 'Health Sciences']
    },
    {
      id: 'usa',
      name: 'United States',
      flag: '🇺🇸',
      image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=800&auto=format&fit=crop&q=60',
      description: 'Home to many of the world\'s top-ranked universities with diverse program options.',
      students: '1.1M+',
      popularCities: ['New York', 'Los Angeles', 'Boston', 'Chicago'],
      averageTuition: 'USD $25,000 - $50,000/year',
      popularPrograms: ['Business', 'Engineering', 'Computer Science', 'Arts & Humanities']
    },
    {
      id: 'uk',
      name: 'United Kingdom',
      flag: '🇬🇧',
      image: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&auto=format&fit=crop&q=60',
      description: 'Renowned for its prestigious universities and rich academic history.',
      students: '485,000+',
      popularCities: ['London', 'Manchester', 'Edinburgh', 'Birmingham'],
      averageTuition: '£12,000 - £35,000/year',
      popularPrograms: ['Business', 'Law', 'Medicine', 'Engineering']
    },
    {
      id: 'australia',
      name: 'Australia',
      flag: '🇦🇺',
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&auto=format&fit=crop&q=60',
      description: 'High-quality education in a relaxed outdoor lifestyle with great work opportunities.',
      students: '720,000+',
      popularCities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth'],
      averageTuition: 'AUD $20,000 - $45,000/year',
      popularPrograms: ['Business', 'Healthcare', 'Engineering', 'Environmental Science']
    },
    {
      id: 'germany',
      name: 'Germany',
      flag: '🇩🇪',
      image: 'https://media.istockphoto.com/id/503874284/photo/berlin-skyline-with-spree-river-at-sunset-germany.jpg?s=612x612&w=0&k=20&c=gnrw-SQQq9Niao93SU4djAgGXi-5LRBNkSRiwwX96Tk=',
      description: 'Top-notch education with little to no tuition fees at public universities.',
      students: '350,000+',
      popularCities: ['Berlin', 'Munich', 'Hamburg', 'Frankfurt'],
      averageTuition: '€0 - €20,000/year',
      popularPrograms: ['Engineering', 'Computer Science', 'Business', 'Natural Sciences']
    },
    {
      id: 'ireland',
      name: 'Ireland',
      flag: '🇮🇪',
      image: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2024/03/07144447/Ireland-cliff-1600x900.jpg',
      description: 'World-class education with strong industry connections in a vibrant cultural setting.',
      students: '35,000+',
      popularCities: ['Dublin', 'Cork', 'Galway', 'Limerick'],
      averageTuition: '€10,000 - €30,000/year',
      popularPrograms: ['Computer Science', 'Business', 'Pharmaceutical Sciences', 'Engineering']
    }
  ];
  
  // Get the country from URL or use the first one as default
  const [selectedCountry, setSelectedCountry] = useState(destinations[0]);
  
  // Update selected country when URL changes
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const countryId = params.get('country');
    if (countryId) {
      const country = destinations.find(d => d.id === countryId);
      if (country) setSelectedCountry(country);
    }
  }, []);
  
  // Handle country selection - navigate to country page
  const handleCountrySelect = (country) => {
    router.push(`/country/${country.id}`);
  };

  return (
    <main className="min-h-screen">
      <HeroSection />
      
      <div className="py-12 bg-white w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch w-full">
            <div className="w-full lg:w-1/2 h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
              <img
                src="https://i.pinimg.com/1200x/6c/85/7f/6c857f74f6152dd4461cf2998eea2347.jpg"
                alt="Students studying together"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
              <img
                src="https://i.pinimg.com/1200x/3f/b2/ef/3fb2ef1557a740a704e68d4314a378a6.jpg"
                alt="University campus"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <StatsSection />
      <TestimonialSection />
      
      {/* Featured Image Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              <span className="block">Discover Your Future</span>
              <span className="block text-emerald-600">Inspiring Destinations</span>
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Explore the world's most beautiful study destinations
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-96 w-full">
              <Image
                src="https://i.pinimg.com/1200x/65/2a/75/652a75f2f15af37a7a13dc57ded22239.jpg"
                alt="Beautiful study destination"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-2">Find Your Perfect Study Abroad Experience</h3>
                  <p className="text-lg opacity-90">Start your journey to academic excellence in some of the most beautiful locations around the world</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}