import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CustomNavLink = (props) => {
  return (
    <Link style={{ textDecoration: "none" }} {...props}>
      {props.children}
    </Link>
  );
};
