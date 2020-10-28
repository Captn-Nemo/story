import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "./button";
import TextBox from "./TextBox";

/*let genre=['Happy','Sad','Funny incident','Inspirational','Struggle & triumph','Other'];*/
let yellow = ["#feeeb2", "#fdc700"];
let teal = ["#c9ebec", "#4bbcc0"];
let orange = ["#fddbb4", "#fa8807"];
//let purple=["#d9c9ec","#804cbf"];

const Contact = (props) => {
  return (
    <Row className="d-flex justify-content-center">
      <Col md={{ span: 12, offset: 6 }}>
        <div id="contact" className="contact">
          <TextBox cnt="1" txt="Name" col={yellow} />
          <TextBox cnt="2" txt="Email" col={teal} />
          <TextBox cnt="3" txt="Phone" col={orange} />

          <div className="formelement">
            <div className="message">
              <textarea className="patrickhand" defaultValue="Message" />
            </div>
          </div>
          <div style={{ margin: "auto auto", padding: "10px" }}>
            <Button lbl="Send" />
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default Contact;
