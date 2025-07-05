'use client';
import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { api } from '../../../lib/axios';
import Spinner from '@/components/spinner';
import { toast } from 'react-toastify';
import { useAuth } from '@/contexts/authContext';
import { useAuthGuard } from '@/components/utilities/hooks/useAuthGuard';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';


const OnboardingMaterialsContent = () => {
  useAuthGuard(['applicant', 'admin']);
  const { user, setUser, loading } = useAuth();
  const [materials, setMaterials] = useState([]);
  const [checking, setChecking] = useState(true);
  const [error, setError] = useState(null);

  // const checking = useAuthGuard('applicant');
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('category');



  useEffect(() => {
    if (!query || query === 'undefined' || query === null)
    {
      toast.info('You need to select a resource category!');
      setChecking(false);
    }
  }, [query]);


  useEffect(() => {
    const fetchMaterials = async () => {
      if (!query || query === 'undefined' || query === null) return;

      try
      {
        setChecking(true);
        const response = await api.get(`/onboarding/random-quest?category=${query}`);
        // console.log('materials Response:', response);
        const materials = response.data.categoryBoardingMaterials;
        if (!materials || materials.length === 0)
        {
          setChecking(false);
          toast.info('Make sure you select an active material.');
        }
        setMaterials(Array.isArray(materials) ? materials : []);
      } catch (error)
      {
        console.log('error fetching materials:', error);
        setError('Failed to fetch materials.');
      } finally
      {
        setChecking(false);
      }
    };
    if (query)
    {
      fetchMaterials();
    }
    // if (!checking && query) fetchMaterials();
  }, [query]);


  const handleMaterialCompletion = async (materialId) => {
    try
    {
      await api.patch(`/onboarding/progress/${materialId}`);
      setMaterials((prev) =>
        prev.map((mat) =>
          mat._id === materialId ? { ...mat, isCompleted: true } : mat
        )
      );
    } catch (err)
    {
      console.error('Error marking material as completed:', err);
    }
  };

  if (checking) return <Spinner />;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!query) return <div> <p className="text-red-500 text-2xl   flex gap-4">
    <div className="flex items-center gap-4 mb-2">
      <button
        onClick={() => router.push('/onboarding')}
        className="p-2 rounded hover:bg-blue-100 transition"
      >
        <ArrowLeft className="text-blue-900 w-6 h-6" />
      </button>
    </div> No category selected. Please go back and choose one.</p></div>;

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => router.back()}
          className="p-2 rounded hover:bg-blue-100 transition"
        >
          <ArrowLeft className="text-blue-900 w-6 h-6" />
        </button>
        <h1 className="text-3xl font-bold text-blue-900 uppercase">{query}</h1>
      </div>

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
                {material.isCompleted ? (
                  <Button disabled variant="ghost">
                    Completed
                  </Button>
                ) : (
                  <button
                    className="bg-[#ffeb3b] px-4 py-2 rounded-lg"
                    onClick={() => handleMaterialCompletion(material._id)}
                  >
                    Mark as Completed
                  </button>
                )}
              </div>

            </div>
          ))
        ) : (
          <p className="text-gray-500">No materials available for the selected category.</p>
        )}
      </section>
    </div>
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
