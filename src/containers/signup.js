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
        <Col md={12} className="d-flex justify-content-center mb-4 mx-auto">
          <h4 className="text-center">
            <b className="asapbold darkblue f13 ">
              Even a little part of your story truly deserves a personalized
              book
            </b>
          </h4>
        </Col>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={3} className="mx-auto d-flex justify-content-center">
            <Row className="mx-auto">
              <Col className="d-flex">
                <div className="thumcont">
                  <Image src={thumb1} fluid />
                </div>
                <div className="details">
                  <h5>
                    <b className="darkblue asapbold signUptitle">Shipping</b>
                  </h5>
                  <p className="text-muted signUpText asap">
                    Worldwide shipping coming soon. Contact us for international
                    shipping queries.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={3} className="mx-auto d-flex justify-content-center">
            <Row className="mx-auto">
              <Col className="d-flex">
                <div className="thumcont">
                  <Image src={thumb2} fluid />
                </div>
                <div className="details">
                  <h5>
                    <b className="darkblue asapbold signUptitle">Languages</b>
                  </h5>
                  <p className="text-muted asap signUpText">
                    Multiple languages coming soon. Contact us to request a book
                    in your language
                  </p>
                </div>
              </Col>
            </Row>
          </Col>

          <Col md={3} className="mx-auto d-flex justify-content-center">
            <Row className="mx-auto">
              <Col className="d-flex">
                <div className="thumcont">
                  <Image src={thumb3} fluid />
                </div>
                <div className="details">
                  <h5>
                    <b className="darkblue asapbold signUptitle">
                      Superb quality
                    </b>
                  </h5>
                  <p className="text-muted asap signUpText">
                    Books that bring a smile on your face. Books that help you
                    remember and be remembered.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={3} className="mx-auto d-flex justify-content-center">
            <Row className="mx-auto">
              <Col className="d-flex">
                <div className="thumcont">
                  <Image src={thumb4} fluid />
                </div>
                <div className="details">
                  <h5>
                    <b className="darkblue asapbold signUptitle">
                      Personalised
                    </b>
                  </h5>
                  <p className="text-muted asap signUpText">
                    Personalize a story we have created or share a personal
                    story from your life
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* <Col md={3} className="d-flex justify-content-center mb-4 mx-auto">
          <Row className="mx-auto">
            <Col className="d-flex">
              <div className="thumcont ">
                <Image src={thumb2} fluid />
              </div>
              <div className="px-3">
                <h5>
                  <b className="darkblue asapbold f12 h5">12 Languages</b>
                </h5>
                <p className="text-muted asap">
                  Children across the world can enjoy our stories
                </p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={3} className="d-flex justify-content-center mb-4 mx-auto">
          <Row className="mx-auto">
            <Col className="d-flex mx-auto">
              <div className="thumcont">
                <Image src={thumb3} fluid />
              </div>
              <div>
                <h5>
                  <b className="darkblue asapbold f12 h5">Superb Quality</b>
                </h5>
                <p className="text-muted asap">
                  Lovingly made books , to be loved for years
                </p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={3} className="d-flex justify-content-center mb-4 mx-auto">
          <Row className="mx-auto">
            <Col className="d-flex mx-auto">
              <div className="thumcont ">
                <Image src={thumb4} fluid />
              </div>
              <div>
                <h5>
                  <b className="darkblue asapbold f12 h5">Personalized</b>
                </h5>
                <p className="text-muted asap">
                  Uniquly personalised stories, like no other
                </p>
              </div>
            </Col>
          </Row>
        </Col> */}

        <Col
          md={12}
          className="d-flex flex-column justify-content-center align-items-center mt-5 mb-4 px-4"
        >
          <h4 style={{ width: "90%" }} className="text-center ">
            <b className="asapbold darkblue f13 ">
              What are you waiting for? Connect with us, to connect to yourself
              and your personal history! Also, get loads of discounts and
              freebies
            </b>
          </h4>
        </Col>
        <Col md={6} className="mx-auto d-flex">
          <Form.Control
            type="text"
            className="customInput asap"
            placeholder="Enter your Email Address"
          />
          <Button
            block
            variant="outline-success"
            className="subsscribeBtn asap ml-2"
          >
            <b>Sign Me Up</b>
          </Button>
        </Col>
      </Row>
    </>
  );
};
