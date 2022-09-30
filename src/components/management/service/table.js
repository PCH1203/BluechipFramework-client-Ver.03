import { Button, Table } from "antd";
import React, { useState } from "react";
const columns = [
  {
    title: "No",
    dataIndex: "no",
  },
  {
    title: "서비스 ID",
    dataIndex: "service_id",
  },

  {
    title: "서비스명",
    dataIndex: "service",
  },
  {
    title: "APP EUI",
    dataIndex: "app_eui",
  },
  {
    title: "ThingPlug ID",
    dataIndex: "thing_plug_id",
  },
  {
    title: "등록일자",
    dataIndex: "create_dt",
  },
  {
    title: "Action",
    render: () => (
      <Button style={{ background: "#d4380d", color: "white", border: "none" }}>
        {" "}
        삭제
      </Button>
    ),
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
        scroll={{ x: "50vw" }}
        // bordered
        // size="small"
      />
    </div>
  );
};

export default App;
