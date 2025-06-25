import React from 'react';
import '../Products.css';

const ProductCard = ({ product, onViewDetails }) => {
  console.log(product);
  
  return (
    <div className="product-card">
      <div className="img-wrapper">
        <img src={product.image} alt={product.title} />
        <div className="overlay" onClick={onViewDetails}>
          <span>View Details</span>
        </div>
      </div>
      <h4 onClick={onViewDetails}>{product.title}</h4>
      <p>{product.quality}</p>
    </div>
  );
};

export default ProductCard;
