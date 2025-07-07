'use client';
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import globe_new from '../../assets/globe.png';
import flare from '../../assets/Purple-Lens-Flare.png';
import landingImg from  '../../assets/landing-img.jpg';
import './header.css';
import { useRouter } from "next/navigation";


const marketingPoints = [
  "Transform Your Business",
  "Unlock Your Digital Potentials",
  "Manage Your Google Business Profile",
  "Improve Social Media",
  "Unlock Your Website Potential",
  "Improve Your SEO",
  "Manage Your PPC",
  "Improve Your Online Visibility",
  "Your Business Content Creation",
  "Branding Got Easier",
  "Improve Your Lead Generation",
  "Marketing Like Never Before",
  "Improve Your Customer Engagement Potential",
]
const Header = () => {
  const [currentPointIndex, setCurrentPointIndex] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPointIndex((prevIndex) => (prevIndex + 1) % marketingPoints.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative w-full h-screen overflow-hidden  md:bg-gradient-to-b from-[#1d3c6a] to-[#004e89] text-white flex items-center justify-center px-6 md:px-12">
      {/* Flare Background */}
      {/* <div className="absolute w-[150vw] h-[150vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <Image
          src={flare}
          alt="Purple Flare"
          className="w-full h-full object-cover blur-[120px] opacity-50 "
        />
      </div> */}

      {/* Content Desktop and larger screens */}
      <div className="hidden relative z-10 flex-col lg:flex-row items-center justify-between gap-10 max-w-7xl w-full lg:h-auto lg:grid lg:grid-cols-2 lg:gap-15">
        {/* Globe */}
        {/* < className="w-64 h-64 md:w-96 md:h-[720px] flex-shrink-0">
          <Image
            src={globe_new}
            alt="Rotating Globe"
            className="w-[100%] h-full object-contain rotate-globe"
          />
         */}
        <div className="relative z-0 max-h-[100vh] md:z-10 flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl w-full">
        {/* Image */}
        <div className="w-full flex-shrink-0">
          <Image
            src={landingImg}
            alt="Team Working"
            className="w-full h-full object-cover rounded-lg"
          />
          </div>
        </div>
        

        {/* Text */}
        <div className="md:flex flex-col md:text-left max-w-2xl">
        <div className="h-[250px] md:w-[650px] lg:max-w-full lg:relative lg:top-3 lg:flex-wrap lg:w-full">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 lg:text-5xl ">
            {/*  Unlock Your{" "} */}
            <span className="text-[#fefefe] inline-block min-h-[2.5rem]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={marketingPoints[currentPointIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.8 }}
                  className="inline-flex"
                >
                  {marketingPoints[currentPointIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            {" "}With Digital Flex.
          </h1>
</div>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Empower your business with innovative digital solutions from Digital Flex.
          </p>
          <div>
            <button onClick={() => router.replace('/contact')} className="px-6 py-3 bg-[#004e89] hover:bg-[#1d3c6a] rounded-full text-white font-medium transition duration-300 shadow-lg cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* mobile view */}
      <div>
        <div className="block lg:hidden w-[100vw] h-[90vh]">
                <Image
                    src={landingImg}
                    alt="Team working together"
                    layout="fill"
                    objectFit="cover"
                    className="z-0 "
                    priority
                />
          <div className="absolute inset-0 bg-[#004e89]/60 z-20"></div>
        {/* Centered Text on Mobile */}
          <div className="absolute inset-0 z-30 flex items-center justify-center px-6">
          <div className="max-w-3xl text-center text-white">
        <div className="md:flex flex-col md:text-left max-w-2xl">
        <div className="h-[250px] md:w-[650px]">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            {/*  Unlock Your{" "} */}
            <span className="text-[#fefefe] inline-block min-h-[2.5rem]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={marketingPoints[currentPointIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.8 }}
                  className="inline-flex"
                >
                  {marketingPoints[currentPointIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            {" "}With Digital Flex.
          </h1>
</div>
          <p className="text-lg md:text-xl text-stone-50 mb-8">
            Empower your business with innovative digital solutions from Digital Flex.
          </p>
          <div>
            <button onClick={() => router.replace('/contact')} className="px-6 py-3 bg-[#004e89] hover:bg-[#1d3c6a] rounded-full text-white font-medium transition duration-300 shadow-lg cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
              
          </div>
          </div>
          </div>
</div> 
    </section>
  );
};


export default Header;

