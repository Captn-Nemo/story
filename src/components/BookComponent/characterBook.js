import React from "react";
import { Button } from "react-bootstrap";
import Popup from "reactjs-popup";

import "./summaryBook.css";
export default (props) => (
  <Popup
    trigger={
      <button className="btnC amatic" {...props} style={{ margin: "5px" }}>
        {props.kid}
      </button>
    }
    position="top center"
    on="hover"
    closeOnDocumentClick={true}
  >
    <div>{props.children}</div>
  </Popup>
);
