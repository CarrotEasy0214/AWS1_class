import { Children, FC } from "react";

function App(): JSX.Element {
  return <div></div>;
}

const Base: FC<{ children?: string | Element | Element[] }> = ({}) => {
  return <>{Children}</>;
};

function Base1({
  children,
}: {
  children?: string | Element | Element[];
}): JSX.Element {
  return <>{children}</>;
}

export default App;
