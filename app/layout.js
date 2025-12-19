'use client';
import './global.css';
import Header from '@/components/Header';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ProgressBarProvider with SSR disabled
const ProgressBarProvider = dynamic(
  () => import('@/components/ProgressBarProvider'),
  { ssr: false }
);

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <ProgressBarProvider>
              {children}
            </ProgressBarProvider>
          </Suspense>
        </main>
      </body>
    </html>
  );
}
