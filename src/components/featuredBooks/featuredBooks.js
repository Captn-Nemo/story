import React from "react";
import "./featuredBook.css";
import Doodle from "../DoodleComponent/doodle";
import { Card, Row, Col } from "react-bootstrap";
import { CustomNavLink } from "../NavItem/NavItem";
const badge = require("../../assets/images/badge.png");
let colors = [
  "#24aeb3",
  "#fa7600",
  "#fcbc01",
  "#24aeb3",
  "#44b9be",
  "#fcbc01",
  "#24aeb3",
];
let colorsBG = [
  "#c9ebec",
  "#fddbb4",
  "#feeeb2",
  "#24aeb3",
  "#fddbb4",
  "#44b9be",
  "#fddbb4",
];
// let teal = ["#c9ebec", "#4bbcc0"];
// let orange = ["#fddbb4", "#fa8807"];
// let purple = ["#d9c9ec", "#804cbf"];

const books = [
  {
    title: "Go back to school",
    img: require("../../assets/images/books/book1cover.png"),
    desc:
      "A small virus took away all the smiles. Now, all of us are gearing up to re-start our lives in the ‘new normal’. From children to elderly, everyone is experiencing an emotional roller coaster ride. How will the journey from here on be like?",
    age: "4-9",
    price: 30,
    featured: true,
  },
  {
    title: "Happy to go back to school",
    img: require("../../assets/images/books/book1cover.png"),
    desc:
      "After half a year, it is time to dust off the chairs and benches and get back to our old schedules in the ‘new normal’. But there's a rush of emotions. How's life going to be? Is the new normal the ultimate normal?",
    age: "4-9",
    price: 30,
    featured: false,
  },
  {
    title: "Go back to school",
    img: require("../../assets/images/books/book1cover.png"),
    desc:
      "A small virus took away all the smiles. Now, all of us are gearing up to re-start our lives in the ‘new normal’. From children to elderly, everyone is experiencing an emotional roller coaster ride. How will the journey from here on be like?",
    age: "4-9",
    price: 30,
    featured: true,
  },
  {
    title: "Happy to go back to school",
    img: require("../../assets/images/books/book1cover.png"),
    desc:
      "After half a year, it is time to dust off the chairs and benches and get back to our old schedules in the ‘new normal’. But there's a rush of emotions. How's life going to be? Is the new normal the ultimate normal?",
    age: "4-9",
    price: 30,
    featured: false,
  },
  {
    title: "Go back to school",
    img: require("../../assets/images/books/book1cover.png"),
    desc:
      "A small virus took away all the smiles. Now, all of us are gearing up to re-start our lives in the ‘new normal’. From children to elderly, everyone is experiencing an emotional roller coaster ride. How will the journey from here on be like?",
    age: "4-9",
    price: 30,
    featured: true,
  },
  {
    title: "Happy to go back to school",
    img: require("../../assets/images/books/book1cover.png"),
    desc:
      "After half a year, it is time to dust off the chairs and benches and get back to our old schedules in the ‘new normal’. But there's a rush of emotions. How's life going to be? Is the new normal the ultimate normal?",
    age: "4-9",
    price: 30,
    featured: false,
  },
];

const FeaturedBook = (props) => {
  return (
    <>
      <div className="cardsView mx-auto">
        <Row className="mx-auto p-5 d-flex cardcol">
          {books.map((book, i) => {
            return (
              <Col
                md={4}
                sm={12}
                className="d-flex justify-content-center mx-auto mt-4"
              >
                <CustomNavLink to="/projects/storically/book">
                  <Card key={i} className="inner">
                    <div
                      className="imageBlock"
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        backgroundColor: colorsBG[i % books.length],
                      }}
                    >
                      {book.featured && (
                        <img
                          src={badge}
                          style={{
                            width: "20%",
                            height: "50%",
                            position: "absolute",
                            left: "5px",
                            top: "5px",
                          }}
                        />
                      )}
                      {
                        <Doodle
                          fill={colors[i % books.length]}
                          style={{
                            width: "20%",
                            height: "30%",
                            position: "absolute",
                            right: "5px",
                            top: "5px",
                          }}
                        />
                      }
                      <Doodle
                        fill={colors[i % books.length]}
                        style={{
                          width: "20%",
                          height: "20%",
                          position: "absolute",
                          left: "5px",
                          bottom: "5px",
                        }}
                      />

                      <Card.Img
                        src={require("../../assets/images/books/book1cover.png")}
                        className="innerimg my-2"
                        style={{
                          width: "35%",
                          height: "90%",
                          marginLeft: "30%",
                          marginBottom: "30%",
                        }}
                      />
                    </div>

                    <Card.Body className="my-3">
                      <Card.Subtitle className="asapbold mb-2 text-dark font-weight-bold">
                        {book.title}
                      </Card.Subtitle>
                      <Card.Text className="asap text-dark f10">
                        {book.desc}
                      </Card.Text>
                      <Row
                        md={{ span: 12 }}
                        className="d-flex justify-content-between px-3"
                      >
                        <Card.Text
                          className="asap bold"
                          style={{
                            color: colors[i % books.length],
                            alignItems: "flex-end",
                          }}
                        >
                          Age {book.age}
                        </Card.Text>
                        <Card.Text className="asap bold f6 uppercase text-dark">
                          AED{book.price}
                        </Card.Text>
                      </Row>
                    </Card.Body>
                  </Card>
                </CustomNavLink>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default FeaturedBook;
