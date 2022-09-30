import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  InputNumber,
  Row,
  Cascader,
  DatePicker,
  Radio,
  Select,
} from "antd";
import React from "react";

const { Option } = Select;

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

/** 필터 옵션  */
const options = [
  {
    value: "zhejiang",
    label: "스마트 지킴이",
  },
  {
    value: "jiangsu",
    label: "스마트 지킴이2",
  },
];
const category = [
  {
    value: "admin_name",
    label: "APP EUI",
  },
  {
    value: "admin_phone",
    label: "서비스",
  },
];

const onChange = (value) => {
  console.log(value);
};

// 폼 스타일
const FormStyle = {
  border: "none",
  borderRadius: "5px",
  background: "white",
};

const App = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  // const { getFieldDecorator } = this.props.form;
  return (
    <Form
      onSubmit={handleSubmit}
      // {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      {/* <Divider orientation="left">Horizontal</Divider> */}
      <Row gutter={8} style={{ verticalAlign: "center" }}>
        <Col xl={{ span: 3 }} md={{ span: 5 }}>
          <Form.Item>
            {/* <Cascader
              options={options}
              onChange={onChange}
              placeholder="서비스 선택"
              style={{ background: "black" }}
            /> */}
            <Select
              bordered={false}
              style={FormStyle}
              placeholder="서비스 선택"
              allowClear
            >
              <Option value="1">스마트 지킴이</Option>
              <Option value="2">스마트 지킴이2</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xl={{ span: 2 }} md={{ span: 4 }}>
          <Form.Item>
            <Select
              options={category}
              onChange={onChange}
              placeholder="구분 선택"
              bordered={false}
              style={FormStyle}
            />
          </Form.Item>
        </Col>
        <Col xl={{ span: 6 }} md={{ span: 10 }}>
          <Form.Item name={["user", "name"]}>
            <Input placeholder={`조건을 입력하세요.`} style={FormStyle} />
          </Form.Item>
        </Col>

        <Col xl={{ span: 6 }} md={{ span: 10 }}>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                marginRight: 8,
                border: "none",
                background: "#006d75",
              }}
            >
              조회
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default App;
