import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Select,
} from "antd";
import React from "react";
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
              <Col xl={{ span: 8 }}>
                <h4 style={{ paddingTop: "5px" }}>서비스 ID</h4>
              </Col>
              <Col xl={{ span: 15 }}>
                <Form.Item
                  name=""
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    placeholder="서비스 ID"
                    // onChange={onGenderChange}
                    allowClear
                    bordered={false}
                    style={FormStyle}
                  >
                    <Option value="1">스마트 지킴이</Option>
                    <Option value="2">스마트 지킴이2</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Col>

          {/* 1-2 */}
          <Col xl={{ span: 6 }}>
            <Row gutter={12}>
              <Col xl={{ span: 8 }}>
                <h4 style={{ paddingTop: "5px" }}>서비스명</h4>
              </Col>
              <Col xl={{ span: 15 }}>
                <Form.Item
                  name="계약일자"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input style={FormStyle} placeholder="서비스명" />
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
              <Col xl={{ span: 8 }}>
                <h4 style={{ paddingTop: "5px" }}>ThingPlug ID</h4>
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
                  <Select
                    placeholder="ThingPlug ID"
                    bordered={false}
                    style={FormStyle}
                    // onChange={onGenderChange}
                    allowClear
                  >
                    <Option value="1">smartguard</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Col>
          {/* 2-2 */}
          <Col xl={{ span: 6 }}>
            <Row gutter={12}>
              <Col xl={{ span: 8 }}>
                <h4 style={{ paddingTop: "5px" }}>APP EUI</h4>
              </Col>
              <Col xl={{ span: 15 }}>
                <Form.Item
                  name="APP EUI"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    placeholder="APP EUI"
                    style={FormStyle}
                    // onChange={onGenderChange}
                    allowClear
                  />
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
                <h4 style={{ paddingTop: "5px" }}>회사명</h4>
              </Col>
              <Col xl={{ span: 15 }}>
                <Form.Item
                  name="회사명"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    placeholder="회사명"
                    bordered={false}
                    style={FormStyle}
                    showSearch
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children.includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      optionA.children
                        .toLowerCase()
                        .localeCompare(optionB.children.toLowerCase())
                    }
                    // onChange={onGenderChange}
                    allowClear
                  >
                    <Option value="네오시스">네오시스</Option>
                    <Option value="인포마크">인포마크</Option>
                    <Option value="블루칩">블루칩</Option>
                  </Select>
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
