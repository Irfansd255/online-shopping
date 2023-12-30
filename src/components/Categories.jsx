import React from "react";
import img from "../assets/images/cat-3.jpg";
import { API_BASE_URL } from "../api/api";
import { useNavigate } from "react-router-dom";




const Categories = ({ categories }) => {

  const navigate = useNavigate()
  console.log("cattttttt", categories);
  return (
    <div className="cx-categories container my-5">
      <div className="cx-heading">
        <h3>Categories</h3>
      </div>

      <div className="row">
        {categories?.map((items) => {
          return (
            <div className="col-md-3" key={items.id}>
              <div className="cat-card" onClick={()=>navigate(`/Category/${items.id}`)}>
                <h5>{items.attributes.title}</h5>
                <div className="inner-card">
                  <img
                    src={
                      API_BASE_URL +
                      items.attributes?.image?.data?.attributes?.url
                    }
                    alt=""
                    className="cat-img"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
