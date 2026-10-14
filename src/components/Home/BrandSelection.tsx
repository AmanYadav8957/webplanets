import React from 'react';
import type { BrandId } from '../../data/brandSetupData';

interface BrandSelectionProps {
  onSelectBrand?: (brand: BrandId) => void;
}

const brands: { id: BrandId; name: string; imageUrl: string; title: string }[] = [
  { 
    id: 'hp',
    name: 'HP', 
    imageUrl: '/setup/brand_card_hp.png', 
    title: 'HP Printer' 
  },
  { 
    id: 'canon',
    name: 'Canon', 
    imageUrl: '/setup/brand_card_canon.png', 
    title: 'Canon Printer' 
  },
  { 
    id: 'brother',
    name: 'brother', 
    imageUrl: '/setup/brand_card_brother.png', 
    title: 'Brother Printer' 
  },
  { 
    id: 'epson',
    name: 'EPSON', 
    imageUrl: '/setup/brand_card_epson.png', 
    title: 'Epson Printer' 
  }
];

const BrandSelection: React.FC<BrandSelectionProps> = ({ onSelectBrand }) => {
  return (
    <section className="py-24 bg-white" id="brand-selection">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-center text-[28px] font-extrabold uppercase mb-16 tracking-wide text-[#0a1c3d]">
          PLEASE SELECT YOUR PRINTER BRAND
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center mt-12">
          {brands.map((brand) => (
            <div key={brand.id} className="flex flex-col items-center">
              <button
                type="button"
                onClick={() => onSelectBrand?.(brand.id)}
                className="h-[160px] w-full flex items-center justify-center mb-6 bg-transparent border-none cursor-pointer p-0 group"
                title={`Configure ${brand.title} Setup`}
              >
                <img 
                  src={brand.imageUrl} 
                  alt={`${brand.name} logo`} 
                  className="max-h-full max-w-[180px] object-contain group-hover:scale-105 transition-transform duration-300" 
                />
              </button>
              <h3 className="text-[17px] font-bold mb-6 text-[#1a1a1a]">
                {brand.title}
              </h3>
              <button 
                type="button"
                onClick={() => onSelectBrand?.(brand.id)}
                className="inline-block py-3.5 px-8 rounded-lg font-bold text-[14px] uppercase tracking-wide transition-all duration-300 bg-lightBlue text-white hover:bg-primary-hover shadow-sm hover:shadow-md cursor-pointer border-none"
              >
                PRINTER SETUP
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSelection;
