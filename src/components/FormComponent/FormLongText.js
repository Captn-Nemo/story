import React from "react";
import "./forms.css";
import Button from "./button";
import { Row, Col } from "react-bootstrap";

const AreaForm = (props) => {
  return (
    <Row className="align-items-center">
      <Col>
        <div className="formlongtext">
          <div className="longtext">
            <textarea
              {...props}
              className="patrickhand f2"
              placeholder="Please type your story here.."
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

export default AreaForm;
