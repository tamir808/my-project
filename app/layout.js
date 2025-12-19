"use client "
import './global.css';
import Header from '@/components/Header';
import { Suspense } from 'react';

export const metadata = {
  title: "StudyConnect",
  description: "Discover programs from top universities worldwide",
};

export default function RootLayout({ children}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <main>
       <Suspense>
     <ProgressBarProvider>{children}</ProgressBarProvider>
</Suspense>
        </main>
      </body>
    </html>
  );
}
