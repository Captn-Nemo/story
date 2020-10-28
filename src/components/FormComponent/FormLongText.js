import React from "react";
import "./forms.css";
import Button from "./button";
import { Row, Col } from "react-bootstrap";

const Form = (props) => {
  return (
    <Row className="align-items-center">
      <Col>
        <div className="formlongtext">
          <div className="longtext">
            <textarea
              className="patrickhand"
              defaultValue="Please type your story here.."
            />
          </div>
          {/* <div className="submission">
            <Button lbl="Submit" />
          </div> */}
        </div>
      </Col>
    </Row>
  );
};

export default Form;
