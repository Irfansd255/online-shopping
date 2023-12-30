import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Products from "../components/Products";

const Category = () => {
  const { id } = useParams();

  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );

  console.log(data);

  return (
    <div className="cx-category">
      <div className="container my-4">
        <div className="cx-heading">
          <h3>
            {
              data?.data?.[0]?.attributes?.categories?.data[0]?.attributes
                ?.title
            }
          </h3>
        </div>

        <Products products={data} innerPage={true} />
      </div>
    </div>
  );
};

export default Category;
