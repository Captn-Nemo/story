import React from "react";
import { Button } from "react-bootstrap";
import "./style.css";

export const CustomButton = (props) => {
  return (
    <Button
      {...props}
      className={
        props.teal
          ? `formBtn2 ${props.className}`
          : props.orange
          ? `formBtn3 ${props.className}`
          : props.yellow
          ? `formBtn ${props.className}`
          : `formBtn ${props.className}`
      }
      style={{ background: props.bg }}
    >
      {props.children}
    </Button>
  );
};
