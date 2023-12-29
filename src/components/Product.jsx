import React from "react";
import img from "../assets/images/watch-prod-3.webp";
import { API_BASE_URL } from "../api/api";
const Product = ({ data, id }) => {
  console.log('pppppp',data)
  return (
    <div className="col-md-3">
      <div className="pro-card p-3">
        <div className="img">
          <img
            src={
              API_BASE_URL + data?.attributes?.image?.data[0]?.attributes?.url
            }
            alt=""
          />
        </div>
        <div className="">
          <p>{data?.attributes?.title}</p>
          <h6>
            &#8377;<span className="ms-2">{data?.attributes?.price}</span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Product;
