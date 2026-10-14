import React from 'react';
import Header from '../components/auth/Header';
import Footer from '../components/Home/Footer';
import FloatingCart from '../components/Cart/FloatingCart';
import {
  BrandSubBar,
  SetupHeroBanner,
  SetupInstructions,
  SetupSupportForm,
  BrandSwitcher,
  brandSetupConfigs,
  type BrandId,
} from '../components/BrandSetup';

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

  const handleSupportLinkClick = () => {
    const formEl = document.getElementById('setup-contact-form');
    formEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-800">
      {/* 1. TOP NAVBAR */}
      <Header onNavigate={onNavigate} currentPage="shop" />

      {/* 2. CENTERED BRAND LOGO SUB-BAR */}
      <BrandSubBar
        logoUrl={config.brandLogo}
        logoAlt={config.brandLogoAlt}
        heightClass={config.logoHeightClass}
      />

      {/* 3. HERO SETUP BANNER */}
      <SetupHeroBanner config={config} />

      {/* 4. MIDDLE CONTENT & SUPPORT SECTION */}
      <main className="flex-1 max-w-[1240px] mx-auto w-full px-6 sm:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Instructions & Support Form */}
          <div className="lg:col-span-7 flex flex-col">
            <SetupInstructions
              installText={config.installText}
              helpText={config.helpText}
              showSupportLink={config.showSupportLink}
              supportLinkText={config.supportLinkText}
              onSupportLinkClick={handleSupportLinkClick}
            />

            <SetupSupportForm brandName={config.brandName} />
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

        {/* Brand Switcher Bar */}
        <BrandSwitcher activeBrand={brand} onSelectBrand={onSelectBrand} />
      </main>

      {/* 5. FLOATING CART BUTTON */}
      <FloatingCart />

      {/* 6. FOOTER */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default BrandSetup;
