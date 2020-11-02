import React, { useState } from "react";
import { Row, Col, Image, Form, Modal } from "react-bootstrap";
import "./typeYourOwn.css";
import AreaForm from "../../components/FormComponent/FormLongText";
import { CustomButton } from "../../components/customFormElements/customButton";
import { BottomSignUp } from "../../containers/signup";
import { ContactFragment } from "../../components/smallContact/contact";
import LongBookPreview from "../../components/longBookPreview";
const brushL = require("../../components/DoodleComponent/pen.svg");
// const Doodlebar = require("../../assets/images/doodlesBar.svg");
const lamp = require("../../assets/images/lamp.png");
const lamp2 = require("../../assets/images/lamp2.png");
const initalState = {
  pages: 0,
  text: [],
};

/* ----------------------------Book Preview Modal --------------------------- */

function PreviewModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      // className="modalView"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="f2">
          Preview Story
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LongBookPreview data={props.data} />
      </Modal.Body>

      <Row className="px-4">
        <Col
          md={12}
          className="px-4 d-flex justify-content-between align-items-center"
        >
          <CustomButton className="bgteal modalBtn  amatic">
            Submit
          </CustomButton>
          <CustomButton className="modalBtn amatic" onClick={props.onHide}>
            Close
          </CustomButton>
        </Col>
      </Row>
    </Modal>
  );
}

/* ------------------------------------------------------MAIN FUNCTION ------------------------------- */
export const TypeYourOwn = () => {
  React.useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);

  /* ----------------------------------State Vairables----------------------- */
  const [modalShow, setModalShow] = useState(false);

  const [story, setStory] = useState({
    pages: 0,
    text: [],
  });
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const [single, setSingle] = useState("");

  /* ---------------------------------Local Function-------------------- */

  const inputHandler = (e) => {
    e.persist();
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const addPage = (text) => {
    if (text === "") {
      alert("cannot be empty");
      return;
    } else {
      let data = story;
      data.pages = data.pages + 1;
      data.text.push(text);
      setStory(data);
      setSingle("");
      alert("Page Added");
    }
  };
  const saveToLocal = () => {
    if (story.text.length == 0) {
      alert("Cannot Add Empty Page");
      return;
    } else {
      try {
        localStorage.setItem("longStory", JSON.stringify(story));
        alert("book Saved");
      } catch (error) {
        alert("Error Saving To local");
      }
    }
  };
  console.log(single);
  console.log(story);
  return (
    <>
      <PreviewModal
        show={modalShow}
        data={story.text}
        onHide={() => setModalShow(false)}
      />
      <section className="mt-2" id="longFormText">
        <Row>
          <Col className="d-flex flex-row-reverse align-items-center">
            <img src={brushL} height="70%" className="pen" />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <h1 className="text-center style amatic ftitle teal font-weight-bold">
              TYPE IN LONG FORM
            </h1>
          </Col>
          <Col className="d-flex align-items-center">
            <img src={brushL} height="70%" className="brushT pen" />
          </Col>
        </Row>
        <Row>
          <Col className="bg-warning d-flex flex-column px-5">
            <h2 className="chelsea f2 white text-white text-center">
              Instructions
            </h2>
            <div className="mx-auto ins">
              <ul className="font-weight-bold mx-auto">
                <li className="f1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </li>
                <li className="f1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </li>
                <li className="f1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </li>
                <li className="f1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </section>
      {/* <section className="px-5">
        <Row className="mx-auto mt-5  my-row">
          <Col md={4} className="mb-3">
            {" "}
            <Form.Control
              type="text"
              placeholder="NAME"
              name="name"
              required
              value={form.name}
              className="amatic guidedInput"
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
        </Row>
      </section> */}
      <section className="mt-5">
        <AreaForm value={single} onChange={(e) => setSingle(e.target.value)} />
      </section>
      <section className="options mx-auto">
        <Row className="p-4 my-5">
          <Col
            md={4}
            sm={12}
            className="column d-flex justify-content-center align-items-center"
          >
            <CustomButton className="custonBtn amatic">SAVE</CustomButton>
          </Col>
          <Col
            md={4}
            sm={12}
            className="column d-flex justify-content-center align-items-center"
          >
            <CustomButton
              className="custonBtn amatic"
              onClick={() => addPage(single)}
            >
              {" "}
              ADD PAGE{" "}
            </CustomButton>
          </Col>
          <Col
            md={4}
            sm={12}
            className="column d-flex justify-content-center align-items-center"
          >
            <CustomButton
              teal={true}
              onClick={() => {
                if (story.text.length == 0) return;
                else setModalShow(true);
              }}
              className="custonBtn amatic"
            >
              {" "}
              &nbsp;&nbsp;SUBMIT&nbsp;&nbsp;
            </CustomButton>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            {/* <img
              width="100%"
              height="50px"
              id="guide-m"
              src={Doodlebar}
              alt=""
            /> */}
          </Col>
        </Row>
      </section>
      <section className="my-md-5">
        <Row>
          <Col className="d-flex flex-column justify-content-center align-items-center p-md-5 mx-auto">
            <div className="p-md-5">
              <ContactFragment />
            </div>
          </Col>
          <Col className=" justify-content-center align-items-center d-none d-lg-block">
            <Image src={lamp2} fluid width="70%" />
          </Col>
        </Row>
      </section>
      <section>
        <BottomSignUp />
      </section>
    </>
  );
};
