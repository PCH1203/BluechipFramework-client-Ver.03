import { Col, Input, Menu, PageHeader, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../static/images/protect_logo.svg";
import avatar from "../../static/images/bongja.jpg";
import Avatar from "antd/lib/avatar/avatar";

const SubMenu = Menu.SubMenu;

const Search = Input.Search;

const App = () => {
  return (
    <Menu
      mode="horizontal"
      // theme="light"
      className="d-flex align-items-center custom-navigation"
      style={{
        // background: "linear-gradient(to bottom right, #9e1068, #36cfc9)",
        background: "#434343",
      }}
    >
      <Menu.Item
        key="brand-logo"
        className="brand-logo"
        style={{ display: "inline-block" }}
      >
        <Link to="/login">
          <img
            src={logo}
            className="m-r-5"
            style={{ filter: "drop-shadow(2px 4px 6px black)" }}
          />
          {/* <span style={{ color: "white" }}>서비스 관리자</span> */}
        </Link>
      </Menu.Item>

      <SubMenu
        key="profile"
        title={
          <span>
            <span style={{ color: "white", paddingRight: "2vh" }}>BONGJA</span>
            <Avatar size={45} src={avatar} />
          </span>
        }
        style={{
          display: "inline-block",
          marginRight: "1vh",
          marginLeft: "auto",
        }}
      >
        <Menu.Item key="profile-view">
          <Link to="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item key="logout">
          <Link to="/">Logout</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default App;
