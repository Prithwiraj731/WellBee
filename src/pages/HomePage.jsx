import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import TherapeuticAreas from '../components/TherapeuticAreas';
import ProductCatalogue from '../components/ProductCatalogue';
import QualityManufacturing from '../components/QualityManufacturing';
import EnquiryForm from '../components/EnquiryForm';
import CareersSection from '../components/CareersSection';

export default function HomePage({
  activeCategory,
  onCategoryChange,
  onSelectProduct,
  onInquire,
  onApplyJob,
  prefilledMessage,
  prefilledType
}) {
  return (
    <main>
      <Hero onSelectProduct={onSelectProduct} />
      <AboutSection />
      <TherapeuticAreas onSelectCategory={onCategoryChange} />
      <ProductCatalogue 
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
        onSelectProduct={onSelectProduct}
        onInquire={onInquire}
      />
      <QualityManufacturing />
      <CareersSection onApply={onApplyJob} />
      <EnquiryForm 
        prefilledMessage={prefilledMessage}
        prefilledType={prefilledType}
      />
    </main>
  );
}
