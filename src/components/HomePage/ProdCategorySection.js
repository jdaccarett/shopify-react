import { Query } from "react-apollo";
import React, { Component } from "react";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

class ProdCategorySection extends Component {
  render() {
    return (
      <Query
        query={gql`
          {
            shop {
              collections(first: 3) {
                edges {
                  node {
                    title
                    handle
                    image {
                      originalSrc
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

          const setting1 = data.shop.collections.edges[0].node;
          const setting2 = data.shop.collections.edges[1].node;
          const setting3 = data.shop.collections.edges[2].node;

          return (
            <section class="product-category">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="title text-center">
                      <h2>Product Category</h2>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="category-box">
                      <Link to={`/collections/${setting1.handle}`}>
                        <img src={setting1.image.originalSrc} alt="" />
                        <div class="content">
                          <h3>{setting1.title}</h3>
                          <p>Shop New Season Clothing</p>
                        </div>
                      </Link>
                    </div>
                    <div class="category-box">
                      <Link to={`/collections/${setting2.handle}`}>
                        <img src={setting2.image.originalSrc} alt="" />
                        <div class="content">
                          <h3>{setting2.title}</h3>
                          <p>Get Wide Range Selection</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="category-box category-box-2">
                      <Link to={`/collections/${setting3.handle}`}>
                        <img src={setting3.image.originalSrc} alt="" />
                        <div class="content">
                          <h3>{setting3.title}</h3>
                          <p>Special Design Comes First</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </Query>
    );
  }
}

export default ProdCategorySection;
