import ProductCard from '../components/product-card';
import React from 'react';
import PropTypes from 'prop-types';

export const ProductPageTemplate = ({
  products
}) => (
  <div className="content">
    <section className="section section--gradient">
      <div className="container">
        <div className="section bc-product-grid bc-product-grid--archive bc-product-grid--4col">
          {products.map(product => {
            console.log(product)
           return  <ProductCard key={product.id} product={product} />
          })}
        </div>
      </div>
    </section>
  </div>
);

ProductPageTemplate.propTypes = {
  products: PropTypes.array
};
