import { Query } from "react-apollo";
import React from "react";
import { collectionQuery } from "../../queries/queries";
import Product from "./Collection_product";
import Filter from "./Filter_accordion";

class Collections extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  render() {
    return (
      <Query query={collectionQuery(this.props.match.params.handle)}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          var productsArray =
            data.shop.collections.edges[0].node.products.edges;

          console.log(productsArray);

          return (
            <section class="products section">
              <div class="container">
                <div class="row">
                  <Filter />
                  <div class="col-md-9">
                    <div class="row">
                      {productsArray.map(({ node }) => {
                        return <Product product={node} />;
                      })}
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

export default Collections;
