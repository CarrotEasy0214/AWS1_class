// export default function Test() {
//   return <div>now Testing</div>;
// }

import { FC, useEffect, useState } from "react";

const Test: FC = () => {
  const [test, _] = useState<string>("now Testing");
  //   console.log("a");

  useEffect(() => {
    console.log("Test Component Mounted");
    return () => {
      console.log("Test Component Will Mount");
    };
    // return으로 반환하는 method가 componentWillUnmount
    // 언제 쓰면 좋을까 ? socket 통신 ( 연결 끊어줘야할때 )
  }, []);

  return <div>{test}</div>;
};

export default Test;
