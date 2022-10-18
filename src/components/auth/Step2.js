import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Upload,
  Divider,
  Row,
  Col,
} from "antd";
import axios from "axios";
import { headerConfig } from "../../util/axiosConfig";
import Modal from "antd/lib/modal/Modal";
const { Option } = Select;
const { RangePicker } = DatePicker;

const Step2 = ({ next, onClose, currentReset, step1Values }) => {
  const [preCheckuserId, setPreCheckUserId] = useState("");
  const [preCheckemail, setPreCheckEmail] = useState("");
  const [formStatus, setFromStatus] = useState({
    passwdCheck: "N",
    userIdCheck: "N",
    emailCheck: "N",
  });

  const step2Finish = (step2Values) => {
    console.log("회원가입 버튼 클릭!");
    if (formStatus.userIdCheck !== "Y") {
      alert("아이디 중복확인을 해주세요.");
    } else if (formStatus.emailCheck !== "Y") {
      alert("이메일 중복확인을 해주세요.");
    } else {
      addFromdata(step1Values, step2Values);
      next();
    }
  };
  const addFromdata = async (step1Values, step2Values) => {
    const data = {
      userId: step2Values.userId,
      prePasswd: step2Values.prePasswd,
      passwd: step2Values.passwd,
      userName: step2Values.userName,
      serviceId: step2Values.serviceId,
      emailAddress: step2Values.emailAddress,
      phoneNo: step2Values.phoneNo,
      lbsAgreeYn: step1Values.lbsAgreeYn ? "Y" : "N",
      libAgreeYn: step1Values.libAgreeYn ? "Y" : "N",
    };

    const res = await axios
      .post(`/v2/api/portal/auth/join`, data, headerConfig)
      .catch((err) => {
        // setAddChecked(AxiosCatch(err));
        return;
      });
  };

  const userIdCheck = async () => {
    if (
      preCheckuserId !== null &&
      preCheckuserId !== undefined &&
      preCheckuserId !== ""
    ) {
      const checkResult = await axios
        .get(
          `/v2/api/portal/auth/checkErrorUserIdDupl/?userId=${preCheckuserId}`
        )
        .catch((err) => {
          // setAddChecked(AxiosCatch(err));
          return;
        });

      if (checkResult.data.data > 0) {
        setFromStatus({ ...formStatus, userIdCheck: "N" });
        alert(checkResult.data.message);
      } else {
        setFromStatus({ ...formStatus, userIdCheck: "Y" });
        alert(checkResult.data.message);
        console.log("passwdCheck: ", formStatus.passwdCheck);
        console.log("userIdCheck: ", formStatus.userIdCheck);
      }
    }
  };

  // 이메일 중복 검사
  const emailCheck = async () => {
    console.log("이메일 체크!");
    console.log("preCheckemail: ", preCheckemail);
    if (
      preCheckemail !== null &&
      preCheckemail !== undefined &&
      preCheckemail !== ""
    ) {
      const checkResult = await axios
        .get(`/v2/api/portal/auth/duplicateCheckEmail/?email=${preCheckemail}`)
        .catch((err) => {
          // setAddChecked(AxiosCatch(err));
          return;
        });

      if (checkResult.data.data > 0) {
        setFromStatus({ ...formStatus, emailCheck: "N" });
        alert(checkResult.data.message);
      } else {
        setFromStatus({ ...formStatus, emailCheck: "Y" });
        alert(checkResult.data.message);
        console.log("emailCheck: ", formStatus.emailCheck);
      }
    }
  };

  return (
    <>
      <div>
        <Form
          style={{ marginLeft: "5vh", marginRight: "5vh" }}
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          initialValues={{
            serviceId: "tguard",
          }}
          onFinish={step2Finish}
        >
          <Row>
            <Form.Item valuePropName="fileList">
              <Upload action="/upload.do" listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    프로필
                  </div>
                </div>
              </Upload>
            </Form.Item>
          </Row>

          <Form.Item
            // label="아이디"
            name="userId"
            rules={[
              {
                required: true,
              },
            ]}

            // rules={[
            //   {
            //     validator: (_, value) =>
            //       value
            //         ? Promise.resolve()
            //         : Promise.reject(new Error("약관에 동의해주세요.")),
            //   },
            // ]}
          >
            <Row gutter={8}>
              <Col span={24}>
                <Input
                  bordered={false}
                  style={{ borderBottom: "2px solid #8c8c8c" }}
                  placeholder="아이디"
                  onChange={(e) => {
                    setPreCheckUserId(e.target.value);
                  }}
                />
                <Button
                  size="small"
                  shape="round"
                  bordered={false}
                  ghost
                  style={{
                    position: "absolute",
                    right: "5px",
                    background: "#bfbfbf",
                  }}
                  onClick={(e) => {
                    userIdCheck();
                  }}
                >
                  중복확인
                </Button>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item
            name="prePasswd"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Col span={24}>
              <Input
                type="password"
                placeholder="비밀번호 입력"
                bordered={false}
                style={{ borderBottom: "2px solid  #8c8c8c" }}
              />
              {/* <Input
                type="password"
                placeholder="비밀번호 확인"
                bordered={false}
                style={{ borderBottom: "1px solid black" }}
              /> */}
            </Col>
          </Form.Item>
          <Form.Item
            name="passwd"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Col span={24}>
              <Input
                type="password"
                placeholder="비밀번호 확인"
                bordered={false}
                style={{ borderBottom: "2px solid  #8c8c8c" }}
              />
            </Col>
          </Form.Item>

          <Form.Item name="userName">
            <Col span={24}>
              <Input
                placeholder="이름"
                bordered={false}
                style={{ borderBottom: "2px solid  #8c8c8c" }}
              />
            </Col>
          </Form.Item>
          <Form.Item name="serviceId">
            <Col span={24}>
              <Select
                placeholder="서비스 구분"
                bordered={false}
                style={{
                  borderBottom: "2px solid  #8c8c8c",
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
              >
                <Option value="tguard">스마트지킴이</Option>
                <Option value="tprotector">스마트지킴이2</Option>
              </Select>
            </Col>
          </Form.Item>
          <Col
            span={24}
            style={{
              paddingLeft: "0px",
              paddingRight: "0px",
            }}
          >
            <Form.Item name="companyId">
              <Select
                placeholder="회사명"
                bordered={false}
                style={{
                  borderBottom: "2px solid  #8c8c8c",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                }}
              >
                <Option value="demo">블루칩씨엔에스</Option>
                <Option value="demo">초코칩씨엔에스</Option>
              </Select>
            </Form.Item>
          </Col>
          <Form.Item
            name="emailAddress"
            // rules={[
            //   {
            //     required: true,
            //     message: "Channel ID is required",
            //   },
            //   {
            //     pattern: "^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",
            //     message: "Please enter a valid channel ID",
            //   },
            // ]}
          >
            <Row gutter={8}>
              <Col span={24}>
                <Input
                  placeholder="이메일"
                  bordered={false}
                  style={{ borderBottom: "2px solid #8c8c8c" }}
                  onChange={(e) => {
                    setPreCheckEmail(e.target.value);
                  }}
                />
                <Button
                  size="small"
                  shape="round"
                  bordered={false}
                  ghost
                  style={{
                    position: "absolute",
                    right: "5px",
                    background: "#bfbfbf",
                  }}
                  onClick={(e) => {
                    emailCheck();
                  }}
                >
                  중복확인
                </Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item
            name="phoneNo"
            // rules={[
            //   {
            //     required: true,
            //     message: "Channel ID is required",
            //   },
            //   {
            //     pattern: "d{3}-d{3,4}-d{4}",
            //     message: "전화번호가 올바르지 않습니다.",
            //   },
            // ]}
          >
            <Row gutter={8}>
              <Col span={24}>
                <Input
                  placeholder="전화번호"
                  bordered={false}
                  style={{ borderBottom: "2px solid  #8c8c8c" }}
                />
                <Button
                  size="small"
                  shape="round"
                  bordered={false}
                  ghost
                  style={{
                    position: "absolute",
                    width: "80px",
                    right: "5px",
                    background: "#bfbfbf",
                  }}
                >
                  인증
                </Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item>
            <Row gutter={8}>
              <Col span={24}>
                <Input
                  placeholder="인증번호"
                  bordered={false}
                  style={{ borderBottom: "2px solid  #8c8c8c" }}
                />
                <Button
                  size="small"
                  shape="round"
                  bordered={false}
                  ghost
                  style={{
                    position: "absolute",
                    width: "80px",
                    right: "5px",
                    background: "#bfbfbf",
                  }}
                >
                  확인
                </Button>
              </Col>
            </Row>
          </Form.Item>
          <Divider />

          <Form.Item>
            <Row gutter={12}>
              <Col span={12}>
                <Button
                  htmlType="reset"
                  className="login-form-button"
                  onClick={() => {
                    onClose();
                    currentReset();
                  }}
                  block
                  size="large"
                >
                  취소
                </Button>
              </Col>
              <Col span={12}>
                <Button
                  htmlType="submit"
                  className="login-form-button"
                  block
                  size="large"
                  style={{ background: "#1f1f1f", color: "white" }}
                >
                  회원가입
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

// export default () => <FormDisabledDemo />;
export default Step2;
