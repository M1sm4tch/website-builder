import React from 'react';
import { products, Product } from '../data/products';
import ProductCard from './ProductCard';

const ProductSection = () => {
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.rank} product={product} />
      ))}
    </div>
  );
};

export default ProductSection;