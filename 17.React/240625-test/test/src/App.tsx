import { Route, Routes, Link, useLocation } from "react-router-dom";
// 리액트-라우터-돔 라이브러리에서 위 기능들을 가져온다
import { useState, ChangeEvent, useCallback } from "react";
// 리액트에서 위 기능들을 가져온다
import Root from "./Components/Root";
// 컴포넌츠 폴더에서 루트파일을 연결
// 2.컴포넌츠 폴더에서 루트파일을 가져온다
import Board from "./Components/Board";
// 컴포넌츠 폴더에서 보드파일을 연결
// 2. 컴포넌츠 폴더에서 보드파일을 가져온다
import Write from "./Components/Write";
// 컴포넌츠 폴더에서 라이트파일을 연결
// 2.컴포넌츠 폴더에서 라이트파일을 져온다

export interface IList {
  // IList라는 인터페이스를 만들고 외부에서 사용가능하게 설정해준다
  // 2.IList라는 인터페이스를 만들고 내보내준다.
  num: number;
  title: string;
  writer: string;
  date: string;
  like: number;
  content: string;
  // 각각의 프로퍼티에게 타입을 지정해줌
}

function App() {
  // App이란 이름의 함수를 만듦
  // 2. App이란 이름의 컴포넌트를 만듬
  const loca = useLocation();
  // 현재경로의 정보를 확인할수 있는 loca라는 이름을 가진 상수를 선언
  // 2. useLocation을 이용하여 현재경로의 정보를 확인할수 있는 loca라는 상수를 선언
  console.log(loca);
  // loca라는 상수를 콘솔로그로 표시

  const [num, setNum] = useState<number>(11);
  // Num라는 상수를선언 넘버를 변경하고싶으면 setNum을 이용
  // useState를 사용하고 타입은 넘버를 가진다. 초기값은 11

  const [titlelists, setTitlelists] = useState<IList[]>([
    // 타이틀리스트 상수를 선언, 변경하고싶으면 useState를 사용하여 변경값 setTitlelists를 사용한다. useState는 아이리스트의 배열이다. 배열은 아래값들을 가진다.
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

  // const [inputs, setInputs] = useState({
  //   num: 0,
  //   title: "",
  //   writer: "박성민",
  //   date: "24-06-27",
  //   like: 0,
  //   content: "",
  // });

  const handleWrite = (title: string, content: string): void => {
    // handleWrite 상수선언 , 타이틀과 컨텐트를 스트링타입을 가지고 리턴값이 없으면 void를 리턴값으로한다.

    // hanleWrite 상수를 선언하여 화살표 함수를 할당한다. 해당 화살표 함수는 익명 함수이다.
    // hanleWrite 라는 화살표 함수를 선언|초기화한다.
    // handleWrite 함수는 string 타입의 title과 string 타입의 content를 매개변수로 받고 반환값이 없다.

    // console.log("Title:", title);
    // console.log("Content:", content);
    // const copy = [...titlelists];
    // copy.unshift({
    //   num,
    //   title,
    //   writer: "박성민",
    //   date: "24-06-27",
    //   like: 0,
    //   content,
    // });
    // const test = ...titlelists;
    setTitlelists([
      //settitlelists의 변경값 양식
      // writer , date, like는 고정값 나머지는 변경값
      {
        num,
        title,
        writer: "박성민",
        date: "24-06-27",
        like: 0,
        content,
      },
      // 새로운 배열에 새로운 데이터를 포함한다.
      ...titlelists,
      // 기존 배열의 아이템들을 풀어서 추가한다.
    ]);
    // 새로운 값은 titlelists에 앞부분에 추가된다.
    // setTitlelists(copy);
    setNum(num + 1);
    // 넘버변경값은 (타이틀리스트가 추가될때마다) num에 +1값을 가진다.
  };

  return (
    // 아래 내용을 렌더한다. // 반환한다
    <div>
      <nav className="nav">
        <ul className="ul">
          <li
            className={`li ${
              loca.pathname === "/" && "bg-blue-300 text-white"
              // 메인페이지의 패스네임은 "/" , 백그라운드는 블루색, 글씨는 흰색
            }`}
          >
            <Link to={"/"}>메인페이지</Link>
            {/* 메인페이지를 클릭하면 "/" 패스로 링크이동 */}
          </li>
          <li
            className={`li ${
              loca.pathname === "/board" && "bg-blue-300 text-white"
              // 게시판의 패스네임은 "/board", 백그라운드는 블루색, 글씨는 흰색
            }`}
          >
            <Link to={"/board"}>게시판</Link>
            {/* 게시판을 클릭하면 "/board" 패스로 링크이동 */}
          </li>
          <li
            className={`li ${
              loca.pathname === "/write" && "bg-blue-300 text-white"
              // 글쓰기의 패스네임은 "/write" , 백그라운드는 블루색, 글씨는 흰색
            }`}
          >
            <Link to={"/write"}>글쓰기</Link>
            {/* 글쓰기를 누르면 "/write" 패스로 링크이동 */}
          </li>
        </ul>
      </nav>
      <Routes>
        {/* 여러 라우트를 감싸서 자식들중 (규칙이)페스가 일치하는 라우트를 렌더링시킨다. */}
        <Route path="/" element={<Root titleLists={titlelists} />}></Route>
        {/* 페스가 정확히 '/'이면 루트 컴포넌트를 호출한다. titleLists 라는 Props로 titleLists를 전달한다. */}
        <Route
          path="/board/:num"
          element={<Board BoardList={titlelists} />}
        ></Route>
        {/* "/board/num"패스로 접근하면 게시판페이지에서 게시글 내용들을 보여준다  */}
        <Route path="/write" element={<Write add={handleWrite} />}></Route>
        {/* /write 패스로 접근하면 글쓰지페이지내용을 보여주고 title content 변경값을 입력하면 리스트에 추가가 가능하다. */}
      </Routes>
    </div>
  );
}

export default App;
// app을 해당 파일에 대한 기본값으로 내보내준다.
