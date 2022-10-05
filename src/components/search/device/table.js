import { Button, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AxiosCatch } from "./../../../util/AxiosCatch";
const columns = [
  {
    title: "No",
    dataIndex: "rowNum",
  },
  {
    title: "제품번호",
    dataIndex: "serialNo",
  },

  {
    title: "회사명",
    dataIndex: "service",
  },
  {
    title: "연락처",
    dataIndex: "app_eui",
  },
  {
    title: "착용자 정보",
    children: [
      {
        title: "이름",
        dataIndex: "userName",
      },
      {
        title: "생년월일",
        dataIndex: "userBirthday",
      },
      {
        title: "연락처",
        dataIndex: "hpNo",
      },
    ],
  },
  {
    title: "최종위치측위정보",
    children: [
      {
        title: "측위타입",
        dataIndex: "username",
      },
      {
        title: "측위방식",
        dataIndex: "birthday",
      },
      {
        title: "배터리잔량",
        dataIndex: "phone",
      },
      {
        title: "안심존상태",
        dataIndex: "phone",
      },
      {
        title: "측위시간",
        dataIndex: "phone",
      },
    ],
  },
  {
    title: "설정정보",
    children: [
      {
        title: "측위주기",
        dataIndex: "username",
      },
      {
        title: "배터리알림",
        dataIndex: "birthday",
      },
      {
        title: "SOS알림",
        dataIndex: "phone",
      },
      {
        title: "안심존알림",
        dataIndex: "phone",
      },
    ],
  },
  {
    title: "관리자수",
    dataIndex: "adminCount",
  },
  {
    title: "펌웨어 버전",
    dataIndex: "version",
  },
  {
    title: "계약정보",
    children: [
      {
        title: "개통일",
        dataIndex: "username",
      },
      {
        title: "시작일",
        dataIndex: "birthday",
      },
      {
        title: "종료일",
        dataIndex: "phone",
      },
      {
        title: "고객사명",
        dataIndex: "phone",
      },
      {
        title: "계약자명",
        dataIndex: "phone",
      },
      {
        title: "계약용도",
        dataIndex: "phone",
      },
    ],
  },

  {
    title: "Action",
    render: () => (
      <Button
        shape="round"
        style={{ background: "#d4380d", color: "white", border: "none" }}
      >
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

  // 조회 데이터를 담을 list
  const [list, setList] = useState(null);
  const [list2, setList2] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    // 리스트 초기화
    // setList(null);
    const res = await axios.get(`/v2/api/portal/search/device`).catch((err) => {
      AxiosCatch(err);
      return;
    });

    if (!res) return;

    setList(res.data.data);

    for (let i = 0; i < 46; i++) {
      setList2({
        key: i,
      });
    }

    console.log("res: ", res);
    console.log("List: ", list);
    console.log("List2: ", list2);
  };

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
        dataSource={list}
        // dataSource={data}
        bordered={true}
        // scroll={{ x: 1300,  }}
        scroll={{ x: "130vw" }}
        // bordered
        size="small"
      />
    </div>
  );
};

export default App;
