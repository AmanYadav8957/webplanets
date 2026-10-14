import type { BrandId } from '../BrandSetup';

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
      <div className="max-w-[1240px] mx-auto px-5">
        <h2 className="text-center text-[28px] font-extrabold uppercase mb-16 tracking-wide text-[#0a1c3d]">
          PLEASE SELECT YOUR PRINTER BRAND
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center mt-12">
          {brands.map((brand) => (
            <div
              key={brand.id}
              onClick={() => onSelectBrand?.(brand.id)}
              className="group relative flex flex-col items-center justify-between p-7 rounded-2xl bg-white border border-slate-100 hover:border-sky-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-12px_rgba(2,132,199,0.18)] hover:-translate-y-2.5 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Top subtle active accent border that fades in on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-lightBlue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Ambient radial glow background on hover */}
              <div className="absolute -inset-px rounded-2xl bg-radial from-sky-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Brand Logo Container */}
              <div className="h-[150px] w-full flex items-center justify-center mb-6 relative z-10">
                <img 
                  src={brand.imageUrl} 
                  alt={`${brand.name} logo`} 
                  className="max-h-full max-w-[170px] object-contain transition-transform duration-500 ease-out group-hover:scale-110 select-none drop-shadow-sm" 
                />
              </div>

              {/* Title */}
              <h3 className="text-[17px] font-bold mb-6 text-[#1a1a1a] group-hover:text-lightBlue transition-colors duration-300 relative z-10">
                {brand.title}
              </h3>

              {/* Setup Button */}
              <button 
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectBrand?.(brand.id);
                }}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-[13.5px] uppercase tracking-wider transition-all duration-300 bg-lightBlue text-white group-hover:bg-primary-hover shadow-sm group-hover:shadow-md group-hover:scale-[1.02] cursor-pointer border-none relative z-10 flex items-center justify-center gap-1.5"
              >
                <span>PRINTER SETUP</span>
                <svg 
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSelection;
