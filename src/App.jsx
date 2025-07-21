import React from 'react';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/Services';
import Footer from './components/Footer';
import DownloadCard from './components/DownloadCard';
function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <DownloadCard />
      <ServicesSection />
      <Footer />
      
    </>
  );
}

export default App;
