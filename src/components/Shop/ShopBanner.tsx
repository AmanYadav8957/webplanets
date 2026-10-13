import React from 'react';

interface ShopBannerProps {
  onNavigate: (page: 'home' | 'shop') => void;
}

const ShopBanner: React.FC<ShopBannerProps> = ({ onNavigate }) => {
  return (
    <div className="mb-8">
      {/* Breadcrumb */}
      <nav className="text-[13px] text-gray-400 mb-2 flex items-center gap-1.5 font-normal">
        <button 
          onClick={() => onNavigate('home')} 
          className="hover:text-gray-700 text-gray-400 cursor-pointer bg-transparent border-none p-0 transition-colors"
        >
          Home
        </button>
        <span>/</span>
        <span className="text-gray-500 font-medium">Shop</span>
      </nav>

      {/* Main Title */}
      <h1 className="text-[34px] sm:text-[40px] font-bold text-gray-900 tracking-tight mb-5">
        Shop
      </h1>

      {/* Hero Printer Image Card */}
      <div className="bg-white rounded-lg border border-gray-200/70 p-4 sm:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="w-full flex items-center justify-center bg-white">
          <img 
            src="/shop-hero-printer.jpg" 
            alt="HP All-in-One Printer" 
            className="w-full max-h-[460px] object-contain mx-auto select-none"
          />
        </div>
      </div>

      {/* Faint 'No products found.' text matching screenshot */}
      <div className="text-center py-4">
        <p className="text-[13px] text-gray-400 font-normal">
          No products found.
        </p>
      </div>
    </div>
  );
};

export default ShopBanner;
