import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import { FormButton } from "../../components/formButton/formButton";
import { CustomNavLink } from "../../components/NavItem/NavItem";
import "./yourstory.css";
const title = require("../../assets/images/yourStory.png");
const spaceShip = require("../../components/DoodleComponent/spaceship.svg");
const girlhead = require("../../assets/images/girlHead.png");
export const YourStory = () => {
  return (
    <>
      <Col
        lg={{ span: 8, offset: 1 }}
        md={12}
        className="d-flex flex-row justify-content-between align-items-center mt-5 imageCol"
      >
        <Image
          src={spaceShip}
          className="mt-5 ship d-none d-lg-block"
          width="15%"
        />
        <Image src={title} className="title mx-auto" width="65%" />
      </Col>
      <Col md={12}>
        <Row className="mt-1 py-4">
          <Col
            lg={{ span: 5, offset: 1 }}
            sm={12}
            md={12}
            className="d-flex justify-content-end align-items-end"
          >
            <Card className="leftBox pt-2">
              <span className="chelsea f3 orange">WRITE YOUR</span>
              <span
                className="chelsea f3 orange"
                // style={{ position: "relative", top: "-5%" }}
              >
                OWN
              </span>
              <Card.Body className="p-0 m-0" style={{ width: "90%" }}>
                <Col md={12}>
                  <CustomNavLink to="/projects/storically/yourown/guided">
                    <FormButton
                      title="GUIDED"
                      className="fBtn font-weight-bold"
                      color="#fa8807"
                    />
                  </CustomNavLink>
                </Col>
                <Col md={12}>
                  <CustomNavLink to="/projects/storically/yourown/">
                    <FormButton
                      className="fBtn font-weight-bold"
                      title="TYPE IN LONG FORM"
                      color="#fa8807"
                    />
                  </CustomNavLink>
                </Col>
                <Col md={12}>
                  <FormButton
                    className="fBtn font-weight-bold"
                    title="AUDIO INPUT"
                    color="#fa8807"
                  />
                </Col>
              </Card.Body>
            </Card>
          </Col>
          <Col
            lg={5}
            sm={12}
            md={12}
            className="d-flex justify-content-start align-items-end"
          >
            <Image
              src={girlhead}
              fluid
              className="girl"
              width="30%"
              style={{ position: "absolute", top: "-1%", left: "20%" }}
            />
            <Card className="rightBox pt-2">
              <span className="chelsea f3 purple">BROWSE</span>
              <span
                // style={{ position: "absolute", top: "10vh" }}
                className="chelsea f3 purple"
              >
                TEMPLATES
              </span>
              <Card.Body className="" style={{ width: "90%" }}>
                <FormButton
                  title="FOR GROWN UP'S"
                  className="fBtn"
                  color="#804cbf"
                />

                <FormButton
                  className="fBtn"
                  title="FOR CHILDREN"
                  color="#804cbf"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <Row>
          <Col
            md={12}
            className="d-flex justify-content-center align-items-center mx-auto text-center"
          >
            <span className="red f16" style={{ color: "red" }}>
              HERE WE WILL HAVE SOMETHING ELSE THAT IDK WHAT WILL BE YET
            </span>
          </Col>
        </Row> */}
      </Col>
    </>
  );
};
