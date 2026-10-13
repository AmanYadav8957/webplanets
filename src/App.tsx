import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/Cart/CartDrawer';

const App: React.FC = () => {
  const parseHash = () => {
    if (typeof window === 'undefined') return { page: 'home' as const, id: 'hp-deskjet-2820e' };
    const hash = window.location.hash.toLowerCase();

    if (hash.startsWith('#product/')) {
      const id = window.location.hash.replace(/^#product\//i, '');
      return { page: 'product' as const, id: id || 'hp-deskjet-2820e' };
    }

    if (hash.includes('shop')) {
      return { page: 'shop' as const, id: 'hp-deskjet-2820e' };
    }

    return { page: 'home' as const, id: 'hp-deskjet-2820e' };
  };

  const initial = parseHash();
  const [currentPage, setCurrentPage] = useState<'home' | 'shop' | 'product'>(initial.page);
  const [selectedProductId, setSelectedProductId] = useState<string>(initial.id);

  useEffect(() => {
    const handleHashChange = () => {
      const parsed = parseHash();
      setCurrentPage(parsed.page);
      if (parsed.id) {
        setSelectedProductId(parsed.id);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: 'home' | 'shop') => {
    setCurrentPage(page);
    if (page === 'shop') {
      window.location.hash = '#shop';
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

  return (
    <CartProvider>
      <div className="app">
        {currentPage === 'product' ? (
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
        ) : (
          <Home onNavigate={navigate} />
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
