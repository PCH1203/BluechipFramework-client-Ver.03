import * as React from "react";
import DefaoultLayout from "../components/DefaultLayout";
import { Row, Col, Card, Button, Form, Collapse } from "antd";

import SearchForm from "../components/management/contract/searchForm";
import AddForm from "../components/management/contract/addForm";
import Table from "../components/management/contract/table";
import { CaretRightOutlined } from "@ant-design/icons";

// const WrappedAdvancedSearchForm = Form.create({ name: "advanced_search" })(
//   TableFilter
// );
const { Panel } = Collapse;

// class Index extends React.Component {
//   render() {

const TestPage = () => {
  return (
    console.log("관리 > 계약처 배포처 관리"),
    (
      <DefaoultLayout title="assets" classname="grid">
        <Row gutter={[0, 12]}>
          <h2 style={{ color: "black" }}>계약 관리</h2>
          {/* 1. 등록 Form */}
          <Col span={24}>
            <Collapse
              className="site-collapse-custom-collapse"
              bordered={false}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              // defaultActiveKey={["1"]}
              style={{ background: "#f5f5f5", borderRadius: "10px" }}
            >
              <Panel
                header="등록"
                key="1"
                className="site-collapse-custom-panel"
              >
                <AddForm />
              </Panel>
            </Collapse>
          </Col>
          {/* 2. 조회 Form */}
          <Col span={24}>
            <Card
              title="조회"
              style={{ background: "#f5f5f5", borderRadius: "10px" }}
            >
              <SearchForm />
            </Card>
          </Col>
          {/* 3. Talbe */}
          <Col xl={{ span: 24 }}>
            <Card style={{ background: "#f5f5f5", borderRadius: "10px" }}>
              <Table />
            </Card>
          </Col>
        </Row>
      </DefaoultLayout>
    )
  );
};

export default TestPage;
