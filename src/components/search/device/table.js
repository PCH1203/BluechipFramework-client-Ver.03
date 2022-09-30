import { Button, Table } from "antd";
import React, { useState } from "react";
const columns = [
  {
    title: "No",
    dataIndex: "no",
    width: 10,
  },
  {
    title: "계약 ID",
    dataIndex: "service_id",
    width: 100,
  },

  {
    title: "CCBS 계약일자",
    dataIndex: "service",
    width: 120,
  },
  {
    title: "계약처",
    dataIndex: "app_eui",
    width: 120,
  },
  {
    title: "사업자번호",
    dataIndex: "thing_plug_id",
    width: 120,
  },
  {
    title: "배포처",
    dataIndex: "create_dt",
    width: 120,
  },
  {
    title: "시작일",
    dataIndex: "create_dt",
    width: 120,
  },
  {
    title: "종료일",
    dataIndex: "create_dt",
    width: 120,
  },
  {
    title: "개통 단말대수",
    dataIndex: "create_dt",
    width: 120,
  },
  {
    title: "CCTV 연동",
    dataIndex: "create_dt",
    width: 120,
  },
  {
    title: "계약 용도",
    dataIndex: "create_dt",
    width: 120,
  },
  {
    title: "Action",
    render: () => (
      <Button style={{ background: "#d4380d", color: "white", border: "none" }}>
        {" "}
        삭제
      </Button>
    ),

    width: 120,
  },
];
const data = [];

for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    no: i + 1,
    service_id: `tguard`,
    service: `Smart[지킴이]_마포구청`,
    app_eui: `0000000000000000`,
    thing_plug_id: `smartguard`,
    create_dt: `2022-09-23`,
  });
}

const App = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true); // ajax request after empty completing

    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        {/* 선택 삭제 */}
        <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          loading={loading}
          style={{ background: "#d4380d", color: "white", border: "none" }}
        >
          삭제
        </Button>
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected
            ? ` ${selectedRowKeys.length}개 항목`
            : `총 ${data.length} 개 항목`}
        </span>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        // scroll={{ x: 1300,  }}
        scroll={{ x: "100vw" }}
        // bordered
        // size="small"
      />
    </div>
  );
};

export default App;
