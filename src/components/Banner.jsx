import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import img from "../assets/images/banner.jpg";
import { API_BASE_URL, fetchDtataFromApi } from "../api/api";
import Loader from "./Loader";

const Banner = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    fetchDtataFromApi("/api/banners?populate=*").then((res) => {
      console.log(res);

      if (res.data) {
        setLoading(false);
      }

      setData(res.data);
    });
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Carousel>
          {data?.map((items) => (
            <Carousel.Item key={items.id}>
              <img
                src={
                  API_BASE_URL +
                  items?.attributes?.image?.data[0]?.attributes?.url
                }
                alt=""
                className="banner-img"
              />
              <Carousel.Caption>
                <h3>{items.attributes.title}</h3>
                <p>{items.attributes.desc}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default Banner;
