const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    const { data } = await graphql(`
      {
        allContentfulProduct {
          nodes {
            productSlug
          }
        }
      }
    `);
  
  
   // create page for each product and list
  // them all in /products/:productSlug 
  data.allContentfulProduct.nodes.forEach(item => {
      createPage({
        path: `products/${item.productSlug}`,
        component: path.resolve('./src/templates/product.js'),
        context: {
           // Data passed to context is available
           // in page queries as GraphQL variables.
          slug: item.productSlug,
        },
      });
    });
  
  };