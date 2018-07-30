import React from "react";

const Carousel = props => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class=""
        />
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="1"
          class="active"
        />
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="https://images.unsplash.com/photo-1479818155508-f9111dcd9641?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=172d1cf6bafa1fd7f1ad484e1616afe2&auto=format&fit=crop&w=1650&q=80"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?ixlib=rb-0.3.5&s=f92786c8ddb00c8016d69f80bd558ebb&auto=format&fit=crop&w=1352&q=80"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true" />
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true" />
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
