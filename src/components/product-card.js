import React from 'react';
import { Link } from 'gatsby';
import AddToCartButton from './product-add-to-cart';
import ProductPrices from './product-prices';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { name, images, variants, custom_url } = product;

    return (
      <div className="bc-product-card">
        <Link to={`/products${custom_url && custom_url.url}`} className="bc-product-card-image-anchor" title={name}>
          <div className="bc-product-card__featured-image">
            <img
              className="attachment-bc-medium size-bc-medium"
              src={
                (images && images.length && images[0].url_standard) ||
                '/img/default-bc-product.png'
              }
              alt={name}
            />
          </div>
        </Link>

        <div className="bc-product__meta">
          <h3 className="bc-product__title">
            <Link to={`/products${custom_url && custom_url.url}`} className="bc-product__title-link" title={name}>{name}</Link>
          </h3>
          
          <ProductPrices product={product} />
        </div>

        <AddToCartButton
          productId={variants && variants.length && variants[0].product_id}
          variantId={variants && variants.length && variants[0].id}>
          Add to Cart
        </AddToCartButton>
      </div>
    )
  }
}

export default ProductCard;
