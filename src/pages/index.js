import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import Layout from '../components/layout';
import './index.css'
import Hero from '../components/hero';

export const query = graphql `
  {
  allContentfulProduct {
    nodes {
      id
      productName
      productSlug
      shortDescription
      price
      discountedPrice
      mainimage {
        fluid(quality: 90, maxWidth: 300) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      otherImages {
        fluid(quality: 90, maxWidth: 300) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
}`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 60%;
  max-height: 200px;
`;



const IndexPage = ({ data }) => {
  const products = data.allContentfulProduct.nodes;
  return (
    <Layout>
      <Hero />
      <div className="products">
        {products.map(product => (
          <Link key={product.productSlug} to={`/products/${product.productSlug}`} style={{textDecoration: "none", color: "black"}}>
                <div className="card">
                  <StyledImage fluid={product.mainimage.fluid} />
                  <h4>{product.productName}</h4>
                  <p className="price"> {product.price}</p>
                  <p className="price"> {product.discountedPrice}</p>
                  <div className="buy">
                    <button
                      className={`snipcart-add-item`}
                      data-item-id={product.id}
                      data-item-name={product.productName}
                      data-item-image={product.mainimage.fluid.src}
                      data-item-price={product.discountedPrice ? product.discountedPrice : product.price}
                      data-item-url={`https://lucid-engelbart-e13bc0.netlify.app//products/${product.productSlug}`}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage
