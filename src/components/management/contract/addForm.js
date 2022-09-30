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
                <h4 style={{ paddingTop: "5px" }}>CCBS 계약번호</h4>
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
                  <Input
                    placeholder="CCBS 계약번호"
                    // onChange={onGenderChange}
                    allowClear
                    style={FormStyle}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>

          {/* 1-2 */}
          <Col xl={{ span: 6 }}>
            <Row gutter={12}>
              <Col xl={{ span: 8 }}>
                <h4 style={{ paddingTop: "5px" }}>CCBS 계약일자</h4>
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
                  <DatePicker
                    renderExtraFooter={() => "extra footer"}
                    style={FormStyle}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          {/* 1-3 */}
          <Col xl={{ span: 6 }}>
            <Row gutter={12}>
              <Col xl={{ span: 8 }}>
                <h4 style={{ paddingTop: "5px" }}>계약기간</h4>
              </Col>
              <Col xl={{ span: 16 }}>
                <Form.Item
                  name="계약기간"
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
        </Row>

        {/* 2번 Row */}
        <Row gutter={12}>
          {/* 2-1 */}
          <Col xl={{ span: 6 }}>
            <Row gutter={2}>
              <Col xl={{ span: 8 }}>
                <h4 style={{ paddingTop: "5px" }}>서비스</h4>
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
                    placeholder="서비스 선택"
                    // onChange={onGenderChange}
                    bordered={false}
                    allowClear
                    style={FormStyle}
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
              <Col xl={{ span: 8 }}>
                <h4 style={{ paddingTop: "5px" }}>ThingPlug</h4>
              </Col>
              <Col xl={{ span: 15 }}>
                <Form.Item
                  name="ThingPlug"
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
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Col>
          {/* 2-3 */}
          <Col xl={{ span: 6 }}>
            <Row gutter={12}>
              <Col xl={{ span: 8 }}>
                <h4 style={{ paddingTop: "5px" }}>단말대수</h4>
              </Col>
              <Col xl={{ span: 16 }}>
                <Form.Item
                  name="단말대수"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="단말대수" style={FormStyle} />
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
                <h4 style={{ paddingTop: "5px" }}>계약처</h4>
              </Col>
              <Col xl={{ span: 15 }}>
                <Form.Item
                  name="계약처"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    placeholder="계약처 선택"
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
              <Col xl={{ span: 8 }}>
                <h4 style={{ paddingTop: "5px" }}>사업자번호</h4>
              </Col>
              <Col xl={{ span: 15 }}>
                <Form.Item
                  name="사업자번호"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    placeholder="사업자번호 선택"
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
          {/* 2-3 */}
          <Col xl={{ span: 6 }}>
            <Row gutter={12}>
              <Col xl={{ span: 8 }}>
                <h4 style={{ paddingTop: "5px" }}>배포처</h4>
              </Col>
              <Col xl={{ span: 16 }}>
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
        </Row>

        {/* 4번 Row */}
        <Row gutter={12}>
          {/* 2-1 */}
          <Col xl={{ span: 6 }}>
            <Row gutter={2}>
              <Col xl={{ span: 8 }}>
                <h4 style={{ paddingTop: "5px" }}>CCTV 연동</h4>
              </Col>
              <Col xl={{ span: 15 }}>
                <Form.Item
                  name="CCTV"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    placeholder="업체 구분"
                    // onChange={onGenderChange}
                    allowClear
                    defaultValue={"2"}
                    bordered={false}
                    style={FormStyle}
                  >
                    <Option value="1">Y</Option>
                    <Option value="2">N</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Col>
          {/* 2-2 */}
          <Col xl={{ span: 12 }}>
            <Row gutter={12}>
              <Col xl={{ span: 4 }}>
                <h4 style={{ paddingTop: "5px" }}>계약 용도</h4>
              </Col>
              <Col xl={{ span: 20 }}>
                <Form.Item
                  name="계약 용도"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="계약 용도" style={FormStyle} />
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
