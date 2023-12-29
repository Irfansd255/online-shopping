import React, { useContext, useEffect } from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Products from "../components/Products";
import { fetchDtataFromApi } from "../api/api";
import { Context } from "../context/Context";

const Home = () => {
  const { products, setProducts, categories, setCategories } =
    useContext(Context);

  useEffect(() => {
    getProduct();
    getCategories();
  }, []);

  const getProduct = () => {
    fetchDtataFromApi("/api/products?populate=*").then((res) => {
      console.log(res);
      setProducts(res)
    });
  };

  const getCategories = () => {
    fetchDtataFromApi("/api/categories?populate=*").then((res) => {
      console.log(res);
      setCategories(res.data)
    });
  };


  console.log("aaaaaaaaa",products)

  return (
    <div className="cx-home">
      <Banner />
      <Categories categories={categories} />
      <Products products={products} />
    </div>
  );
};

export default Home;
