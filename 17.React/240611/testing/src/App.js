import logo from "./logo.svg";
import "./App.css";

import { Component } from "react";
class Test extends Component {
  temp = () => {
    console.log("하이");
  };

  render() {
    return (
      <div id="test" onClick={this.temp} style={{ userSelect: "none" }}>
        이건 테스트 중이야
      </div>
    );
  }
}

const arr = [1, 2, 3, 4, 5];

function App() {
  return (
    <div className="App">
      <h1>하이 내 이름은 리액트야</h1>
      {arr.map((item) => (
        <Test></Test>
      ))}
    </div>
  );
}

export default App;
