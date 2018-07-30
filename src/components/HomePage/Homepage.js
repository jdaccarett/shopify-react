import React from "react";
import Carousel from "./Carousel";
import ProdCategorySection from "./ProdCategorySection";
import HomepageProducts from "./HomepageProducts";
import Newsletter from "../Newsletter";

const Homepage = props => {
  return (
    <div>
      <Carousel />
      <ProdCategorySection />
      <HomepageProducts />
      <Newsletter />
    </div>
  );
};

export default Homepage;
