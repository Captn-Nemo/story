import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { CustomButton } from "../customFormElements/customButton";
import "./contact.css";
export const ContactFragment = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mx-auto">
      <h2 className="chelsea f3 text-center teal">ANY QUESTIONS ?</h2>
      <h2
        className="amatic f3 text-justify text-center"
        style={{ width: "100%" }}
      >
        CONTACT US , WE WILL BE HAPPY TO HELP YOU WITH ANYTHING
      </h2>
      <CustomButton orange bg="#fa8807" className="amatic btnCy">
        CONTACT
      </CustomButton>
    </div>
  );
};
