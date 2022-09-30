import { Button, Col, Divider, Form, Input, Row, Select } from "antd";
import React from "react";
const { Option } = Select;
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
            <Row gutter={2}>
              <Col xl={{ span: 6 }}>
                <h4 style={{ paddingTop: "5px" }}>서비스</h4>
              </Col>
              <Col xl={{ span: 16 }}>
                <Form.Item
                  name="gender"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    bordered={false}
                    style={FormStyle}
                    placeholder="서비스 선택"
                    // onChange={onGenderChange}
                    allowClear
                  >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Col>
          {/* 1-2 */}
          <Col xl={{ span: 6 }}>
            <Row gutter={12}>
              <Col xl={{ span: 6 }}>
                <h4 style={{ paddingTop: "5px" }}>회사명</h4>
              </Col>
              <Col xl={{ span: 16 }}>
                <Form.Item
                  name="gender"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="회사명" style={FormStyle} />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          {/* 1-3 */}
          <Col xl={{ span: 6 }}>
            <Row gutter={12}>
              <Col xl={{ span: 4 }}>
                <h4 style={{ paddingTop: "5px" }}>담당자</h4>
              </Col>
              <Col xl={{ span: 16 }}>
                <Form.Item
                  name="gender"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input style={FormStyle} placeholder="담당자" />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* 2번 Row */}
        <Row gutter={12}>
          {/* 2-1 */}
          <Col xl={{ span: 6 }}>
            <Row gutter={2}>
              <Col xl={{ span: 6 }}>
                <h4 style={{ paddingTop: "5px" }}>업체 구분</h4>
              </Col>
              <Col xl={{ span: 16 }}>
                <Form.Item
                  name="gender"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    placeholder="업체 구분"
                    bordered={false}
                    style={FormStyle}
                    // onChange={onGenderChange}
                    allowClear
                  >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Col>
          {/* 2-2 */}
          <Col xl={{ span: 6 }}>
            <Row gutter={12}>
              <Col xl={{ span: 6 }}>
                <h4 style={{ paddingTop: "5px" }}>사업자번호</h4>
              </Col>
              <Col xl={{ span: 16 }}>
                <Form.Item
                  name="gender"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="사업자번호" style={FormStyle} />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          {/* 2-3 */}
          <Col xl={{ span: 6 }}>
            <Row gutter={12}>
              <Col xl={{ span: 4 }}>
                <h4 style={{ paddingTop: "5px" }}>연락처</h4>
              </Col>
              <Col xl={{ span: 16 }}>
                <Form.Item
                  name="gender"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="연락처" style={FormStyle} />
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
                등록
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
