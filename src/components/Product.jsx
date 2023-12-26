import React from "react";
import img from "../assets/images/watch-prod-3.webp";
const Product = () => {
  return (
    <div className="col-md-3">
      <div className="pro-card p-3">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vitae </p>
          <h6>
            &#8377;<span className="ms-2">57000</span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Product;
