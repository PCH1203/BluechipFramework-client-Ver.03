/* eslint-disable jsx-a11y/alt-text */
import { LockOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Input, Row } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginLayout from "../components/LoginLayout";
import logo from "../static/images/protect_logo.svg";

//testComponent
import axios from "axios";
import { headerConfig } from "../util/axiosConfig";
import { AxiosCatch } from "../util/AxiosCatch";

const App = () => {
  const [buttoName, setButtonName] = useState("인증번호 전송");
  const [buttonStyle, setButtonStyle] = useState("danger");
  const [formItemHidden, setFormItemHidden] = useState(true);
  const [otpCheckRequired, setOtpCheckRequired] = useState(false);
  const [otpPasswd, setOtpPasswd] = useState();
  const [isSendOtp, setIsSendOtp] = useState(false);
  const onFinish = (values) => {
    if (isSendOtp === false) {
      portalLoginStep2(values);
    } else {
      if (otpPasswd === values.otpCheck) {
        alert("otp 인증 성공");
        document.location.href = "/management/device";
      } else {
        alert("인증번호가 일치하지 않습니다.");
      }
    }
  };

  const portalLoginStep2 = async (values) => {
    console.log("포탈 로그인 step1");
    //api 요청시 전달할 파라미터 배열 생성
    const queries = [];

    queries.push(`to=${values.phoneNo}`);

    const queryStr = queries.length > 0 ? `?${queries.join("&")}` : "";

    console.log("queryStr: ", queryStr);

    const res = await axios
      .post(`/v2/api/portal/auth/send-otp${queryStr}`)
      .catch((err) => {
        AxiosCatch(err);
        return;
      });
    console.log("쿼리: ", `/v2/api/portal/auth/send-otp${queryStr}`);
    console.log("res: ", res);
    // console.log("otpPasswd: ", res.data.otpPasswd);
    nextStep(res);
  };

  const nextStep = (res) => {
    if (res.status === 200) {
      alert(`인증번호 ${res.data.otpPasswd} 가 전송되었습니다.`);
      setIsSendOtp(true);
      setFormItemHidden(false);
      setOtpCheckRequired(true);
      setButtonName("인증");
      setButtonStyle("primary");
      setOtpPasswd(res.data.otpPasswd);
    } else {
      alert("인증번호 전송 실패");
    }
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
            name="phoneNo"
            rules={[
              {
                required: true,
                message: "전화번호를 입력해 주세요",
              },
            ]}
          >
            <Input
              prefix={<PhoneOutlined className="site-form-item-icon" />}
              type="tel"
              // pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
              placeholder="전화번호"
              style={{
                borderRadius: "5px",
                height: "4vh",
              }}
            />
          </Form.Item>
          <Form.Item
            name="otpCheck"
            rules={[
              {
                // required: false,
                required: otpCheckRequired,
                message: "인증번호를 입력 하세요.",
                type: "tel",
              },
            ]}
            hidden={formItemHidden}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              maxLength={4}
              placeholder="인증번호"
              style={{ borderRadius: "5px", height: "4vh" }}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type={buttonStyle}
              htmlType="submit"
              className="login-form-button"
              block
              size="large"
              shape="round"
            >
              {buttoName}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </LoginLayout>
  );
};

export default App;
