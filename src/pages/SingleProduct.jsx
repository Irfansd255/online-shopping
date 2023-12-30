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
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { API_BASE_URL } from "../api/api";
import RelatedProducts from "./../components/RelatedProducts";

const SingleProduct = () => {
  const { id } = useParams();

  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

  return (
    <div className="cx-singleProduct container my-5">
      <div className="wrapper mb-4">
        <div className="left">
          <div className="p-img">
            <img
              src={
                API_BASE_URL +
                data?.data[0]?.attributes?.image?.data[0]?.attributes?.url
              }
              alt=""
            />
          </div>
        </div>

        <div className="right">
          <h4>{data?.data[0]?.attributes?.title}</h4>
          <h5>Price: &#8377; {data?.data[0]?.attributes?.price}</h5>
          <p>{data?.data[0]?.attributes?.desc}</p>

          <div className="d-flex mb-4">
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
              Category:{" "}
              <span>
                {
                  data?.data[0]?.attributes?.categories?.data[0]?.attributes
                    ?.title
                }
              </span>
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

      <RelatedProducts
        productId={data?.data[0]?.id}
        categoryId={data?.data[0]?.attributes?.categories?.data[0]?.id}
      />
    </div>
  );
};

export default SingleProduct;
