import { notFound } from 'next/navigation';
import NotFound from '@/components/NotFound';

export default function NotFoundPage() {
  if (typeof window === 'undefined') {
    // On the server, trigger the not found
    notFound();
    return null;
  }
  
  // On the client, render the NotFound component
  return <NotFound />;
}
