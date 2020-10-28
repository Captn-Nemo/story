import React from "react";
import { Col, Image, Row, NavDropdown, Navbar, Nav } from "react-bootstrap";
import { CustomNavLink } from "../components/NavItem/NavItem";
import "./style.css";
const footerImg = require("./../assets/images/footer.png");
export const Footer = () => {
  return (
    <Row className="bg-warning p-5">
      <Col md={4} className="d-flex justify-content-center align-items-start">
        <div className="descDiv d-flex flex-column">
          <h6
            className="amatic f14 text-white text-justify"
            style={{ fontSize: 30 }}
          >
            STORICALLY
          </h6>
          <p className="asapbold f11">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <div className="d-flex justify-centent-around align-items-start">
            <a class="fa fa-instagram" title="" target="_blank" href="#"></a>
            <a class="fa fa-facebook" title="" target="_blank" href="#"></a>
          </div>
        </div>
      </Col>
      <Col
        md={4}
        className="d-md-flex justify-content-md-center align-items-md-start d-sm-flex justify-content-sm-start align-items-sm-start"
      >
        <div className="descDiv d-flex flex-column">
          <h6
            className="amatic f14 text-white text-justify"
            style={{ fontSize: 30 }}
          >
            LINKS
          </h6>
          <Nav bsPrefix="p-0" className="d-block p-0 m-0">
            <Nav.Link href="#3" className="Bottomnavitem">
              <CustomNavLink
                to="/projects/storically"
                className="Bottomnavitem"
              >
                Home
              </CustomNavLink>
            </Nav.Link>
            <NavDropdown
              title="Your Own"
              id="basic-nav-dropdownBottom"
              className="Bottomnavitem"
            >
              <NavDropdown.Item href="#3" className="BottomnavitemDrop">
                <CustomNavLink
                  to="/projects/storically/yourown/guided"
                  className="Bottomnavitem"
                >
                  Guided
                </CustomNavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#1" className="BottomnavitemDrop">
                <CustomNavLink
                  to="/projects/storically/yourown"
                  className="Bottomnavitem"
                >
                  Type in Long Form
                </CustomNavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#2" className="BottomnavitemDrop">
                <CustomNavLink
                  to="/projects/storically/"
                  className="Bottomnavitem"
                >
                  Audio Input
                </CustomNavLink>
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#" className="Bottomnavitem p-0 m-0">
              <CustomNavLink
                to="/projects/storically/product"
                href="#"
                className="Bottomnavitem"
              >
                Titles
              </CustomNavLink>
            </Nav.Link>
            <Nav.Link href="#" className="Bottomnavitem p-0 m-0">
              <CustomNavLink
                to="/projects/storically"
                href="#"
                className="Bottomnavitem"
              >
                About us
              </CustomNavLink>
            </Nav.Link>
            <Nav.Link href="#" className="Bottomnavitem p-0 m-0">
              <CustomNavLink
                to="/projects/storically"
                href="#"
                className="Bottomnavitem"
              >
                Contact us
              </CustomNavLink>
            </Nav.Link>
            <Nav.Link href="#" className="Bottomnavitem p-0 m-0">
              <CustomNavLink
                to="/projects/storically"
                href="#"
                className="Bottomnavitem"
              >
                Blog
              </CustomNavLink>
            </Nav.Link>
            <Nav.Link href="#" className="Bottomnavitem p-0 m-0">
              <CustomNavLink
                to="/projects/storically"
                href="#"
                className="Bottomnavitem"
              >
                FAQ
              </CustomNavLink>
            </Nav.Link>
            <Nav.Link href="#" className="Bottomnavitem p-0 m-0">
              <CustomNavLink
                to="/projects/storically"
                href="#"
                className="Bottomnavitem"
              >
                T{`&`}C
              </CustomNavLink>
            </Nav.Link>
          </Nav>
        </div>
      </Col>
      <Col md={4} className="d-flex justify-content-end align-items-center">
        <Image src={footerImg} fluid />
      </Col>
    </Row>
  );
};
