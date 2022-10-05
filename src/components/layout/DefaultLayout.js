import {
  ArrowUpOutlined,
  DesktopOutlined,
  FileOutlined,
  FileSearchOutlined,
  HighlightOutlined,
  LaptopOutlined,
  LayoutOutlined,
  LeftOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MonitorOutlined,
  NotificationOutlined,
  PieChartOutlined,
  RightOutlined,
  SearchOutlined,
  SettingOutlined,
  StepBackwardOutlined,
  TeamOutlined,
  ToTopOutlined,
  UpOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { BackTop, Breadcrumb, Button, Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import logo from "../../static/images/protect_logo.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import HeaderDiv from "./HeaderDiv";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const backTopStyle = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#08979c",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};

// const [collapsed, setCollapsed] = useState(true);

const App = ({ children }) => {
  //
  // Breadcrumb 설정
  const [path, setPath] = useState("");
  const [superPath, setSuperPath] = useState("");

  let { pathname } = useLocation();
  pathname = pathname.replace("/", "");

  useEffect(() => {
    if (pathname === "management/service") {
      setSuperPath("관리");
      setPath("서비스 관리");
    }
    if (pathname === "management/company") {
      setSuperPath("관리");
      setPath("계약처 / 배포처 관리");
    }
    if (pathname === "management/contract") {
      setSuperPath("관리");
      setPath("계약관리");
    }
    if (pathname === "management/device") {
      setSuperPath("관리");
      setPath("단말 개통/등록 관리");
    }
  }, [pathname]);

  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  let scrollHeight = document.documentElement.scrollTop;
  // console.log("현재 스크롤 높이: " + scrollHeight);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* <Header className="header">
      <div className="logo">
        <img src={logo} className="m-r-5" />
      </div>
      <Menu
        defaultSelectedKeys={["2"]}
        theme="dark"
        mode="horizontal"
        // items={items1}
      />
    </Header> */}
      <Header style={{ padding: "0" }}>
        <HeaderDiv />
      </Header>
      <Layout>
        <Sider width={230} trigger={null} collapsible collapsed={collapsed}>
          {/* collaped 버튼 */}
          <Button
            className="trigger"
            type="primary"
            onClick={toggle}
            style={{
              marginBottom: 16,
              width: "100%",
              background: "#002766",
              border: "none",
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <Menu theme="dark" mode="inline">
            {/*  */}
            {/* 1. 관리 */}
            <SubMenu
              key="1"
              title={
                <span>
                  <LayoutOutlined />
                  <span>관리</span>
                </span>
              }
            >
              <Menu.Item key="sub1.1">
                <Link to="/management/service">
                  <span>서비스 관리</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="sub1.2">
                <Link to="/management/company">
                  <span>계약처 / 배보처 관리</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="sub1.3">
                <Link to="/management/contract">
                  <span>계약 관리</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="sub1.4">
                <Link to="/management/device">
                  <span>단말 개통 / 등록 관리</span>
                </Link>
              </Menu.Item>
            </SubMenu>

            {/* 2. 조회 */}
            <SubMenu
              key="2"
              title={
                <span>
                  <FileSearchOutlined />
                  <span>조회</span>
                </span>
              }
            >
              <Menu.Item key="sub2.1">
                <Link to="/search/device">
                  <span>단말 조회</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="sub2.2">
                <Link to="/company-management">
                  <span>관리자 조회</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="sub2.3">
                <Link to="/layout/grid">
                  <span>위치 로그 조회</span>
                </Link>
              </Menu.Item>
            </SubMenu>

            {/* 3. 운영 */}
            <SubMenu
              key="3"
              title={
                <span>
                  <PieChartOutlined />
                  <span>운영</span>
                </span>
              }
            >
              <Menu.Item key="sub3.1">
                <Link to="/">
                  <span>F/W 관리</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="sub3.2">
                <Link to="/">
                  <span>사용자 관리</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="sub3.3">
                <Link to="/">
                  <span>재택장치 관리</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="sub3.4">
                <Link to="/">
                  <span>접속 이력</span>
                </Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px", // top, left/right, bottom
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>{superPath}</Breadcrumb.Item>
            <Breadcrumb.Item style={{ fontWeight: " bold" }}>
              {path}
            </Breadcrumb.Item>
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
      {/* BackTop  */}
      <BackTop visibilityHeight="150" duration="450">
        <div style={backTopStyle}>
          <UpOutlined />
        </div>
      </BackTop>
    </Layout>
  );
};

export default App;
