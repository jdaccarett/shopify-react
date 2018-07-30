import gql from "graphql-tag";
// Collection Query
const collectionQuery = handle => {
  return gql`
      {
        shop {
          collections(first: 1, query: "${handle}") {
            edges {
              node {
                title
                handle
                products(first: 9) {
                  edges {
                    node {
                      title
                      handle
                      priceRange {
                        maxVariantPrice {
                          amount
                        }
                      }
                      images(first: 1) {
                        edges {
                          node {
                            originalSrc
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;
};

const productQuery = handle => {
  return gql`
  {
      shop {
        products(first:1, query:"${handle}") {
          edges {
            node {
              id
              title
              availableForSale
              description(truncateAt:150)
              descriptionHtml
              images(first: 5) {
                edges {
                  node {
                    id
                    originalSrc
                  }
                }
              }
              options(first: 3) {
                id
                name
                values
              }
              priceRange{
                maxVariantPrice{
                  amount
                  currencyCode
                }
              }
              collections(first: 5){
                edges{
                  node{
                    title
                    handle
                    products(first: 3){
                      edges{
                        node{
                          id
                          title
                          availableForSale
                          images(first: 1) {
                            edges {
                              node {
                                id
                                originalSrc
                              }
                            }
                          }
                          priceRange{
                            maxVariantPrice{
                              amount
                              currencyCode
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              productType
              tags
              variants(first: 5) {
                edges {
                  node {
                    id
                  }
                }
              }
            }
          }
        }
        
      }
    }
  `;
};
export { collectionQuery, productQuery };
