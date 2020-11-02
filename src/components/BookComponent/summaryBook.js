import React, { Component } from "react";
import BookCarousel from "../carouselComponent";
import Thumbnails from "../thumbnails";
import Bookflip from "../bookflip";
import Popup from "./characterBook";
import { withRouter } from "react-router-dom";
import { Row, Col, Form, Image, Button } from "react-bootstrap";
// import {Popup} from "reactjs-popup";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import style from "./summaryBook.css";
import "../book.css";
import { LandingBg } from "../../containers/yourOwnPage/landingBg";
import { Review } from "../../containers/yourOwnPage/review";
import { CustomButton } from "../customFormElements/customButton";
import { BottomSignUp } from "../../containers/signup";
import { MoreBooks } from "../../containers/browseTitles/moreBooks";
import { FAQ } from "../FAQ/faq";
import { BookLayout, Bookcharacters } from "../../constants/bookLayout";

const left = require("../../assets/images/prod-h-left.png");
const right = require("../../assets/images/header-r-bg.png");
const star = require("../DoodleComponent/star1.svg");
const showBook = require("../../assets/images/show-book.png");
const bookThumb = require("../../assets/images/book-thumb.png");
const info = require("../../assets/images/infotext.png");

// const CustomButton = (props) => {
//   return (
//     <Button
//       {...props}
//       className={props.teal ? "formBtn2" : "formBtn"}
//       style={{ background: props.bg }}
//     >
//       {props.children}
//     </Button>
//   );
// };
class summaryBook extends Component {
  constructor() {
    super();
    this.state = {
      show_preview: false,
      current_name: "Inara",
      current_gender: "f",
      current_age: "5",
      current_fav: "the playground",
      current_character: "girl1",
      showConfirmation: false,
      price: 50,
      loadedBook: BookLayout,
      character: Bookcharacters,
    };
    this.handleBack = this.handleBack.bind(this);
    this.handlePChange = this.handlePChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAChange = this.handleAChange.bind(this);
    this.handleFChange = this.handleFChange.bind(this);
  }
  handleBack() {
    this.state.show_preview &&
      this.setState((prevState) => ({
        show_preview: !prevState.show_preview,
      }));
  }
  handlePChange(event) {
    event.target.innerText === "PREVIEW FULL BOOK" &&
      this.setState((prevState) => ({
        show_preview: !prevState.show_preview,
      }));
    if (this.state.show_preview) {
      this.setState({ showConfirmation: true });
    }
  }
  handleChange(event) {
    this.setState({ current_name: event.target.value });
  }
  handleAChange(event) {
    this.setState({ current_age: event.target.value });
  }
  handleFChange(event) {
    if (event.target.value == "null") return;
    else this.setState({ current_fav: event.target.value });
  }

  handleConfirm = () => {};
  handleCancel = () => {
    this.setState({ showConfirmation: false });
  };
  componentDidMount() {
    document.querySelector("body").scrollTo(0, 0);
  }
  render() {
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
            style={{ display: this.state.show_preview ? "flex" : "none" }}
            className=""
            sm={12}
          >
            {this.state.showConfirmation ? (
              <div className="popUpDiv mx-auto">
                <Row className="px-2">
                  <Col className="mx-auto d-flex flex-column justify-content-center">
                    <h3 className="f2 text-center">Confirm Book Details</h3>
                    <p>Name : {this.state.current_name}</p>
                    <p>Age : {this.state.current_age}</p>
                    <p>Favorite Thing : {this.state.current_fav}</p>
                    <Row>
                      <Col lg={6}>
                        <a href="/projects/storically/book/payment">
                          <CustomButton
                            className="modalbtn f111"
                            block
                            orange
                            style={{ cursor: "pointer" }}
                          >
                            Confirm
                          </CustomButton>
                        </a>
                      </Col>
                      <Col lg={6}>
                        <CustomButton
                          block
                          orange
                          className="modalbtn f111"
                          onClick={() => this.handleCancel()}
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
              style={{ display: this.state.show_preview ? "flex" : "none" }}
            >
              <Bookflip
                key="1"
                loadedBook={this.state.loadedBook}
                kid={this.state.current_character}
                gender={this.state.current_gender}
                fname={this.state.current_name}
                age={this.state.current_age}
                fav={this.state.current_fav}
              />
            </div>
          </Col>
          <Col
            lg={5}
            className="mt-4"
            style={{
              display: this.state.show_preview ? "none" : "block",
            }}
          >
            <Row className="d-flex justify-content-center align-items-center mx-auto">
              <Col className="d-flex justify-content-center align-items-center mx-auto">
                <div
                  className="gallery-Book"
                  style={{
                    display: this.state.show_preview ? "none" : "block",
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
            style={{ display: this.state.show_preview ? "none" : "block" }}
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
                          // checked={form.who === "A CHILD" ? true : false}
                          name="price"
                          id="formHorizontalRadios1"
                          // onChange={(e) => inputHandler(e)}
                        />
                        <span className="asapbold f2 bold teal radioText">
                          E-book: AED 50
                        </span>
                      </div>

                      <div className="d-flex align-items-center">
                        <Form.Check
                          type="radio"
                          // label="A CHILD"
                          value="printed"
                          className="amatic"
                          // checked={form.who === "A CHILD" ? true : false}
                          name="price"
                          id="formHorizontalRadios2"
                          // onChange={(e) => inputHandler(e)}
                        />
                        <span className="asapbold f2 bold teal radioText">
                          Printed: AED 50
                        </span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p className="asap bold f1 subtitle p-4 Cborder">
                        Everything was going so well. Everybody was enjoying
                        their life. One fine day, our lives changed. For six
                        months, nobody went to work, school, shopping malls,
                        playgrounds nor met their friends and relatives. But
                        now, it is time to go back to the school in the ‘new
                        normal’, along with my new best friend’s, mask and
                        sanitizer. How will the journey be? I am excited,
                        nervous, and scared. But altogether, I am happy!
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
                  //   defaultValue={this.state.current_name}
                  onChange={this.handleChange}
                />
              </Col>
              <Col lg={12}>
                <Form.Control
                  type="text"
                  name="age"
                  className="custom amatic"
                  placeholder="AGE (NUMBER)"
                  pattern="[0-9]*"
                  onChange={this.handleAChange}
                />
              </Col>
            </Row>
          </Col>
          <Col style={{ padding: "1%" }} sm={12} lg={4} className="mt-sm-2">
            <Row>
              {this.state.character.map((c, index1) => (
                <>
                  <Col lg={6} sm={12} xs={12} className="d-flex">
                    <Popup kid="Boy" block>
                      <div className="book-characters mx-auto">
                        {c.boy.map((boy, index) => (
                          <div key={index} className="p-2">
                            <img
                              onClick={() =>
                                this.setState({
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
                                this.setState({
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

                  {console.log(this.state.show_preview)}
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
                  onChange={this.handleFChange}
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
              onClick={this.handlePChange}
            >
              {this.state.show_preview ? "BUY" : "PREVIEW FULL BOOK"}
            </CustomButton>
          </Col>
        </Row>

        {/* <div className="summaryBottom-Book" style={{ alignItems: "center" }}>
          <img
            src={require(`../../assets/books/Back to School/${this.state.current_character}.png`)}
            alt={this.state.current_character}
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
  }
}

export default withRouter(summaryBook);
