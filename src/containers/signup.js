import React from "react";
import { Row, Col, Image, Form, Button } from "react-bootstrap";
import "./style.css";
const thumb1 = require("../assets/images/1.png");
const thumb2 = require("../assets/images/2.png");
const thumb3 = require("../assets/images/3.png");
const thumb4 = require("../assets/images/4.png");

export const BottomSignUp = () => {
  return (
    <>
      <Row className="mb-3">
        <Col lg={12} className="d-flex justify-content-center mVert mx-auto">
          <h4 className="text-center">
            <b className="asapbold darkblue f2">
              Even a little part of your story truly deserves a personalized
              book
            </b>
          </h4>
        </Col>
        <Row className="d-flex justify-content-center align-items-center">
          <Col
            style={{ marginBottom: "2%" }}
            lg={3}
            className="mx-auto d-flex justify-content-center"
          >
            <Row className="mx-auto">
              <Col className="d-flex">
                <div className="thumcont">
                  <Image src={thumb1} fluid />
                </div>
                <div className="details">
                  <h5>
                    <b className="darkblue f1 asapbold signUptitle">Shipping</b>
                  </h5>
                  <p className="text-muted fw1 signUpText asap">
                    Worldwide shipping coming soon. Contact us for international
                    shipping queries.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            style={{ marginBottom: "2%" }}
            lg={3}
            className="mx-auto d-flex justify-content-center"
          >
            <Row className="mx-auto">
              <Col className="d-flex">
                <div className="thumcont">
                  <Image src={thumb2} fluid />
                </div>
                <div className="details">
                  <h5>
                    <b className="darkblue f1 asapbold signUptitle">
                      Languages
                    </b>
                  </h5>
                  <p className="text-muted fw1 asap signUpText">
                    Multiple languages coming soon. Contact us to request a book
                    in your language
                  </p>
                </div>
              </Col>
            </Row>
          </Col>

          <Col
            style={{ marginBottom: "2%" }}
            lg={3}
            className="mx-auto d-flex justify-content-center"
          >
            <Row className="mx-auto">
              <Col className="d-flex">
                <div className="thumcont">
                  <Image src={thumb3} fluid />
                </div>
                <div className="details">
                  <h5>
                    <b className="darkblue f1 asapbold signUptitle">
                      Superb quality
                    </b>
                  </h5>
                  <p className="text-muted fw1 asap signUpText">
                    Books that bring a smile on your face. Books that help you
                    remember and be remembered.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            style={{ marginBottom: "2%" }}
            lg={3}
            className="mx-auto d-flex justify-content-center"
          >
            <Row className="mx-auto">
              <Col className="d-flex">
                <div className="thumcont">
                  <Image src={thumb4} fluid />
                </div>
                <div className="details">
                  <h5>
                    <b className="darkblue f1 asapbold signUptitle">
                      Personalised
                    </b>
                  </h5>
                  <p className="text-muted fw1 asap signUpText">
                    Personalize a story we have created or share a personal
                    story from your life
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Col
          style={{ marginBottom: "2%" }}
          lg={12}
          className="d-flex flex-column justify-content-center align-items-center mVert px-4"
        >
          <h4 style={{ width: "90%" }} className="text-center ">
            <b className="asapbold darkblue f111 ">
              What are you waiting for? Connect with us, to connect to yourself
              and your personal history! Also, get loads of discounts and
              freebies
            </b>
          </h4>
        </Col>
        <Col lg={12} className="mx-auto padHoriz mBottom">
          <Row>
            <Col lg={6} className="my-xs-3 mb-3">
              <Form.Control
                type="text"
                className=" f111 asap"
                placeholder="Enter your Email Address"
              />
            </Col>
            <Col
              lg={6}
              className="d-flex justify-content-center align-items-center my-xs-3 mb-3"
            >
              <Button block variant="outline-success" className=" asap f111">
                <b>Sign Me Up</b>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
