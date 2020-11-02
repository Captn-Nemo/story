import React from "react";
import { Col, Image, Row, NavDropdown, Navbar, Nav } from "react-bootstrap";
import { CustomNavLink } from "../components/NavItem/NavItem";
import "./style.css";
const footerImg = require("./../assets/images/footer.png");
const footerImg2 = require("./../assets/images/footer1.png");
export const Footer = () => {
  return (
    <Row className="bg-warning footerRow">
      <Col
        lg={3}
        style={{ marginBottom: "4%" }}
        className="d-lg-flex justify-content-lg-center align-items-lg-start d-md-flex justify-content-md-center align-items-md-center"
      >
        <div className=" d-flex flex-column justify-content-center align-items-center  d-lg-flex flex-lg-column  justify-content-lg-center align-items-lg-start d-sm-flex flex-sm-column  justify-content-sm-center align-items-sm-center d-xs-flex flex-xs-column  justify-content-xs-center align-items-xs-center">
          <h6 className="amatic text-white f2">STORICALLY</h6>
          <p className="asapbold text-justify f1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <div className="d-flex justify-centent-around align-items-start">
            <a
              style={{ marginRight: "10%" }}
              class="fa fa-instagram"
              title=""
              target="_blank"
              href="#"
            ></a>
            <a class="fa fa-facebook" title="" target="_blank" href="#"></a>
          </div>
        </div>
      </Col>
      <Col
        lg={3}
        style={{ marginBottom: "4%" }}
        className="d-flex justify-content-center align-items-start"
      >
        <div className="d-flex flex-column">
          <h6 className="amatic f2 text-white text-justify">LINKS</h6>
          <Nav bsPrefix="p-0" className="d-block p-0 m-0">
            <Nav.Link href="#3" className="Bottomnavitem f1">
              <CustomNavLink
                to="/projects/storically"
                className="Bottomnavitem f1"
              >
                Home
              </CustomNavLink>
            </Nav.Link>
            <NavDropdown
              title="Your Own"
              id="basic-nav-dropdownBottom"
              className="Bottomnavitem"
            >
              <NavDropdown.Item href="#3" className="Bottomnavitelgrop">
                <CustomNavLink
                  to="/projects/storically/yourown/guided"
                  className="Bottomnavitem"
                >
                  Guided
                </CustomNavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#1" className="Bottomnavitelgrop">
                <CustomNavLink
                  to="/projects/storically/yourown"
                  className="Bottomnavitem"
                >
                  Type in Long Form
                </CustomNavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#2" className="Bottomnavitelgrop">
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
      <Col
        lg={3}
        md={6}
        sm={12}
        style={{ marginBottom: "4%" }}
        className="d-flex justify-content-center align-items-center"
      >
        <Image src={footerImg2} fluid width="60%" />
      </Col>
      <Col
        style={{ marginBottom: "4%" }}
        lg={3}
        md={6}
        sm={12}
        className="d-flex justify-content-center align-items-center"
      >
        <Image src={footerImg} fluid width="60%" />
      </Col>
    </Row>
  );
};
