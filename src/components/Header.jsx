import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/images/logo.png";
import { FaRegHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useFetch from "./../hooks/useFetch";
import { API_BASE_URL } from "../api/api";
import { Context } from "../context/Context";
const Header = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [query, setQuery] = useState("");

  const {cartCount} = useContext(Context)

  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  console.log(data);

  if (!query.length) {
    data = null;
  }

  return (
    <div className="cx-header">
      <Navbar expand="lg" className="bg-dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" className="img-logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={()=>navigate('/home')}>Home</Nav.Link>
              <Nav.Link >All Products</Nav.Link>
              <Nav.Link >Category</Nav.Link>
              <Nav.Link >About</Nav.Link>
            </Nav>
            <div className="righ-header">
              <button className="icon-btn" onClick={handleShow}>
                <FaSearch />
              </button>
              <button className="icon-btn">
                <FaRegHeart />
              </button>
              <button className="icon-btn cart-btn" onClick={()=>navigate('/cart')}>
                <span>{cartCount}</span>
                <FaShoppingCart />
              </button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/");
                }}
              >
                Logout
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="bottom">
        <Offcanvas.Header closeButton>
          <input
            type="text"
            className="form-control"
            placeholder="Search here..."
            onChange={(e) => setQuery(e.target.value)}
          />
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div className="search-wrapper container">
            {data?.data?.map((items) => (
              <div
                className="search-item mb-3"
                onClick={() => {navigate(`/SingleProduct/${items.id}`)
                handleClose();
                setQuery('');
              }}
              >
                <div className="s-left">
                  <img
                    src={
                      API_BASE_URL +
                      items?.attributes?.image?.data[0]?.attributes?.url
                    }
                    alt="img"
                  />
                </div>
                <div className="s-right">
                  <h6>{items.attributes.title}</h6>
                  <p>{items.attributes.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Header;
