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

const App = ({ getList }) => {
  const [form] = Form.useForm();

  const [service, setService] = useState("");
  const [serial, setSerial] = useState("");

  const [searchCondition, setSearchCondition] = useState({
    service: "",
    serial: "",
  });

  const [value, setValue] = useState("");

  const reset = () => {
    setService("");
    setSerial("");
    console.log("조건 리셋");
  };

  const onChange = (value) => {
    setValue(value);
    console.log(value);
  };

  const onFinish = (values) => {
    console.log(values);
    getList(values);
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
              name="service"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Select
                placeholder="서비스 선택"
                bordered={false}
                allowClear
                style={FormStyle}
                value={service}
                name="service"
                onChange={(e) => {
                  setService(e);
                }}

                // onChange={handleChangeConditon}
                // onChange={(e) => setService(e)}
                // onChange={(e) => console.log("value:", e)}
              >
                <Option value="tguard">스마트 지킴이</Option>
                <Option value="tprotector">스마트 지킴이2</Option>
              </Select>
            </Form.Item>
          </Col>

          {/* 1-2 */}
          <Col xl={{ span: 6 }}>
            <Form.Item
              name="계약일자"
              rules={[
                {
                  required: false,
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
                  required: false,
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
                  name="serial_category"
                  rules={[
                    {
                      required: false,
                    },
                  ]}
                >
                  <Select
                    defaultValue={"serial"}
                    // onChange={onGenderChange}
                    bordered={false}
                    style={FormStyle}
                  >
                    <Option value="serial">제품 번호</Option>
                    <Option value="username">착용자 명</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xl={{ span: 15 }}>
                <Form.Item
                  name="serial"
                  rules={[
                    {
                      required: false,
                    },
                  ]}
                >
                  <Input
                    allowClear
                    placeholder="정보를 입력하세요"
                    style={FormStyle}
                    value={searchCondition.serial}
                    name="serial"
                    onChange={(event) => {
                      setSerial(event.target.value);
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          {/* 2-2 */}
          <Col xl={{ span: 9 }}>
            <Row gutter={2}>
              <Col xl={{ span: 8 }}>
                <Form.Item
                  name="admin"
                  rules={[
                    {
                      required: false,
                    },
                  ]}
                >
                  <Select
                    defaultValue={"admin_name"}
                    // onChange={onGenderChange}
                    bordered={false}
                    style={FormStyle}
                  >
                    <Option value="admin_name">관리자 명</Option>
                    <Option value="admin_ph_no">연락처</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xl={{ span: 15 }}>
                <Form.Item
                  name="관리자"
                  rules={[
                    {
                      required: false,
                    },
                  ]}
                >
                  <Input
                    placeholder="정보를 입력하세요."
                    style={FormStyle}
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
                <h4 style={{ paddingTop: "5px" }}>개통일</h4>
              </Col>
              <Col xl={{ span: 15 }}>
                <Form.Item
                  name="개통일"
                  rules={[
                    {
                      required: false,
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
                      required: false,
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
                required: false,
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
                onClick={() => {
                  console.log("service: ", service, "serial: ", serial);
                  console.log("조회버튼 클릭");
                  // getList(service, serial);
                  // reset();
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
