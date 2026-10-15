import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import BrandSetup from './pages/BrandSetup';
import AboutUs from './pages/AboutUs';
import { CartProvider, CartDrawer } from './components/Cart';
import type { BrandId } from './components/BrandSetup';

const App: React.FC = () => {
  const parseHash = () => {
    if (typeof window === 'undefined') {
      return { page: 'home' as const, id: 'hp-deskjet-2820e', brand: 'hp' as BrandId };
    }
    const hash = window.location.hash.toLowerCase();

    // Setup routes for brand printers
    if (hash.startsWith('#setup/')) {
      const b = hash.replace(/^#setup\//i, '').trim();
      const validBrand: BrandId = (['hp', 'canon', 'brother', 'epson'].includes(b) ? b : 'hp') as BrandId;
      return { page: 'setup' as const, id: 'hp-deskjet-2820e', brand: validBrand };
    }

    if (hash === '#setup') {
      return { page: 'setup' as const, id: 'hp-deskjet-2820e', brand: 'hp' as BrandId };
    }

    if (hash.includes('hp-printer') || hash.includes('#hp')) {
      return { page: 'setup' as const, id: 'hp-deskjet-2820e', brand: 'hp' as BrandId };
    }

    if (hash.includes('canon-printer') || hash.includes('#canon')) {
      return { page: 'setup' as const, id: 'hp-deskjet-2820e', brand: 'canon' as BrandId };
    }

    if (hash.includes('brother-printer') || hash.includes('#brother')) {
      return { page: 'setup' as const, id: 'hp-deskjet-2820e', brand: 'brother' as BrandId };
    }

    if (hash.includes('epson-printer') || hash.includes('#epson')) {
      return { page: 'setup' as const, id: 'hp-deskjet-2820e', brand: 'epson' as BrandId };
    }

    // Product detail route
    if (hash.startsWith('#product/')) {
      const id = window.location.hash.replace(/^#product\//i, '');
      return { page: 'product' as const, id: id || 'hp-deskjet-2820e', brand: 'hp' as BrandId };
    }

    // About route
    if (hash.includes('about')) {
      return { page: 'about' as const, id: 'hp-deskjet-2820e', brand: 'hp' as BrandId };
    }

    // Shop route
    if (hash.includes('shop')) {
      return { page: 'shop' as const, id: 'hp-deskjet-2820e', brand: 'hp' as BrandId };
    }

    return { page: 'home' as const, id: 'hp-deskjet-2820e', brand: 'hp' as BrandId };
  };

  const initial = parseHash();
  const [currentPage, setCurrentPage] = useState<'home' | 'shop' | 'product' | 'setup' | 'about'>(initial.page);
  const [selectedProductId, setSelectedProductId] = useState<string>(initial.id);
  const [selectedBrand, setSelectedBrand] = useState<BrandId>(initial.brand);

  useEffect(() => {
    const handleHashChange = () => {
      const parsed = parseHash();
      setCurrentPage(parsed.page);
      if (parsed.id) {
        setSelectedProductId(parsed.id);
      }
      if (parsed.brand) {
        setSelectedBrand(parsed.brand);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: 'home' | 'shop' | 'about') => {
    setCurrentPage(page);
    if (page === 'shop') {
      window.location.hash = '#shop';
    } else if (page === 'about') {
      window.location.hash = '#about';
    } else {
      window.location.hash = '#home';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentPage('product');
    window.location.hash = `#product/${productId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectBrand = (brandId: BrandId) => {
    setSelectedBrand(brandId);
    setCurrentPage('setup');
    window.location.hash = `#setup/${brandId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartProvider>
      <div className="app">
        {currentPage === 'setup' ? (
          <BrandSetup
            brand={selectedBrand}
            onNavigate={navigate}
            onSelectBrand={handleSelectBrand}
            onSelectProduct={handleSelectProduct}
          />
        ) : currentPage === 'product' ? (
          <ProductDetail
            productId={selectedProductId}
            onNavigate={navigate}
            onSelectProduct={handleSelectProduct}
          />
        ) : currentPage === 'shop' ? (
          <Shop
            onNavigate={navigate}
            onSelectProduct={handleSelectProduct}
          />
        ) : currentPage === 'about' ? (
          <AboutUs
            onNavigate={navigate}
          />
        ) : (
          <Home 
            onNavigate={navigate} 
            onSelectBrand={handleSelectBrand} 
          />
        )}

        {/* Global Slide-over Cart Drawer */}
        <CartDrawer
          onNavigateToProduct={handleSelectProduct}
          onNavigateToShop={() => navigate('shop')}
        />
      </div>
    </CartProvider>
  );
};

export default App;
