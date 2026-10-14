import React, { useState, useEffect } from 'react';

export interface DriverFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  modelNumber: string;
}

interface DownloadDriversModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: DriverFormData) => void;
  defaultModel?: string;
}

const DownloadDriversModal: React.FC<DownloadDriversModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  defaultModel = '',
}) => {
  const [formData, setFormData] = useState<DriverFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    modelNumber: defaultModel,
  });

  useEffect(() => {
    if (defaultModel) {
      setFormData((prev) => ({ ...prev, modelNumber: defaultModel }));
    }
  }, [defaultModel]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-[620px] bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Title and Close Button (matching Image 2) */}
        <div className="pt-6 pb-2 px-6 sm:px-8 flex items-start justify-between">
          <h2 className="text-[26px] sm:text-[28px] font-semibold text-[#1e5d95] tracking-tight m-0">
            Download Printer Drivers
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#335670] hover:bg-[#203a4f] text-white flex items-center justify-center transition-colors cursor-pointer border-none shadow-sm shrink-0"
            title="Close"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Modal Body Form */}
        <form onSubmit={handleSubmit} className="px-6 sm:px-8 pb-8 pt-4 space-y-5 text-left">
          {/* Name Field (First, Last) */}
          <div>
            <label className="block text-[14px] font-medium text-gray-800 mb-1.5">
              Name <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full bg-[#f9fafb] border border-gray-200 focus:border-blue-500 focus:bg-white rounded px-3 py-2 text-[14px] outline-none transition-colors"
                />
                <span className="block text-[11.5px] text-gray-400 mt-1">First</span>
              </div>
              <div>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full bg-[#f9fafb] border border-gray-200 focus:border-blue-500 focus:bg-white rounded px-3 py-2 text-[14px] outline-none transition-colors"
                />
                <span className="block text-[11.5px] text-gray-400 mt-1">Last</span>
              </div>
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-[14px] font-medium text-gray-800 mb-1.5">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#f9fafb] border border-gray-200 focus:border-blue-500 focus:bg-white rounded px-3 py-2 text-[14px] outline-none transition-colors"
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label className="block text-[14px] font-medium text-gray-800 mb-1.5">
              Phone Number: <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-[#f9fafb] border border-gray-200 focus:border-blue-500 focus:bg-white rounded px-3 py-2 text-[14px] outline-none transition-colors"
            />
          </div>

          {/* Printer Model Number Field */}
          <div>
            <label className="block text-[14px] font-medium text-gray-800 mb-1.5">
              Printer Model Number: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.modelNumber}
              onChange={(e) => setFormData({ ...formData, modelNumber: e.target.value })}
              placeholder="e.g. DeskJet 2820e"
              className="w-full bg-[#f9fafb] border border-gray-200 focus:border-blue-500 focus:bg-white rounded px-3 py-2 text-[14px] outline-none transition-colors"
            />
          </div>

          {/* SUBMIT Button (matching Image 2) */}
          <div className="pt-2">
            <button
              type="submit"
              className="px-7 py-2.5 bg-[#0084d6] hover:bg-[#0071be] text-white font-bold text-[14px] uppercase tracking-wider rounded cursor-pointer transition-colors shadow-sm border-none"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DownloadDriversModal;
