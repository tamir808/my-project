'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

// Country data - in a real app, this would come from an API or database
const countries = {
  usa: {
    name: 'United States',
    description: 'Home to many top-ranked universities with diverse programs',
    popularCities: ['New York', 'Los Angeles', 'Boston', 'Chicago'],
    averageTuition: '$25,000 - $60,000 USD/year',
    popularPrograms: ['Computer Science', 'MBA', 'Data Science'],
    students: '948,000+',
    coverImage: 'https://i.pinimg.com/1200x/cf/2a/7e/cf2a7e6868369af740b7111638665346.jpg',
    topUniversities: [
      {
        name: 'Harvard University',
        location: 'Cambridge, MA',
        popularPrograms: ['Law', 'Business', 'Medicine', 'Computer Science'],
        ranking: '#1 in USA',
        image: 'https://www.harvard.edu/wp-content/uploads/2023/11/110823_Features_KS_713-scaled.jpg'
      },
      {
        name: 'Stanford University',
        location: 'Stanford, CA',
        popularPrograms: ['Computer Science', 'Engineering', 'Business', 'Medicine'],
        ranking: '#2 in USA',
        image: 'https://image-tc.galaxy.tf/wijpeg-94ut4kv3ej6pqkko4zanh0b0i/stanford-opt.jpg'
      },
      {
        name: 'Massachusetts Institute of Technology',
        location: 'Cambridge, MA',
        popularPrograms: ['Engineering', 'Computer Science', 'Physics', 'Mathematics'],
        ranking: '#3 in USA',
        image: 'https://www.mit.edu/files/images/202505/MIT-This-is-MIT-SLsub_0_0.jpg'
      }
    ]
  },
  uk: {
    name: 'UK',
    description: 'Rich academic heritage with globally recognized degrees',
    popularCities: ['London', 'Manchester', 'Edinburgh', 'Birmingham'],
    averageTuition: '£15,000 - £35,000/year',
    popularPrograms: ['Law', 'Business', 'Medicine'],
    students: '679,000+',
    coverImage: 'https://i.pinimg.com/1200x/ba/0a/86/ba0a86c922dbbf389025a62217bbb5ac.jpg',
    topUniversities: [
      {
        name: 'University of Oxford',
        image: 'https://dxp.plus/cdn-cgi/image/w=3840,q=90,f=webp,fit=contain/https://us-cdn.dxp.plus/4e7f1e24-6b44-4103-9287-7bfb88f988b8/Oxford%20City.jpg.preview.png',
        location: 'Oxford, UK',
        ranking: '#1 in UK',
        students: '26,000+',
        website: 'https://www.ox.ac.uk/'
      },
      {
        name: 'University of Cambridge',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cambridge_-_Kings_College_vue_des_backs.jpg/1200px-Cambridge_-_Kings_College_vue_des_backs.jpg',
        location: 'Cambridge, UK',
        ranking: '#2 in UK',
        students: '24,000+',
        website: 'https://www.cam.ac.uk/'
      },
      {
        name: 'Imperial College London',
        image: 'https://stubard.com/wp-content/uploads/2025/03/Imperial-College-London-1-1200x812.jpg',
        location: 'London, UK',
        ranking: '#3 in UK',
        students: '20,000+',
        website: 'https://www.imperial.ac.uk/'
      }
    ]
  },
    canada: {
    name: 'Canada',
    description: 'World-class education in a diverse and welcoming environment',
    popularCities: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa'],
    averageTuition: '$20,000 - $50,000 CAD/year',
    popularPrograms: ['Computer Science', 'Business Administration', 'Engineering'],
    students: '642,000+',
    coverImage: 'https://i.pinimg.com/1200x/32/11/85/3211855188400ede69a1b3d42d672565.jpg',
    topUniversities: [
      {
        name: 'University of Toronto',
        location: 'Toronto, ON',
        popularPrograms: ['Computer Science', 'Engineering', 'Business Administration', 'Life Sciences'],
        ranking: '#1 in Canada',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwvk-CMhY_Y92mncFzFy4EEOE6GKNyRy2jDTCT6UhgL3_XXCLXZ-zH2Y6hG-cR94lF642pJecTjFIlcBuaBTVYqdMbAcRqULuJdIIef1P4wUGxUTi33Iv2i2Q347lPXALHybLY=s1360-w1360-h1020-rw'
      },
      {
        name: 'University of British Columbia',
        location: 'Vancouver, BC',
        popularPrograms: ['Computer Science', 'Business', 'Forestry', 'Environmental Science'],
        ranking: '#2 in Canada',
        image: 'https://www.ubc.ca/sites/default/files/styles/hero/public/2023-08/UBC_Campus_2023.jpg?itok=H5S8H3Jh'
      },
      {
        name: 'McGill University',
        location: 'Montreal, QC',
        popularPrograms: ['Medicine', 'Law', 'Engineering', 'Management'],
        ranking: '#3 in Canada',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyIXkuDzBnFYMZtf8uM4V4Yzw--DfCghf973e2uoGG3q85r6zTJVCRc1OjCuOIfNaNohQ4PXqihOk_u-qnnpPK5ibDKENQGm8yZeL3WRog1nA5iLnXDkhkxISdufy9pPYX90J_n=s1360-w1360-h1020-rw'
      }
    ]
  },
  australia: {
    name: 'Australia',
    description: 'High-quality education in a beautiful, multicultural setting',
    popularCities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth'],
    averageTuition: 'AUD 20,000 - 45,000/year',
    popularPrograms: ['Hospitality', 'Engineering', 'Health Sciences'],
    students: '738,000+',
    coverImage: 'https://i.pinimg.com/1200x/ba/0a/86/ba0a86c922dbbf389025a62217bbb5ac.jpg',
    topUniversities: [
      {
        name: 'Australian National University',
        image: 'https://www.applyboard.com/wp-content/uploads/2021/11/australian-national-university.jpeg',
        location: 'Canberra, Australia',
        ranking: '#1 in Australia',
        students: '20,000+',
        website: 'https://www.anu.edu.au/'
      },
      {
        name: 'University of Sydney',
        image: 'https://www.sydney.edu.au/content/dam/courses/course_page_hero_default.jpeg',
        location: 'Sydney, Australia',
        ranking: '#2 in Australia',
        students: '20,000+',
        website: 'https://www.sydney.edu.au/'
      },
      {
        name: 'University of Melbourne',
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Parkville_-_University_of_Melbourne_%28Queen%E2%80%99s_College%29.jpg',
        location: 'Melbourne, Australia',
        ranking: '#3 in Australia',
        students: '20,000+',
        website: 'https://www.melbourne.edu.au/'
      }
    ]
  },
  germany: {
    name: 'Germany',
    description: 'Affordable education with strong focus on research and innovation',
    popularCities: ['Berlin', 'Munich', 'Hamburg', 'Frankfurt'],
    averageTuition: '€0 - €20,000/year (public universities)',
    popularPrograms: ['Engineering', 'Computer Science', 'Business'],
    students: '350,000+',
    coverImage: 'https://i.pinimg.com/1200x/3a/26/0d/3a260db02c0e6dcb6028298f2ee909da.jpg',
    topUniversities: [
      {
        name: 'Technical University of Munich',
        image: 'https://images.shiksha.com/mediadata/images/1533559592phpsYF8Oy.jpeg',
        location: 'Munich, Germany',
        ranking: '#1 in Germany',
        students: '20,000+',
        website: 'https://www.tum.de/'
      },
      {
        name: 'Ludwig Maximilian University of Munich',
        image: 'https://stubard.com/wp-content/uploads/2025/01/University-of-Munich-1.jpg',
        location: 'Munich, Germany',
        ranking: '#2 in Germany',
        students: '20,000+',
        website: 'https://www.lmu.de/'
      },
      {
        name: 'Heidelberg University',
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/University_Hall%2C_Heidelberg_University.jpg',
        location: 'Heidelberg, Germany',
        ranking: '#3 in Germany',
        students: '20,000+',
        website: 'https://www.heidelberg.de/'
      }
    ]
  },
  'ireland': {
    name: 'Ireland',
    description: 'World-class education with strong industry connections in a vibrant cultural setting',
    popularCities: ['Dublin', 'Cork', 'Galway', 'Limerick'],
    averageTuition: '€10,000 - €30,000/year',
    popularPrograms: ['Computer Science', 'Business', 'Pharmaceutical Sciences', 'Engineering'],
    students: '35,000+',
    coverImage: 'https://i.pinimg.com/1200x/f3/9c/fa/f39cfabdd92588dc8d35487a6368dfc8.jpg',
    topUniversities: [
      {
        name: 'Trinity College Dublin',
        image: 'https://www.visittrinity.ie/wp-content/uploads/2024/07/Trinity_00004_cad282.jpg?w=1920',
        location: 'Dublin, Ireland',
        ranking: '#1 in Ireland',
        students: '20,000+',
        website: 'https://www.tcd.ie/'
      },
      {
        name: 'University College Dublin',
        image: 'https://www.educationinireland.com/images_upload/EiI/en/Where-can-I-study-/View-all-Universities-Colleges/UCD_2017.jpg',
        location: 'Dublin, Ireland',
        ranking: '#2 in Ireland',
        students: '20,000+',
        website: 'https://www.ucd.ie/'
      },
      {
        name: 'National University of Ireland, Galway',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2yRbQGIFXVJxoNbh4FSEhdmQWKoyMn_J2Dw&s',
        location: 'Galway, Ireland',
        ranking: '#3 in Ireland',
        students: '20,000+',
        website: 'https://www.nuigalway.ie/'
      }
    ]
  },
};

