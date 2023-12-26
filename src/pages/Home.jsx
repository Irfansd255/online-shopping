import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="cx-home">
      <Banner />
      <Categories/>
      <Products/>
    </div>
  );
};

export default Home;
