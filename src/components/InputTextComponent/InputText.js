import React from "react";
import "./InputText.css";
import bg from "./bg.svg";
import bgTeal from "./bgteal.svg";
import bgOrange from "./bgorange.svg";
import bgPurple from "./bgpurple.svg";
import bgYellow from "./bgyellow.svg";

function inputTextDefault(props) {
  return (
    <div className="inputForm" style={{ backgroundImage: "url(" + bg + ")" }}>
      <img
        src={props.icon}
        style={{ left: props.dir === "left" ? "0" : "90%" }}
        alt=""
      />
      <input
        type="text"
        className="inputText"
        placeholder={props.holder}
        {...props}
      />
    </div>
  );
}

function inputTextTeal(props) {
  return (
    <div
      className="inputForm"
      style={{ backgroundImage: "url(" + bgTeal + ")" }}
    >
      <img
        src={props.icon}
        style={{ left: props.dir === "left" ? "0" : "90%" }}
        alt=""
      />
      <input type="text" className="inputText" placeholder={props.holder} />
    </div>
  );
}

function inputTextOrange(props) {
  return (
    <div
      className="inputForm"
      style={{ backgroundImage: "url(" + bgOrange + ")" }}
    >
      <img
        src={props.icon}
        style={{ left: props.dir === "left" ? "0" : "90%" }}
        alt=""
      />
      <input type="text" className="inputText" placeholder={props.holder} />
    </div>
  );
}

function inputTextPurple(props) {
  return (
    <div
      className="inputForm"
      style={{ backgroundImage: "url(" + bgPurple + ")" }}
    >
      <img
        src={props.icon}
        style={{ left: props.dir === "left" ? "0" : "90%" }}
        alt=""
      />
      <input type="text" className="inputText" placeholder={props.holder} />
    </div>
  );
}

function inputTextYellow(props) {
  return (
    <div
      className="inputForm"
      style={{ backgroundImage: "url(" + bgYellow + ")" }}
    >
      <img
        src={props.icon}
        style={{ left: props.dir === "left" ? "0" : "90%" }}
        alt=""
      />
      <input type="text" className="inputText" placeholder={props.holder} />
    </div>
  );
}

function InputText(props) {
  switch (props.col) {
    case "Teal":
      return inputTextTeal(props);
    case "Orange":
      return inputTextOrange(props);
    case "Yellow":
      return inputTextYellow(props);
    case "Purple":
      return inputTextPurple(props);
    default:
      return inputTextDefault(props);
  }
}

export default InputText;
