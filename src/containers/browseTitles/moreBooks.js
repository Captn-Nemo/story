import React from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import FeaturedBook from "../../components/featuredBooks/featuredBooks";
import "./titles.css";
const Doodlebar = require("../../assets/images/doodlesBar.svg");
export const MoreBooks = () => {
  return (
    <>
      <div className="wrapper2 mt-5">
        <Row className="titleDiv doodleImg p-2">
          <Col
            md={1}
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
            md={10}
            className="text-center d-flex align-items-center justify-content-center p-2"
          >
            <span
              style={{ fontSize: 40 }}
              className="chelsea white align-middle text2"
              // style={{ textShadow: "-2px -2px 1px white" }}
            >
              MORE STORICALLY BOOKS
              {/* <b className=" teal f17a asap" style={{ textShadow: "none" }}>
                {" "}
                &nbsp;TITLES
              </b> */}
            </span>
          </Col>
          <Col
            md={1}
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
          <Button className="btncustom amatic text-white" variant="warning">
            SEE MORE
          </Button>
        </Col>
      </div>
    </>
  );
};
