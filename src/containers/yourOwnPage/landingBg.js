import React from "react";
import { Col, Row, Image } from "react-bootstrap";
const bg1 = require("../../assets/images/prod-bg-1.png");
const bg2 = require("../../assets/images/prod-bg-2.png");
const allkids = require("../../assets/images/kids/allkids.png");
export const LandingBg = () => {
  return (
    <>
      <Row>
        <Col md={6}>
          <Image src={bg1} fluid width="100%" />
        </Col>
        <Col
          md={6}
          className="d-flex justify-content-center flex-column align-items-center p-5"
        >
          <p className="chelsea f2 d-flex justify-content-center align-items-center">
            Get fully personalised story books with photos
          </p>
          <p className="asap f1 lightblack">
            It is time to be the face of the book! Get on board with us and make
            your own picture book Today
          </p>
        </Col>
      </Row>
      <Row>
        <Col
          md={6}
          className="d-flex justify-content-center flex-column align-items-center p-5"
        >
          <p className="chelsea f2 d-flex align-items-center">
            Fun and creative illustrations
          </p>
          <p className="asap f1 lightblack">
            When it’s visual, it’s more interesting! A splash of colours and
            amusing pictures makes everything extra lively.
          </p>
        </Col>
        <Col md={6} className="d-flex justify-content-end">
          <Image src={bg2} fluid width="100%" />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col
          md={12}
          className="d-flex justify-content-center align-items-center mx-auto"
        >
          <span className="chelsea text-center text-bold f2 d-flex justify-content-center align-items-center">
            Create your own avatar
          </span>
        </Col>
        <Col
          md={12}
          className="d-flex justify-content-center align-items-center"
        >
          <span className="amatic f1 text-center  d-flex justify-content-center align-items-center mb-5">
            Customise and create the best avatars that suit your personality and
            make your own picture book
          </span>
        </Col>
        <Col
          md={12}
          className="d-flex justify-content-center align-items-center mb-3  "
        >
          <Image src={allkids} fluid width="100%" />
        </Col>
      </Row>
    </>
  );
};
