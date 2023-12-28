import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Products from "../components/Products";
import { fetchDtataFromApi } from "../api/api";

const Home = () => {


  useEffect(()=>{
    getProduct();
  },[])

  const getProduct =()=>{
    fetchDtataFromApi('/api/products?populate=*').then((res)=>{
      console.log(res)
    })
  }

  return (
    <div className="cx-home">
      <Banner />
      <Categories/>
      <Products/>
    </div>
  );
};

export default Home;
