import { FC } from "react";

function Comp(): JSX.Element {
  return <div>박성민</div>;
}

export default Comp;

interface IProps {}

const Comp2: FC<IProps> = () => {
  return <div></div>;
};
