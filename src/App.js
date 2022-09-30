import logo from "./logo.svg";
import "./App.css";
// import "./App.scss";
// import "./App.less";
import Layouts from "./components/Layouts";
import defaultLayout from "./components/DefaultLayout";
// import "../src/styles/global.scss";

function App() {
  return (
    <defaultLayout>
      <div className="App"></div>
    </defaultLayout>
  );
}

export default App;
