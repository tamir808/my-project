'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-emerald-50 p-4">
      <div className="text-center max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
        <h1 className="text-6xl font-bold text-emerald-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-200 text-center"
          >
            Go to Homepage
          </Link>
          <Link 
            href="/port" 
            className="px-6 py-3 border border-emerald-600 text-emerald-600 rounded-lg font-medium hover:bg-emerald-50 transition-colors duration-200 text-center"
          >
            View My Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
