import { Query } from "react-apollo";
import React from "react";
import gql from "graphql-tag";
import CollectionProductItem from "../Collection/Collection_product";

const HomepageProducts = () => (
  <Query
    query={gql`
      {
        shop {
          collections(first: 1, query: "mens") {
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
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      const products = data.shop.collections.edges[0].node.products.edges;

      const productDiv = products.map(({ node }) => {
        return <CollectionProductItem product={node} />;
      });

      return (
        <section class="products section bg-gray">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="title text-center">
                  <h2>Trending Products</h2>
                </div>
              </div>
              <div class="row">{productDiv}</div>
            </div>
          </div>
        </section>
      );
    }}
  </Query>
);

export default HomepageProducts;
