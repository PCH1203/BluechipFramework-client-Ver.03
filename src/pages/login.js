/* eslint-disable jsx-a11y/alt-text */
import {
  ConsoleSqlOutlined,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
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
import { Link, Redirect, Router, NavLink } from "react-router-dom";
import LoginLayout from "../components/LoginLayout";
import logo from "../static/images/protect_logo.svg";
import bluechipLogo from "../static/images/bluechip.png";
import SignLayout from "../components/auth/SignLayout";
import LoginStep2 from "../pages/loginStep2";

import axios from "axios";
import { headerConfig } from "../util/axiosConfig";
import { AxiosCatch } from "../util/AxiosCatch";

const App = () => {
  const [open, setOpen] = useState(false);

  const onFinish = (values) => {
    console.log("아이디: ", values.userId);
    console.log("비밀번호: ", values.passwd);
    portalLoginStep1(values);
  };

  const portalLoginStep1 = async (values) => {
    console.log("포탈 로그인 step1");
    //api 요청시 전달할 파라미터 배열 생성
    const queries = [];

    queries.push(`userId=${values.userId}`);
    queries.push(`passwd=${values.passwd}`);

    const queryStr = queries.length > 0 ? `?${queries.join("&")}` : "";

    console.log("queryStr: ", queryStr);

    const res = await axios
      .post(`/v2/api/portal/auth/pre-login${queryStr}`)
      .catch((err) => {
        AxiosCatch(err);
        return;
      });
    console.log("res: ", res);

    if (res.data.status === 200) {
      console.log("1차로그인 성공");
      document.location.href = "/login/step2";
      nextStep();
      return <link to="/login.step2" />;
    } else if (res.data.status === 401) {
      alert("사용자 정보가 올바르지 않습니다.");
    }
  };

  const nextStep = () => {
    return <link to="/login.step2" />;
  };

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
          // src={logo}
          src={bluechipLogo}
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
            name="userId"
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
            name="passwd"
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
              // onClick={nextStep}
            >
              로그인
            </Button>
          </Form.Item>
          <Form.Item>
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
