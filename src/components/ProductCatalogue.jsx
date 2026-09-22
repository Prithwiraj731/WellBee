import React, { useState, useEffect } from 'react';
import { Search, X, ChevronRight, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { initialProducts } from '../../server/data/products.js';

export default function ProductCatalogue({ 
  activeCategory, 
  onCategoryChange, 
  onSelectProduct,
  onInquire
}) {
  const [products, setProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const categories = [
    { id: 'all', label: 'All Formulations (10)' },
    { id: 'gastro', label: 'Gastroenterology' },
    { id: 'respiratory', label: 'Respiratory' },
    { id: 'ortho', label: 'Pain & Ortho' },
    { id: 'nutrition', label: 'Neuro-Nutrition' },
    { id: 'bone', label: 'Bone Health' },
    { id: 'paediatrics', label: 'Paediatrics' },
  ];

  // Fetch from Node.js backend when query or category changes
  useEffect(() => {
    let isMounted = true;

    async function fetchProducts() {
      try {
        setLoading(true);
        const params = new URLSearchParams();
        if (activeCategory && activeCategory !== 'all') {
          params.append('category', activeCategory);
        }
        if (searchQuery) {
          params.append('search', searchQuery);
        }

        const res = await fetch(`/api/products?${params.toString()}`);
        if (res.ok) {
          const data = await res.json();
          if (isMounted) setProducts(data.products || []);
        } else {
          // Fallback to client filtering
          filterClientSide();
        }
      } catch (err) {
        filterClientSide();
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    function filterClientSide() {
      let filtered = [...initialProducts];
      if (activeCategory && activeCategory !== 'all') {
        filtered = filtered.filter(p => p.category === activeCategory);
      }
      if (searchQuery) {
        const q = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(p =>
          p.brandName.toLowerCase().includes(q) ||
          p.genericName.toLowerCase().includes(q) ||
          p.composition.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.indications.some(ind => ind.toLowerCase().includes(q))
        );
      }
      setProducts(filtered);
    }

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, [activeCategory, searchQuery]);

  return (
    <section className="section products-section" id="products">
      <div className="container">
        <motion.div 
          className="section-head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="section-title">Pharmaceutical Product Portfolio</h2>
          <p className="section-desc">
            Explore our core commercial roster of 10 therapeutic formulations. Produced strictly in compliance with pharmacopeial specifications and Schedule M cGMP standards.
          </p>
        </motion.div>

        {/* Search & Category Filter Toolbar */}
        <div className="catalogue-toolbar">
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input 
              type="text"
              className="search-input"
              placeholder="Search by brand name, active composition, strength, or indication..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search pharmaceutical products"
            />
            {searchQuery && (
              <button 
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear Search"
              >
                <X size={14} />
              </button>
            )}
          </div>

          <div className="filter-pills" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => onCategoryChange(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {products.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '48px 20px', background: '#F8FAFC', borderRadius: '12px', border: '1px dashed #CBD5E1' }}>
            <AlertCircle size={36} color="#94A3B8" style={{ margin: '0 auto 12px' }} />
            <h3 style={{ fontSize: '17px', color: '#1E293B', marginBottom: '6px' }}>No matching formulation found</h3>
            <p style={{ color: '#64748B', fontSize: '13.5px', marginBottom: '16px' }}>Try searching by generic ingredient or select 'All Formulations'.</p>
            <button 
              className="btn btn--outline btn--sm"
              onClick={() => {
                setSearchQuery('');
                onCategoryChange('all');
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="products-grid">
            <AnimatePresence>
              {products.map((product) => (
                <motion.article 
                  key={product.id}
                  className="product-card"
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="product-card__head">
                    <div>
                      <span className="tag-category">{product.categoryLabel}</span>
                      <span className="tag-dosage">{product.dosageForm}</span>
                    </div>
                    <span className="status-chip">Rx ONLY</span>
                  </div>

                  <h3 className="product-card__title">{product.brandName}</h3>
                  <div className="product-card__generic">{product.genericName}</div>

                  <div className="product-card__details">
                    <div className="detail-row">
                      <span className="detail-row__label">Strength:</span>
                      <span className="detail-row__value">{product.strength}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-row__label">Pack Style:</span>
                      <span className="detail-row__value">{product.packType}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-row__label">Specialty:</span>
                      <span className="detail-row__value">{product.specialty}</span>
                    </div>
                  </div>

                  <div className="product-card__footer">
                    <button 
                      className="btn-card-inspect"
                      onClick={() => onSelectProduct(product)}
                      aria-label={`View technical specifications for ${product.brandName}`}
                    >
                      <span>Technical Spec</span>
                      <ChevronRight size={14} />
                    </button>
                    <button 
                      className="btn-card-inquire"
                      onClick={() => onInquire(product)}
                    >
                      Inquire
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Minimalist Bottom Notice */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '16px 20px', borderRadius: '10px' }}>
          <span style={{ fontSize: '12.5px', color: '#64748B' }}>
            <strong>CMS-Managed Formulations:</strong> All active product names, strengths, pack formats, and clinical dossiers are maintained via the WellBee content repository.
          </span>
          <a href="#contact" className="btn btn--secondary btn--sm">
            Request Full Product Monograph
          </a>
        </div>
      </div>
    </section>
  );
}
