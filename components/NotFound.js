'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // This will trigger the not-found page on the client side
    router.replace('/not-found');
  }, [router]);

  return null;
}
