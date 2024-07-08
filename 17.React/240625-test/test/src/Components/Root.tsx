import { FC } from "react";
//리액트에서 function component 기능 불러오기
import { IList } from "../App";
// 앱파일에서 IList 정보 불러오기
import { useParams, Link } from "react-router-dom";
// react-router-dom에서 useParams,Link 기능 불러오기

interface IRoot {
  //IRoot라는 interface 생성
  titleLists: IList[];
  // 타이틀리스트라는 타입을 만듬 , IList의 배열형태
}

const Root: FC<IRoot> = ({ titleLists }) => {
  // Root라는 함수를 선언 , IRoot라는 props를가짐/
  // const params = useParams();
  // console.log(params);
  return (
    <div>
      <div className="text-2xl font-extrabold m-10">자유게시판</div>
      {/* 텍스트를 2xl 사이즈 크기 font 굵기를 굵게 마진은 40px  */}
      <div className="m-10 w-[1450px]">
        {/* 마진 40px width 1450px  */}
        <div className="flex border-t-[3px] border-b-[1px] border-solid border-x-gray-400">
          {/* 정렬방식 플렉스 , 보더라인 상단에 3px 하단에 1px 선은 솔리드형태이고 보더 가로선 그레이색 백그라운드컬러 스톤300색 */}
          <div className="text-center w-[100px] leading-10 text-center">NO</div>
          {/* 텍스트 중앙정렬방식 지정된 범위이외 남은 범위를 플렉스1로 모두설정, inline-height 40px */}
          <div className="text-center flex-1 leading-10 text-center">제목</div>
          {/* 텍스트 중앙정렬방식 지정된 범위이외 남은 범위를 플렉스1로 모두설정, inline-height 40px */}
          <div className="text-center w-[100px] leading-10 text-center">
            {/* 텍스트 중앙정렬방식 width 100px , inline-height 40px */}
            글쓴이
          </div>
          <div className="text-center w-[200px] leading-10 text-center">
            {/* 텍스트 중앙정렬방식 width 200px , inline-height 40px */}
            작성시간
          </div>
          <div className="text-center w-[100px] leading-10 text-center">
            {/* 텍스트 중앙정렬방식 width 100px , inline-height 40px */}
            좋아요
          </div>
        </div>
        {titleLists.map((list) => {
          //타이틀리스트를 변환하여 새 배열로 반환한다.
          return (
            <div className="flex border-b-[1px] border-solid border-x-gray-400">
              {/* 정렬방식 플렉스 보더바텀1px 솔리드 회색선 */}
              <div className="text-center w-[100px] leading-10 text-center">
                {/* 텍스트 중앙정렬방식 width 100px inline-height 40px  */}
                {list.num}
                {/* 리스트의 넘버들을 반환 */}
              </div>
              <div className="flex-1 leading-10 text-left">
                <Link to={`/board/${list.num}`}>{list.title}</Link>
                {/* 리스트의 타이틀을 반환한다. 클릭하면 리스트의넘버를 기준으로 링크이동 */}
              </div>
              <div className="text-center w-[100px] leading-10 text-center">
                {/* 텍스트 중앙정렬,width 100px, inline-height 40px */}
                {list.writer}
                {/* 리스트의 작성자정보를 반환 */}
              </div>
              <div className="text-center w-[200px] leading-10 text-center">
                {/* 텍스트 중앙정렬,width 200px, inline-height 40px */}
                {list.date}
                {/* 리스트의 데이터정보를 반환 */}
              </div>
              <div className="text-center w-[100px] leading-10 text-center">
                {/* 텍스트 중앙정렬,width 100px, inline-height 40px */}
                {list.like}
                {/* 리스트의 좋아요정보를 반환 */}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mr-10 float-right">
        {/* 마진라이트 40px 왼쪽정렬 */}
        <button className="w-20 h-10 bg-cyan-300 border-0 rounded text-white">
          {/* width 80px height 40px 백그라운드 시안색 보더라인0px 모서리 둥글게 글씨 흰색 */}
          <Link to={"/write"}>글쓰기</Link>
          {/* 클릭하면 /write로 이동 */}
        </button>
      </div>
    </div>
  );
};

export default Root;

// Root를 해당파일의 기본값으로 내보낸다
