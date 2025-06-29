import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import productsData from './ProductData'; // ← External data file
import '../Products.css';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = ['All', ...new Set(productsData.map(p => p.category.trim()))];

  const filteredProducts =
    selectedCategory === 'All'
      ? productsData
      : productsData.filter(p => p.category.trim() === selectedCategory.trim());

  return (
    <div className="products-container">
      <Sidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="products-grid">
        {filteredProducts.length === 0 ? (
          <p className="no-products">No products found in this category.</p>
        ) : (
          filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={() => setSelectedProduct(product)}
            />
          ))
        )}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductsPage;
