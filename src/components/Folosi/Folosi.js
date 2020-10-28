import React, { Component } from "react";
import { Foloosi } from "react-foloosi-widget";
import "../Folosi/Folosi.css";
import { Form, Card, Row, Col } from "react-bootstrap";
import { CustomButton } from "../customFormElements/customButton";
import { CustomNavLink } from "../NavItem/NavItem";

class FolosiComponent extends Component {
  state = {
    foloosiOpen: false,
    reference_token:
      "test_$2y$10$uund0cR.UJuo83HY2EtURu3uysxD5wOAfvnEC4qE7k8WXD4BYF-wq",
    merchant_key:
      "test_$2y$10$bvRheRygCuck6ibyO4mK6OzLoULqyDoB-MRoJ7Kld.NVjs2nxS6WW",
    price: "50", /// GET it from Redux Later,
    name: "",
    email: "",
    mobile: "",
    currency: "AED",
    qr_data: "",
    qr_url: "",
  };
  foloosiHandler(e) {
    if (e.data.status === "success") {
      console.log(e.data);
      console.log(e.data.data.transaction_no);
    }
    if (e.data.status === "error") {
      console.log(e.data);
      console.log(e.data.data.payment_status);
    }
  }
  componentDidUpdate() {
    window.addEventListener("message", this.foloosiHandler);
  }
  foloosiOpen() {
    this.setState({ foloosiOpen: true });
  }
  confirmClicked = () => {
    fetch("https://foloosi.com/api/v1/api/initialize-setup", {
      headers: {
        merchant_key: this.state.merchant_key,
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        redirect_url: "/projects/storically/book/payment/pdf",
        transaction_amount: 50,
        currency: this.state.currency,
        customer_name: this.state.name,
        customer_email: this.state.email,
        customer_mobile: this.state.mobile,
      }),
    })
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          reference_token: data.data.reference_token,
          qr_data: data.data.payment_qr_data,
          qr_url: data.data.payment_qr_url,
          foloosiOpen: true,
        })
      );
  };
  handleInputs = (e, type) => {
    if (type === "name") {
      this.setState({ name: e.target.value });
    }
    if (type === "email") {
      this.setState({ email: e.target.value });
    }
    if (type === "mobile") {
      this.setState({ mobile: e.target.value });
    }
  };
  render() {
    return (
      <section className="my-5">
        <div className="mx-auto welcome">
          <h3 className="text-center">
            Welcome to our Secure Payement Gateway
          </h3>
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
                    placeholder="Enter Your Name"
                    onChange={(e) => this.handleInputs(e, "name")}
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
                    placeholder="Enter Your Email"
                    onChange={(e) => this.handleInputs(e, "email")}
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
                    onChange={(e) => this.handleInputs(e, "mobile")}
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
                  this.state.name === "" ||
                  this.state.email === "" ||
                  this.state.mobile === ""
                }
                onClick={() => this.confirmClicked()}
              >
                Continue
              </CustomButton>
            </Col>
          </Row>

          {/* <label>Name</label>
          <input onChange={(e) => this.handleInputs(e, "name")}></input>
          <label>Email</label>
          <input onChange={(e) => this.handleInputs(e, "email")}></input>
          <label>Mobile</label>
          <input onChange={(e) => this.handleInputs(e, "mobile")}></input> */}
          <CustomNavLink to="/projects/storically/book/payment/pdf">
            GO to PDF
          </CustomNavLink>
        </div>
        <Foloosi
          foloosiOpen={this.state.foloosiOpen}
          foloosiClose={true}
          reference_token={this.state.reference_token}
          merchant_key={this.state.merchant_key}
          customer_email="ahsdua"
        />
      </section>
    );
  }
}
export default FolosiComponent;
