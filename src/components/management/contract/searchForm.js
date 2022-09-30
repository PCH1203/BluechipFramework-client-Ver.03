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
const category_1 = [
  {
    value: "1-1",
    label: "스마트 지킴이",
  },
  {
    value: "1-2",
    label: "스마트 지킴이2",
  },
];
const category_2 = [
  {
    value: "2-1",
    label: "강남구청",
  },
  {
    value: "2-2",
    label: "송파구청",
  },
];
const category_3 = [
  {
    value: "3-1",
    label: "자가소비",
  },
];

const onChange = (value) => {
  console.log(value);
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
              options={category_1}
              placeholder="서비스 선택"
              bordered={false}
              allowClear
              onChange={onChange}
              style={{ background: "white", borderRadius: "5px" }}
            ></Select>
          </Form.Item>
        </Col>
        <Col xl={{ span: 2 }} md={{ span: 4 }}>
          <Form.Item>
            <Select
              options={category_2}
              onChange={onChange}
              placeholder="계약처 선택"
              bordered={false}
              style={{ background: "white", borderRadius: "5px" }}
            />
          </Form.Item>
        </Col>
        <Col xl={{ span: 6 }} md={{ span: 10 }}>
          <Form.Item name={["user", "name"]}>
            <Select
              placeholder="배포처 선택"
              allowClear
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) => option.children.includes(input)}
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
              bordered={false}
              style={{ background: "white", borderRadius: "5px" }}

              // onChange={onGenderChange}
            >
              <Option value="네오시스">네오시스</Option>
              <Option value="인포마크">인포마크</Option>
              <Option value="블루칩">블루칩</Option>
            </Select>
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
                borderRadius: "5px",
                background: "#006d75",
                width: "80px",
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
