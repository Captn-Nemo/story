import React, { useState, useEffect, useRef } from "react";
import { Foloosi } from "react-foloosi-widget";
import "./payment.css";
import { Form, Card, Row, Col, ProgressBar } from "react-bootstrap";
import { CustomButton } from "../customFormElements/customButton";
import { CustomNavLink } from "../NavItem/NavItem";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import QueryString from "qs";
import axios from "axios";
import { addPaymentStatus, updateForm } from "../../store/actions";
const book = JSON.parse(localStorage.getItem("normalBook"));
const Payment = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const mounted = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const BookData = useSelector((state) => state);
  const { form } = BookData;
  const [loading, setLoading] = useState(false);

  const [state, setState] = useState({
    foloosiOpen: false,
    foloosiClose: false,
    reference_token: "",
    merchant_key:
      "test_$2y$10$bvRheRygCuck6ibyO4mK6OzLoULqyDoB-MRoJ7Kld.NVjs2nxS6WW",
    price: BookData.normal.price,
    currency: "AED",
    qr_data: "",
    qr_url: "",
  });

  console.log(loading);

  const foloosiHandler = (e) => {
    const _placeNormalorder = async () => {
      const status = book.mode === "e-book" ? 0 : 1;
      const formData = JSON.parse(localStorage.getItem("form"));
      setLoading(true);
      const res = await axios
        .post(
          "https://talkyake.in/admin/api/cratenormalorder",
          QueryString.stringify(
            {
              ...book,
              ...formData,
              status: status,
            },
            { encode: false }
          )
        )
        .then((response) => {
          alert(JSON.stringify("Order Placed Successfully"));
          setLoading(false);
          dispatch(addPaymentStatus());
          localStorage.setItem("payment", true);
          history.push("/projects/storically/book/payment/pdf");
        })
        .catch((err) => {
          setLoading(false);
          alert(
            "Order Cannot Be placed right now please try again after some time"
          );
        });
      console.log("End");
    };
    if (e.data.status === "success") {
      localStorage.setItem("paid", true);
      _placeNormalorder();
    }
    if (e.data.status === "error") {
      console.log(e.data.data.payment_status);
      setState({ ...state, foloosiOpen: false });
    }
  };

  useEffect(() => {
    window.addEventListener("message", foloosiHandler);

    return () => window.removeEventListener("message", foloosiHandler);
  }, []);

  const handleInputs = (e) => {
    e.persist();
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const confirmClicked = () => {
    dispatch(updateForm(formData));
    localStorage.setItem("form", JSON.stringify(formData));
    fetch("https://foloosi.com/api/v1/api/initialize-setup", {
      headers: {
        merchant_key: state.merchant_key,
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        redirect_url: "",
        transaction_amount: 1,
        currency: state.currency,
        // customer_name: state.name,
        // customer_email: state.email,
        // customer_mobile: state.mobile,
      }),
    })
      .then((res) => res.json())
      .then((data) =>
        setState({
          ...state,
          reference_token: data.data.reference_token,
          qr_data: data.data.payment_qr_data,
          qr_url: data.data.payment_qr_url,
          foloosiOpen: true,
        })
      )
      .catch(() => alert("Please Check your internet connection"));
  };

  return (
    <section className="my-5">
      <div className="mx-auto welcome">
        <h3 className="text-center">Welcome to our Secure Payement Gateway</h3>
        <Row>
          <Col
            md={12}
            className="d-flex justify-content-center align-items-center"
          >
            <Form>
              <Form.Group>
                <Form.Label className="custtomLabel">Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={formData.name}
                  name="name"
                  placeholder="Enter Your Name"
                  onChange={(e) => handleInputs(e)}
                  onSubmit={() => dispatch(updateForm(formData))}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col
            md={12}
            className="d-flex justify-content-center align-items-center"
          >
            <Form>
              <Form.Group>
                <Form.Label className="custtomLabel">Email</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={formData.email}
                  name="email"
                  placeholder="Enter Your Email"
                  onChange={(e) => handleInputs(e)}
                  onSubmit={() => dispatch(updateForm(formData))}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col
            md={12}
            className="d-flex justify-content-center align-items-center"
          >
            <Form>
              <Form.Group>
                <Form.Label className="custtomLabel">Mobile</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Enter Phone Number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={(e) => handleInputs(e)}
                  onSubmit={() => dispatch(updateForm(formData))}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col
            md={12}
            className="d-flex justify-content-center align-items-center"
          >
            <p>Please Click below Button for payement </p>
          </Col>

          <Col className="d-flex justify-content-center align-items-center">
            <CustomButton
              teal
              disabled={
                state.name === "" || state.email === "" || state.mobile === ""
              }
              onClick={() => confirmClicked()}
            >
              Continue
            </CustomButton>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12}>
            <span>
              {loading
                ? "Please Wait While The order is being placed ..."
                : null}
            </span>
          </Col>
          <Col lg={12} md={12}>
            {loading ? <ProgressBar variant="info" animated now={45} /> : null}
          </Col>
        </Row>
        {/* <CustomNavLink to="/projects/storically/book/payment/pdf">
          GO to PDF
        </CustomNavLink> */}
      </div>
      <Foloosi
        foloosiOpen={state.foloosiOpen}
        foloosiClose={true}
        reference_token={state.reference_token}
        merchant_key={state.merchant_key}
        customer_email={state.email}
      />
    </section>
  );
};
export default Payment;
