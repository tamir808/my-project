'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function NotFound() {
  // This effect will help prevent accidental deletion
  useEffect(() => {
    // Keep this file in the app directory
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-emerald-600 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Page Not Found</h2>
        <p className="text-gray-600 text-lg mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Return Home
          </Link>
          <Link 
            href="/port" 
            className="px-6 py-3 border-2 border-emerald-600 text-emerald-600 font-medium rounded-lg hover:bg-emerald-50 transition-colors duration-200"
          >
            View Portfolio
          </Link>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-20 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl -z-10" />
    </div>
  );
}
