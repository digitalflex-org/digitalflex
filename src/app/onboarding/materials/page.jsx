'use client';
import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { api } from '../../../lib/axios';
import Spinner from '../../../components/spinner';
import { toast } from 'react-toastify';
import { useAuthGuard } from 'components/utilities/hooks/useAuthGuard';

const OnboardingMaterialsContent = () => {
  const [materials, setMaterials] = useState([]);
  const [error, setError] = useState(null);

  const checking = useAuthGuard('applicant');
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('category');

  const handleMaterialCompletion = async (materialId) => {
    try
    {
      await api.patch(`/onboarding/progress/${materialId}`);
    } catch (err)
    {
      console.error('Error marking material as completed:', err);
    }
  };

  useEffect(() => {
    const fetchMaterials = async () => {
      try
      {
        const response = await api.get(`/onboarding/random-quest?category=${query}`);
        const materials = response.data.categoryBoardingMaterials;
        if (Array.isArray(materials))
        {
          setMaterials(materials);
        } else
        {
          setMaterials([]);
        }
      } catch (error)
      {
        setError('Failed to fetch materials.');
      }
    };

    if (!checking && query) fetchMaterials();
  }, [query, checking]);

  if (checking) return <Spinner />;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-900 mb-8 uppercase">{query}</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials.length > 0 ? (
          materials.map((material) => (
            <div key={material._id} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold mb-2 text-blue-900">{material.title}</h2>
              <p className="text-gray-700 mb-4">{material.taskDescription}</p>
              {material.documentUrl && (
                <a href={material.documentUrl} target="_blank" className="text-blue-600 hover:underline">
                  Access Material
                </a>
              )}
              {material.videoUrl && (
                <a href={material.videoUrl} target="_blank" className="text-blue-600 hover:underline ml-4">
                  Watch Video
                </a>
              )}
              <div className="mt-4">
                <button
                  className="bg-[#ffeb3b] px-4 py-2 rounded-lg"
                  onClick={() => handleMaterialCompletion(material._id)}
                >
                  Mark as Completed
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No materials available for the selected category.</p>
        )}
      </section>
    </>
  );
};

const Page = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-12 px-8">
        <Suspense fallback={<Spinner />}>
          <OnboardingMaterialsContent />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
