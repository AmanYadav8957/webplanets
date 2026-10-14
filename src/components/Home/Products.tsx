import React from 'react';

const products = [
  {
    category: 'Home',
    title: 'Inkjet Printers',
    description: 'Everyday printing for home and personal use.',
    image: 'https://ik.imagekit.io/eqgw1ftw6/Doctor%20Setu/WhatsApp%20Image%202026-09-18%20at%201.26.33%20AM.jpeg'
  },
  {
    category: 'Office',
    title: 'Laser Printers',
    description: 'Efficient printing for busy workspaces.',
    image: 'https://ik.imagekit.io/eqgw1ftw6/Doctor%20Setu/WhatsApp%20Image%202026-09-18%20at%201.26.33%20AM.jpeg'
  },
  {
    category: 'Business',
    title: 'All-in-One Printers',
    description: 'Print, scan and copy from one device.',
    image: 'https://ik.imagekit.io/eqgw1ftw6/Doctor%20Setu/WhatsApp%20Image%202026-09-18%20at%201.26.33%20AM.jpeg'
  },
  {
    category: 'Professional',
    title: 'Business Printers',
    description: 'Printing solutions for demanding workloads.',
    image: 'https://ik.imagekit.io/eqgw1ftw6/Doctor%20Setu/WhatsApp%20Image%202026-09-18%20at%201.26.33%20AM.jpeg'
  }
];

const Products: React.FC = () => {
  return (
    <section className="py-24 bg-[#f6f9fa]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-16">
          <p className="text-[15px] font-semibold text-[#1a1a1a] mb-2">Featured Products</p>
          <h2 className="text-[36px] font-extrabold uppercase mb-4 tracking-tight text-black">EXPLORE OUR PRINTERS</h2>
          <p className="text-[14.5px] text-[#555] max-w-[700px] mx-auto">Browse printing equipment for different requirements and working environments.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-5 shadow-[0_15px_30px_rgba(0,0,0,0.15)] bg-white">
                <img src={product.image} alt={product.title} className="w-full h-auto object-cover rounded-lg" />
              </div>
              <div className="text-left">
                <span className="block text-[13px] font-bold text-[#3d1830] mb-2">{product.category}</span>
                <h3 className="text-[18px] font-extrabold mb-3 text-black">{product.title}</h3>
                <p className="text-[13px] text-[#555] leading-relaxed pr-4">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
