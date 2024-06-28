import { FC } from "react";
import { Todo as TodoItem } from "../../lib/Todo";

export interface IProps {
  list: TodoItem[];
}

const List: FC<IProps> = ({ list }) => {
  return <div></div>;
};

export default List;
