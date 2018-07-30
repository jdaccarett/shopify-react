import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Product = props => {
  console.log(props);
  const { product } = props;
  const defaultImage = product.images.edges[0].node.originalSrc;
  const price = Number(product.priceRange.maxVariantPrice.amount);
  const productHandle = product.handle;

  return (
    <div className="col-md-4">
      <Link to={`/products/${productHandle}`}>
        <div className="product-item">
          <div className="product-thumb">
            <span className="bage">Sale</span>
            <img
              className="img-responsive"
              src={defaultImage}
              alt="product-img"
            />
            <div className="preview-meta">
              <ul>
                <li>
                  <a href="product-single.html">
                    <i className="fa fa-search" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-heart-o" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-shopping-cart" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-content">
            <h4>
              <a href="product-single.html">{product.title}</a>
            </h4>
            <p className="price">{`$${price.toFixed(2)}`}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
