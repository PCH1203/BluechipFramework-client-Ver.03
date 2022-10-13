/* eslint-disable jsx-a11y/alt-text */
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Drawer,
  Form,
  Input,
  Row,
} from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginLayout from "../components/LoginLayout";
import logo from "../static/images/protect_logo.svg";
// import SignForm from "../components/auth/Step2";
// import SignStep1 from "../components/auth/Step1";
import SignLayout from "../components/auth/SignLayout";

//testComponent
import Testcom from "../components/auth/testComponent1";

const App = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    console.log("onClose 실행!");
  };

  return (
    <LoginLayout>
      <div
        className="text-center"
        style={{
          textAlign: "center",
          marginBottom: "5vh",
        }}
      >
        <img
          src={logo}
          style={{ width: "30vh", filter: "drop-shadow(2px 4px 6px black)" }}
        />
      </div>
      <Card
        bordered={false}
        style={{
          borderRadius: "20px",
          width: "50vh",
          background: "rgba(255, 255, 255, 0)",
        }}
      >
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "아이디를 입력해 주세요",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="아이디"
              style={{
                borderRadius: "5px",
                height: "4vh",
              }}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "비밀번호를 입력해 주세요.",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="비밀번호"
              style={{ borderRadius: "5px", height: "4vh" }}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>ID 기억하기</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type="danger"
              htmlType="submit"
              className="login-form-button"
              block
              size="large"
              shape="round"
              style={{}}
            >
              <Link to="/management/service">로그인</Link>
            </Button>
            <Row gutter={30} justify="center" style={{ marginTop: "5vh" }}>
              <Col>
                <a href="" style={{ color: "white" }}>
                  아이디 찾기
                </a>
              </Col>
              <Col>
                <a href="" style={{ color: "white" }}>
                  비밀번호 찾기
                </a>
              </Col>
              <Col>
                <Button
                  type="danger"
                  onClick={showDrawer}
                  bordered={false}
                  shape="round"
                  style={{
                    background: "#13c2c2",
                    border: "none",
                  }}
                >
                  회원가입
                </Button>
                <Drawer
                  title="회원가입"
                  placement="right"
                  onClose={onClose}
                  open={open}
                  width="60vh"
                >
                  {/* <SignForm /> */}
                  {/* <SignStep1 /> */}
                  {/* <Testcom /> */}
                  <SignLayout onClose={onClose} />
                </Drawer>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Card>
    </LoginLayout>
  );
};

export default App;
