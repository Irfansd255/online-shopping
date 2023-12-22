import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="cx-footer bg-dark">
      <div className="wrapper container">
        <div className="f-first">
          <h5>About</h5>
          <img src={logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            veniam soluta itaque voluptas earum dicta corporis doloremque
            voluptatibus! Quisquam ullam culpa illum ipsa id dicta tempora fuga,
            ex pariatur harum?
          </p>
        </div>
        <div className="f-second">
          <h5>Pages</h5>

          <div className="mb-3">
            <Link>Home</Link>
          </div>
          <div className="mb-3">
            <Link>All Products</Link>
          </div>
          <div className="mb-3">
            <Link>Category</Link>
          </div>
          <div>
            <Link>About</Link>
          </div>
        </div>
        <div className="f-third">
          <h5>Contact</h5>
          <div className="d-flex text-light mb-2">
            <span  className="me-2"><FaLocationArrow /></span>
            <span>Arbaz Colony, Near Ayesha Masjid, <br /> Nanded 431605</span>
          </div>
          <div className="d-flex text-light mb-2">
            <span className="me-2"><FaMobileAlt /></span>
            <span>+91 7387194350</span>
          </div>
          <div className="d-flex text-light">
            <span className="me-2" ><MdEmail /></span>
            <span>sayyedirfan@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
