import React, { useState, useEffect } from "react";
import BookCarousel from "../carouselComponent";
import Bookflip from "../bookflip";
import Popup from "./characterBook";
import { useHistory, withRouter } from "react-router-dom";
import { Row, Col, Form, Image, Button } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../book.css";
import { LandingBg } from "../../containers/yourOwnPage/landingBg";
import { Review } from "../../containers/yourOwnPage/review";
import { CustomButton } from "../customFormElements/customButton";
import { BottomSignUp } from "../../containers/signup";
import { MoreBooks } from "../../containers/browseTitles/moreBooks";
import { FAQ } from "../FAQ/faq";
import { BookLayout, Bookcharacters } from "../../constants/bookLayout";
import { batch, useDispatch } from "react-redux";
import { addBookMode, addNormalOrder, addOrderType } from "../../store/actions";

const left = require("../../assets/images/prod-h-left.png");
const right = require("../../assets/images/header-r-bg.png");
const star = require("../DoodleComponent/star1.svg");

const SummaryBook = () => {
  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    show_preview: false,
    current_name: "Inara",
    current_gender: "f",
    current_age: "5",
    current_fav: "the playground",
    current_character: "girl1",
    book_mode: "e-book",
    showConfirmation: false,
    price: BookLayout[0].price,
    loadedBook: BookLayout,
    character: Bookcharacters,
  });

  const handleBack = () => {
    state.show_preview &&
      setState((prevState) => ({
        show_preview: !prevState.show_preview,
      }));
  };
  const handlePChange = (event) => {
    event.target.innerText === "PREVIEW FULL BOOK" &&
      setState((prevState) => ({
        ...state,
        show_preview: !prevState.show_preview,
      }));
    if (state.show_preview) {
      setState({ ...state, showConfirmation: true });
    }
  };
  const handleChange = (event) => {
    setState({ ...state, current_name: event.target.value });
  };
  const handleAChange = (event) => {
    setState({ ...state, current_age: event.target.value });
  };
  const handleFChange = (event) => {
    if (event.target.value == "null") return;
    else setState({ ...state, current_fav: event.target.value });
  };
  const handleCheckBox = (event) => {
    setState({ ...state, book_mode: event.target.value });
  };
  const handleConfirm = () => {
    localStorage.setItem("book_mode", state.book_mode);
    batch(() => {
      dispatch(addBookMode(state.book_mode));
      dispatch(addOrderType(1));
      localStorage.setItem(
        "normalBook",
        JSON.stringify({
          order_type: 1,
          price: state.price,
          b_title: BookLayout[0].title,
          mode: state.book_mode,
          age: state.current_age,
          place: state.current_fav,
        })
      );
      dispatch(
        addNormalOrder({
          order_type: 1,
          price: state.price,
          b_title: BookLayout[0].title,
          mode: state.book_mode,
          age: state.current_age,
          place: state.current_fav,
        })
      );
    });
    history.push("/projects/storically/book/payment");
  };
  const handleCancel = () => {
    setState({ ...state, showConfirmation: false });
  };

  return (
    <>
      <Row className="mt-3 d-flex justify-content-between">
        <Col lg={1}>
          <Image
            src={left}
            className="d-sm-none d-xs-none d-lg-block d-none d-lg-block"
            width="260%"
            style={{ position: "absolute", bottom: 0 }}
          />
        </Col>
        <Col
          lg={6}
          style={{ display: state.show_preview ? "flex" : "none" }}
          className=""
          sm={12}
        >
          {state.showConfirmation ? (
            <div className="popUpDiv mx-auto">
              <Row className="px-2">
                <Col className="mx-auto d-flex flex-column justify-content-center">
                  <h3 className="f2 text-center">Confirm Book Details</h3>
                  <p>Name : {state.current_name}</p>
                  <p>Age : {state.current_age}</p>
                  <p>Favorite Thing : {state.current_fav}</p>
                  <Row>
                    <Col lg={6}>
                      <CustomButton
                        className="modalbtn f111"
                        block
                        orange
                        style={{ cursor: "pointer" }}
                        onClick={() => handleConfirm()}
                      >
                        Confirm
                      </CustomButton>
                    </Col>
                    <Col lg={6}>
                      <CustomButton
                        block
                        orange
                        className="modalbtn f111"
                        onClick={() => handleCancel()}
                        // style={{ marginLeft: "39px", cursor: "pointer" }}
                      >
                        Cancel
                      </CustomButton>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          ) : null}
          <div
            className="book-flip mt-5 mb-2"
            style={{ display: state.show_preview ? "flex" : "none" }}
          >
            <Bookflip
              key="1"
              loadedBook={state.loadedBook}
              kid={state.current_character}
              gender={state.current_gender}
              fname={state.current_name}
              age={state.current_age}
              fav={state.current_fav}
            />
          </div>
        </Col>
        <Col
          lg={5}
          className="mt-4"
          style={{
            display: state.show_preview ? "none" : "block",
          }}
        >
          <Row className="d-flex justify-content-center align-items-center mx-auto">
            <Col className="d-flex justify-content-center align-items-center mx-auto">
              <div
                className="gallery-Book"
                style={{
                  display: state.show_preview ? "none" : "block",
                }}
              >
                <BookCarousel />
              </div>
            </Col>
          </Row>
        </Col>
        <Col
          lg={4}
          className="my-4 mx-auto"
          style={{ display: state.show_preview ? "none" : "block" }}
        >
          <div>
            <Row>
              <Col className="ml-2">
                <Row>
                  <Col>
                    <span className="asapbold f3 text-center">
                      Go back to School!
                    </span>
                  </Col>
                </Row>
                <Row className="px-2 my-2">
                  <Col className="d-flex flex-column">
                    <div className="d-flex align-items-center">
                      <Form.Check
                        type="radio"
                        value="e-book"
                        checked={state.book_mode === "e-book" ? true : false}
                        name="price"
                        id="formHorizontalRadios1"
                        onChange={(e) => handleCheckBox(e)}
                      />
                      <span className="asapbold f2 bold teal radioText">
                        E-book: AED {`${state.price}`}
                      </span>
                    </div>

                    <div className="d-flex align-items-center">
                      <Form.Check
                        type="radio"
                        value="printed"
                        checked={state.book_mode === "printed" ? true : false}
                        className="amatic"
                        name="price"
                        id="formHorizontalRadios2"
                        onChange={(e) => handleCheckBox(e)}
                      />
                      <span className="asapbold f2 bold teal radioText">
                        Printed: AED {`${state.price}`}
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="asap bold f1 subtitle p-4 Cborder">
                      Everything was going so well. Everybody was enjoying their
                      life. One fine day, our lives changed. For six months,
                      nobody went to work, school, shopping malls, playgrounds
                      nor met their friends and relatives. But now, it is time
                      to go back to the school in the ‘new normal’, along with
                      my new best friend’s, mask and sanitizer. How will the
                      journey be? I am excited, nervous, and scared. But
                      altogether, I am happy!
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="mt-5">
                    <p className="galleryMsg-Book">25 Pages</p>
                    <p className="galleryMsg-Book">Dimensions</p>
                    <p className="galleryMsg-Book">Age 4-8</p>
                    <p className="galleryMsg-Book">
                      Preview all the pages before buying.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
        <Col
          lg={2}
          sm={false}
          xs={false}
          className="justify-content-end d-sm-none d-xs-none d-lg-block d-none d-lg-block"
          style={{ margin: 0, padding: 0 }}
        >
          <Image
            src={right}
            width="80%"
            height="100%"
            fluid
            style={{
              position: "absolute",
              right: 0,
              top: "20%",
            }}
            className="d-sm-none d-xs-none d-lg-block d-none d-lg-block"
          />
          <Image
            src={star}
            className="mt-5 d-sm-none d-xs-none d-lg-block d-none d-lg-block"
            width="40%"
            style={{
              position: "absolute",
              bottom: 50,
              right: 30,
            }}
          />
        </Col>
      </Row>
      <Row className="formRow p-5 d-flex justify-content-around ">
        <Col lg={3} sm={12} className="mt-3">
          <Row>
            <Col lg={12}>
              <Form.Control
                type="text"
                className="amatic custom font-weight-bold"
                placeholder="Name"
                type="text"
                name="name"
                //   defaultValue={state.current_name}
                onChange={handleChange}
              />
            </Col>
            <Col lg={12}>
              <Form.Control
                type="text"
                name="age"
                className="custom amatic"
                placeholder="AGE (NUMBER)"
                pattern="[0-9]*"
                onChange={handleAChange}
              />
            </Col>
          </Row>
        </Col>
        <Col style={{ padding: "1%" }} sm={12} lg={4} className="mt-sm-2">
          <Row>
            {state.character.map((c, index1) => (
              <>
                {console.log(c)}
                <Col lg={6} sm={12} xs={12} className="d-flex">
                  <Popup kid="Boy" block>
                    <div className="book-characters mx-auto">
                      {c.boy.map((boy, index) => (
                        <div key={index} className="p-2">
                          <img
                            onClick={() =>
                              setState({
                                ...state,
                                current_gender: "m",
                                current_character: boy.boy,
                              })
                            }
                            src={boy.face}
                            alt="boy character"
                          />
                        </div>
                      ))}
                    </div>
                  </Popup>
                </Col>
                <Col lg={6} className="d-flex">
                  <Popup kid="Girl" block>
                    <div
                      className="book-characters mx-auto"
                      // style={{ backgroundColor: "#d9c9ec" }}
                    >
                      {c.girl.map((girl, index) => (
                        <div key={index} className="p-2">
                          <img
                            onClick={() =>
                              setState({
                                ...state,
                                current_gender: "f",
                                current_character: girl.girl,
                              })
                            }
                            key={index}
                            src={girl.face}
                            alt="girl character"
                          />
                        </div>
                      ))}
                    </div>
                  </Popup>
                </Col>

                {console.log(state.show_preview)}
              </>
            ))}
            <Col style={{ padding: "4%" }} lg={12} sm={12} className="d-flex">
              {/* <CustomButton block>FAVOURITE SCHOOL ZONE</CustomButton> */}

              <Form.Control
                as="select"
                size="lg"
                block
                className="customSelect amatic"
                name="fav"
                id="fav"
                onChange={handleFChange}
              >
                <option value="null"> FAVOURITE SCHOOL ZONE</option>
                <option value="the playground">Playground</option>
                <option value="the library">Library</option>
                <option value="my teacher">My Teacher</option>
                <option value="my classroom">My Classroom</option>
              </Form.Control>
              <br />
            </Col>
          </Row>
        </Col>
        <Col
          style={{
            paddingLeft: "1%",
            paddingRight: "1%",
            paddingTop: "1.5%",
          }}
          lg={3}
          className="mt-sm-2"
        >
          <CustomButton
            block
            // size="lg"
            className="amatic btnC bgteal BtnC2"
            teal={true}
            onClick={handlePChange}
          >
            {state.show_preview ? "BUY" : "PREVIEW FULL BOOK"}
          </CustomButton>
        </Col>
      </Row>

      {/* <div className="summaryBottom-Book" style={{ alignItems: "center" }}>
          <img
            src={require(`../../assets/books/Back to School/${state.current_character}.png`)}
            alt={state.current_character}
            height="100%"
          />
        </div> */}
      <section>
        <LandingBg />
      </section>
      <section>
        <Review />
      </section>
      <section className="mt-5">
        <FAQ />
      </section>
      <section>
        <MoreBooks />
      </section>
      <section className="mt-5">
        <BottomSignUp />
      </section>
    </>
  );
};
export default withRouter(SummaryBook);
