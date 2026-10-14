import React, { useState } from 'react';
import Header from '../components/auth/Header';
import Footer from '../components/Home/Footer';
import FloatingCart from '../components/Cart/FloatingCart';
import { brandSetupConfigs, type BrandId } from '../data/brandSetupData';

interface BrandSetupProps {
  brand: BrandId;
  onNavigate: (page: 'home' | 'shop') => void;
  onSelectBrand?: (brand: BrandId) => void;
  onSelectProduct?: (productId: string) => void;
}

const BrandSetup: React.FC<BrandSetupProps> = ({
  brand = 'hp',
  onNavigate,
  onSelectBrand,
}) => {
  const config = brandSetupConfigs[brand] || brandSetupConfigs.hp;

  // Hero product search state
  const [productQuery, setProductQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchStatus, setSearchStatus] = useState<'idle' | 'searching' | 'found'>('idle');
  const [activeModel, setActiveModel] = useState('');

  // Support contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Filter model suggestions based on user input
  const filteredModels = config.sampleModels.filter((model) =>
    model.toLowerCase().includes(productQuery.toLowerCase())
  );

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productQuery.trim()) return;
    
    setSearchStatus('searching');
    setActiveModel(productQuery.trim());
    setShowSuggestions(false);

    setTimeout(() => {
      setSearchStatus('found');
    }, 800);
  };

  const handleSelectSuggestion = (model: string) => {
    setProductQuery(model);
    setActiveModel(model);
    setShowSuggestions(false);
    setSearchStatus('searching');
    setTimeout(() => {
      setSearchStatus('found');
    }, 600);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
      setContactForm({ name: '', email: '', message: '' });
    }, 700);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-800">
      {/* 1. TOP NAVBAR */}
      <Header onNavigate={onNavigate} currentPage="shop" />

      {/* 2. CENTERED BRAND LOGO SUB-BAR */}
      <div className="w-full bg-white py-6 border-b border-gray-100 flex items-center justify-center">
        <div className="flex items-center justify-center px-4">
          <img
            src={config.brandLogo}
            alt={config.brandLogoAlt}
            className={`${config.logoHeightClass} w-auto object-contain transition-transform duration-300 hover:scale-105 select-none`}
          />
        </div>
      </div>

      {/* 3. HERO SETUP BANNER */}
      <section className="relative overflow-hidden w-full text-white">
        {/* Banner watermark / background printer image */}
        <div 
          className="absolute inset-0 bg-cover bg-center select-none"
          style={{
            backgroundImage: `url('/setup/printers_blue_banner.png')`,
          }}
        />

        {/* Brand color overlay tint */}
        <div 
          className="absolute inset-0"
          style={{ background: config.overlayStyle }}
        />

        {/* Hero content container */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-10 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading, Subtitle, Search Input */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] font-extrabold text-white tracking-tight leading-tight mb-4">
                {config.heroTitle}
              </h1>
              
              <p className="text-[14px] sm:text-[16px] text-white/90 leading-relaxed max-w-[560px] mb-8 font-normal">
                {config.heroSubtitle}
              </p>

              {/* Product search box */}
              <div className="w-full max-w-[520px] relative">
                <form onSubmit={handleSearchSubmit} className="flex flex-col items-start gap-4 w-full">
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={productQuery}
                      onChange={(e) => {
                        setProductQuery(e.target.value);
                        setShowSuggestions(true);
                        if (searchStatus === 'found') setSearchStatus('idle');
                      }}
                      onFocus={() => setShowSuggestions(true)}
                      placeholder="Enter Your product Name Here"
                      className="w-full bg-white text-gray-900 placeholder:text-gray-500 rounded px-4 py-3.5 text-[14px] sm:text-[15px] outline-none shadow-md border border-transparent focus:border-white focus:ring-2 focus:ring-blue-300 transition-all"
                    />

                    {/* Suggestions dropdown */}
                    {showSuggestions && productQuery.trim().length > 0 && filteredModels.length > 0 && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white text-gray-800 rounded-md shadow-xl border border-gray-200 z-30 max-h-56 overflow-y-auto">
                        <div className="p-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                          Suggested {config.brandName} Models
                        </div>
                        {filteredModels.map((model, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleSelectSuggestion(model)}
                            className="w-full text-left px-3.5 py-2.5 text-[13.5px] hover:bg-gray-100 transition-colors flex items-center justify-between border-none bg-transparent cursor-pointer text-gray-700"
                          >
                            <span>{model}</span>
                            <span className="text-[11px] text-blue-600 font-medium">Select</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className={`px-8 py-3 rounded text-[14px] font-bold uppercase tracking-wider text-white ${config.buttonBg} ${config.buttonHoverBg} transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer border-none flex items-center justify-center gap-2`}
                  >
                    {searchStatus === 'searching' ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                        </svg>
                        <span>LOCATING...</span>
                      </>
                    ) : (
                      'NEXT'
                    )}
                  </button>
                </form>

                {/* Search result notification */}
                {searchStatus === 'found' && (
                  <div className="mt-4 p-4 bg-white/95 text-gray-900 rounded-lg shadow-lg border border-white/40 text-left animate-fadeIn">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[14px] font-bold text-gray-900 m-0">
                          Found Setup Driver for: {activeModel}
                        </h4>
                        <p className="text-[12.5px] text-gray-600 mt-1 mb-2.5">
                          Latest driver package detected for your operating system. Ready for installation.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => alert(`Starting download of official setup assistant for ${activeModel}...`)}
                            className="px-3.5 py-1.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-[12px] font-semibold border-none cursor-pointer transition-colors shadow-sm"
                          >
                            Download Setup Driver
                          </button>
                          <button
                            type="button"
                            onClick={() => setSearchStatus('idle')}
                            className="px-3 py-1.5 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 text-[12px] font-medium border-none cursor-pointer transition-colors"
                          >
                            Dismiss
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Hero Printer Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group">
                <img
                  src={config.heroPrinterImage}
                  alt={config.heroPrinterAlt}
                  className="max-h-[280px] sm:max-h-[350px] lg:max-h-[380px] w-auto object-contain drop-shadow-2xl select-none transition-transform duration-500 group-hover:scale-102"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MIDDLE CONTENT & SUPPORT SECTION */}
      <main className="flex-1 max-w-[1240px] mx-auto w-full px-6 sm:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Instructions & Contact Form */}
          <div className="lg:col-span-7 flex flex-col">
            <p className="text-[16px] sm:text-[18px] text-[#1e1e1e] leading-relaxed font-normal mb-8">
              {config.installText}
            </p>

            <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#1a1a1a] mb-6 flex items-center gap-2">
              <span>{config.helpText}</span>
              {config.showSupportLink && (
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const formEl = document.getElementById('setup-contact-form');
                    formEl?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-blue-600 hover:underline text-[17px] font-medium ml-1"
                >
                  {config.supportLinkText}
                </a>
              )}
            </h3>

            {/* Setup Support Form (matching Image 1) */}
            <div id="setup-contact-form" className="w-full max-w-[560px]">
              {formSubmitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-lg text-left">
                  <div className="flex items-center gap-2.5 text-emerald-700 font-bold text-[16px] mb-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>Message Sent Successfully!</span>
                  </div>
                  <p className="text-[13.5px] text-emerald-800 m-0 leading-relaxed">
                    Thank you. Our printer setup specialist for {config.brandName} will reach out to you shortly to assist with driver installation.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-4 py-1.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-[13px] font-semibold border-none cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="setup-name" className="block text-[13.5px] text-gray-700 font-medium mb-1.5">
                      Name
                    </label>
                    <input
                      id="setup-name"
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Name"
                      className="w-full border border-gray-300 rounded px-3.5 py-2.5 text-[14px] text-gray-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-white"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="setup-email" className="block text-[13.5px] text-gray-700 font-medium mb-1.5">
                      Email
                    </label>
                    <input
                      id="setup-email"
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="Email"
                      className="w-full border border-gray-300 rounded px-3.5 py-2.5 text-[14px] text-gray-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-white"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="setup-message" className="block text-[13.5px] text-gray-700 font-medium mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="setup-message"
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Message"
                      className="w-full border border-gray-300 rounded px-3.5 py-2.5 text-[14px] text-gray-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-y min-h-[110px] bg-white"
                    />
                  </div>

                  {/* Submit SEND button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 px-6 rounded text-[14px] font-bold uppercase tracking-wider text-white bg-[#5e6e82] hover:bg-[#4d5c6f] transition-colors duration-200 cursor-pointer border-none shadow-sm flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                        </svg>
                        <span>SENDING...</span>
                      </>
                    ) : (
                      'SEND'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Content Printer Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center pt-4 lg:pt-0">
            <div className="max-w-[420px] w-full flex items-center justify-center">
              <img
                src={config.contentPrinterImage}
                alt={config.contentPrinterAlt}
                className="max-h-[300px] sm:max-h-[340px] w-auto object-contain select-none transition-transform duration-300 hover:scale-103"
              />
            </div>
          </div>
        </div>

        {/* Brand Switcher Bar (Quick Navigation Between Brands) */}
        <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[13px] text-gray-500">
            Select another brand for printer setup:
          </div>
          <div className="flex flex-wrap gap-2.5">
            {(['hp', 'canon', 'brother', 'epson'] as BrandId[]).map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => onSelectBrand?.(b)}
                className={`px-3.5 py-1.5 rounded-full text-[12.5px] font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
                  brand === b
                    ? 'bg-lightBlue text-white border-lightBlue shadow-sm'
                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {brandSetupConfigs[b].brandName} Setup
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* 5. FLOATING CART BUTTON */}
      <FloatingCart />

      {/* 6. FOOTER */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default BrandSetup;
