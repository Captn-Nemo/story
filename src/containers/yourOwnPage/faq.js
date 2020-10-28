import React from "react";
import { Row, Col, Image } from "react-bootstrap";
const faq = require("../../assets/images/faq.png");
export const FAQ = () => {
  return (
    <Row>
      <Col
        md={12}
        className="mt-5 d-flex justify-content-center align-items-center"
      >
        <span className="f14 chelsea teal text-uppercase">
          FAQ ABOUT YOU GO BACK TO SCHOOL
        </span>
      </Col>
      <Col className="d-flex justify-content-center align-items-center ">
        <Image src={faq} fluid />
      </Col>
    </Row>
  );
};
