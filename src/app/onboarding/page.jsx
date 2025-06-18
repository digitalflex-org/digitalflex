'use client';
import Spinner from '@/components/spinner';
import OnboardingCategories from '@/components/onboarding/onboardingCategories';
import { useAuthGuard } from '@/components/utilities/hooks/useAuthGuard';

export default function OnboardingPage() {
  const { checking, user } = useAuthGuard(['applicant', 'admin']);
  if (checking) return <Spinner />


  return (
    <div>
      <OnboardingCategories />
    </div>
  );
}
