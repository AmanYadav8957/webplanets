import React from 'react';

const Mission: React.FC = () => {
  return (
    <section className="py-15 bg-midGrey text-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center md:justify-end">
            <img 
              src="https://ik.imagekit.io/eqgw1ftw6/Doctor%20Setu/Gemini_Generated_Image_2fp76h2fp76h2fp7.png" 
              alt="Operating printer" 
              className="w-[90%] max-w-[450px] h-auto object-cover shadow-lg rounded-lg" 
            />
          </div>
          <div className="text-left">
            <h2 className="text-[26px] font-bold mb-6">Our Mission</h2>
            <div className="text-[14.5px] leading-relaxed text-[#f0f0f0] space-y-6">
              <p>
                Our mission is to make printer maintenance and troubleshooting simple and stress-free, even for users with limited technical experience. We cover a wide range of common issues, including driver installation, network setup, offline errors, and Wi-Fi connectivity problems. With clear instructions and practical steps, you can quickly identify the root cause of any issue and apply the right solution efficiently, without guesswork or wasted time.
              </p>
              <p>
                Whether for home or business printers, our resources help improve performance and prevent recurring problems. From resolving paper jams and scanning errors to optimizing network settings for stable printing, we provide dependable guidance that keeps your printer running efficiently. Our focus is always on simplicity, accuracy, and getting you back to productive printing as quickly as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
