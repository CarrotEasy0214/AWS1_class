import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// Recoil=Context를 쉽게 사용할 수 있게해주는 라이브러리이다.
// 같은종류로는 Redux,MobX 같은 라이브러리들이 있다.
// Redux는 필수<< 예~전 대충 4년전
// Recoil도 요즘은 지양하는편이긴하다 => 왜? 전역상태 자체를 지양한다.

import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      {/* {store 세팅} */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
