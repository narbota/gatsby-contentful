import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { ProductPageTemplate } from '../templates/product-index';
import SEOHead from "../components/head"

const ProductPage = ({ data }) => {
  const products = data.allBigCommerceProducts.nodes;

  return (
    <Layout>
      <ProductPageTemplate
        products={products || []}
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    allBigCommerceProducts: PropTypes.shape({
      nodes: PropTypes.array
    })
  })
};

export const Head = () => {
    return <SEOHead title="Product List" />
  }
  

export default ProductPage;

export const productPageQuery = graphql`
    query ProductPage {
        allBigCommerceProducts {
            nodes {
                id
                name
                price
                description
                images {
                    url_standard
                },
                variants {
                    id
                    product_id
                    sku
                    price
                    image_url
                }
            }
        }
    }
`;
