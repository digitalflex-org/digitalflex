import React from 'react'
import Link from 'next/link';

const ApplicantHeroSection = () => {
  return (
    <section className="bg-gradient-to-r  text-black py-16 px-8">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-6xl font-bold mb-6">Welcome <br /> Your Onboarding Journey Starts Here!</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Complete each section to unlock the next stage and get closer to becoming part of our team.
        </p>
        <button className="bg-[#ff6f3c] hover:bg-[#d8723c] text-white font-semibold py-3 px-8 rounded-lg shadow-lg cursor-pointer  ">
          <Link href={'/onboarding'} >
          
          Start Onboarding
          </Link>
        </button>
      </div>
    </section>
  )
}

export default ApplicantHeroSection