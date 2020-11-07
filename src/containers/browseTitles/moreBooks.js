import React from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import FeaturedBook from "../../components/featuredBooks/featuredBooks";
import MoreBooksView from "../../components/featuredBooks/moreBooksView";
import "./titles.css";
const Doodlebar = require("../../assets/images/doodlesBar.svg");
export const MoreBooks = () => {
  return (
    <>
      <div className="wrapper2 mt-5">
        <Row className="titleDiv doodleImg py-3">
          <Col
            md={1}
            className="d-flex align-items-center justify-content-center"
          ></Col>
          <Col
            md={10}
            className="text-center d-flex align-items-center justify-content-center p-2"
          >
            <span className="chelsea white  align-middle  f3">
              MORE STORICALLY BOOKS
            </span>
          </Col>
          <Col
            md={1}
            className="d-flex align-items-center justify-content-center"
          ></Col>
        </Row>

        <MoreBooksView />
      </div>
    </>
  );
};
