import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/singupform.css";
import { Form, Input, Select } from "antd";
import signupImage from "../../Assets/img-auth-banner.webp";
import lastCardImage from "../../Assets/img-login-already.webp";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [form] = Form.useForm();
  const [signupForm, setSignupForm] = useState([]);
  const onFinish = async (values) => {
    setSignupForm([...signupForm, values]);
    form.resetFields();
  };

  const a = signupForm.map((val) => {
    return val;
  });

  return (
    <Container>
      <div className="container">
        <div className="main">
          <div>
            <div className="signup-heading">
              <h3>Join the Splash Party: Create Your Account</h3>
              <span>
                Plunge into a world of excitement and endless fun! We eagerly
                await your arrival to create unforgettable moments of rest and
                joy
              </span>
            </div>
            <Form
              form={form}
              name="signup"
              layout="vertical"
              onFinish={onFinish}
            >
              <Row className="g-6">
                <Col sm={6}>
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "Name is required!" }]}
                  >
                    <Input className="inputbox" />
                  </Form.Item>
                </Col>

                <Col sm={6}>
                  <Form.Item
                    label="Your Email ID"
                    name="email"
                    rules={[
                      {
                        type: "email",
                        required: true,
                        message: "Please enter a valid email",
                      },
                    ]}
                  >
                    <Input className="inputbox" />
                  </Form.Item>
                </Col>

                <Col sm={6}>
                  <Form.Item
                    label="Gender"
                    name="gender"
                    rules={[
                      { required: true, message: "Please select a gender" },
                    ]}
                  >
                    <Select>
                      <Select.Option value="male">Male</Select.Option>
                      <Select.Option value="female">Female</Select.Option>
                      <Select.Option value="other">Other</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col sm={6}>
                  <Form.Item
                    label="Your mobile number"
                    name="mobilenumber"
                    rules={[
                      {
                        required: true,
                        message: "Please enter a valid mobile number",
                        pattern: /^[0-9]{10}$/,
                      },
                    ]}
                  >
                    <Input className="inputbox" />
                  </Form.Item>
                </Col>

                <Col sm={6}>
                  <Form.Item
                    label="Create Password"
                    name="password"
                    rules={[
                      { required: true, message: "Password is required" },
                    ]}
                  >
                    <Input type="password" className="inputbox" />
                  </Form.Item>
                </Col>

                <Col sm={6}>
                  <Form.Item
                    label="Re-enter Password"
                    name="confirmPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please re-enter your password",
                      },
                    ]}
                  >
                    <Input type="password" className="inputbox" />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <Form.Item>
                    <button type="submit" className="verify-button">
                      Verify
                      <ion-icon
                        name="arrow-forward-outline"
                        className="hydrated signupicon"
                      ></ion-icon>
                    </button>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="signuplastcard">
                  <div>
                    <img src={lastCardImage} alt="" className="lastcardimg" />
                  </div>
                  <div className="lastcastbox2">
                    <h6>Already have an account?</h6>
                    <h5>Embark on the journey! Sign up now to make a splash</h5>
                    <button>Login now</button>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
          <div className="header-text-box">
            <img src={signupImage} alt="" className="signupimage" />
            <div className="seasonpass">
              <h3>Season Pass</h3>
              <h6>Three Month Pass</h6>
              <Link to="/seasonpass" className="sesonpass-link">
                <button type="submit" className="buy-button">
                  Buy Pass
                  <ion-icon
                    name="arrow-forward-outline"
                    className="hydrated signupicon"
                  ></ion-icon>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
