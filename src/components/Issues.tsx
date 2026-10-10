import React from 'react';
import { FileText, Download, Printer, Wifi } from 'lucide-react';

const issues = [
  {
    icon: <FileText size={28} className="text-[#13284f]" />,
    title: 'Paper Jam Issue',
    description: 'Paper jams can interrupt your work and affect your printer\'s performance. Our professional service quickly identifies the cause, safely removes stuck paper, and checks the feeding mechanism to ensure smooth and reliable printing.'
  },
  {
    icon: <Download size={28} className="text-[#13284f]" />,
    title: 'Driver Update',
    description: 'Keep your printer running smoothly with the latest drivers. We update and configure the required printer drivers to improve compatibility, performance, and reliable communication between your printer and computer.'
  },
  {
    icon: <Printer size={28} className="text-[#13284f]" />,
    title: 'Fix offline printer',
    description: 'Is your printer showing as offline? We diagnose connection and configuration issues, restore communication between your printer and computer, and get your printer back online and ready for smooth printing.'
  },
  {
    icon: <Wifi size={28} className="text-[#13284f]" />,
    title: 'Printer Wi-Fi issue',
    description: 'Having trouble connecting your printer to Wi-Fi? We diagnose network and connectivity problems, configure the printer correctly, and help restore a stable connection for smooth and hassle-free wireless printing.'
  }
];

const Issues: React.FC = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {issues.map((issue, index) => (
            <div key={index} className="bg-white px-6 py-12 min-h-[380px] rounded-2xl text-center shadow-[0_0_20px_rgba(255,255,255,0.7)] border-none transform transition-transform hover:-translate-y-1">
              <div className="inline-flex items-center justify-center mb-6">{issue.icon}</div>
              <h3 className="text-[18px] font-extrabold mb-5 text-[#13284f]">{issue.title}</h3>
              <p className="text-[13px] text-[#4a4a4a] leading-[1.8]">{issue.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Issues;
