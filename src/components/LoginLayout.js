import { Breadcrumb, Layout, Menu } from "antd";
import React from "react";
import { Children } from "react";
import LoginBackground from "../static/images/login_background.jpg";
const { Header, Content, Footer } = Layout;

const App = ({ children }) => (
  <Layout
    className="layout"
    style={{
      minHeight: "100vh",
      alignItems: "center",
      // background: "#262626",
      background: "linear-gradient(to bottom right, #9e1068, #36cfc9)",
    }}
  >
    <Content
      style={{
        padding: "100px 50px",
      }}
    >
      {children}
    </Content>
  </Layout>
);

export default App;
