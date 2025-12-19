import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500 mb-6">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/" 
            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-medium rounded-lg hover:opacity-90 shadow-lg hover:shadow-xl"
          >
            Return Home
          </a>
          <a 
            href="/port" 
            className="px-6 py-3 border-2 border-emerald-500/30 text-emerald-400 font-medium rounded-lg hover:bg-emerald-500/10"
          >
            View Portfolio
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10" />
    </div>
  );
}
