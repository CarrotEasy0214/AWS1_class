import { FC } from "react";
import List from "./List";
import { Todo as TodoItem } from "../../lib/Todo";

export interface IProps {
  list: TodoItem[];
}

const Todo: FC<IProps> = ({ list }) => {
  return (
    <div>
      <List list={list}></List>
    </div>
  );
};

export default Todo;
