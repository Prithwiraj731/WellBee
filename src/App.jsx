import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import CookiePolicy from './pages/CookiePolicy';
import MedicalDisclaimer from './pages/MedicalDisclaimer';

import ProductModal from './components/ProductModal';
import CareersModal from './components/CareersModal';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [prefilledMessage, setPrefilledMessage] = useState('');
  const [prefilledType, setPrefilledType] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);

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
      <ScrollToTop />
      <Header />

      <Routes>
        <Route 
          path="/" 
          element={
            <HomePage 
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              onSelectProduct={setSelectedProduct}
              onInquire={handleInquire}
              onApplyJob={setSelectedJob}
              prefilledMessage={prefilledMessage}
              prefilledType={prefilledType}
            />
          } 
        />
        
        {/* Dedicated Statutory & Legal Pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
        
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/terms" element={<Navigate to="/terms-of-use" replace />} />
        
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/cookies" element={<Navigate to="/cookie-policy" replace />} />
        
        <Route path="/medical-disclaimer" element={<MedicalDisclaimer />} />
        <Route path="/disclaimer" element={<Navigate to="/medical-disclaimer" replace />} />
        
        {/* Catch-all redirect to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer onSelectCategory={setActiveCategory} />

      {/* Interactive Modals for Product Monographs & Job Applications */}
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
    </div>
  );
}
