import React from 'react';

const brands = [
  { 
    name: 'HP', 
    imageUrl: 'https://ik.imagekit.io/eqgw1ftw6/Doctor%20Setu/ChatGPT%20hp.png', 
    title: 'HP Printer' 
  },
  { 
    name: 'Canon', 
    imageUrl: 'https://ik.imagekit.io/eqgw1ftw6/Doctor%20Setu/WhatsApp_Image_2026-09-17_at_4.24.15_PM-removebg-preview.png', 
    title: 'Canon Printer' 
  },
  { 
    name: 'brother', 
    imageUrl: 'https://ik.imagekit.io/eqgw1ftw6/Doctor%20Setu/ChatGPT%20brother.png', 
    title: 'Brother Printer' 
  },
  { 
    name: 'EPSON', 
    imageUrl: 'https://ik.imagekit.io/eqgw1ftw6/Doctor%20Setu/epson%202.png?updatedAt=1789662996100', 
    title: 'Epson Printer' 
  }
];

const BrandSelection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-[28px] font-extrabold uppercase mb-16 tracking-wide text-[#0a1c3d]">PLEASE SELECT YOUR PRINTER BRAND</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center mt-12">
          {brands.map((brand, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="h-[160px] flex items-center justify-center mb-6">
                <img src={brand.imageUrl} alt={`${brand.name} logo`} className="max-h-full max-w-[180px] object-contain hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="text-[17px] font-bold mb-6 text-[#1a1a1a]">{brand.title}</h3>
              <button className="inline-block py-3.5 px-8 rounded-lg font-bold text-[14px] uppercase tracking-wide transition-all duration-300 bg-lightBlue text-white hover:bg-primary-hover shadow-sm hover:shadow-md">PRINTER SETUP</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSelection;
