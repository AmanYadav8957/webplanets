import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandSelection from './components/BrandSelection';
import Issues from './components/Issues';
import Services from './components/Services';
import About from './components/About';
import CtaSection from './components/CtaSection';
import Products from './components/Products';
import Mission from './components/Mission';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <BrandSelection />
      <Issues />
      <Services />
      <About />
      <CtaSection />
      <Products />
      <Mission />
      <FinalCta />
      <Footer />
    </div>
  );
};

export default App;
