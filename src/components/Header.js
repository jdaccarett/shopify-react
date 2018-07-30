import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = props => {
  return (
    <section className="top-header">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-xs-12 col-sm-4">
            <div className="contact-number">
              <i className="fa fa-phone" />
              <span>
                281-330-8004 <strong>Mike Jones</strong>
              </span>
            </div>
          </div>
          <div className="col-md-4 col-xs-12 col-sm-4">
            <div className="logo text-center">
              <a href="index.html">
                <svg
                  width="205px"
                  height="29px"
                  viewBox="0 0 155 29"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xlinkHref="http://www.w3.org/1999/xlink"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                    fontSize="40"
                    fontFamily="AustinBold, Austin"
                    fontWeight="bold"
                  >
                    <g
                      id="Group"
                      transform="translate(-108.000000, -297.000000)"
                      fill="#000000"
                    >
                      <text id="fashion">
                        <tspan x="108.94" y="325">
                          BVA
                        </tspan>
                      </text>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className="col-md-4 col-xs-12 col-sm-4">
            <ul className="top-menu list-inline float-right">
              <li className="list-inline-item">
                <a href="cart.html">
                  <i className="fa fa-shopping-cart" />Cart
                </a>
              </li>
              <li className="list-inline-item">
                <a href="login.html">
                  <i className="fa fa-sign-in" />Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
