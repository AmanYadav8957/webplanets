import React from 'react';
import { Check } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-lightCyan">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <img src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=600&auto=format&fit=crop" alt="Printer Setup" className="w-full rounded-lg shadow-xl block" />
        </div>
        <div className="flex-1">
          <p className="text-md font-bold tracking-wide text-[#333333] mb-4 uppercase">ABOUT WEB PLANETS
</p>
          <h2 className="text-3xl font-extrabold mb-6 leading-tight text-black">Your Printing Partner, From Setup To Support.</h2>
          <p className="text-sm text-[#333333] mb-5 leading-relaxed">
            We are dedicated to providing comprehensive and reliable printer solutions for homes and businesses. Our team of experts is here to assist you with every aspect of your printing needs.
          </p>
          <p className="text-sm text-[#333333] mb-5 leading-relaxed">
            Whether you need a new printer installed, a complex network issue resolved, or just general maintenance, we have the skills and experience to get the job done right.
          </p>
          <ul className="list-none mb-9">
            <li className="flex items-center gap-2.5 text-sm mb-3 font-medium"><Check size={16} className="text-primary" /> Professional technicians</li>
            <li className="flex items-center gap-2.5 text-sm mb-3 font-medium"><Check size={16} className="text-primary" /> Dedicated customer service</li>
            <li className="flex items-center gap-2.5 text-sm mb-3 font-medium"><Check size={16} className="text-primary" /> Quality printer repairs</li>
            <li className="flex items-center gap-2.5 text-sm mb-3 font-medium"><Check size={16} className="text-primary" /> Reliable printing solutions</li>
          </ul>
          <button className="inline-block py-3 px-6 rounded font-semibold text-sm uppercase transition-all duration-300 bg-lightBlue text-white hover:bg-primary-hover">BOOK A CONSULTATION</button>
        </div>
      </div>
    </section>
  );
};

export default About;
