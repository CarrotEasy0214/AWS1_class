import { ChangeEvent, FC, useCallback, useState } from "react";

export interface IProps {
  add(title: string, content: string): void;
}

const Write: FC<IProps> = ({ add }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const changeTitle = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
      setTitle(value);
    },
    []
  );

  const changeContent = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
      setContent(value);
    },
    []
  );

  const changeContent2 = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>): void => {
      setContent(value);
    },
    []
  );

  const submit = () => {
    add(title, content);
    setTitle("");
    setContent("");
  };
  return (
    <div>
      <div className="text-2xl font-extrabold m-10">자유게시판</div>
      <div className="m-10 w-[1450px]">
        <div className="flex border-t-[3px] border-b-[1px] border-solid border-x-gray-400 leading-10 bg-stone-300">
          <div className="mr-3 ml-5 w-25">제목</div>
          <input
            type="text"
            value={title}
            onInput={changeTitle}
            className="h-5 flex-1 pl-1 m-3"
          />
        </div>
        <div className="flex mt-3 border-t-[2px] border-b-[2px] border-solid border-x-gray-400 bg-stone-300">
          <div className="mr-3 ml-5 w-25 leading-[380px]">내용</div>
          <input
            className="h-[380px] flex-1 pl-1 m-3 resize-none"
            type="text"
            value={content}
            onInput={changeContent}
          ></input>
        </div>
        <textarea onChange={changeContent2}></textarea>
      </div>
      <div className="mr-10 float-right">
        <button
          className="w-20 h-10 bg-cyan-300 border-0 rounded text-white"
          onClick={submit}
        >
          글쓰기
        </button>
      </div>
    </div>
  );
};

export default Write;

// 게시판 UI 만들기
// 게시글에 대한 인터페이스 구현
