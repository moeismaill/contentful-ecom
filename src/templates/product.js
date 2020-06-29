import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/layout';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import '../css/product.css'




export const query = graphql `
    query productQuery($slug: String!) {
        item: contentfulProduct(productSlug: {eq: $slug}) {
        id
        productSlug
        productName
        shortDescription
        description {
            json
        }
        mainimage {
            fluid {
            ...GatsbyContentfulFluid_withWebp
            }
        }
        otherImages {
            fluid {
            ...GatsbyContentfulFluid_withWebp
            }
        }
        price
        discountedPrice
        }
        site {
            siteMetadata {
                siteUrl
            }
        }
    }
  `

const StyledImage = styled(Img)`
  width: 30rem;
  height: 30rem;
  margin: 1rem;
  background-repeat: none;
  @media  (max-width: 700px) {
    width: 100%;
    margin: 1rem 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const Bold = styled.span`
  font-weight: bold;
  color: red;
`;

const P = styled.p`
  // color: orangered;
`;

const StyledHyperLink = styled.span`
  color: purple;
  padding: 1px 2px;
  background: orange;
  cursor: pointer;
`;

// render the styling
const RTFBold = ({ children }) => <Bold>{children}</Bold>;
const Text = ({ children }) => <P>{children}</P>;
const HyperLink = ({ children }) => (
  <StyledHyperLink>{children}</StyledHyperLink>
);

// modifying the options
 const options = {
    renderMark: {
      [MARKS.BOLD]: text => <RTFBold>{text}</RTFBold>,
    },

    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [INLINES.HYPERLINK]: (node, children) => (
        <HyperLink>{children}</HyperLink>
      ),
    },
  };

const Product = ({ data: { item } }) => {
  const options = {
    // options for rich text formating
  };

  return (
    <Layout>
      <div className="product-card">
        <StyledImage fluid={item.mainimage.fluid} />
        {/* <div> {<StyledImage fluid={item.otherImages.fluid} /> ? <StyledImage fluid={item.otherImages.fluid} /> : <StyledImage fluid={item.mainimage.fluid}/> } </div> */}

        <div className="product-info">
          <h2>{item.productName}</h2>
          <p className="price"> {item.price}</p>
          <p className="price"> {item.discountedPrice}</p>
          <div className="buy">
            <button
              className={`snipcart-add-item`}
              data-item-id={item.id}
              data-item-name={item.productName}
              data-item-image={item.mainimage.fluid.src}
              data-item-price={item.discountedPrice ? item.discountedPrice : item.price}
              data-item-url={`https://lucid-engelbart-e13bc0.netlify.app/${item.productSlug}`}
            >
              Add to Cart
            </button>
          </div>
          <main>{documentToReactComponents(item.description.json, options)}</main>
        </div>
      </div>
    </Layout>
  );
};

export default Product;