import { ChangeEvent, FC, useCallback, useState } from "react";
// 리액트에서 각 기능들을 불러와 사용한다.

export interface IProps {
  //iprops라는 인터페이스를 만들고 내보낸다.
  add(title: string, content: string): void;
  //타이틀과 컨텐트는 스트링타입을 갖고 둘을 add로 하나로 묶는다. 리턴이 없을경우 리턴타입을 void로 한다. (추상값)
}

const Write: FC<IProps> = ({ add }) => {
  // 라이트라는 상수를 선언한다. IProps라는 props를 가짐 add 함수실행
  const [title, setTitle] = useState<string>("");
  //타이틀 =변수 , useState를 활용하여 타이틀을 변경하고싶으면 setTitle을 활용해 변경한다. usestate는 스트링타입을 가진다.
  const [content, setContent] = useState<string>("");
  //컨텐트 =변수 , useState를 활용하여 타이틀을 변경하고싶으면 setContent을 활용해 변경한다. usestate는 스트링타입을 가진다.

  const changeTitle = useCallback(
    // 체인지타이틀이라는 상수선언 , useCallback을 이용한다. usecallback은 함수를 새로안만들고 재사용하는것
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
      // 입력한 value를  html 엘리먼트로 변경한다.
      setTitle(value);
      // 타이틀 변경값
    },
    []
  );

  const changeContent = useCallback(
    // 체인지컨텐트이라는 상수선언 , useCallback을 이용한다. usecallback은 함수를 새로안만들고 재사용하는것
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
      // 입력한 value를  html 엘리먼트로 변경한다.
      setContent(value);
      // 컨텐트 변경값
    },
    []
  );

  // const changeContent2 = useCallback(
  //   ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>): void => {
  //     setContent(value);
  //   },
  //   []
  // );

  const submit = () => {
    //서브밋이란 상수 선언 , 익명함수를 실행하면
    add(title, content);
    // 타이틀 ,컨텐트를 추가
    setTitle("");
    // 변경되는 타이틀 값
    setContent("");
    // 변경되는 컨텐트 값
  };
  return (
    <div>
      <div className="text-2xl font-extrabold m-10">자유게시판</div>
      {/* 텍스트를 2xl 사이즈 크기 font 굵기를 굵게 마진은 40px  */}
      <div className="m-10 w-[1450px]">
        {/* 마진 40px width 1450px  */}
        <div className="flex border-t-[3px] border-b-[1px] border-solid border-x-gray-400 leading-10 bg-stone-300">
          {/* 정렬방식 플렉스 , 보더라인 상단에 3px 하단에 1px 선은 솔리드형태이고 보더 가로선 그레이색 백그라운드컬러 스톤300색 */}
          <div className="mr-3 ml-5 w-25">제목</div>
          {/* 마진라이트 12px 마진레프트 20px width 100px */}
          <input
            type="text"
            value={title}
            onInput={changeTitle}
            className="h-5 flex-1 pl-1 m-3"
          />
          {/* 인풋의 타입은 텍스트, 밸류는 타이틀, 온인풋되면 타이틀변경 / height 20px 플렉스1, 패딩레프트 4px 마진 12px */}
        </div>
        <div className="flex mt-3 border-t-[2px] border-b-[2px] border-solid border-x-gray-400 bg-stone-300">
          {/* 정렬방식 플렉스 마진탑12px 보더탑 2px 보더바텀 2px 보더 솔리드 회색선 백그라운드 스톤색 */}
          <div className="mr-3 ml-5 w-25 leading-[380px]">내용</div>
          {/* 마진라이트 12px 마진레프트 20xp width 100px inline-height 380px */}
          <input
            className="h-[380px] flex-1 pl-1 m-3 resize-none"
            type="text"
            value={content}
            onInput={changeContent}
          ></input>
          {/* 인풋의 타입은 텍스트, 밸류는 컨텐트, 온인풋되면 컨텐트변경 / height 380px 플렉스1, 패딩레프트 4px 마진 12px 사이즈 재변경 없음*/}
        </div>
        {/* <textarea onChange={changeContent2}></textarea> */}
      </div>
      <div className="mr-10 float-right">
        {/* 마진라이트 40px 왼쪽정렬 */}
        <button
          className="w-20 h-10 bg-cyan-300 border-0 rounded text-white"
          // width 80px height 40px 백그라운드 시안색 보더 0px 모서리 둥글게 글씨 흰색
          onClick={submit}
          //온클릭되면 서브밋함수실행
        >
          글쓰기
        </button>
      </div>
    </div>
  );
};

export default Write;
//write컴포넌트를 해당파일의 기본값으로 내보낸다.

// 게시판 UI 만들기
// 게시글에 대한 인터페이스 구현
