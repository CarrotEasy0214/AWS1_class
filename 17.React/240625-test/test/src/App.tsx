import { Route, Routes, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Root from "./Components/Root";
import Board from "./Components/Board";
import Write from "./Components/Write";
import { useParams } from "react-router-dom";

export interface IList {
  num: number;
  title: string;
  writer: string;
  date: string;
  like: number;
  content: string;
}

function App() {
  const loca = useLocation();
  console.log(loca);

  const [titlelists, setTitlelists] = useState<IList[]>([
    {
      num: 10,
      title: "네이버 지도(v5) 임베드",
      writer: "박성민",
      date: "24-06-27",
      like: 0,
      content: "10번글",
    },
    {
      num: 9,
      title: "제목",
      writer: "박성민",
      date: "24-06-27",
      like: 0,
      content: "9번글",
    },
    {
      num: 8,
      title: "구글 지도 게시물에 임베드 하기",
      writer: "박성민",
      date: "24-06-27",
      like: 0,
      content: "8번글",
    },
    {
      num: 7,
      title: "아이폰 7 플러스",
      writer: "박성민",
      date: "24-06-27",
      like: 0,
      content: "7번글",
    },
    {
      num: 6,
      title: "분위기 최고네요~!",
      writer: "박성민",
      date: "24-06-27",
      like: 0,
      content: "6번글",
    },
    {
      num: 5,
      title: "진짜로 갑니다~~",
      writer: "박성민",
      date: "24-06-27",
      like: 0,
      content: "5번글",
    },
    {
      num: 4,
      title: "탭 메뉴 이미지",
      writer: "박성민",
      date: "24-06-27",
      like: 0,
      content: "4번글",
    },
    {
      num: 3,
      title: "응원합니다!",
      writer: "박성민",
      date: "24-06-27",
      like: 0,
      content: "3번글",
    },
    {
      num: 2,
      title: "이번엔 가즈아아아아아아아!",
      writer: "박성민",
      date: "24-06-27",
      like: 0,
      content: "2번글",
    },
    {
      num: 1,
      title: "제목만 보여주기!",
      writer: "박성민",
      date: "24-06-27",
      like: 0,
      content: "1번글",
    },
  ]);

  return (
    <div>
      <nav className="nav">
        <ul className="ul">
          <li
            className={`li ${
              loca.pathname === "/" && "bg-blue-300 text-white"
            }`}
          >
            <Link to={"/"}>메인페이지</Link>
          </li>
          <li
            className={`li ${
              loca.pathname === "/board" && "bg-blue-300 text-white"
            }`}
          >
            <Link to={"/board"}>게시판</Link>
          </li>
          <li
            className={`li ${
              loca.pathname === "/write" && "bg-blue-300 text-white"
            }`}
          >
            <Link to={"/write"}>글쓰기</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Root titleLists={titlelists} />}></Route>
        <Route
          path="/board/:num"
          element={<Board BoardList={titlelists} />}
        ></Route>
        <Route path="/write" element={<Write />}></Route>
      </Routes>
    </div>
  );
}

export default App;
