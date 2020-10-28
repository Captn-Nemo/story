import React from "react";
import {
  Row,
  Col,
  Image,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faFlagUsa,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./navigation.css";
import { CustomNavLink } from "../../components/NavItem/NavItem";
const navLogo = require("../../assets/images/navLogo.png");
export const Navigation = () => {
  return (
    <>
      <div className="navigation d-sm-flex align-items-sm-start justify-content-sm-center d-lg-flex align-items-lg-center justify-content-lg-start">
        <Navbar
          collapseOnSelect
          expand="lg"
          className="pl-4 nav my-auto"
          style={{ backgroundColor: "#ffffff" }}
        >
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="navHam"
          />
          <Navbar.Brand href="#home" className="pl-2 navLogo">
            <Image src={navLogo} width="100%" height="100%" />
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#3">
                <CustomNavLink to="/projects/storically" className="navitem">
                  Home
                </CustomNavLink>
              </Nav.Link>
              <Nav.Link className="navitem">
                <NavDropdown
                  title="Your Own"
                  id="basic-nav-dropdown"
                  className="s"
                >
                  <NavDropdown.Item href="#3" className="navitemDrop">
                    <CustomNavLink
                      to="/projects/storically/yourown/guided"
                      className="navitem"
                    >
                      Guided
                    </CustomNavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#1" className="navitemDrop">
                    <CustomNavLink
                      to="/projects/storically/yourown"
                      className="navitem"
                    >
                      Type in Long Form
                    </CustomNavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#2" className="navitemDrop">
                    <CustomNavLink
                      to="/projects/storically/"
                      className="navitem"
                    >
                      Audio Input
                    </CustomNavLink>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Link>

              {/* <Nav.Link href="#features">
                <CustomNavLink
                  to="/projects/storically/yourown"
                  className="navitem"
                >
                  Your Own
                </CustomNavLink>
              </Nav.Link> */}
              <Nav.Link href="#">
                <CustomNavLink
                  to="/projects/storically/product"
                  href="#"
                  className="navitem"
                >
                  Titles
                </CustomNavLink>
              </Nav.Link>
              <Nav.Link href="#">
                <CustomNavLink
                  to="/projects/storically"
                  href="#"
                  className="navitem"
                >
                  About us
                </CustomNavLink>
              </Nav.Link>
              <Nav.Link href="#">
                <CustomNavLink
                  to="/projects/storically"
                  href="#"
                  className="navitem"
                >
                  Contact us
                </CustomNavLink>
              </Nav.Link>
              <Nav.Link href="#">
                <CustomNavLink
                  to="/projects/storically"
                  href="#"
                  className="navitem"
                >
                  Blog
                </CustomNavLink>
              </Nav.Link>
              <Nav.Link href="#">
                <CustomNavLink
                  to="/projects/storically"
                  href="#"
                  className="navitem"
                >
                  FAQ
                </CustomNavLink>
              </Nav.Link>
              <Nav.Link href="#">
                <CustomNavLink
                  to="/projects/storically"
                  href="#"
                  className="navitem"
                >
                  T{`&`}C
                </CustomNavLink>
              </Nav.Link>
            </Nav>
            <Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search title/age"
                  className="ml-4 custominput"
                />
              </Form>
            </Nav>
          </Navbar.Collapse>
          <button className="navBtn">
            {/* <FontAwesomeIcon
                  icon={faFlagUsa}
                  color="#814dbe"
                  size={45}
                  className="icon"
                /> */}
            <Image src={require("../../assets/images/usa.png")} fluid />
            <span className="navitemRight ml-2 d-none d-md-inline-block">
              English
            </span>
          </button>
          <button variant="" className="navBtn">
            <FontAwesomeIcon
              icon={faCartPlus}
              color="#fdc700"
              size={45}
              className="icon"
            />
            <span className="navitemRight ml-2 d-none d-md-inline-block">
              MY ACCOUNT
            </span>
          </button>
          <Button variant="" className="btn btn-rounded d-md-none d-lg-none">
            <FontAwesomeIcon
              icon={faUser}
              color="#dadada"
              size={45}
              className="icon"
            />
          </Button>
        </Navbar>
      </div>
    </>
  );
};
