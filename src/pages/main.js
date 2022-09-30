import * as React from "react";
import Layouts from "../components/Layouts";
import { Row, Col, Card, Button, Form } from "antd";

const App = () => {
  console.log("안녕");
  return (
    <Layouts>
      <div>
        <video className="videoTag" autoPlay loop muted></video>
      </div>
    </Layouts>
  );
};

export default App;
