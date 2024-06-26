import { Routes, Route, Link } from "react-router-dom";
import Test from "./Components/Test";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/"} className="text-blue-600 visited:text-color-red">
              홈페이지
            </Link>
          </li>
          <li>
            <Link to={"/test"} className="text-blue-600">
              테스트
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<div>홈페이지</div>}></Route>
        {/* <Route path="/test/*" element={<Test test={test}/>}></Route> */}
        <Route path="/test/:id" Component={Test}></Route>
      </Routes>
      <div>????</div>
      <Routes>
        <Route path="/" element={<div>홈페이지2</div>}></Route>
        <Route path="/test" element={<div>테스트중2</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
