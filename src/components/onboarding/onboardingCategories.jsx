import React, { useState } from 'react'
import { api } from '../../lib/axios';
import Link from 'next/link';
import UserLogout from '../ui/userLogout';
import { useAuth } from '@/contexts/authContext';
import { toast } from 'react-toastify';

const OnboardingCategories = () => {
  const { user, checking } = useAuth();
  const [loading, setLoading] = useState(false);

  const title = 'Resource Hub'
  const onboardingSections = [
    {
      "title": "Logic",
      "description": "This section will provide you with materials to test your logic accuracy.",
      "category": "logic"
    },
    {
      "title": "Tech Readiness",
      "description": "This section will test your computer literacy",
      "category": "tech-readiness"
    },
    {
      "title": "Mindset",
      "description": `This section will provide you with materials to test your mindset.`,
      "category": "mindset"
    },
  ]
  // {
  //   "title": "Others",
  //   "description": `As the title of the section implies, you will be provided with random materials that will enhance your management skills.`,
  //   "category": "others"
  // }

  const handleReady = async () => {
    if (!user?._id) {
      toast.warn('User not authenticated');
      return;
    }
  
    setLoading(true);
    try {
      await api.post('/applicant/completed-onboarding', {
        applicantId: user._id,
        completed: true
      });
      toast.success('Onboarding completion notification sent successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to notify account manager. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-12 px-8 font-serif">
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-blue-900">{title}</h2>
          <div className='mb-6'>
            <UserLogout user={user} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {onboardingSections.map((boardingSection, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg text-black">
              <h3 className="text-xl font-semibold mb-4 capitalize">{boardingSection.title}</h3>
              <p className="mb-4">{boardingSection.description}</p>
              <Link href={`/onboarding/materials?category=${boardingSection.category}`}>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 cursor-pointer">
                  Proceed...
                </button>
              </Link>
            </div>
          ))}
        </div>

        <div className='mt-8 text-center'>
          <button
            onClick={handleReady}
            disabled={loading}
            className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 disabled:opacity-50">
            {loading ? 'Sending...' : '✅ I have completed onboarding'}
          </button>

        </div>

        <p className='text-black mt-5 text-lg'>
          <span className='font-semibold mr-4'>NB:</span>
          Upon completing all sections click the <span className='strong'>"i have completed onboarding" </span> button to show you've completed the section.
        </p>
        <p className='text-medium ml-12'><strong>Note:</strong>This is irreversible</p>
      </div>
    </section>
  )
}

export default OnboardingCategories;
