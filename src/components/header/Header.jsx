import Image from "next/image";
import globe_new from '@/assets/globe.png';
import flare from '@/assets/Purple-Lens-Flare.png';
import './header.css';

const Header = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#0f0f1b] to-[#1a1a2e] text-white flex items-center justify-center px-6 md:px-12">
      {/* Flare Background */}
      <div className="absolute w-[150vw] h-[150vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <Image
          src={flare}
          alt="Purple Flare"
          className="w-full h-full object-cover blur-[120px] opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl w-full">
        {/* Globe */}
        <div className="w-64 h-64 md:w-96 md:h-[720px] flex-shrink-0">
          <Image
            src={globe_new}
            alt="Rotating Globe"
            className="w-[100%] h-full object-contain rotate-globe"
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Unlock Your <span className="text-purple-400">Digital Potential</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Empower your business with innovative digital solutions from Digital Flex.
          </p>
          <div>
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-medium transition duration-300 shadow-lg cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Header;
