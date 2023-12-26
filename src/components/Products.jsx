import React from "react";
import Product from "./Product";

const Products = () => {
  return (
    <div className="container cx-products my-4">
      <div className="cx-heading">
        <h3>All Products</h3>
      </div>
      <div className="row g-3">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />

      </div>
    </div>
  );
};

export default Products;
