'use client';

import { Suspense } from 'react';
import ApplicationForm from './ApplicationForm';

export default function ApplicationPage() {
  return (<Suspense>  <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
        </div>
      }>
        <ApplicationForm />
      </Suspense>
    </div></Suspense>
  
  );
}
