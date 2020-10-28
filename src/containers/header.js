import React from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";
import { HeaderTop } from "../components/header/header";
import HeaderImage from "../components/headerImage/SvgHeaderImage";
const HeaderRightBG = require("../assets/images/DOODLES.png");
const RightGirl = require("../assets/images/6.png");
const HeaderLeft = require("../assets/images/H.svg");
const GirlBG = require("../assets/images/readingKid.png");
const paginas = require("../assets/images/paginas.png");

export const Header = () => {
  return (
    <div>
      <Row className="mt-3">
        <Col md={6} className="">
          {/* <img src={HeaderLeft} style={{ width: "80%", height: "90%" }} /> */}

          <HeaderTop />
        </Col>
        <Col
          md={4}
          className="d-sm-none d-xs-none d-md-block d-none d-lg-block mt-5"
        >
          <HeaderImage className="header-image" />
        </Col>
        <Col
          md={2}
          className="d-sm-none d-xs-none d-md-block d-none d-lg-block"
        >
          <img
            src={RightGirl}
            style={{
              width: "100%",
              position: "absolute",
              zIndex: 100,
              top: 100,
              right: 0,
            }}
          />
        </Col>
        <Col
          md={{ offset: 3 }}
          className="d-sm-none d-xs-none d-md-block d-none d-lg-block mt-5"
        >
          <img
            className="mx-auto"
            src={GirlBG}
            style={{ zIndex: 2, width: "60%" }}
          />
          <img
            className="mx-auto"
            src={paginas}
            style={{
              position: "absolute",
              top: 0,
              left: -200,
              zIndex: 1,
              width: "100%",
            }}
          />
        </Col>
      </Row>
    </div>
  );
};
