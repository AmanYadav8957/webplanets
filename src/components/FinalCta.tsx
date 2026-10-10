import React from 'react';

const FinalCta: React.FC = () => {
  return (
    <section className="py-16 bg-[#0b4357] text-white text-center">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-3xl font-bold mb-4">Ready For A Better Printing Experience?</h2>
        <p className="text-sm text-[#ccc] mb-8">Explore our printers, services, and products to elevate your workflow.</p>
        <button className="inline-block py-3 px-6 rounded-lg font-semibold text-sm uppercase transition-all duration-300 bg-lightBlue text-white hover:bg-primary-hover">GET STARTED</button>
      </div>
    </section>
  );
};

export default FinalCta;
