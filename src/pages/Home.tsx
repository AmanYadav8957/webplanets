import React from 'react';
import Header from '../components/auth/Header';
import Hero from '../components/Home/Hero';
import BrandSelection from '../components/Home/BrandSelection';
import Issues from '../components/Home/Issues';
import Services from '../components/Home/Services';
import About from '../components/Home/About';
import CtaSection from '../components/Home/CtaSection';
import Products from '../components/Home/Products';
import Mission from '../components/Home/Mission';
import FinalCta from '../components/Home/FinalCta';
import Footer from '../components/Home/Footer';

interface HomeProps {
  onNavigate?: (page: 'home' | 'shop') => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      <Header onNavigate={onNavigate} currentPage="home" />
      <Hero onNavigate={onNavigate} />
      <BrandSelection />
      <Issues />
      <Services />
      <About />
      <CtaSection />
      <Products />
      <Mission />
      <FinalCta />
      <Footer onNavigate={onNavigate} />
    </>
  );
};

export default Home;
