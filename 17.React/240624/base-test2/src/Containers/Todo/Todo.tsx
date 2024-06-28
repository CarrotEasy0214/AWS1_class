import { FC, useState } from "react";
import { Todo as TodoItem } from "../../lib/Todo";
import TodoComp from "../../Components/Todo/Todo";

export interface IProps {}

const Todo: FC<IProps> = ({}) => {
  const [list, setList] = useState<TodoItem[]>([]);

  return <TodoComp list={list} />;
};

export default Todo;
