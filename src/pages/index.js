import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import Layout from '../components/layout';

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
    }
  }
}`;

const StyledImage = styled(Image)`
  width: 20rem;
  height: 20rem;
`;

const IndexPage = ({ data }) => {
  const products = data.allContentfulProduct.nodes;
  return (
    <Layout>
      {products.map(product => (
        <Link key={product.productSlug} to={`/products/${product.productSlug}`}>
          <div>
            <StyledImage fluid={product.mainimage.fluid} />
          </div>
          <h4>{product.productName}</h4>
          <div> $ {product.price} USD</div>
          <div> $ {product.discountedPrice} USD</div>
        </Link>
      ))}
    </Layout>
  );
};

export default IndexPage
