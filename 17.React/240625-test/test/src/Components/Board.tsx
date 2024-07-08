import { FC } from "react";
// 리액트에서 FC기능을 불러옴
import { IList } from "../App";
// 앱파일에서 IList 인터페이스를 연결함
// 2. 앱파일에서 IList 인터페이스를 불러옴
import { useParams } from "react-router-dom";
// 리액트-라우터-돔에서 useParams기능을 불러옴

export interface IBoard {
  BoardList: IList[];
}
// IBoard라는 인터페이스를 만들고 내보내줌
// BoardList는 IList의 배열이다

const Board: FC<IBoard> = ({ BoardList }) => {
  // Board라는 함수를 실행 , IBoard라는 props를 타입으로가짐
  // 2. Board라는 상수를 선언하여 화살표 함수를 할당한다.
  const params = useParams();
  // paramas라는 상수를 선언한뒤 파라미터 정보를 가져온다.
  // 2.paramas라는 상수를 선언한뒤 useParams를 이용하여 파라미터 정보를 가져온다.

  // const num = params.num ? +params.num : 0;
  // const board = BoardList[BoardList.length - +num] as IList;
  const board = BoardList.find((item) => `${item.num}` === params.num) as IList;
  // 보드 = 보드리스트에서 item.num 와 params.num이 같은 기준으로  item을 찾는다.
  // 2. board라는 상수를 선언하고 boardlist에서 item.num 와 params.num이 같은 기준으로  item을 찾는다.그리고 IList라는 타입을 가진다.

  console.log(board);
  // 콘솔로그로 보드내용을 표시

  // console.log(params);
  return (
    // 아래 내용들은 렌더한다.
    // 2. 반환한다.
    <div>
      <div className="text-2xl font-extrabold m-10">자유게시판</div>
      {/* 텍스트를 2xl 사이즈 크기 font 굵기를 굵게 마진은 40px  */}
      {/* {BoardList.map((contents, i) => {
        return ( */}
      <div className="m-10 w-[1450px]">
        {/* 마진 40px width 1450px  */}
        <div className="flex border-t-[3px] border-b-[1px] border-solid border-x-gray-400 bg-stone-300">
          {/* 정렬방식 플렉스 , 보더라인 상단에 3px 하단에 1px 선은 솔리드형태이고 보더 가로선 그레이색 백그라운드컬러 스톤300색 */}
          <div
            className="text-center flex-1 leading-10 text-center"
            // 텍스트 중앙정렬방식 지정된 범위이외 남은 범위를 플렉스1로 모두 설정, inline-height 40px
            // key={contents[].num}
          >
            {board.title}
            {/* 보드의 타이틀 정보를 불러와달라 */}
          </div>
          <div
            className="text-center w-[200px] leading-10 text-center"
            // 텍스트 중앙정렬방식 width 200px , inline-height 40px
            // key={contents.num}
          >
            {board.writer}
            {/* 보드의 작성자 정보를 불러와달라 */}
          </div>
          <div
            className="text-center w-[200px] leading-10 text-center"
            // 텍스트 중앙정렬방식 width 200px , inline-height 40px
            // key={contents.num}
          >
            {board.date}
            {/* 보드의 데이트 정보를 불러와달라 */}
          </div>
          <div
            className="text-center w-[100px] leading-10 text-center"
            // 텍스트 중앙정렬방식 width 100px , inline-height 40px
            // key={contents.num}
          >
            {board.like}
            {/* 보드의 좋아요 숫자 정보를 불러와달라 */}
          </div>
        </div>
        <div className="flex border-t-[2px] border-b-[2px] border-solid border-x-gray-400 mt-2.5">
          {/* 정렬방식 flex, 보더 탑 2px, 바텀 2px, 보더 선은 솔리드, 보더 가로 선 색, 그레이 마진탑 10xp 정도 */}
          <div className="content-bg">
            <div
              className="m-5 h-[350px]"
              // 마진 20px height 350px
              //  key={contents.num}
            >
              {board.content}
              {/* 보드의 콘텐트정보를 불러와달라 */}
            </div>
          </div>
        </div>
      </div>
      {/* );
      })} */}
      <div className="mr-20 float-right">
        {/* 마진라이트 80px 버튼 오른쪽정렬 */}
        <button className="w-20 h-10 bg-cyan-300 border-0 rounded text-white mr-5">
          {/* width 80px height 40px 배경색 시안색 보더라인은 0px 모서리는 둥글게 글씨색은 흰색 마진라이트 20px */}
          목록
        </button>
        <button className="w-20 h-10 bg-cyan-300 border-0 rounded text-white">
          {/* width 80px height 40px 배경색 시안색 보더라인은 0px 모서리는 둥글게 글씨색은 흰색 */}
          글쓰기
        </button>
      </div>
    </div>
  );
};

export default Board;

// 보드를 해당파일에 대한 기본값으로 내보내기
