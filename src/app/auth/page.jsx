'use client';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Signin from 'components/auth/signin';
import Signup from 'components/auth/signup';

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [showSignIn, setShowSignIn] = useState(false);


  useEffect(() => {
    const tab = searchParams.get('tab');
    setShowSignIn(tab === 'signin');
  }, [searchParams]);

  const handleTabChange = (tab) => {
    router.push(`?tab=${tab}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black py-12 px-4">
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
    </div>
  );
};

export default Page;
