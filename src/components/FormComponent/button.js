import React from "react";
import "./forms.css";
const Button = (props) => {
  return (
    <button
      type="button"
      className="amatic custom"
      style={{ fontSize: props.size, backgroundColor: "white" }}
    >
      {props.lbl}
    </button>
  );
};

export default Button;
