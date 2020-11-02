import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { CustomButton } from "../../components/customFormElements/customButton";
import FeaturedBook from "../../components/featuredBooks/featuredBooks";
import { FormButton } from "../../components/formButton/formButton";
import { CustomNavLink } from "../../components/NavItem/NavItem";
import { BottomSignUp } from "../../containers/signup";
import "./templates.css";
const Doodlebar = require("../../assets/images/doodlesBar.svg");
const headerImg = require("../../assets/images/browseHeader.png");
const lamp = require("../../assets/images/lampGuided.png");
const margins = { marginBottom: "2%" };
const marginTB = { marginBottom: "3%", marginTop: "3%" };
const marginTB2 = { marginBottom: "5%", marginTop: "5%" };

export const Templates = () => {
  React.useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="headerSection mt-2 bgyellow pt-4">
        <Row>
          <Col className="d-none  d-sm-none d-xs-none d-md-none d-lg-block d-lg-flex justify-content-lg-center align-items-lg-center px-5">
            <p className="amatic f3 text-white text-uppercase">
              It is the stories that make us think, wonder, dream and motivate
              us to create something new and innovative. It is the stories that
              make us who we are! It is time to write your own storybook, my
              friend!
            </p>
          </Col>
          <Col className="justify-content-end">
            <Image src={headerImg} fluid width="100%" />
          </Col>
        </Row>
      </section>
      <section>
        <Row style={marginTB} className="px-3 d-flex align-items-center">
          <Col
            lg={4}
            className="d-flex justify-content-center align-items-center"
          >
            <CustomButton className="amatic ageBtn f2"> 0 -3 </CustomButton>
          </Col>
          <Col
            lg={4}
            className="d-flex justify-content-center align-items-center"
          >
            <CustomButton teal className="amatic f17a ageBtn">
              {" "}
              4-8{" "}
            </CustomButton>
          </Col>
          <Col
            lg={4}
            className="d-flex justify-content-center align-items-center"
          >
            <CustomButton orange className="amatic f17a ageBtn">
              {" "}
              9-12{" "}
            </CustomButton>
          </Col>
        </Row>
        <FeaturedBook />
        <Col
          lg={12}
          style={marginTB2}
          className="d-flex justify-content-center align-items-center"
        >
          <Image
            width="100%"
            fluid
            height="70px"
            id="featured-m"
            src={Doodlebar}
            alt=""
          />
        </Col>
      </section>
      <section>
        <Row className="tealbg mt-5 d-flex justify-content-md-around align-items-center">
          <Col
            lg={4}
            className="d-sm-none d-xs-none d-md-none d-none d-lg-block"
          >
            <Image src={lamp} fluid className="lamp" width="100%" />
          </Col>
          <Col
            lg={6}
            className="smalldiv px-5 mx-auto d-xs-flex d-sm-flex flex-column flex-sm-column flex-xs-column justify-content-sm-center align-items-sm-center justify-content-xs-center align-items-xs-center mt-4"
          >
            <div className="smalldiv">
              <CustomNavLink
                to="/projects/storically/yourown/guided"
                className="fBtn"
              >
                <FormButton title="GUIDED" color="#804cbf" className="fBtn" />
              </CustomNavLink>
              <CustomNavLink to="/projects/storically/yourown" className="fBtn">
                <FormButton
                  title="TYPE IN LONG FORM"
                  color="#804cbf"
                  className="fBtn"
                />
              </CustomNavLink>
              <CustomNavLink to="/projects/storically/yourown" className="fBtn">
                <FormButton
                  title="AUDIO INPUT"
                  color="#804cbf"
                  className="fBtn"
                />
              </CustomNavLink>
            </div>

            {/* <FormButton title="AUDIO INPUT" color="#804cbf" className="fBtn" /> */}
          </Col>
        </Row>
      </section>
      <section className="mt-5 p-2">
        <BottomSignUp />
      </section>
    </>
  );
};
