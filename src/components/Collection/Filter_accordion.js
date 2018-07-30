import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const filterAccordion = () => {
  return (
    <div class="col-md-3">
      <div class="widget">
        <h4 class="widget-title">Sort By</h4>
      </div>

      <div id="accordion">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5>
              <a
                href=""
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Shirts
              </a>
            </h5>
          </div>

          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body">
              <ul class="list-unstyled">
                <li>
                  <a href="">T-Shirts</a>
                </li>
                <li>
                  <a href="">Polos</a>
                </li>
                <li>
                  <a href="">Longsleeve</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" id="headingOne">
            <h5>
              <a
                href=""
                class="collapsed"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                Jeans
              </a>
            </h5>
          </div>

          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body">
              <ul class="list-unstyled">
                <li>
                  <a href="">Slim</a>
                </li>
                <li>
                  <a href="">Boot</a>
                </li>
                <li>
                  <a href="">Straight</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" id="headingOne">
            <h5>
              <a
                href=""
                class="collapsed"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
              >
                Pants
              </a>
            </h5>
          </div>

          <div
            id="collapseThree"
            class="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body">
              <ul class="list-unstyled">
                <li>
                  <a href="">Dress</a>
                </li>
                <li>
                  <a href="">Pleated</a>
                </li>
                <li>
                  <a href="">Cargo</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default filterAccordion;
