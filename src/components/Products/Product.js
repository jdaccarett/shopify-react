import { Query } from "react-apollo";
import { productQuery } from "../../queries/queries";
import React, { Component } from "react";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

class Product extends Component {
  constructor(props) {
    super(props);
    const productHandle = props.match.params.handle;
    this.state = { handle: productHandle };
  }

  render() {
    return (
      <Query query={productQuery(`${this.state.handle}`)}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          let product = data.shop.products.edges[0].node;
          let price = product.priceRange.maxVariantPrice.amount.split(".");
          let imageURL = product.images.edges[0].node;
          //console.log(product.options);
          return (
            <section className="single-product">
              <div className="container">
                <div className="row pb-5">
                  <div className="col-md-5">
                    <div className="single-product-images">
                      <div data-thumb={imageURL.originalSrc}>
                        <img className="img-fluid" src={imageURL.originalSrc} />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-7">
                    <div className="single-product-details">
                      <h2>{product.title}</h2>
                      <p className="product-price">${price[0]}</p>

                      <p className="product-description">
                        {product.description}
                      </p>
                      {product.options.map(option => {
                        return (
                          <div className="product-category">
                            <span>{option.name}:</span>
                            <select className="form-control">
                              {option.values.map(val => {
                                return <option>{val}</option>;
                              })}
                            </select>
                          </div>
                        );
                      })}
                      <div className="product-quantity">
                        <span>Quantity:</span>
                        <input
                          min="1"
                          type="number"
                          id="quantity"
                          name="quantity"
                          value="1"
                        />
                      </div>
                      <div className="product-category">
                        <span>Categories:</span>
                        <ul>
                          {product.collections.edges.map(product => {
                            let productNode = product.node;
                            return (
                              <li>
                                {" "}
                                <Link
                                  to={`/collections/${product.node.handle}`}
                                >
                                  {product.node.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <a href="cart.html" className="btn btn-main">
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="home-tab"
                          data-toggle="tab"
                          href="#home"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          Details
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="profile-tab"
                          data-toggle="tab"
                          href="#profile"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          Specifications
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <h4>Product Description</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum. Sed ut per spici
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Veritatis delectus quidem repudiandae veniam
                          distinctio repellendus magni pariatur molestiae
                          asperiores animi, eos quod iusto hic doloremque iste
                          a, nisi iure at unde molestias enim fugit, nulla
                          voluptatibus. Deserunt voluptate tempora aut illum
                          harum, deleniti laborum animi neque, praesentium
                          explicabo, debitis ipsa?
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>Small</td>
                              <td>15 inches</td>
                            </tr>
                            <tr>
                              <td>Medium</td>
                              <td>17 inches</td>
                            </tr>
                            <tr>
                              <td>Large</td>
                              <td>20 inches</td>
                            </tr>
                            <tr>
                              <td>X Large</td>
                              <td>25 inches</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
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

export default Product;
