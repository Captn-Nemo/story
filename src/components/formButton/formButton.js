import React from "react";
import { Button } from "react-bootstrap";
import "./formButton.css";
export const FormButton = (props) => {
  return (
    <Button
      className={`formButton amatic ${props.className}`}
      block
      style={{
        borderColor: props.color,
        color: props.color,
        background: "#fff",
        borderRadius: 100,
        fontSize: 40,
      }}
    >
      {props.title}
    </Button>
  );
};
