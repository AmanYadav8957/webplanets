import React, { useState, useEffect } from 'react';
import type { BrandId } from '../BrandSetup';

interface HeroProps {
  onNavigate?: (page: 'home' | 'shop') => void;
  onSelectBrand?: (brand: BrandId) => void;
}

const brands: { id: BrandId; name: string; imageUrl: string; title: string }[] = [
  {
    id: 'hp',
    name: 'HP',
    imageUrl: '/setup/brand_card_hp.png',
    title: 'HP Printer',
  },
  {
    id: 'canon',
    name: 'Canon',
    imageUrl: '/setup/brand_card_canon.png',
    title: 'Canon Printer',
  },
  {
    id: 'brother',
    name: 'brother',
    imageUrl: '/setup/brand_card_brother.png',
    title: 'Brother Printer',
  },
  {
    id: 'epson',
    name: 'EPSON',
    imageUrl: '/setup/brand_card_epson.png',
    title: 'Epson Printer',
  },
];

const Hero: React.FC<HeroProps> = ({ onNavigate, onSelectBrand }) => {
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsBrandModalOpen(false);
    };
    if (isBrandModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isBrandModalOpen]);

  const handleSelect = (brandId: BrandId) => {
    setIsBrandModalOpen(false);
    onSelectBrand?.(brandId);
  };

  return (
    <>
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
              type="button"
              onClick={() => onNavigate?.('shop')}
              className="inline-block w-full sm:w-auto text-center py-3.5 px-8 rounded-xl font-bold text-[15px] uppercase tracking-wide transition-all duration-300 bg-[#12213d] text-white hover:bg-[#1a2f55] border-none cursor-pointer shadow-md hover:shadow-lg"
            >
              EXPLORE PRINTERS
            </button>
            <button
              id="hero-printer-setup-btn"
              type="button"
              onClick={() => setIsBrandModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto text-center py-3.5 px-8 rounded-xl font-bold text-[15px] uppercase tracking-wide transition-all duration-300 bg-lightBlue text-white hover:bg-primary-hover border-none cursor-pointer shadow-md hover:shadow-lg"
            >
              <span>PRINTER SETUP</span>
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Brand Selection Modal */}
      {isBrandModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsBrandModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative text-gray-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsBrandModalOpen(false)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 flex items-center justify-center transition-colors cursor-pointer border-none"
              title="Close"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Header */}
            <div className="text-center mb-7">
              <span className="text-[12px] font-bold tracking-widest text-lightBlue uppercase">
                Printer Setup & Drivers
              </span>
              <h2 className="text-[22px] sm:text-[26px] font-extrabold text-[#0a1c3d] uppercase mt-1 mb-2">
                Select Your Printer Brand
              </h2>
              <p className="text-[13.5px] text-gray-500 max-w-md mx-auto">
                Select your printer brand below to proceed with model configuration and driver setup.
              </p>
            </div>

            {/* Brands Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {brands.map((brand) => (
                <div
                  key={brand.id}
                  id={`hero-modal-brand-${brand.id}`}
                  onClick={() => handleSelect(brand.id)}
                  className="group relative flex flex-col items-center justify-between p-5 rounded-2xl border border-slate-100 hover:border-sky-300 bg-white hover:bg-sky-50/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center"
                >
                  <div className="h-20 sm:h-24 w-full flex items-center justify-center mb-3">
                    <img
                      src={brand.imageUrl}
                      alt={`${brand.name} logo`}
                      className="max-h-full max-w-[120px] object-contain group-hover:scale-110 transition-transform duration-300 select-none"
                    />
                  </div>
                  <span className="text-[14px] font-bold text-gray-800 group-hover:text-lightBlue transition-colors mb-2.5">
                    {brand.title}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-lightBlue bg-sky-100 group-hover:bg-lightBlue group-hover:text-white py-1.5 px-3 rounded-lg transition-colors w-full">
                    Setup
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
