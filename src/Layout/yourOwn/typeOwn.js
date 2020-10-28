import React, { useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./typeYourOwn.css";
import Form from "../../components/FormComponent/FormLongText";
import { CustomButton } from "../../components/customFormElements/customButton";
import { BottomSignUp } from "../../containers/signup";
import { ContactFragment } from "../../components/smallContact/contact";
const brushL = require("../../components/DoodleComponent/pen.svg");
// const Doodlebar = require("../../assets/images/doodlesBar.svg");
const lamp = require("../../assets/images/lamp.png");
const lamp2 = require("../../assets/images/lamp2.png");
export const TypeYourOwn = () => {
  React.useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="mt-2" id="longFormText">
        <Row>
          <Col className="d-flex flex-row-reverse align-items-center">
            <img src={brushL} height="70%" className="pen" />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <h1 className="text-center style amatic f24 teal font-weight-bold">
              TYPE IN LONG FORM
            </h1>
          </Col>
          <Col className="d-flex align-items-center">
            <img src={brushL} height="70%" className="brushT pen" />
          </Col>
        </Row>
        <Row>
          <Col className="bg-warning d-flex flex-column px-5">
            <h2 className="chelsea f14a white text-white text-center">
              Instructions
            </h2>
            <div className="mx-auto ins">
              <ul className="font-weight-bold mx-auto">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </section>
      <section className="mt-5">
        <Form />
      </section>
      <section className="options mx-auto">
        <Row className="p-4">
          <Col
            md={4}
            sm={12}
            className="column d-flex justify-content-center align-items-center"
          >
            <CustomButton className="custonBtn amatic">
              {" "}
              FONT SIZE{" "}
            </CustomButton>
          </Col>
          <Col
            md={4}
            sm={12}
            className=" column d-flex justify-content-center align-items-center"
          >
            <CustomButton className="custonBtn amatic">OPTION 2</CustomButton>
          </Col>
          <Col
            md={4}
            sm={12}
            className="column d-flex justify-content-center align-items-start"
          >
            <CustomButton className="custonBtn amatic"> OPTION 3 </CustomButton>
          </Col>
          <Col
            md={4}
            sm={12}
            className="column d-flex justify-content-center align-items-center"
          >
            <CustomButton className="custonBtn amatic">
              &nbsp;&nbsp;&nbsp;&nbsp;SAVE &nbsp;&nbsp;&nbsp;&nbsp;
            </CustomButton>
          </Col>
          <Col
            md={4}
            sm={12}
            className="column d-flex justify-content-center align-items-center"
          >
            <CustomButton className="custonBtn amatic"> ADD PAGE </CustomButton>
          </Col>
          <Col
            md={4}
            sm={12}
            className="column d-flex justify-content-center align-items-center"
          >
            <CustomButton teal={true} className="custonBtn amatic">
              {" "}
              &nbsp;&nbsp;SUBMIT&nbsp;&nbsp;
            </CustomButton>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            {/* <img
              width="100%"
              height="50px"
              id="guide-m"
              src={Doodlebar}
              alt=""
            /> */}
          </Col>
        </Row>
      </section>
      <section className="my-5">
        <Row>
          <Col className="d-flex flex-column justify-content-center align-items-center p-5 mx-auto">
            <div className="p-5">
              <ContactFragment />
            </div>
          </Col>
          <Col className=" justify-content-center align-items-center d-none d-lg-block">
            <Image src={lamp2} fluid />
          </Col>
        </Row>
      </section>
      <section>
        <BottomSignUp />
      </section>
    </>
  );
};
