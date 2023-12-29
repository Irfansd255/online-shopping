import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  console.log(products);
  return (
    <div className="container cx-products my-4">
      <div className="cx-heading">
        <h3>All Products</h3>
      </div>

      <div className="row g-3">
        {products?.data?.map((products) => {
          return <Product key={products.id} data={products} id={products.id} />;
        })}
      </div>
    </div>
  );
};

export default Products;
