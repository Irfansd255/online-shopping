import React from "react";
import img from "../assets/images/cat-3.jpg";
const Categories = () => {
  return (
    <div className="cx-categories container my-5">
      <div className="cx-heading">
        <h3>Categories</h3>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="cat-card">
            <h5>Mobile</h5>
            <div className="inner-card">
              <img src={img} alt="" className="cat-img" />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="cat-card">
            <h5>Mobile</h5>
            <div className="inner-card">
              <img src={img} alt="" className="cat-img" />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="cat-card">
            <h5>Mobile</h5>
            <div className="inner-card">
              <img src={img} alt="" className="cat-img" />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="cat-card">
            <h5>Mobile</h5>
            <div className="inner-card">
              <img src={img} alt="" className="cat-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
