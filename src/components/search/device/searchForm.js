import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Radio,
  Row,
  Segmented,
  Select,
  RadioChangeEvent,
} from "antd";
import React, { useEffect, useState } from "react";
const { Option } = Select;

const { RangePicker } = DatePicker;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const serviceList = [
  {
    value: "admin_name",
    label: "APP EUI",
  },
  {
    value: "admin_phone",
    label: "서비스",
  },
];

// 폼 스타일
const FormStyle = {
  border: "none",
  borderRadius: "5px",
  background: "white",
};

const App = () => {
  const [form] = Form.useForm();

  const [value, setValue] = useState("");

  const onChange = (value) => {
    setValue(value);
    console.log(value);
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: "Hello world!",
      gender: "male",
    });
  };

  return (
    <Form form={form} name="control-hooks" onFinish={onFinish}>
      <Col span={24}>
        {/* 1번 Row */}
        <Row gutter={[12]}>
          {/* 1-1 */}
          <Col xl={{ span: 6 }}>
            <Form.Item
              name=""
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="서비스 선택"
                // onChange={onGenderChange}
                bordered={false}
                allowClear
                style={FormStyle}
              >
                <Option value="1">스마트 지킴이</Option>
                <Option value="2">스마트 지킴이2</Option>
              </Select>
            </Form.Item>
          </Col>

          {/* 1-2 */}
          <Col xl={{ span: 6 }}>
            <Form.Item
              name="계약일자"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="계약처 선택"
                // onChange={onGenderChange}
                bordered={false}
                allowClear
                style={FormStyle}
              >
                <Option value="1">강남 구청</Option>
                <Option value="2">송파 구청</Option>
              </Select>
              {/* <DatePicker
                renderExtraFooter={() => "extra footer"}
                style={FormStyle}
              /> */}
            </Form.Item>
          </Col>
          {/* 1-3 */}
          <Col xl={{ span: 6 }}>
            <Form.Item
              name="배포처"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="배포처 선택"
                // onChange={onGenderChange}
                bordered={false}
                allowClear
                style={FormStyle}
              >
                <Option value="1">강남 구청</Option>
                <Option value="2">송파 구청</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {/* 2번 Row */}
        <Row gutter={12}>
          {/* 2-1 */}
          <Col xl={{ span: 9 }}>
            <Row gutter={2}>
              <Col xl={{ span: 8 }}>
                <Form.Item
                  name="제품번호"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    defaultValue={"1"}
                    // onChange={onGenderChange}
                    bordered={false}
                    allowClear
                    style={FormStyle}
                  >
                    <Option value="1">제품 번호</Option>
                    <Option value="2">착용자 명</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xl={{ span: 15 }}>
                <Form.Item
                  name="서비스"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="" style={FormStyle} />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          {/* 2-2 */}
          <Col xl={{ span: 9 }}>
            <Row gutter={2}>
              <Col xl={{ span: 8 }}>
                <Form.Item
                  name="제품번호"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    defaultValue={"1"}
                    // onChange={onGenderChange}
                    bordered={false}
                    allowClear
                    style={FormStyle}
                  >
                    <Option value="1">관리자 명</Option>
                    <Option value="2">연락처</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xl={{ span: 15 }}>
                <Form.Item
                  name="서비스"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="" style={FormStyle} />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* 3번 Row */}
        <Row gutter={12}>
          {/* 2-1 */}
          <Col xl={{ span: 6 }}>
            <Row gutter={2}>
              <Col xl={{ span: 8 }}>
                <h4 style={{ paddingTop: "5px" }}>개통일</h4>
              </Col>
              <Col xl={{ span: 15 }}>
                <Form.Item
                  name="개통일"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <RangePicker style={FormStyle} />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          {/* 2-2 */}
          <Col xl={{ span: 6 }}>
            <Row gutter={12}>
              <Col xl={{ span: 8 }}>
                <h4 style={{ paddingTop: "5px" }}>개통여부</h4>
              </Col>
              <Col xl={{ span: 15 }}>
                <Form.Item
                  name="개통여부"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Segmented
                    options={[
                      { label: "개통", value: "Y" },
                      { label: "해지", value: "N" },
                    ]}
                    defaultValue={"Y"}
                    // value={value}
                    onChange={onChange}
                  />
                  {/* <Radio.Group onChange={onChange} value={value}>
                    <Radio value={"Y"}>개통</Radio>
                    <Radio value={"N"}>해지</Radio>
                  </Radio.Group> */}
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
        <Divider />

        {/* 3번 Row */}
        <Row>
          <Form.Item
            // name={["user", "name"]}
            // label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Col>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  marginRight: 8,
                  background: "#006d75",
                  color: "white",
                  border: "none",
                }}
              >
                조회
              </Button>
              <Button
                type="primary"
                htmlType="reset"
                style={{
                  marginRight: 8,
                  background: "#d4380d",
                  color: "white",
                  border: "none",
                }}
                // onClick={onReset}
              >
                초기화
              </Button>
            </Col>
          </Form.Item>
        </Row>
      </Col>
    </Form>
  );
};

export default App;
