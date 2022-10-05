// import * as React from "react";
import React, { useEffect, useState } from "react";
import DefaoultLayout from "../../components/layout/DefaultLayout";
import { Row, Col, Card, Button, Form, Collapse } from "antd";

import SearchForm from "../../components/search/device/searchForm";
import Table from "../../components/search/device/table";
import { CaretRightOutlined } from "@ant-design/icons";
import axios from "axios";
import { AxiosCatch } from "./../../util/AxiosCatch";

// const WrappedAdvancedSearchForm = Form.create({ name: "advanced_search" })(
//   TableFilter
// );
const { Panel } = Collapse;

// class Index extends React.Component {
//   render() {

const TestPage = () => {
  // TEST >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const [list, setList] = useState();
  const [service, setService] = useState();
  const [serial, setSerial] = useState();

  useEffect(() => {
    console.log("useEffect 실행");
    getList();
  }, []);

  const getList = async (values) => {
    console.log("getList 실행");

    // 리스트 초기화
    setList(null);

    const queries = [];

    if (values != null) {
      if (
        values.service !== "" &&
        values.service !== undefined &&
        values.service !== null
      ) {
        queries.push(`service=${values.service}`);
      }
      if (
        values.serial !== "" &&
        values.serial !== undefined &&
        values.serial !== null
      ) {
        queries.push(`serial=${values.serial}`);
      }
    }

    const queryStr = queries.length > 0 ? `?${queries.join("&")}` : "";
    const res = await axios
      .get(`/v2/api/portal/search/device/${queryStr}`)
      .catch((err) => {
        AxiosCatch(err);
        return;
      });
    console.log("res: ", res);
    console.log(`"query: /v2/api/portal/search/device/ " ${queryStr}`);

    // if (!res) return;

    setList(res.data.data);
  };

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  return (
    // console.log("관리 > 계약처 배포처 관리"),
    <DefaoultLayout title="assets" classname="grid">
      <Row gutter={[0, 12]}>
        <h2 style={{ color: "black" }}>단말 조회</h2>
        {/* 2. 조회 Form */}
        <Col span={24}>
          <Card
            title="조회"
            style={{ background: "#f5f5f5", borderRadius: "10px" }}
          >
            <SearchForm getList={getList} />
          </Card>
        </Col>
        {/* 3. Talbe */}
        <Col xl={{ span: 24 }}>
          <Card style={{ background: "#f5f5f5", borderRadius: "10px" }}>
            <Table list={list} />
          </Card>
        </Col>
      </Row>
    </DefaoultLayout>
  );
};

export default TestPage;
