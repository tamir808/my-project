


// This is a client component for handling 404 errors
export default function NotFoundPage() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the custom 404 page
    router.replace('/not-found');
  }, [router]);

  // Return null or a loading indicator while redirecting
  return null;
}

// This tells Next.js to use this as the not-found page
export const dynamic = 'force-dynamic';
