import React from 'react';

interface CtaSectionProps {
  onNavigate?: (page: 'home' | 'shop' | 'about' | 'contact') => void;
}

const CtaSection: React.FC<CtaSectionProps> = ({ onNavigate }) => {
  return (
    <section className="bg-darkGrey py-15 text-white">
      <div className="max-w-full px-10 flex flex-col md:flex-row justify-between items-center gap-5 text-center md:text-left">
        <div className="max-w-full md:max-w-[70%]">
          <h2 className="text-4xl font-bold mb-2">Need Help Choosing The Right Printer?</h2>
          <p className="text-[14px] text-[#ccc]">Tell us what you need to print, how often you print and where you will use your printer.</p>
          <p className="text-[14px] text-[#ccc]">We can help you explore suitable options.</p>
        </div>
        <div>
          <button
           onClick={() => onNavigate?.('shop')}
           className="inline-block py-3 px-6 rounded-lg font-semibold text-sm uppercase transition-all duration-300 bg-lightBlue text-white hover:bg-primary-hover">FIND YOUR PRINTER</button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
