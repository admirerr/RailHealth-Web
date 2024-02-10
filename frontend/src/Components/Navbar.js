import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import logoD from "../images/logoD.png";
import { Link } from "react-router-dom";
import "../App.css";
function NavbarComponent() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#17A589" }}>
      <Container fluid>
        <img
          src={logoD}
          width="50"
          height="50"
          className="d-inline-block align-top mt-1 mr-2"
          style={{ marginLeft: "10px" }}
          alt=""
        />
        <Navbar.Brand href="#" style={{ color: 'rgba(255, 255, 255, 0.9)', fontWeight: 'bold' }}>RailHealth</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              //   backgroundColor: "yellow",
              height: "100%",
            }}
          >
            <div
              style={{
                backgroundColor: "#333",
                marginBottom: "3px",
                width: "20px",
                height: "3px",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "#333",
                marginBottom: "3px",
                width: "20px",
                height: "3px",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "#333",
                marginBottom: "3px",
                width: "20px",
                height: "3px",
              }}
            ></div>
          </div>
        </Navbar.Toggle>

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 ms-auto"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#action2" style={{ color: "white" }}>
              Our Services
            </Nav.Link>
            <Nav.Link as={Link} to="/consultancy" style={{ color: "white" }}>
              Consult Doctors
            </Nav.Link>
            <Nav.Link href="#action1" style={{ color: "white" }}>
              Train Tools
            </Nav.Link>
            <Nav.Link href="#action1" style={{ color: "white" }}>
              My Order
            </Nav.Link>
            {/* <Nav.Link href="#action1" style={{color:'white'}}>Blogs</Nav.Link> */}
            <Nav.Link href="#action1" style={{ color: "white" }}>
              About Us
            </Nav.Link>
            <Nav.Link href="#action1" style={{ color: "white" }}>
              Contact Us
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
          <button
    className="btn btn-primary"
    type="button"
   
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasRight"
    aria-controls="offcanvasRight"
  >
    Login
  </button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
