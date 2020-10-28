import React from "react";
import { Button } from "react-bootstrap";
import "./style.css";

export const CustomButtonLong = (props) => {
  return (
    <Button
      block
      style={{ width: "100%" }}
      {...props}
      className={
        props.teal
          ? `formBtn2 ${props.className}`
          : props.orange
          ? `formBtn3 ${props.className}`
          : `formBtn ${props.className}`
      }
      style={{ background: props.bg }}
    >
      {props.children}
    </Button>
  );
};
