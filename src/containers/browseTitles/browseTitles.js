import React from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import FeaturedBook from "../../components/featuredBooks/featuredBooks";
import { CustomNavLink } from "../../components/NavItem/NavItem";
import "./titles.css";
const Doodlebar = require("../../assets/images/doodlesBar.svg");
export const BrowseTitles = () => {
  return (
    <>
      <div className="wrapper">
        <Row style={{ marginBottom: "3%" }} className="titleDiv doodleImg py-3">
          <Col
            md={3}
            // style={{ overflow: "hidden" }}
            className="d-flex align-items-center justify-content-center"
          >
            {/* <Image
              fluid
              width="170%"
              height="100px"
              className="d-none d-md-block d-lg-block d-xl-block doodleBar"
              id="featured-m"
              src={Doodlebar}
              alt=""
            /> */}
          </Col>
          <Col
            md={6}
            className="text-center d-flex align-items-center justify-content-center"
          >
            <span
              className="chelsea white f3 align-middle text"
              // style={{ textShadow: "-2px -2px 1px white" }}
            >
              BROWSE TITLES
              {/* <b className=" teal f17a asap" style={{ textShadow: "none" }}>
                {" "}
                &nbsp;TITLES
              </b> */}
            </span>
          </Col>
          <Col
            md={3}
            // style={{ overflow: "hidden" }}
            className="d-flex align-items-center justify-content-center"
          >
            {/* <Image
              fluid
              width="90%"
              height="100px"
              className="d-none d-md-block d-lg-block d-xl-block doodleBar"
              id="featured-m"
              src={Doodlebar}
              alt=""
            /> */}
          </Col>
        </Row>

        <FeaturedBook />
        <Col className="my-3 mx-auto d-flex justify-content-center align-items-center">
          <Button
            className="btncustom amatic text-white"
            variant="warning"
            onClick={() =>
              window.location.replace("/projects/storically/product")
            }
          >
            SEE MORE
          </Button>
        </Col>
      </div>
    </>
  );
};
