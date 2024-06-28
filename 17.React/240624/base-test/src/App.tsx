import { FC } from "react";
import Text from "./Components/Text";
// xml
// JSX : JavaScript Extention(확장)
function App(): JSX.Element {
  return (
    <div>
      <Text></Text>
    </div>
  );
}

const Base: FC<{ children?: string | Element | Element[] }> = ({
  children,
}) => {
  return <>{children}</>;
};

function Base1({
  children,
}: {
  children?: string | Element | Element[];
}): JSX.Element {
  return <>{children}</>;
}

const {
  children,
}: {
  children?: string | Element | Element[];
} = { children: "test" };
console.log(children);

export default App;

// array, string, number, boolean, object, undefined, null, symbol, bigint;

// 원시 = string, number, undefined, null, bigint, boolean, symbol;
// 참조 = array, object;

// const name = 1
// const {name} = {name:'test'};
// const [a, b, ...c] = [1, 2, 3, 4, 5];
