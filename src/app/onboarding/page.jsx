import OnboardingCategories from '../../components/onboarding/onboardingCategories'
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';


const page = () => {

  const cookieStore = cookies();
  //if the user is not logged in, redirect to the login page
  const auth_token = cookieStore.get('auth_token')?.value;
  if (!auth_token)
  {
    redirect('/auth?tab=signin');
  }
  
  return (
      <div>
          <OnboardingCategories />
          <div>
              
          </div>
    </div>
  )
}

export default page