export default function CountryPage() {
  const router = useRouter();
  const params = useParams();
  const country = countries[params.country];
  const [savedSchools, setSavedSchools] = useState([]);

  // Load saved universities from localStorage on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('savedUniversities') || '[]';
        setSavedSchools(JSON.parse(saved));
      } catch (error) {
        console.error('Error loading saved universities:', error);
      }
    }
  }, []);

  // Toggle save status of a school
  const toggleSaveSchool = (school) => {
    setSavedSchools(prevSchools => {
      const universityId = `${school.name.toLowerCase().replace(/\s+/g, '-')}-${country.name.toLowerCase()}`;
      
      // Check if university is already saved
      const isAlreadySaved = prevSchools.some(uni => uni.id === universityId);
      let updatedUniversities;
      
      if (isAlreadySaved) {
        // Remove from saved
        updatedUniversities = prevSchools.filter(uni => uni.id !== universityId);
      } else {
        // Add to saved
        updatedUniversities = [
          ...prevSchools,
          {
            id: universityId,
            name: school.name,
            country: country.name,
            location: school.location || 'Location not specified',
            image: school.image || 'https://images.unsplash.com/photo-1523050853548-9f7d1e443db8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            majors: school.popularPrograms || ['Various Programs'],
            ranking: school.ranking || 'Ranked #1'
          }
        ];
      }
      
      // Update localStorage
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('savedUniversities', JSON.stringify(updatedUniversities));
          console.log('Saved universities updated:', updatedUniversities);
        } catch (error) {
          console.error('Error saving universities:', error);
        }
      }
      
      return updatedUniversities;
    });
  };

  // Check if a school is saved
  const isSchoolSaved = (school) => {
    if (!school || !school.name) return false;
    const universityId = `${school.name.toLowerCase().replace(/\s+/g, '-')}-${country.name.toLowerCase()}`;
    return savedSchools.some(uni => uni.id === universityId);
  };
  
  // Debug: Log saved schools when they change
  useEffect(() => {
    console.log('Current saved schools:', savedSchools);
  }, [savedSchools]);

  if (!country) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Country not found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
             Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Country Image */}
      <div 
        className="relative h-[80vh] min-h-[600px] w-full overflow-hidden"
      >
        {/* Background Image with Enhanced Styling */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${country.coverImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
        >
          {/* Subtle gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        {/* Navigation */}
        <div className="absolute top-6 left-6 z-10">
          <Link 
            href="/" 
            className="flex items-center text-white/90 hover:text-white transition-colors group"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                clipRule="evenodd" 
              />
            </svg>
            Home
          </Link>
        </div>
        
        {/* Hero Content with Centered Layout */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-2.5 rounded-full border border-white/20 mb-8">
              <span className="text-2xl mr-2">{country.flag}</span>
              <span className="font-medium text-white/90 tracking-wider">TOP STUDY DESTINATION</span>
            </div>
            
            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-200">
                {country.flag} {country.name}
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
              {country.description}
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {/* International Students */}
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center">
                <div className="text-3xl font-bold text-emerald-200">{country.students}</div>
                <div className="text-sm text-white/80 mt-1">International Students</div>
              </div>
              
              {/* Popular Cities */}
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center">
                <div className="text-3xl font-bold text-emerald-200">{country.popularCities.length}+</div>
                <div className="text-sm text-white/80 mt-1">Popular Cities</div>
              </div>
              
              {/* Popular Programs */}
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center">
                <div className="text-3xl font-bold text-emerald-200">{country.popularPrograms.length}+</div>
                <div className="text-sm text-white/80 mt-1">Popular Programs</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">🌆 Popular Cities</h2>
              <div className="space-y-2">
                {country.popularCities.map((city, i) => (
                  <div key={i} className="bg-white p-3 rounded-lg shadow-sm">
                    {city}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">💰 Tuition Fees</h2>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-600 mb-6 text-lg">{country.description}</p>
                <p className="text-sm text-gray-500 mt-2">Average annual tuition for international students</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">🎓 Popular Programs</h2>
              <div className="flex flex-wrap gap-2">
                {country.popularPrograms.map((program, i) => (
                  <span key={i} className="bg-white px-4 py-2 rounded-full text-sm text-blue-700 shadow-sm">
                    {program}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Top Universities Section */}
      {country.topUniversities && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Top Universities in {country.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {country.topUniversities.map((university, index) => {
                const isSaved = isSchoolSaved(university);
                return (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => {
                      const uniSlug = typeof university === 'string' 
                        ? university.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^\-|\-$/g, '') 
                        : (university.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^\-|\-$/g, '');
                      router.push(`/universities/${uniSlug}`);
                    }}
                  >
                    <div className="h-48 bg-gray-200 overflow-hidden relative">
                      <img 
                        src={university.image || 'https://images.unsplash.com/photo-1523050853548-9f7d1e443db8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'} 
                        alt={university.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1523050853548-9f7d1e443db8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-4 w-full">
                        <h3 className="text-xl font-bold text-white">{university.name}</h3>
                        <p className="text-white/90 text-sm">{university.location || 'Location not specified'}</p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSaveSchool(university);
                        }}
                        className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                        aria-label={isSchoolSaved(university) ? 'Remove from saved' : 'Save school'}
                      >
                        {isSchoolSaved(university) ? (
                          <FaHeart className="w-5 h-5 text-red-500" />
                        ) : (
                          <FaRegHeart className="w-5 h-5 text-gray-400 hover:text-red-500" />
                        )}
                      </button>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                            {university.ranking || 'Ranked #36'}
                          </span>
                          <span className="text-sm text-gray-600">
                            {university.students || '26,925+'} Students
                          </span>
                        </div>
                        <a 
                          href={university.website || '#'} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-green-600 hover:text-green-800 text-sm font-medium flex items-center"
                          onClick={(e) => {
                            if (!university.website) {
                              e.preventDefault();
                            }
                            e.stopPropagation();
                          }}
                        >
                          Visit Website
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                      
                      {university.popularPrograms && university.popularPrograms.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Popular Programs:</h4>
                          <div className="flex flex-wrap gap-2">
                            {university.popularPrograms.slice(0, 3).map((program, i) => (
                              <span key={i} className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded">
                                {program}
                              </span>
                            ))}
                            {university.popularPrograms.length > 3 && (
                              <span className="text-xs text-gray-500 self-center">+{university.popularPrograms.length - 3} more</span>
                            )}
                          </div>
                        </div>
                      )}
                      
                      <div className="mt-6 space-y-3">
                        <Link 
                          href={`/apply?university=${encodeURIComponent(university.name)}`}
                          className="block w-full py-3 px-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium rounded-lg text-center transition-all duration-300"
                        >
                          Apply Now
                        </Link>
                        <button 
                          className="w-full py-2.5 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleSaveSchool(university);
                          }}
                        >
                          {isSchoolSaved(university) ? (
                            <>
                              <FaHeart className="w-4 h-4 mr-2 text-red-500" />
                              Saved
                            </>
                          ) : (
                            <>
                              <FaHeart className="w-4 h-4 mr-2 text-gray-400 hover:text-red-500" />
                              Save University
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Saved Universities Section - Link to Saved Page */}
      {savedSchools.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              View Your Saved Universities
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              You have {savedSchools.length} saved {savedSchools.length === 1 ? 'university' : 'universities'}
            </p>
            <Link 
              href="/saved"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors"
            >
              Go to Saved Universities
  
            </Link>
          </div>
        </section>
      )}

      {/* Image Gallery Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Student Life Image - Different for each country */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src={
                  country.name === 'United States' 
                    ? 'https://rostrumedu.com/wp-content/uploads/image4-16.png'
                    : country.name === 'UK'
                    ? 'https://acadaextra.com/wp-content/uploads/2024/12/UK-Student.jpg'
                    : country.name === 'Canada'
                    ? 'https://gwmeducation.com/wp-content/uploads/2021/10/cheerful-multiracial-students-celebrating.jpg'
                    : country.name === 'Australia'
                    ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTHShaJNYCcz3hLRJtBNvijh5pZbfWv_NWQQ&s'
                    : country.name === 'Germany'
                    ? 'https://www.studying-in-germany.org/wp-content/uploads/2019/02/Best-universities-in-Germany-for-international-students.jpg'
                    : country.name === 'Ireland'
                    ? 'https://consultifly.com/wp-content/uploads/2025/04/image6-2.png'
                    : 'https://images.unsplash.com/photo-1523050853548-9f7d1e443db8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                }
                alt={`Student life in ${country.name}`}
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {country.name === 'United States' && 'Campus Life in the USA'}
                  {country.name === 'UK' && 'Student Life in the UK'}
                  {country.name === 'Canada' && 'Student Experience in Canada'}
                  {country.name === 'Australia' && 'Student Life in Australia'}
                  {!['United States', 'UK', 'Canada', 'Australia'].includes(country.name) && `Student Life in ${country.name}`}
                </h3>
                <p className="text-gray-600">
                  {country.name === 'United States' && 'Experience the vibrant campus communities and state-of-the-art facilities at American universities.'}
                  {country.name === 'UK' && 'Experience the rich academic tradition and vibrant student life at UK universities.'}
                  {country.name === 'Canada' && 'Experience vibrant student life with diverse communities, outdoor activities, and world-class facilities across Canadian campuses.'}
                  {country.name === 'Australia' && 'Experience a perfect balance of academic excellence and outdoor lifestyle in Australia.'}
                  {!['United States', 'UK', 'Canada', 'Australia'].includes(country.name) && 'Experience the unique student life and campus culture.'}
                </p>
              </div>
            </div>

            {/* Quality Education Image - Different for each country */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src={
                  country.name === 'United States' 
                    ? 'https://www.aljazeera.com/wp-content/uploads/2025/04/2025-04-17T195349Z_368566575_RC2VZDA1BUWF_RTRMADP_3_USA-TRUMP-UNIVERSITIES-1744920619.jpg'
                    : country.name === 'UK'
                    ? 'https://media.licdn.com/dms/image/D5612AQFgh11RVwf1eQ/article-cover_image-shrink_720_1280/0/1692851598684?e=2147483647&v=beta&t=sadzk-qqXeZfxhge5DLRBCIg8FpS7TVJn3ldqNNXt8M'
                    : country.name === 'Canada'
                    ? 'https://www.iecaonline.com/wp-content/uploads/2020/12/Canadian-Universities.jpg'
                    : country.name === 'Australia'
                    ? 'https://www.imfs.co.in/wp-content/uploads/2025/07/education.jpeg'
                    : country.name === 'Germany'
                    ? 'https://studyabroadlife.org/wp-content/uploads/2020/01/Best-universities-in-Germany-for-international-students.jpg'
                    : country.name === 'Ireland'
                    ? 'https://assets-us-01.kc-usercontent.com/95d47d95-36b6-00af-a24c-b886ecdfc4a2/6804ebe5-5338-4ff3-97de-4f834288a870/DUB_Student-life_S3_31701.jpg'
                    : 'https://images.unsplash.com/photo-1523050853548-9f7d1e443db8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                }
                alt={`Quality education in ${country.name}`}
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {country.name === 'United States' && 'World-Class Education'}
                  {country.name === 'UK' && 'Academic Excellence'}
                  {country.name === 'Canada' && 'Innovative Learning'}
                  {country.name === 'Australia' && 'Global Recognition'}
                  {!['United States', 'UK', 'Canada', 'Australia'].includes(country.name) && 'Quality Education'}
                </h3>
                <p className="text-gray-600">
                  {country.name === 'United States' && 'Home to many of the world\'s top-ranked universities and research institutions.'}
                  {country.name === 'UK' && 'Experience centuries of academic excellence and innovation in education.'}
                  {country.name === 'Canada' && 'Benefit from world-class education, cutting-edge research facilities, and strong industry connections in a supportive learning environment.'}
                  {country.name === 'Australia' && 'Gain internationally recognized qualifications in a vibrant, multicultural environment.'}
                  {!['United States', 'UK', 'Canada', 'Australia'].includes(country.name) && 'Learn from world-renowned professors and researchers at top-ranked institutions.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Study Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden mb-12 h-96">
            <img 
              src={
                country.name === 'United States' 
                  ? 'https://i.pinimg.com/1200x/5a/bb/2c/5abb2caa213b5a868c320fe0a356f704.jpg'
                  : country.name === 'UK'
                  ? 'https://i.pinimg.com/736x/21/51/87/215187d2a3ebc17f53390ebc3b7c01b0.jpg'
                  : country.name === 'Canada'
                  ? 'https://magnuminsight.com/wp-content/uploads/2023/03/best-g.jpg'
                  : country.name === 'Australia'
                  ? 'https://i.pinimg.com/1200x/75/5d/55/755d55cc232f29c9f20fe478d49cd6e8.jpg'
                  : country.name === 'Germany'
                  ? 'https://i.pinimg.com/1200x/13/8b/18/138b188a7733e6c432924b851f60509e.jpg'
                  : country.name === 'Ireland'
                  ? 'https://i.pinimg.com/1200x/2f/27/9f/2f279f3b55304911962da6e0ab03f52f.jpg'
                  : 'https://images.unsplash.com/photo-1523050853548-9f7d1e443db8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                   }
  alt="Country banner"
  className="w-full h-full object-cover"
/>
              
            
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 flex items-center">
              <div className="max-w-4xl mx-auto text-center px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Why Study in {country.name}?
                </h2>
                <p className="text-xl text-gray-200">
                  {country.name === 'United States' && 'Discover world-class education and endless opportunities in one of the most prestigious study destinations.'}
                  {country.name === 'UK' && 'Experience centuries of academic excellence and tradition in one of the world\'s most historic education systems.'}
                  {country.name === 'Canada' && 'Enjoy high-quality education in a welcoming, multicultural environment with stunning natural beauty.'}
                  {country.name === 'Australia' && 'Study in a country known for its excellent education system, diverse culture, and outdoor lifestyle.'}
                  {!['United States', 'UK', 'Canada', 'Australia'].includes(country.name) && 'Discover world-class education and endless opportunities in this prestigious study destination.'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Global Recognition</h3>
              <p className="text-gray-600">Degrees from {country.name} are recognized and respected worldwide, opening doors to international career opportunities.</p>
            </div>
            
            {/* Benefit 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Diverse Programs</h3>
              <p className="text-gray-600">Choose from thousands of programs across various disciplines, with flexible study options to match your career goals.</p>
            </div>
            
            {/* Benefit 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Career Opportunities</h3>
              <p className="text-gray-600">Benefit from strong industry connections, internships, and post-study work options to kickstart your career.</p>
            </div>
            
            {/* Benefit 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Multicultural Experience</h3>
              <p className="text-gray-600">Join a diverse community of students from around the world and experience a rich, multicultural environment.</p>
            </div>
            
            {/* Benefit 5 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Quality of Life</h3>
              <p className="text-gray-600">Enjoy a high standard of living, excellent healthcare, and a safe, welcoming environment for international students.</p>
            </div>
            
            {/* Benefit 6 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Research Opportunities</h3>
              <p className="text-gray-600 mt-4">{country.name} is home to many prestigious universities. Please check back later for more details.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
