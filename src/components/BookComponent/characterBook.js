import React from "react";
import { Button } from "react-bootstrap";
import Popup from "reactjs-popup";

import "./summaryBook.css";
export default (props) => (
  <Popup
    trigger={
      <Button
        size="lg"
        className="btnC amatic bgyellow"
        {...props}
        style={{ margin: "5px", backgroundColor: "#fdc700" }}
      >
        {props.kid}
      </Button>
    }
    position="top center"
    on="hover"
    closeOnDocumentClick={true}
  >
    <div>{props.children}</div>
  </Popup>
);
