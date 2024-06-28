import { FC } from "react";

// interface IProps {}

// const Text: FC<{}> = ({}) => {
//   return <div>Text</div>;
// };

// function Text2({}: {}) {
//   return <div>Text2</div>;
// }

interface IProps {}

const Text: FC<IProps> = ({}) => {
  return (
    <div>
      <div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <Text2 test={"???"} test2="hey">
        <Text2 test={"???"} test2="hey"></Text2>
        <Text2 test={"???"} test2="hey"></Text2>
        <Text2 test={"???"} test2="hey"></Text2>
        <Text2 test={"???"} test2="hey"></Text2>
        <Text2 test={"???"} test2="hey"></Text2>
      </Text2>
      Text
      <Text2 key={"test1"} test={"???"} test2="hey">
        하이요~
      </Text2>
      {/* <Text2 key={"test2"} test={"???"} test2="hey"></Text2>
      <Text2 key={"test3"} test={"???"} test2="hey"></Text2>
      <Text2 key={"test4"} test={"???"} test2="hey"></Text2>
      <Text2 key={"test5"} test={"???"} test2="hey"></Text2> */}
    </div>
  );
};

function Text2({
  test,
  test2,
  children,
}: {
  test: string;
  test2: string;
  children?: string | JSX.Element | JSX.Element[];
}) {
  console.log(test);
  console.log(test2);
  return (
    <div>
      Text2
      {children}
    </div>
  );
}

export default Text;
