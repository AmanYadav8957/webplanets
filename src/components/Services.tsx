import React from 'react';

const services = [
  {
    image: 'https://webplanets.online/wp-content/uploads/2026/09/ChatGPT-Image-Sep-21-2026-02_06_57-PM-1536x867.png',
    title: 'PRINTER ISSUE DIAGNOSIS & SOLUTIONS',
    description: "Printer Issue Diagnosis & Solutions: When your printer isn't working properly, our troubleshooting service helps identify the exact cause and provides effective solutions. We handle common problems such as printing errors, connectivity issues, driver problems, paper jams, slow printing, and software conflicts. With a clear diagnosis and professional guidance, we help restore your printer's performance, reduce downtime, and ensure smooth, reliable, and hassle-free printing for your home or office needs."
  },
  {
    image: 'https://webplanets.online/wp-content/uploads/2026/09/ChatGPT-Image-Sep-21-2026-02_09_05-PM-1536x848.png',
    title: 'PRINTER SETUP & OPTIMIZATION',
    description: 'Printer setup and optimization ensures your printer is installed correctly and works efficiently. From connecting the device and installing the right drivers to configuring print settings and improving performance, each step helps deliver smooth and reliable printing. Proper optimization can also reduce printing errors, improve print quality, and save time and resources. With the right setup, your printer can perform consistently and meet your everyday printing needs.'
  },
  {
    image: 'https://webplanets.online/wp-content/uploads/2026/09/ChatGPT-Image-Sep-21-2026-02_10_24-PM-1536x877.png',
    title: 'WI-FI & NETWORK PERFORMANCE OPTIMIZATION',
    description: 'Wi-Fi and network performance optimization helps maintain a fast, stable, and reliable connection for your printer and connected devices. It includes checking network settings, improving signal strength, resolving connection problems, and reducing communication delays. Proper network configuration can enhance printing speed, prevent interruptions, and improve overall device performance. By optimizing your wireless connection, you can enjoy smoother printing, fewer connectivity issues, and a more convenient printing experience.'
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col items-center mb-14">
          <h2 className="text-center text-[28px] font-bold tracking-tight text-black mb-3">Our Services</h2>
          <div className="w-[60px] h-[3px] bg-[#1a365d]"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.4)] rounded-2xl overflow-hidden flex flex-col h-full">
              <img src={service.image} alt={service.title} className="w-full h-[220px] object-cover" />
              <div className="p-8 text-center flex-1 flex flex-col">
                <h3 className="text-[20px] font-bold mb-5 text-black uppercase">{service.title}</h3>
                <p className="text-[15px] text-[#555] leading-[1.8] flex-1">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
