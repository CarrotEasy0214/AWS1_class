import React from "react";
import ReactDOM from "react-dom/client";
// 리액트 돔기능을 react-dom/client부터 불러온다.
import "./index.scss";
//index.scss 파일을 불러온다.
import "./App.scss";
//App.scss파일을 불러온다
// import "./board.scss";
// import "./Root.scss";
// import "./write.scss";
import App from "./App";
//앱 함수를 앱파일로부터 불러온다.
import reportWebVitals from "./reportWebVitals";
// reportWebVitals 기능을 reportWebVitals로부터 불러온다.
import { BrowserRouter } from "react-router-dom";
//BrowserRouter 을 react-router-dom부터 불러온다.

const root = ReactDOM.createRoot(
  // 루트라는 상수를 선언하고 root 엘리먼트르 만든다.
  document.getElementById("root1") as HTMLElement
  // html 엘리먼트는 root라는 아이디를 가진다.
);
root.render(
  // <React.StrictMode> 반복모드
  <BrowserRouter>
    {/* //HTML5의 history API를 활용하여 UI를 업데이트 */}
    <App />
    {/* 앱.tsx를 렌더한다. */}
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
