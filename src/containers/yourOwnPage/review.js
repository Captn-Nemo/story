import React from "react";
import { Row, Col, Image } from "react-bootstrap";
// const doodle = require("../../assets/images/doodlebar.png");
const lamp = require("../../assets/images/lamp.png");
export const Review = () => {
  return (
    <Row>
      <Col
        md={12}
        className=" d-flex justify-content-center align-items-center mt-3"
      >
        {/* <Image src={doodle} fluid /> */}
      </Col>
      <Col
        md={12}
        className="mt-5 d-flex justify-content-center align-items-center"
      >
        <span className="f14 chelsea teal text-uppercase">REVIEWS</span>
      </Col>
      <Col
        md={12}
        className="mt-5 bg-warning d-flex justify-content-center align-items-center"
      >
        {/* <span className="f14 chelsea teal text-uppercase">
          REVIEWS COMES HERE
        </span> */}
      </Col>
      <Col className="mt-5 d-flex justify-content-center align-items-center">
        <Image src={lamp} fluid />
      </Col>
    </Row>
  );
};
