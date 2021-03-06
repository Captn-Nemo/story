import React, { useState, useRef } from "react";
import { Row, Col, Image, Accordion, Form, Collapse } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CustomButton } from "../../components/customFormElements/customButton";
import { CustomButtonLong } from "../../components/customFormElements/customButton2";
import InputText from "../../components/InputTextComponent/InputText";
import { ContactFragment } from "../../components/smallContact/contact";
import { BottomSignUp } from "../../containers/signup";
import { addGuidedBook } from "../../store/actions";
import "./guided.css";
const arrow = require("../../components/DoodleComponent/arrow2.svg");
const lamp = require("../../assets/images/lamponly.svg");
const girl = require("../../assets/images/girlGuide.svg");
const Doodlebar = require("../../assets/images/doodlesBar.svg");
const NAW = require("../../assets/images/NAW.png");
const WN = require("../../assets/images/WN.png");
const WH = require("../../assets/images/wecanhelp.png");
const clearState = {
  name: "",
  email: "",
  who: "",
  narrate: "",
  when: "",
  what: "",
  why: "",
  more: "",
};
export const Guided = () => {
  React.useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const [form, setForm] = useState(clearState);
  const [tabs, setTabs] = useState({
    tab1: false,
    tab2: false,
    tab3: false,
    tab4: false,
    tab5: false,
    tab6: false,
    tab7: false,
  });

  const inputHandler = (e) => {
    e.persist();
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const scrollToRef = (id) =>
    document.getElementById(id).scrollIntoView({ block: "center" });
  function checkProperties(data) {
    return Object.values(data).every((o) => o !== "");
  }
  const submitForm = () => {
    if (!checkProperties(form)) alert("please Fill all the fields");
    else {
      setTimeout(() => {
        dispatch(addGuidedBook(form));
        alert("Data added Successfully");
      }, 1500);
    }
  };

  return (
    <>
      <section className="mt-2">
        <Row>
          <Col className="d-flex flex-row-reverse align-items-center">
            <img src={arrow} height="70%" className="pen rotate" />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <h1 className="text-center style amatic f24 teal font-weight-bold">
              GUIDED
            </h1>
          </Col>
          <Col className="d-flex align-items-center">
            <img src={arrow} height="70%" className=" brush pen" />
          </Col>
        </Row>
        <Row>
          <Col className="bg-warning d-flex flex-column px-5">
            <h2 className="chelsea f14a white text-white text-center">
              Instructions:
            </h2>
            <h6 className="chelsea f14a white text-white text-center">
              Share the real ‘you’ with your loved ones through authentic
              stories from your life, culture and heritage. The process of
              writing your own story is super fun and simple. All you have to do
              is just follow this guide.
            </h6>

            <div className="mx-auto ins">
              <ul className="font-weight-bold mx-auto">
                <li>
                  Step 1- Select your audience- To whom would you like to
                  narrate this story?
                </li>
                <li>
                  Step 2- Select the genre- What would you like to narrate?
                </li>
                <li>
                  Step 3- Answer the questions and start writing your story.
                </li>
                <li>
                  Step 4- Once you are done, click on the review button to go
                  over what you have typed. If everything seems good, then
                  simply click on the submit button.
                </li>
                <li>
                  Step 5- Sit back and relax, while we do our magic and create a
                  personalized book for you.
                </li>
                <li>
                  This process can take 5-10 working days. We will be in touch
                  with you and in case if we need some information, we will
                  contact you.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </section>
      <section className="mt-4">
        <Row className="textRow" style={{ paddingHorizontal: 20 }}>
          <Col
            md={4}
            className="mx-auto d-flex justify-content-center justify-content-xs-center end align-items-center my-5"
          >
            <Image fluid src={NAW} />
          </Col>
          <Col
            md={4}
            className="d-flex justify-content-center align-items-center my-5"
          >
            <Image fluid src={WN} />
          </Col>
          <Col
            md={4}
            className="d-flex justify-content-center align-items-center my-5"
          >
            <Image fluid src={WH} />
          </Col>
        </Row>
      </section>
      <section>
        <Row className="mx-auto mt-5  my-row">
          <Col md={4} className="mb-3">
            {" "}
            <Form.Control
              type="text"
              placeholder="NAME"
              name="name"
              required
              value={form.name}
              className="amatic guidedInput "
              onChange={(e) => inputHandler(e)}
            />{" "}
          </Col>
          <Col md={8} className="mb-3">
            {" "}
            <Form.Control
              type="text"
              name="email"
              onChange={(e) => inputHandler(e)}
              required
              value={form.email}
              placeholder="EMAIL"
              className="amatic guidedInput "
            />{" "}
          </Col>

          <Col
            md={6}
            sm={12}
            className="d-flex justify-content-center align-items-center mb-2"
          >
            <div className="box bg-warning">
              <h5 className="amatic text-white f17a text-center">
                WHO IS THE STORY FOR
              </h5>
            </div>
            <div className="m-3 py-4 boxform d-flex flex-column justify-content-between">
              <Form.Check
                type="radio"
                label="A CHILD"
                value="A CHILD"
                className="amatic"
                checked={form.who === "A CHILD" ? true : false}
                name="who"
                id="formHorizontalRadios1"
                onChange={(e) => inputHandler(e)}
              />
              <Form.Check
                type="radio"
                label="A GROUP"
                value="A GROUP"
                className="amatic"
                checked={form.who === "A GROUP" ? true : false}
                name="who"
                id="formHorizontalRadios2"
                onChange={(e) => inputHandler(e)}
              />
              <Form.Check
                type="radio"
                className="amatic"
                checked={form.who === "AN ADULT" ? true : false}
                label="AN ADULT"
                value="AN ADULT"
                name="who"
                id="formHorizontalRadios3"
                onChange={(e) => inputHandler(e)}
              />
            </div>
          </Col>
          <Col
            md={6}
            sm={12}
            className="d-flex justify-content-center align-items-center mb-2 mx-auto"
          >
            <div className="box bg-info">
              <h5 className="amatic text-white f17a text-center">
                WHAT WOULD YOU LIKE TO NARRATE
              </h5>
            </div>
            <div className="m-3 py-4 boxform d-flex flex-column justify-content-between">
              <Form.Check
                type="radio"
                label="PERSONAL MEMORY"
                className="amatic"
                checked={form.narrate === "PERSONAL MEMORY" ? true : false}
                name="narrate"
                value="PERSONAL MEMORY"
                onChange={(e) => inputHandler(e)}
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="CULTURAL FOLK"
                value="CULTURAL FOLK"
                checked={form.narrate === "CULTURAL FOLK" ? true : false}
                className="amatic"
                name="narrate"
                id="formHorizontalRadios2"
                onChange={(e) => inputHandler(e)}
              />
              <Form.Check
                type="radio"
                label="OTHER"
                value="OTHER"
                checked={form.narrate === "OTHER" ? true : false}
                className="amatic"
                onChange={(e) => inputHandler(e)}
                name="narrate"
                id="formHorizontalRadios3"
              />
            </div>
          </Col>
        </Row>
      </section>
      <section>
        <div className="options mx-auto mt-4">
          <Row>
            <Col
              id="q4"
              md={12}
              className="d-flex justify-content-center flex-column align-items-center"
            >
              <CustomButton
                aria-controls="example-collapse-text"
                aria-expanded={tabs.tab4}
                onClick={() => setTabs({ tab4: !tabs.tab4 })}
                block
                orange
                className="amatic font"
              >
                WHEN DID IT HAPPEN ?
              </CustomButton>
              <Collapse in={tabs.tab4}>
                <div className="mb-3">
                  <InputText
                    col="teal"
                    holder="type here..."
                    name="when"
                    required
                    value={form.when}
                    onChange={(e) => inputHandler(e)}
                  />
                  <CustomButton
                    className="amatic d-flex justify-content-center align-items-center my-2"
                    onClick={() => {
                      setTabs(!tabs.tab4);
                      setTabs({ tab5: true });
                      scrollToRef("q5");
                    }}
                  >
                    Next
                  </CustomButton>
                </div>
              </Collapse>
            </Col>
            <Col
              id="q5"
              md={12}
              className="d-flex justify-content-center flex-column align-items-center"
            >
              <CustomButton
                aria-controls="example-collapse-text"
                aria-expanded={tabs.tab5}
                onClick={() => setTabs({ tab5: !tabs.tab5 })}
                block
                orange
                className="amatic tint font"
              >
                WHAT HAPPENED
              </CustomButton>
              <Collapse in={tabs.tab5}>
                <div className="mb-3">
                  <InputText
                    col="teal"
                    holder="type here..."
                    name="what"
                    required
                    value={form.what}
                    onChange={(e) => inputHandler(e)}
                  />
                  <CustomButton
                    className="amatic d-flex justify-content-center align-items-center my-2"
                    onClick={() => {
                      setTabs(!tabs.tab5);
                      setTabs({ tab6: true });
                      scrollToRef("q6");
                    }}
                  >
                    Next
                  </CustomButton>
                </div>
              </Collapse>
            </Col>
            <Col
              id="q6"
              md={12}
              className="d-flex justify-content-center flex-column align-items-center"
            >
              <CustomButton
                aria-controls="example-collapse-text"
                aria-expanded={tabs.tab6}
                onClick={() => setTabs({ tab6: !tabs.tab6 })}
                block
                orange
                className="amatic bgmagenta font"
              >
                WHY IT IS IMPORTANT FOR YOU
              </CustomButton>
              <Collapse in={tabs.tab6}>
                <div className="mb-3">
                  <InputText
                    col="teal"
                    required
                    holder="type here..."
                    name="why"
                    value={form.why}
                    onChange={(e) => inputHandler(e)}
                  />
                  <CustomButton
                    className="amatic d-flex justify-content-center align-items-center my-2"
                    onClick={() => {
                      setTabs(!tabs.tab6);
                      setTabs({ tab7: true });
                      scrollToRef("q7");
                    }}
                  >
                    Next
                  </CustomButton>
                </div>
              </Collapse>
            </Col>
            <Col
              id="q7"
              md={12}
              className="d-flex justify-content-center flex-column align-items-center"
            >
              <CustomButton
                aria-controls="example-collapse-text"
                aria-expanded={tabs.tab7}
                onClick={() => setTabs({ tab7: !tabs.tab7 })}
                block
                orange
                className="amatic rose font"
              >
                DO YOU WANT TO ADD MORE ?
              </CustomButton>
              <Collapse in={tabs.tab7}>
                <div className="mb-3">
                  <InputText
                    col="teal"
                    holder="type here..."
                    name="more"
                    required
                    value={form.more}
                    onChange={(e) => inputHandler(e)}
                  />
                  <CustomButton
                    className="amatic d-flex justify-content-center align-items-center my-2"
                    onClick={() => {
                      setTabs(!tabs.tab7);
                      // setTabs({ tab7: true });
                    }}
                  >
                    Next
                  </CustomButton>
                </div>
              </Collapse>
            </Col>
          </Row>
        </div>
      </section>
      <section>
        <Row className="submitRow mx-auto d-flex  justify-content-around align-items-center">
          <Col
            md={6}
            // style={{ width: "80%" }}
            className="mx-auto d-flex justify-content-center align-items-center"
          >
            <CustomButton
              yellow
              block
              className="amatic submit font"
              onClick={() => setForm(clearState)}
            >
              RESET
            </CustomButton>
          </Col>
          <Col
            md={6}
            // style={{ width: "80%" }}
            className="mx-auto d-flex justify-content-center align-items-center"
          >
            <CustomButton
              block
              teal
              type="submit"
              className="amatic submit font bgteal"
              onClick={() => submitForm()}
            >
              SUBMIT
            </CustomButton>
          </Col>
        </Row>
      </section>
      <section className="mt-3">
        <Row>
          <Col
            md={12}
            className="my-3 mx-auto d-flex justify-content-center align-items-center "
          >
            <Image
              // fluid
              width="70%"
              // height="80px"
              className="mx-auto ml-4"
              id="featured-m"
              src={Doodlebar}
              alt=""
            />
          </Col>
        </Row>
      </section>
      <section className="m-2">
        <Row className="mx-auto d-flex justify-content-center align-items-center">
          <Col
            md={{ span: 10, offset: 2 }}
            sm={{ span: 12, span: 3 }}
            className="d-flex justify-content-sm-center justify-content-xs-center align-items-sm-center"
          >
            <div className="my-auto ml-3 contactDiv">
              <ContactFragment />
            </div>
            <Image
              src={girl}
              width="40%"
              className="d-none d-md-block d-lg-block d-xl-block"
            />
          </Col>
        </Row>
      </section>
      <section className="m-2 p-2">
        <BottomSignUp />
      </section>
    </>
  );
};
