import { Button, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AxiosCatch } from "./../../../util/AxiosCatch";
const columns = [
  {
    title: "No",
    dataIndex: "rowNum",
    fixed: "left",
    width: "50px",
    align: "center",
  },
  {
    title: "제품번호",
    dataIndex: "serialNo",
    align: "center",
  },
  {
    title: "회사명",
    dataIndex: "companyName",
    align: "center",
  },
  {
    title: "연락처",
    dataIndex: "bizNo",
    align: "center",
  },
  {
    title: "착용자 정보",
    align: "center",
    children: [
      {
        title: "이름",
        dataIndex: "userName",
        align: "center",
      },
      {
        title: "생년월일",
        dataIndex: "userBirthday",
        align: "center",
      },
      {
        title: "연락처",
        dataIndex: "hpNo",
        align: "center",
      },
    ],
  },
  {
    title: "최종위치측위정보",
    children: [
      {
        title: "측위타입",
        dataIndex: "username",
        align: "center",
      },
      {
        title: "측위방식",
        dataIndex: "birthday",
        align: "center",
      },
      {
        title: "배터리잔량",
        dataIndex: "phone",
        align: "center",
      },
      {
        title: "안심존상태",
        dataIndex: "phone",
        align: "center",
      },
      {
        title: "측위시간",
        dataIndex: "phone",
        align: "center",
      },
    ],
  },
  {
    title: "설정정보",
    children: [
      {
        title: "측위주기",
        dataIndex: "username",
        align: "center",
      },
      {
        title: "배터리알림",
        dataIndex: "birthday",
        align: "center",
      },
      {
        title: "SOS알림",
        dataIndex: "phone",
        align: "center",
      },
      {
        title: "안심존알림",
        dataIndex: "phone",
        align: "center",
      },
    ],
  },
  {
    title: "관리자수",
    dataIndex: "adminCount",
    align: "center",
  },
  {
    title: "펌웨어 버전",
    dataIndex: "fwVer",
    align: "center",
  },
  {
    title: "계약정보",
    children: [
      {
        title: "개통일",
        dataIndex: "username",
        align: "center",
      },
      {
        title: "시작일",
        dataIndex: "birthday",
        align: "center",
      },
      {
        title: "종료일",
        dataIndex: "phone",
        align: "center",
      },
      {
        title: "고객사명",
        dataIndex: "phone",
        align: "center",
      },
      {
        title: "계약자명",
        dataIndex: "phone",
        align: "center",
      },
      {
        title: "계약용도",
        dataIndex: "phone",
        align: "center",
      },
    ],
  },
];

const App = (props) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  // 조회 데이터를 담을 list
  // const [list, setList] = useState();

  const [service, setService] = useState("");

  // useEffect(() => {
  //   getList();
  // }, [service]);

  // const getList = async () => {
  //   // 리스트 초기화
  //   setList(null);

  //   setService(props.service);
  //   console.log("props.service: ", props.service);
  //   console.log("service: ", service);

  //   const queries = [];

  //   if (service !== "") {
  //     queries.push(`service=${service}`);
  //   }

  //   const queryStr = queries.length > 0 ? `?${queries.join("&")}` : "";
  //   const res = await axios
  //     .get(`/v2/api/portal/search/device/${queryStr}`)
  //     .catch((err) => {
  //       AxiosCatch(err);
  //       return;
  //     });
  //   console.log(`"query", ${queryStr}`);

  //   if (!res) return;

  //   setList(res.data.data);

  //   console.log("res: ", res);
  //   console.log("list.length: ", list.length);
  // };

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
        {/* 단말 초기화 */}
        <Button
          type="primary"
          onClick={() => {
            if (
              window.confirm(
                `${selectedRowKeys.length}개 단말을 초기화 하시겠습니까?`
              )
            )
              start();
          }}
          disabled={!hasSelected}
          loading={loading}
          style={{ marginRight: "8px", borderRadius: "5px" }}
        >
          단말 초기화
        </Button>

        {/* 단말 해지 */}
        <Button
          type="danger"
          onClick={() => {
            if (
              window.confirm(
                `${selectedRowKeys.length}개 단말을 해지하시겠습니까??`
              )
            )
              start();
          }}
          disabled={!hasSelected}
          loading={loading}
          style={{ marginRight: "8px", borderRadius: "5px" }}
        >
          단말 해지
        </Button>
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected
            ? ` ${selectedRowKeys.length}개 항목`
            : // : `총 ${list.length} 개 항목`}
              ""}
        </span>
      </div>

      <Table
        rowSelection={rowSelection}
        rowKey={"nodeId"}
        columns={columns}
        // dataSource={list}
        dataSource={props.list}
        bordered={true}
        scroll={{ x: "130vw" }}
        size="small"
        // scroll={{ x: 1300,  }}
        // bordered
      />
    </div>
  );
};

export default App;
