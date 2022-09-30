import {
  DesktopOutlined,
  FileOutlined,
  HighlightOutlined,
  LaptopOutlined,
  NotificationOutlined,
  PieChartOutlined,
  SearchOutlined,
  SettingOutlined,
  StepBackwardOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import logo from "../static/images/protect_logo.svg";
import { Link, NavLink, useLocation } from "react-router-dom";

const { Header, Content, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  {
    label: "관리",
    key: "1",
    icon: <SettingOutlined />,
    children: [
      { label: "서비스 관리", key: "1-1" },
      { label: "계약 / 배포처 관리", key: "1-2" },
      { label: "계약 관리", key: "1-3" },
      { label: "단말 계통 / 등록 관리", key: "1-4" },
    ],
  },
  {
    label: "조회",
    key: "2",
    icon: <SearchOutlined />,
    children: [{ label: "item ", key: "2-1" }],
  },
  {
    label: "운영",
    key: "3",
    icon: <HighlightOutlined />,
    children: [{ label: "item 3", key: "3-1" }],
  },
];

// const [collapsed, setCollapsed] = useState(true);

const App = ({ children }) => (
  <Layout style={{ minHeight: "100vh" }}>
    <Header className="header">
      <div className="logo">
        <img src={logo} className="m-r-5" />
      </div>
      {/* <Menu
        defaultSelectedKeys={["2"]}
        theme="dark"
        mode="horizontal"
        items={items1}
      /> */}
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{
            height: "100%",
            borderRight: 0,
          }}
          items={items}
        />
      </Sider>
      <Layout
        style={{
          padding: "0 24px 24px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {/* Content */}
          {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default App;
