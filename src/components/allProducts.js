import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import '../pages/index.css'

export const query = graphql `
  {
    contentfulProduct {
      contentful_id
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
}`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 60%;
  max-height: 60%;
`;

const AllProducts = ({ data }) => {
  const products = data.contentfulProduct.nodes;

  return (
    <div className="products">
      {products.map(product => (
        <Link key={product.productSlug} to={`/products/${product.productSlug}`} style={{textDecoration: "none", color: "black"}}>
              <div className="card">
                <StyledImage fluid={product.mainimage.fluid} />
                <h4>{product.productName}</h4>
                <p className="price"> {product.price}</p>
                <p className="price"> {product.discountedPrice}</p>
              </div>
        </Link>
      ))}
    </div>
  );
};

export default AllProducts;