import { FC } from "react";
import { IList } from "../App";
import { useParams, Link } from "react-router-dom";

interface IRoot {
  titleLists: IList[];
}

const Root: FC<IRoot> = ({ titleLists }) => {
  // const params = useParams();
  // console.log(params);
  return (
    <div>
      <div className="text-2xl font-extrabold m-10">자유게시판</div>
      <div className="m-10 w-[1450px]">
        <div className="flex border-t-[3px] border-b-[1px] border-solid border-x-gray-400">
          <div className="text-center w-[100px] leading-10 text-center">NO</div>
          <div className="text-center flex-1 leading-10 text-center">제목</div>
          <div className="text-center w-[100px] leading-10 text-center">
            글쓴이
          </div>
          <div className="text-center w-[200px] leading-10 text-center">
            작성시간
          </div>
          <div className="text-center w-[100px] leading-10 text-center">
            좋아요
          </div>
        </div>
        {titleLists.map((list) => {
          return (
            <div className="flex border-b-[1px] border-solid border-x-gray-400">
              <div className="text-center w-[100px] leading-10 text-center">
                {list.num}
              </div>
              <div className="flex-1 leading-10 text-left">
                <Link to={`/board/${list.num}`}>{list.title}</Link>
              </div>
              <div className="text-center w-[100px] leading-10 text-center">
                {list.writer}
              </div>
              <div className="text-center w-[200px] leading-10 text-center">
                {list.date}
              </div>
              <div className="text-center w-[100px] leading-10 text-center">
                {list.like}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mr-10 float-right">
        <button className="w-20 h-10 bg-cyan-300 border-0 rounded text-white">
          글쓰기
        </button>
      </div>
    </div>
  );
};

export default Root;
