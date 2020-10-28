import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Button from "../../components/FormComponent/button";
import { CustomButton } from "../customFormElements/customButton";
import { CustomNavLink } from "../NavItem/NavItem";
import { ScrollNavLink } from "../ScrollLink/ScrollLink";
import "./header.css";
const Frame1 = require("../../assets/images/headerLeft.jpg");
const Frame2 = require("../../assets/images/CEL.png");
const Frame3 = require("../../assets/images/bottom.jpg");
const Frame4 = require("../../assets/images/DOODLES.png");
const Book = require("../../assets/images/Boutline.svg");

export const HeaderTop = () => {
  return (
    <>
      <div className="d-flex flex-column aling-items-end mt-5">
        <div className="header-holder px-4 py-2">
          <img src={Frame1} width="100%" />
          {/* <img src={arrow} width="10%" className="arrow" /> */}
          <button className="discover amatic">Discover</button>
        </div>
        <div className="centerel bg-info">
          <div className="bgImg d-flex justify-content-end align-items-center">
            <Image src={Book} fluid width="80%" />
          </div>
          <div className="centerElements bg-success">
            <div className="">
              <Image src={Frame2} className="cTitle" />
            </div>
            <div className="d-flex py-2 btnwrap bg-danger">
              <button
                className="btnc amatic font-weight-bold"
                onClick={() =>
                  document.getElementById("BrowseTitles").scrollIntoView(true)
                }
              >
                {" "}
                <b>browse titles</b>
              </button>

              <button
                className="btnc amatic left"
                onClick={() =>
                  window.location.replace("/projects/storically/yourown")
                }
              >
                <b>share your story</b>
              </button>
            </div>
          </div>
        </div>
        <div className="header-holderBottom px-4 py-2">
          <img src={Frame3} width="100%" />
        </div>
      </div>
    </>
  );
};
