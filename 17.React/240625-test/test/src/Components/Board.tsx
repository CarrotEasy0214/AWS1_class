import { FC } from "react";
// 리액트에서 FC기능을 불러옴
import { IList } from "../App";
// 앱파일에서 IList 인터페이스를 연결함
import { useParams } from "react-router-dom";
// 리액트-라우터-돔에서 useParams기능을 불러옴

export interface IBoard {
  BoardList: IList[];
}
// IBoard라는 인터페이스를 만들고 외부에서 받을수있게 export해줌
// BoardList는 IList의 배열이다

const Board: FC<IBoard> = ({ BoardList }) => {
  // Board라는 함수를 실행 , IBoard라는 props를 타입으로가짐
  const params = useParams();
  // paramas라는 상수를 선언한뒤 파라미터 정보를 가져온다.
  // const num = params.num ? +params.num : 0;
  // const board = BoardList[BoardList.length - +num] as IList;
  const board = BoardList.find((item) => `${item.num}` === params.num) as IList;
  console.log(board);
  // console.log(params);
  return (
    <div>
      <div className="text-2xl font-extrabold m-10">자유게시판</div>
      {/* {BoardList.map((contents, i) => {
        return ( */}
      <div className="m-10 w-[1450px]">
        <div className="flex border-t-[3px] border-b-[1px] border-solid border-x-gray-400 bg-stone-300">
          <div
            className="text-center flex-1 leading-10 text-center"
            // key={contents[].num}
          >
            {board.title}
          </div>
          <div
            className="text-center w-[200px] leading-10 text-center"
            // key={contents.num}
          >
            {board.writer}
          </div>
          <div
            className="text-center w-[200px] leading-10 text-center"
            // key={contents.num}
          >
            {board.date}
          </div>
          <div
            className="text-center w-[100px] leading-10 text-center"
            // key={contents.num}
          >
            {board.like}
          </div>
        </div>
        <div className="flex border-t-[2px] border-b-[2px] border-solid border-x-gray-400 mt-2.5">
          <div className="content-bg">
            <div
              className="m-5 h-[350px]"
              //  key={contents.num}
            >
              {board.content}
            </div>
          </div>
        </div>
      </div>
      {/* );
      })} */}
      <div className="mr-20 float-right">
        <button className="w-20 h-10 bg-cyan-300 border-0 rounded text-white mr-5">
          목록
        </button>
        <button className="w-20 h-10 bg-cyan-300 border-0 rounded text-white">
          글쓰기
        </button>
      </div>
    </div>
  );
};

export default Board;
