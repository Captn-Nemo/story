import React from "react";
import "./style.css";
import { Row, Col, Image } from "react-bootstrap";
import { HeaderTop } from "../components/header/header";
import HeaderImage from "../components/headerImage/SvgHeaderImage";
const HeaderRightBG = require("../assets/images/homeB.svg");
const RightGirl = require("../assets/images/6.png");
const HeaderLeft = require("../assets/images/H.svg");
const GirlBG = require("../assets/images/readingKid.png");
const paginas = require("../assets/images/paginas.png");

export const Header = () => {
  return (
    <div>
      <Row className="mt-sm-2 mt-5">
        <Col lg={6} className="">
          {/* <img src={HeaderLeft} style={{ width: "80%", height: "90%" }} /> */}

          <HeaderTop />
        </Col>
        <Col
          lg={4}
          className="d-sm-none d-xs-none d-lg-none d-none d-lg-block mt-4"
        >
          <Image
            style={{ marginLeft: "-24%", marginTop: "-8%" }}
            src={HeaderRightBG}
            width="100%"
          />
          {/* <HeaderImage className="header-image" /> */}
        </Col>
        <Col
          lg={2}
          className="d-sm-none d-xs-none d-lg-block d-none d-lg-block"
        >
          <Image
            src={RightGirl}
            fluid
            width="100%"
            style={{
              position: "absolute",
              zIndex: 100,
              top: "10%",
              right: 0,
            }}
          />
        </Col>
        <Col
          lg={{ offset: 3 }}
          className="d-sm-none d-xs-none d-lg-block d-none d-lg-block mt-5"
        >
          <img
            className="mx-auto"
            src={GirlBG}
            style={{ zIndex: 2, width: "60%" }}
          />
          <Image
            className="mx-auto"
            src={paginas}
            width="100%"
            style={{
              position: "absolute",
              top: 0,
              left: "-18%",
              zIndex: 1,
            }}
          />
        </Col>
      </Row>
    </div>
  );
};
