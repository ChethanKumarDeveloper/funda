
import React from 'react';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import ServicesSection from './components/ServicesSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import SampleProjectsSection from './components/SampleProjectsSection';
import AboutUsSection from './components/AboutUsSection';
import ContactSection from './components/ContactSection';
import PrivacyPolicySection from './components/PrivacyPolicySection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black text-gray-300 font-sans antialiased">
      <Header />
      <main>
        <HomeSection />
        <ServicesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <SampleProjectsSection />
        <AboutUsSection />
        <ContactSection />
        <PrivacyPolicySection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
