import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import "./kids.css";
const kids = require("../../assets/images/kids.png");
export const KidsBG = () => {
  return (
    <>
      <Col
        md={12}
        className="py-2 d-flex justify-content-around align-items-center"
      >
        <Image src={kids} className="mx-auto kidsimg" fluid />

        <p className="amatic f3 mr-5 amatic font-weight-bold text-white d-none d-sm-none d-xs-none d-md-none d-lg-block">
          Stories communicate cultures, histories, and universal truths in
          intricate and engaging narratives. They teach us about the world and
          ourselves.
        </p>
      </Col>
    </>
  );
};
