import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  Checkbox,
  Divider,
  Steps,
  Row,
  Col,
} from "antd";
import SignLayout from "./SignLayout";
import LbsAgree from "../../util/LbsAgree.txt";
import FormItem from "antd/es/form/FormItem";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Step } = Steps;

// const tailLayout = {
//   wrapperCol: {
//     offset: 8,
//     span: 16,
//   },
// };

/**
 * step_1 회원가입 약관동의
 * @returns
 */
const Step1 = ({ next, onClose }) => {
  const [form] = Form.useForm();
  const [checkAll, setCheckAll] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  // const [test, setTest] = useState("호랑호랑");
  // const [checkedList, setCheckedList] = useState([]);
  // const [checkedItems, setCheckedItems] = useState([]);

  useEffect(
    (e) => {
      console.log("useEffect 실행");
      if (checked1 && checked2) {
        setCheckAll(true);
      } else {
        setCheckAll(false);
      }
    },
    [checked1, checked2]
  );

  const onChange = (e) => {
    if (e.target.name === "lbsAgreeYn") {
      setChecked1(e.target.checked);
      console.log(e.target.name, ": ", e.target.checked);
      // setChecked1(!checked1);
    }
    if (e.target.name === "libAgreeYn") {
      console.log(e.target.name, ": ", e.target.checked);
      // setChecked2(e.target.checked);
      // setChecked2(!checked2);
    }
  };

  const onCheckAllChange = (e, values) => {
    console.log("전체 체크: ", e.target.checked);
    if (e.target.checked) {
      console.log("혹시1");
      console.log("Form.item", values);

      // Form.Item("lbs_agree_yn").checked(true);
      // Form.Item("lib_agree_yn").checked(true);

      setChecked1(true);
      setChecked2(true);
    }
    if (!e.target.checked) {
      console.log("혹시2");
      setChecked1(false);
      setChecked2(false);
    }
    setCheckAll(e.target.checked);
  };

  const step1Finish = (step1Vaslues) => {
    // console.log("step1Vaslues: ", step1Vaslues);
    // console.log("form_data2: ", step1Vaslues.lbs_agree_yn);
    next(step1Vaslues);
  };

  return (
    // <>
    <div>
      {/* <Steps size="small" current={0}>
        <Step title="이용약관 동의" />
        <Step title="계정 정보 입력" />
        <Step title="회원 가입 완료" />
      </Steps>
      <Divider /> */}
      <Form
        form={form}
        onFinish={step1Finish}
        //Form.Item default value 설정
        initialValues={{
          lbs_agree_yn: false,
          lib_agree_yn: false,
        }}
        wrapperCol={{
          span: 24,
        }}
      >
        <Checkbox onChange={onCheckAllChange} checked={checkAll}>
          약관 전체를 동의합니다.
        </Checkbox>
        <Divider />

        <h2>위치기반 서비스 이용약관 동의 (필수)</h2>
        <TextArea rows={7} readOnly value={"약관 내용"}></TextArea>

        {/* 체크박스 1 */}
        <Form.Item
          name="lbsAgreeYn"
          // value={checked1}
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("약관에 동의해주세요.")),
            },
          ]}
          style={{
            width: "80vh",
          }}
        >
          <Checkbox
            value="Y"
            name="lbs_agree_yn"
            onChange={onChange}
            checked={checked1}
          >
            동의합니다.
          </Checkbox>
        </Form.Item>

        <Divider />

        <h2>위치정보 사업 이용약관 동의 (선택)</h2>
        <TextArea rows={7} readOnly value={"약관 내용"}></TextArea>

        {/* 체크박스 2 */}
        <Form.Item
          label=""
          name="libAgreeYn"
          valuePropName="checked"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Checkbox
            value="Y"
            name="lib_agree_yn"
            // checked={checked2}
            onChange={onChange}
          >
            동의합니다.
          </Checkbox>
        </Form.Item>
        <Divider />

        <Form.Item>
          <Row gutter={12}>
            <Col span={12}>
              <Button
                htmlType="reset"
                className="login-form-button"
                onClick={() => onClose()}
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
                다음
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
};

// export default () => <App />;
export default Step1;
