import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import '../Products.css';

const allProducts = [
  {
    id: 'MUP3366-M86',
    title: 'Mens Vertical Stripe Knit Polo Shirt',
    description: 'An elevated take on a smart-casual staple, the U.S. Polo Assn. mens Vertical Stripe Knit Polo Shirt combines timeless style with comfort. Crafted from a soft, luxe cotton blend, it features rib trims and a sophisticated knitted vertical stripe design. Pair with chinos and layer under a jacket for a refined look, or wear with sweats for relaxed, off-duty style.',
    category: 'Polo-Shirts',
    quality: '53% Modal 47% Cotton',
    highlights: [
      'Soft cotton blend: Comfortable and breathable fabric',
      'Vertical stripe design: Adds a polished, modern touch',
      'Signature logo: Embroidered double Horsemen logo on chest',
      'Ribbed trims: Enhances fit and shape'],
    image: require('../../../image/Our_product/MUP3366/MUP3366-M86-MS_1.webp'),
    images: [
      require('../../../image/Our_product/MUP3366/MUP3366-M86-MS_1.webp'),
      require('../../../image/Our_product/MUP3366/MUP3366-M86-MS_2.webp'),
      require('../../../image/Our_product/MUP3366/MUP3366-M86-MS_3.webp'),
      require('../../../image/Our_product/MUP3366/MUP3366-J09-MS_4.webp'),
      require('../../../image/Our_product/MUP3366/MUP3366-J09-MS_5.webp')]
  },
  {
    id: 'MUP3992-M86',
    title: 'Mens Stripe Textured Zip Polo Shirt',
    description: 'Elevate your smart-casual wardrobe with the mens Stripe Textured Zip Polo Shirt, a modern piece that merges timeless style with contemporary detailing. Crafted from a textured fabric with vertical stripes, this polo brings a touch of sophistication and depth to any look. Pair with chinos and loafers for an effortlessly refined style, or wear with jeans and trainers for a versatile, polished look.',
    category: 'Polo-Shirts',
    quality: '70% Polyester 30% Cotton',
    highlights: [
      'Vertical stripe texture – Adds dimension and elegance to the design',
      'High-shine chrome zip – A modern twist on a classic polo closure',
      'Signature logo: Embroidered double Horsemen logo on chest',
      'Textured rib collar and cuffs – Offers a refined, elevated touch'],
    image: require('../../../image/Our_product/MUP3992/MUP3992-981-MS_4.webp'),
    images: [
      require('../../../image/Our_product/MUP3992/MUP3992-H03-MS_1.webp'),
      require('../../../image/Our_product/MUP3992/MUP3992-H03-MS_2.webp'),
      require('../../../image/Our_product/MUP3992/MUP3992-H03-PS_3.webp'),
      require('../../../image/Our_product/MUP3992/MUP3992-981-MS_4.webp'),
      require('../../../image/Our_product/MUP3992/MUP3992-981-PS_5.webp'),]
  },
  {
    id: 'MUP3992-M86',
    title: 'Mens Stripe Textured Zip Polo Shirt',
    description: 'Elevate your smart-casual wardrobe with the mens Stripe Textured Zip Polo Shirt, a modern piece that merges timeless style with contemporary detailing. Crafted from a textured fabric with vertical stripes, this polo brings a touch of sophistication and depth to any look. Pair with chinos and loafers for an effortlessly refined style, or wear with jeans and trainers for a versatile, polished look.',
    category: 'Polo-Shirts',
    quality: '70% Polyester 30% Cotton',
    highlights: [
      'Vertical stripe texture – Adds dimension and elegance to the design',
      'High-shine chrome zip – A modern twist on a classic polo closure',
      'Signature logo: Embroidered double Horsemen logo on chest',
      'Textured rib collar and cuffs – Offers a refined, elevated touch'],
    image: require('../../../image/Our_product/MUP3992/MUP3992-981-MS_4.webp'),
    images: [
      require('../../../image/Our_product/MUP3992/MUP3992-H03-MS_1.webp'),
      require('../../../image/Our_product/MUP3992/MUP3992-H03-MS_2.webp'),
      require('../../../image/Our_product/MUP3992/MUP3992-H03-PS_3.webp'),
      require('../../../image/Our_product/MUP3992/MUP3992-981-MS_4.webp'),
      require('../../../image/Our_product/MUP3992/MUP3992-981-PS_5.webp'),]
  },
  {
    id: 'MUP3366-M86',
    title: 'Mens Vertical Stripe Knit Polo Shirt',
    description: 'An elevated take on a smart-casual staple, the U.S. Polo Assn. mens Vertical Stripe Knit Polo Shirt combines timeless style with comfort. Crafted from a soft, luxe cotton blend, it features rib trims and a sophisticated knitted vertical stripe design. Pair with chinos and layer under a jacket for a refined look, or wear with sweats for relaxed, off-duty style.',
    category: 'Polo-Shirts',
    quality: '53% Modal 47% Cotton',
    highlights: [
      'Soft cotton blend: Comfortable and breathable fabric',
      'Vertical stripe design: Adds a polished, modern touch',
      'Signature logo: Embroidered double Horsemen logo on chest',
      'Ribbed trims: Enhances fit and shape'],
    image: require('../../../image/Our_product/MUP3366/MUP3366-M86-MS_1.webp'),
    images: [
      require('../../../image/Our_product/MUP3366/MUP3366-M86-MS_1.webp'),
      require('../../../image/Our_product/MUP3366/MUP3366-M86-MS_2.webp'),
      require('../../../image/Our_product/MUP3366/MUP3366-M86-MS_3.webp'),
      require('../../../image/Our_product/MUP3366/MUP3366-J09-MS_4.webp'),
      require('../../../image/Our_product/MUP3366/MUP3366-J09-MS_5.webp')]
  },
  {
    id: 'MUP3992-M86',
    title: 'Mens Stripe Textured Zip Polo Shirt',
    description: 'Elevate your smart-casual wardrobe with the mens Stripe Textured Zip Polo Shirt, a modern piece that merges timeless style with contemporary detailing. Crafted from a textured fabric with vertical stripes, this polo brings a touch of sophistication and depth to any look. Pair with chinos and loafers for an effortlessly refined style, or wear with jeans and trainers for a versatile, polished look.',
    category: 'Polo-Shirts',
    quality: '70% Polyester 30% Cotton',
    highlights: [
      'Vertical stripe texture – Adds dimension and elegance to the design',
      'High-shine chrome zip – A modern twist on a classic polo closure',
      'Signature logo: Embroidered double Horsemen logo on chest',
      'Textured rib collar and cuffs – Offers a refined, elevated touch'],
    image: require('../../../image/Our_product/MUP3992/MUP3992-981-MS_4.webp'),
    images: [
      require('../../../image/Our_product/MUP3992/MUP3992-H03-MS_1.webp'),
      require('../../../image/Our_product/MUP3992/MUP3992-H03-MS_2.webp'),
      require('../../../image/Our_product/MUP3992/MUP3992-H03-PS_3.webp'),
      require('../../../image/Our_product/MUP3992/MUP3992-981-MS_4.webp'),
      require('../../../image/Our_product/MUP3992/MUP3992-981-PS_5.webp'),]
  },
  {
    id: 'MUP3992-M86',
    title: 'Mens Stripe Textured Zip Polo Shirt',
    description: 'Elevate your smart-casual wardrobe with the mens Stripe Textured Zip Polo Shirt, a modern piece that merges timeless style with contemporary detailing. Crafted from a textured fabric with vertical stripes, this polo brings a touch of sophistication and depth to any look. Pair with chinos and loafers for an effortlessly refined style, or wear with jeans and trainers for a versatile, polished look.',
    category: 'Polo-Shirts',
    quality: '70% Polyester 30% Cotton',
    highlights: [
      'Vertical stripe texture – Adds dimension and elegance to the design',
      'High-shine chrome zip – A modern twist on a classic polo closure',
      'Signature logo: Embroidered double Horsemen logo on chest',
      'Textured rib collar and cuffs – Offers a refined, elevated touch'],
    image: require('../../../image/Our_product/MUP3992/MUP3992-981-MS_4.webp'),
    images: [
      require('../../../image/Our_product/MUP3992/MUP3992-H03-MS_1.webp'),
      require('../../../image/Our_product/MUP3992/MUP3992-H03-MS_2.webp'),
      require('../../../image/Our_product/MUP3992/MUP3992-H03-PS_3.webp'),
      require('../../../image/Our_product/MUP3992/MUP3992-981-MS_4.webp'),
      require('../../../image/Our_product/MUP3992/MUP3992-981-PS_5.webp'),]
  },
  {
    id: 'MUP3366-M86',
    title: 'Mens Vertical Stripe Knit Polo Shirt',
    description: 'An elevated take on a smart-casual staple, the U.S. Polo Assn. mens Vertical Stripe Knit Polo Shirt combines timeless style with comfort. Crafted from a soft, luxe cotton blend, it features rib trims and a sophisticated knitted vertical stripe design. Pair with chinos and layer under a jacket for a refined look, or wear with sweats for relaxed, off-duty style.',
    category: 'Polo-Shirts',
    quality: '53% Modal 47% Cotton',
    highlights: [
      'Soft cotton blend: Comfortable and breathable fabric',
      'Vertical stripe design: Adds a polished, modern touch',
      'Signature logo: Embroidered double Horsemen logo on chest',
      'Ribbed trims: Enhances fit and shape'],
    image: require('../../../image/Our_product/MUP3366/MUP3366-M86-MS_1.webp'),
    images: [
      require('../../../image/Our_product/MUP3366/MUP3366-M86-MS_1.webp'),
      require('../../../image/Our_product/MUP3366/MUP3366-M86-MS_2.webp'),
      require('../../../image/Our_product/MUP3366/MUP3366-M86-MS_3.webp'),
      require('../../../image/Our_product/MUP3366/MUP3366-J09-MS_4.webp'),
      require('../../../image/Our_product/MUP3366/MUP3366-J09-MS_5.webp')]
  },
  {
    id: 'MUP3992-M86',
    title: 'Mens Stripe Textured Zip Polo Shirt',
    description: 'Elevate your smart-casual wardrobe with the mens Stripe Textured Zip Polo Shirt, a modern piece that merges timeless style with contemporary detailing. Crafted from a textured fabric with vertical stripes, this polo brings a touch of sophistication and depth to any look. Pair with chinos and loafers for an effortlessly refined style, or wear with jeans and trainers for a versatile, polished look.',
    category: 'Polo-Shirts',
    quality: '70% Polyester 30% Cotton',
    highlights: [
      'Vertical stripe texture – Adds dimension and elegance to the design',
      'High-shine chrome zip – A modern twist on a classic polo closure',
      'Signature logo: Embroidered double Horsemen logo on chest',
      'Textured rib collar and cuffs – Offers a refined, elevated touch'],
    image: require('../../../image/Our_product/MUP3992/MUP3992-981-MS_4.webp'),
    images: [
      require('../../../image/Our_product/MUP3992/MUP3992-H03-MS_1.webp'),
      require('../../../image/Our_product/MUP3992/MUP3992-H03-MS_2.webp'),
      require('../../../image/Our_product/MUP3992/MUP3992-H03-PS_3.webp'),
      require('../../../image/Our_product/MUP3992/MUP3992-981-MS_4.webp'),
      require('../../../image/Our_product/MUP3992/MUP3992-981-PS_5.webp'),]
  },
  {
    id: 'MUP3992-M86',
    title: 'Mens Stripe Textured Zip Polo Shirt',
    description: 'Elevate your smart-casual wardrobe with the mens Stripe Textured Zip Polo Shirt, a modern piece that merges timeless style with contemporary detailing. Crafted from a textured fabric with vertical stripes, this polo brings a touch of sophistication and depth to any look. Pair with chinos and loafers for an effortlessly refined style, or wear with jeans and trainers for a versatile, polished look.',
    category: 'Polo-Shirts',
    quality: '70% Polyester 30% Cotton',
    highlights: [
      'Vertical stripe texture – Adds dimension and elegance to the design',
      'High-shine chrome zip – A modern twist on a classic polo closure',
      'Signature logo: Embroidered double Horsemen logo on chest',
      'Textured rib collar and cuffs – Offers a refined, elevated touch'],
    image: require('../../../image/Our_product/MUP3992/MUP3992-981-MS_4.webp'),
    images: [
      require('../../../image/Our_product/MUP3992/MUP3992-H03-MS_1.webp'),
      require('../../../image/Our_product/MUP3992/MUP3992-H03-MS_2.webp'),
      require('../../../image/Our_product/MUP3992/MUP3992-H03-PS_3.webp'),
      require('../../../image/Our_product/MUP3992/MUP3992-981-MS_4.webp'),
      require('../../../image/Our_product/MUP3992/MUP3992-981-PS_5.webp'),]
  },
];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts =
    selectedCategory === 'All'
      ? allProducts
      : allProducts.filter(p => p.category === selectedCategory);

  const categories = ['All', ...new Set(allProducts.map(p => p.category))];

  return (
    <div className="products-container">
      <Sidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={() => setSelectedProduct(product)}
          />
        ))}
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
