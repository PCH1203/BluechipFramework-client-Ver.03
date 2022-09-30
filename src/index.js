import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import "./index.less";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import "../src/styles/global.scss";

// import Docs from "./pages/docs";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

// << 1. 관리 >>
import ServiceManagement from "./pages/serviceManagement";
import companyManagement from "./pages/companyManagement";
import contractManagement from "./pages/contractManagement";
import managementDevice from "./pages/managementDevice";
// << 2. 조화 >>
import searchDevice from "./pages/search/searchDevice";
import Main from "./pages/main";
import Login from "./pages/login";

import DefaultLayout from "./components/DefaultLayout";

import { Card, Col, Row } from "antd";

const NoMatchPage = () => {
  return (
    <Row style={{ marginTop: "20%" }}>
      <Col xs={{ span: 12, offset: 6 }}>
        <Card>
          <div className="card-body">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h2>Page not found</h2>
              <Link to="/">돌아가자!</Link>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/management/service" component={ServiceManagement} />
      <Route exact path="/management/company" component={companyManagement} />
      <Route exact path="/management/contract" component={contractManagement} />
      <Route exact path="/management/device" component={managementDevice} />
      {/* 조회 */}
      <Route exact path="/search/device" component={searchDevice} />

      <Route exact path="*" component={NoMatchPage} />
    </Switch>
  </Router>
);

// react Ver.17 dom 사용
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
ReactDOM.render(routing, document.getElementById("root"));
