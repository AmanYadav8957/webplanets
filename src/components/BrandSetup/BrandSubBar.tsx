import React from 'react';

interface BrandSubBarProps {
  logoUrl: string;
  logoAlt: string;
  heightClass: string;
}

const BrandSubBar: React.FC<BrandSubBarProps> = ({ logoUrl, logoAlt, heightClass }) => {
  return (
    <div className="w-full bg-white py-6 border-b border-gray-100 flex items-center justify-center">
      <div className="flex items-center justify-center px-4">
        <img
          src={logoUrl}
          alt={logoAlt}
          className={`${heightClass} w-auto object-contain transition-transform duration-300 hover:scale-105 select-none`}
        />
      </div>
    </div>
  );
};

export default BrandSubBar;
