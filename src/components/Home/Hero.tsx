import React from 'react';

interface HeroProps {
  onNavigate?: (page: 'home' | 'shop') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative h-[650px] flex items-center bg-[url('/hero-bg.jpg')] bg-cover bg-center">
      {/* Solid blue/grey translucent overlay matching the reference image */}
      <div className="absolute inset-0 bg-[#28465c]/60 mix-blend-normal"></div>
      
      <div className="relative z-10 text-white max-w-[1200px] mx-auto w-full mt-16 px-5 md:px-0">
        <h1 className="text-[42px] sm:text-[50px] md:text-[65px] font-bold leading-[1.1] mb-6 tracking-tight">
          Printing Made Simple.<br />
          Reliable. Efficient.
        </h1>
        <p className="text-[15px] md:text-[17px] mb-10 leading-relaxed max-w-[650px] text-blue-200">
          Discover reliable printers, professional printing solutions, and expert assistance designed for homes, offices, and businesses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button 
            onClick={() => onNavigate?.('shop')}
            className="inline-block w-full sm:w-auto text-center py-3 px-8 rounded-xl font-bold text-[15px] uppercase tracking-wide transition-all duration-300 bg-[#12213d] text-white hover:bg-[#1a2f55] border-none cursor-pointer"
          >
            EXPLORE PRINTERS
          </button>
          <button className="inline-block w-full sm:w-auto text-center py-3 px-8 rounded-xl font-bold text-[15px] uppercase tracking-wide transition-all duration-300 bg-[#12213d] text-white hover:bg-[#1a2f55] border-none cursor-pointer">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
