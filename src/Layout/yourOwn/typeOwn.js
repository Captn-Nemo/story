import React, { useState } from "react";
import { Row, Col, Image, Form, Modal } from "react-bootstrap";
import "./typeYourOwn.css";
import AreaForm from "../../components/FormComponent/FormLongText";
import { CustomButton } from "../../components/customFormElements/customButton";
import { BottomSignUp } from "../../containers/signup";
import { ContactFragment } from "../../components/smallContact/contact";
import LongBookPreview from "../../components/longBookPreview";
import QueryString from "qs";
import axios from "axios";
import { useHistory } from "react-router-dom";

const brushL = require("../../components/DoodleComponent/pen.svg");
const lamp2 = require("../../assets/images/lamp2.png");

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
          <CustomButton
            onClick={props.order}
            className="bgteal modalBtn  amatic"
            disabled={props.loading}
          >
            {props.loading ? "Please Wait" : "Submit"}
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
  const history = useHistory();
  React.useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);

  /* ----------------------------------State Vairables----------------------- */
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [story, setStory] = useState({
    pages: 0,
    text: [],
  });
  const [form, setForm] = useState({
    u_name: "",
    email: "",
  });
  console.log(form);
  const [single, setSingle] = useState("");

  const _addPage = async (id) => {
    var totalPages = 0;
    for (let i = 0; i < story.pages; i++) {
      const res = await axios
        .post(
          "https://talkyake.in/admin/api/createlongorderpages",
          QueryString.stringify(
            {
              pages: i + 1,
              logbook_id: id,
              text: story.text[i],
            },
            { encode: false }
          )
        )
        .catch((err) => {
          setLoading(false);
          setError(true);
          console.log("Page Adding Error");
          return;
        });
      // .then((response) => {
      //   console.log("Added Page", totalPages);
      // })

      if (res.data) {
        totalPages = totalPages + 1;
      }
    }
    console.log(totalPages, story.pages);
    if (totalPages == story.pages) return true;
    else return false;
  };

  const _placeLongdOrder = async () => {
    setLoading(true);
    const res = await axios
      .post(
        "https://talkyake.in/admin/api/cratelongorder",
        QueryString.stringify(
          {
            ...form,
            status: 1,
            order_type: 2,
          },
          { encode: false }
        )
      )
      .then(async (response) => {
        const id = JSON.stringify(response.data.payload.id);
        console.log(id);

        // Promise.all(
        //   story.text.map((pageText, i) => {
        //     return new Promise(async (resolve) => {
        const result = await _addPage(id)
          .then(() => {
            if (error) {
              setLoading(false);
              alert("Order Failed");
              setError(false);
            } else {
              setLoading(false);
              alert("OrderPlaced SuccessFUlly");
              history.push("/projects/storically");
            }
          })
          .catch(() => {
            setLoading(false);
            alert("Order Failed");
          });
        console.log(result);
        // if (result) {
        //   setLoading(false);
        //   alert("OrderPlaced SuccessFUlly");
        //   history.push("/projects/storically");
        // } else {
        //   setLoading(false);
        //   alert("Order Failed");
        // }
        //     });
        //   })
        // ).then((resp) => {console.log(resp)});
      })
      .catch((err) => {
        setLoading(false);
        alert(
          "Order Cannot Be placed right now please try again after some time"
        );
      });
  };

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
      alert("Cannot Add Empty Book");
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
  return (
    <>
      <PreviewModal
        show={modalShow}
        data={story.text}
        loading={loading}
        order={_placeLongdOrder}
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
      <section className="px-5">
        <Row className="mx-auto mt-5  my-row">
          <Col md={4} className="mb-3">
            {" "}
            <Form.Control
              type="text"
              placeholder="NAME"
              name="u_name"
              required
              //value={form.u_name}
              className="amatic guidedInput"
              onChange={(e) => inputHandler(e)}
            />{" "}
          </Col>
          <Col md={8} className="mb-3">
            {" "}
            <Form.Control
              type="email"
              id="email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              onChange={(e) => inputHandler(e)}
              // value={form.email}
              placeholder="EMAIL"
              className="amatic guidedInput "
              required
              autocomplete="email"
              autofocus
            />{" "}
          </Col>
        </Row>
      </section>
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
            <CustomButton
              onClick={() => saveToLocal()}
              className="custonBtn amatic"
            >
              SAVE
            </CustomButton>
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
              type="submit"
              teal={true}
              onClick={() => {
                if (story.text.length == 0) {
                  alert("Please Add a page then submit");
                  return;
                } else setModalShow(true);
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
