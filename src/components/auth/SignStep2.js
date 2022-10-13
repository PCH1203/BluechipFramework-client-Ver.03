import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
  Divider,
} from "antd";
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const FormDisabledDemo = () => {
  //   const [componentDisabled, setComponentDisabled] = useState(true);

  //   const onFormLayoutChange = ({ disabled }) => {
  //     setComponentDisabled(disabled);
  //   };

  const onFinish = (values) => {
    console.log("form_data: ", values);
  };

  return (
    <>
      <Form
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        // onValuesChange={onFormLayoutChange}
        // disabled={componentDisabled}
      >
        <Form.Item label="프로필 사진" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item
          label="아이디"
          name="userId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
          <Button type="primary" size="middle">
            중복확인
          </Button>
        </Form.Item>
        <Form.Item label="비밀번호">
          <Input type="password" />
        </Form.Item>
        <Form.Item label="비밀번호 확인">
          <Input type="password" />
        </Form.Item>
        <Form.Item label="이름">
          <Input />
        </Form.Item>
        <Form.Item label="서비스 구분">
          <Select placeholder="회사명 선택">
            <Select.Option value="demo">스마트지킴이</Select.Option>
            <Select.Option value="demo">스마트지킴이2</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="회사명">
          <Select>
            <Select.Option value="demo">블루칩씨엔에스</Select.Option>
            <Select.Option value="demo">초코칩씨엔에스</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="이메일">
          <Input />
          <Button type="primary" size="middle">
            중복확인
          </Button>
        </Form.Item>
        <Form.Item label="전화번호">
          <Input />
          <Button type="primary" size="middle">
            인증번호 받기
          </Button>
        </Form.Item>
        <Form.Item label="인증번호">
          <Input placeholder="인증번호를 입력하세요." />
          <Button type="primary" size="middle">
            확인
          </Button>
        </Form.Item>
        <Divider />
        <Form.Item>
          <Button
            type="danger"
            htmlType="submit"
            className="login-form-button"
            block
            size="large"
            shape="round"
          >
            확인
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default () => <FormDisabledDemo />;
