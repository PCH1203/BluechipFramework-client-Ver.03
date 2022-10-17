import { Button, Divider, message, Steps } from "antd";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

import Testcomp1 from "./testComponent1";
import Testcomp2 from "./testComponent2";
import { Link } from "react-router-dom";
import axios from "axios";
import { AxiosCatch } from "../../util/AxiosCatch";
const { Step } = Steps;

const App = ({ onClose }) => {
  const [current, setCurrent] = useState(0);
  const [stepOneValues, setStepOneValues] = useState(null);
  const [agreementList, setAgreementList] = useState();

  useEffect(() => {
    console.log("Agreement Effect 시작");
    getAgreement();
    console.log("Agreement Effect 종료");
  }, []);

  const getAgreement = async () => {
    console.log("getAgreement 시작");
    setAgreementList(null);
    const res = await axios
      .get(`/v2/api/portal/auth/loadAgreement`)
      .catch((err) => {
        AxiosCatch(err);
        console.log("getAgreement 종료");
        return;
      });
    setAgreementList(res.data.data);
  };

  const stepNext1 = (step1Vaslues) => {
    console.log("stepNext1 실행!");
    setCurrent(current + 1);
    setStepOneValues(null);
    setStepOneValues(step1Vaslues);
  };

  const next = () => {
    console.log("stepNext2 실행!");
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const currentReset = () => {
    setCurrent(0);
  };

  /**
   *  스텝 컨텐츠
   */
  const steps = [
    {
      title: "이용약관 동의",
      content: <Step1 next={stepNext1} onClose={onClose} />,
      // content: <Testcomp1 />,
    },
    {
      title: "계정 정보 입력",
      content: (
        <Step2
          next={next}
          onClose={onClose}
          currentReset={currentReset}
          step1Values={stepOneValues}
        />
      ),
      // content: <Testcomp2 />,
    },
    {
      title: "회원가입 완료",
      content: <Step3 />,
    },
  ];
  return (
    <>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <Divider />
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {/* {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            다음
          </Button>
        )} */}
        {/* {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )} */}
        {/* {current > 0 && current !== 2 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            이전
          </Button>
        )} */}
        {current === 2 && (
          <Button
            size="large"
            style={{
              margin: "0 8px",
              width: "100%",
              background: "#1f1f1f",
              color: "white",
            }}
            onClick={() => {
              onClose();
              currentReset();
            }}
          >
            {/* <Link to="/login">로그인</Link> */}
            로그인
          </Button>
        )}
      </div>
    </>
  );
};

// export default () => <App />;
export default App;
