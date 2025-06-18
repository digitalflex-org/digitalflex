'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Signin from '@/components/auth/signin';
import Signup from '@/components/auth/signup';
import Spinner from '@/components/spinner';

// Child component using useSearchParams
const AuthPageContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [showSignIn, setShowSignIn] = useState(false);
  const callbackUrl = searchParams.get('callbackUrl')

  useEffect(() => {
    const tab = searchParams.get('tab');
    setShowSignIn(tab === 'signin');
  }, [searchParams]);

  const handleTabChange = (tab) => {
    const cb = searchParams.get('callbackUrl') || '';
    router.push(`?tab=${tab}&callbackUrl=${cb}`);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Toggle Tabs */}
      <div className="flex mb-8 border border-blue-600 rounded-lg overflow-hidden">
        <button
          onClick={() => handleTabChange('signup')}
          className={`w-1/2 py-3 text-lg font-semibold transition-all duration-300 rounded-r-xl ${!showSignIn
            ? 'bg-blue-600 text-white'
            : 'bg-white text-blue-600 hover:bg-blue-50'
            }`}
        >
          Sign Up
        </button>
        <button
          onClick={() => handleTabChange('signin')}
          className={`w-1/2 py-3 text-lg font-semibold transition-all duration-300 rounded-l-xl ${showSignIn
            ? 'bg-blue-600 text-white'
            : 'bg-white text-blue-600 hover:bg-blue-50'
            }`}
        >
          Sign In
        </button>
      </div>

      {showSignIn ? <Signin /> : <Signup />}
    </div>
  );
};

// Main page component
const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-black py-12 px-4">
      <Suspense fallback={<Spinner />}>
        <AuthPageContent />
      </Suspense>
    </div>
  );
};

export default Page;
