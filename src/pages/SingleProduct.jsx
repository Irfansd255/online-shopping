import React from "react";
import img from "../assets/images/watch-prod-3.webp";
import {
  FaCartPlus,
  FaFacebookF,
  FaInstagram,
  FaMinus,
  FaPlus,
  FaTwitter,
  FaWhatsapp
} from "react-icons/fa";

const SingleProduct = () => {
  return (
    <div className="cx-singleProduct container my-5">
      <div className="wrapper">
        <div className="left">
          <div className="p-img">
            <img src={img} alt="" />
          </div>
        </div>

        <div className="right">
          <h4>poco m6 5g mobile</h4>
          <h5>Price: &#8377; 36000</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur velit voluptas quas, pariatur sequi non nisi vitae
            placeat itaque sapiente nesciunt sit, ipsam autem inventore officia.
            Dolor quod incidunt blanditiis.
          </p>

          <div className="d-flex mb-4" >
            <div className="c-counter-btn">
              <span className="minus">
                <FaMinus />
              </span>
              <span className="qty">6</span>
              <span className="plus">
                <FaPlus />
              </span>
            </div>
            <div className="">
              <button className="card-btn">
                <FaCartPlus /> ADD TO CART
              </button>
            </div>
          </div>

          <div className="">
            <h6>
              Category: <span>Mobile</span>
            </h6>
            <h6>
              Share:
              <span className="ms-2">
                <FaWhatsapp />
              </span>
              <span className="ms-2">
                <FaFacebookF />
              </span>
              <span className="ms-2">
                <FaInstagram />
              </span>
              <span className="ms-2">
                <FaTwitter />
              </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
