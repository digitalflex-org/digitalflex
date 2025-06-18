'use client';
import React from 'react'
import { api } from '../../lib/axios';
import Link from 'next/link';


const onboardingCategories = () => {

  const title = 'Resource Hub'
  const onboardingSections = [{
    "title": "Logic",
    "description": "This section will provide you with materials to test your logic accuraccy.",
    "category": "logic"

  }, {
    "title": "Tech Readiness",
    "description": "This section will test your computer literacy",
    "category": "tech-readiness"

  },
  {
    "title": "mindset",
    "description": `This section will provide you with materials to test your mindset.`,
    "category": "mindset"

  },
  {
    "title": "Others",
    "description": `As the title of the section implies, you will be provided with random materials that will enhance your management skills.`,
    "category": "others"

  }
  ]

  return (
    <section className="bg-white py-12 px-8 font-serif">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-blue-900">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {onboardingSections.map((boardingSection, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg text-black">
              <h3 className="text-xl font-semibold mb-4 capitalize">{boardingSection.title}</h3>
              <p className="mb-4">{boardingSection.description}</p>
              <Link href={`/onboarding/materials?category=${boardingSection.category}`}><button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 cursor-pointer">
                Proceed...
              </button></Link>
            </div>
          ))}
        </div>
        <p className='text-black mt-5 text-xl'><span className='font-semibold mr-4'>NB:</span>Upon completing each section click the complete button to show you've completed the section. </p>
      </div>
    </section>
  )
}

export default onboardingCategories;
