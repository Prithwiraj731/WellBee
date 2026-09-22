import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import TherapeuticAreas from './components/TherapeuticAreas';
import ProductCatalogue from './components/ProductCatalogue';
import QualityManufacturing from './components/QualityManufacturing';
import EnquiryForm from './components/EnquiryForm';
import CareersSection from './components/CareersSection';
import Footer from './components/Footer';

import ProductModal from './components/ProductModal';
import CareersModal from './components/CareersModal';
import LegalModal from './components/LegalModal';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [prefilledMessage, setPrefilledMessage] = useState('');
  const [prefilledType, setPrefilledType] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [legalModalType, setLegalModalType] = useState(null);

  // Guarantee body scroll is enabled on mount
  useEffect(() => {
    document.body.style.overflow = '';
  }, []);

  const handleInquire = (product) => {
    setPrefilledType('Product');
    setPrefilledMessage(
      `Hello WellBee Commercial Team,\n\nWe are interested in receiving the official product monograph, packaging specifications, and commercial supply terms for: ${product.brandName} (${product.genericName}).\n\nPlease connect with our procurement division.`
    );
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-root">
      <Header onOpenLegal={setLegalModalType} />

      <main>
        <Hero />
        <AboutSection />
        <TherapeuticAreas onSelectCategory={setActiveCategory} />
        <ProductCatalogue 
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onSelectProduct={setSelectedProduct}
          onInquire={handleInquire}
        />
        <QualityManufacturing />
        <CareersSection onApply={setSelectedJob} />
        <EnquiryForm 
          prefilledMessage={prefilledMessage}
          prefilledType={prefilledType}
        />
      </main>

      <Footer 
        onOpenLegal={setLegalModalType}
        onSelectCategory={setActiveCategory}
      />

      {/* Interactive Modals */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onInquire={handleInquire}
        />
      )}

      {selectedJob && (
        <CareersModal 
          position={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}

      {legalModalType && (
        <LegalModal 
          type={legalModalType}
          onClose={() => setLegalModalType(null)}
        />
      )}
    </div>
  );
}
