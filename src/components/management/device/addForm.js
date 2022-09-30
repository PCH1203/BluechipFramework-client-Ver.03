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
              <Col xl={{ span: 10 }}>
                <h4 style={{ paddingTop: "5px" }}>CCBS계약일자 (개통일)</h4>
              </Col>
              <Col xl={{ span: 14 }}>
                <Form.Item
                  name=""
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

          {/* 1-2 */}
          <Col xl={{ span: 8 }}>
            <Row gutter={12}>
              <Col xl={{ span: 4 }}>
                <h4 style={{ paddingTop: "5px" }}>제품번호</h4>
              </Col>
              <Col xl={{ span: 6 }}>
                <Form.Item
                  name="검색 조건"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    // options={category_2}
                    // onChange={onChange}
                    placeholder="search_condition"
                    bordered={false}
                    allowClear
                    style={FormStyle}
                  >
                    <Option value="1">DEV EUI</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xl={{ span: 10 }}>
                <Form.Item
                  name="제품번호"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    // options={category_2}
                    // onChange={onChange}
                    placeholder="제품번호"
                    allowClear
                    style={FormStyle}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
        <Divider />

        {/* Button Group */}
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
