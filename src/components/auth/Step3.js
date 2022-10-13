import { SmileOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const App = ({ onClose }) => (
  <Result
    style={{ marginBottom: "45vh" }}
    status="success"
    icon={<SmileOutlined />}
    title="회원 가입 완료!"
    subTitle="진짜 수고했다."
    // extra={[
    //   <Button type="primary" key="console" onClick={onClose}>
    //     <Link to="/login">로그인</Link>
    //   </Button>,
    //   // <Button key="buy">Buy Again</Button>,
    // ]}
  />
);

export default App;
