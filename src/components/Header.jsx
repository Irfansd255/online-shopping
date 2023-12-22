import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from '../assets/images/logo.png'
import { FaRegHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
const Header = () => {
  return (
    <div className="cx-header">
      <Navbar expand="lg" className="bg-dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo"  className="img-logo"/>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#home">All Products</Nav.Link>
              <Nav.Link href="#home">Category</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>

              
            </Nav>
            <div className="righ-header">
                <button  className="icon-btn"><FaSearch /></button>
                <button className="icon-btn"><FaRegHeart /></button>
                <button className="icon-btn"><FaShoppingCart /></button>
                <button className="btn btn-danger">Logout</button>

            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
