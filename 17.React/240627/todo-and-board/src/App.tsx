import { Children, FC } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Todo from "./Components/Todo";
import Board from "./Components/Board/Contariner";

const App: FC = () => {
  return (
    <div>
      <nav>
        <ul className="flex px-4 py-2 gap-4 bg-black">
          <LinkButton path="/">게시판</LinkButton>
          <LinkButton path="/todo">의뢰 목록</LinkButton>
          {/* <li>
            <Link to={"/"}>
              <button className="px-2 py-1 border rounded-md border-black">
                게시판
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/todo"}>할일</Link>
          </li> */}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Board />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
      </Routes>
    </div>
  );
};

export const LinkButton: FC<{
  path: string;
  children: string | JSX.Element | JSX.Element[];
}> = ({ path, children }) => {
  return (
    <li>
      <Link to={path}>
        <button className="px-2 py-1 border rounded-md bg-gray-300">
          {children}
        </button>
      </Link>
    </li>
  );
};

export default App;
