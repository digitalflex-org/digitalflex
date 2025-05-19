import React from 'react'

const ApplicantHeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-300 text-white py-16 px-8">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-6xl font-bold mb-6">Welcome <br /> Your Onboarding Journey Starts Here!</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Complete each section to unlock the next stage and get closer to becoming part of our team.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-3 px-8 rounded-lg shadow-lg cursor-pointer  ">
          Start Onboarding
        </button>
      </div>
    </section>
  )
}

export default ApplicantHeroSection