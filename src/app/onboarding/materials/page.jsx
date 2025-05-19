'use client';
import React, { useEffect, useState, Suspense, useReducer } from 'react';
import { useSearchParams, useParams, redirect } from 'next/navigation';
import { api } from '../../../lib/axios';
import Spinner from '../../../components/spinner';
import { getDataFromLocalStorage } from '../../../components/utilities/token';

const OnboardingMaterialsContent = ({ query }) => {
  const [materials, setMaterials] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();

    const handleMaterialCompletion = async (materialId, userId) =>{
      try {
        const token = getDataFromLocalStorage('auth_token');
        if (!token) {
          throw new Error('user not authenticated')
          //i can apply toastr later for displying notifications once im done with the main tasks
          redirect('/') //this shall be to the applicant login page currently using the home for test case
          return;
        }
        const completedMaterial = await api.patch(`/onboarding/progress/${materialId}`)
            
        } catch (error) {
            console.error('Error marking material as completed:', error);
            
        }
    }
    
  useEffect(() => {
    const fetchMaterials = async () => {
      try {
          const response = await api.get(`/onboarding/random-quest?category=${query}`);
        //   console.log(response.data.categoryBoardingMaterialsawait)
        setMaterials(response.data.categoryBoardingMaterialsawait || []);
      } catch (err) {
        setError('Failed to fetch materials.');
      }
    };

    if (query) fetchMaterials();
  }, [query]);

  if (error) return <p className="text-red-500">{error}</p>;

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    
      {materials.length > 0 ? (
        materials.map((material) => (
          <div key={material._id} className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-2 text-blue-900">{material.title}</h2>
            <p className="text-gray-700 mb-4">{material.taskDescription}</p>
            {material.documentUrl && (
              <a href={material.documentUrl} target="_blank" className="text-blue-600 hover:underline">
                Access material
              </a>
            )}
            {material.videoUrl ? (
              <a href={material.videoUrl} target="_blank" className="text-blue-600 hover:underline ml-4">
                Watch Video
              </a>
                ) : ''}
                <div className=' mt-4 '>
                    <button className=' bg-[#ffeb3b]'>completed</button>
                </div>
            
          </div>
        ))
      ) : (
        <p className="text-gray-500">No materials for the selected category at the moment move to the next category..</p>
      )}
            </section>
  );
};

const OnboardingMaterials = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('category');

    return (
      <div className='bg-gray-50'>
    <div className="container mx-auto py-12 px-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-8 uppercase">{query}</h1>
      <Suspense fallback={<Spinner />}>
        <OnboardingMaterialsContent query={query} />
      </Suspense>
            </div>
            <div className='justify-center align-middle text-center'>
                <button className='text-black uppercase font-semibold bg-[#ffeb3b] w-[150px] p-2 rounded-lg mb-6'>completed</button>
                </div>
            </div>
  );
};

export default OnboardingMaterials;
