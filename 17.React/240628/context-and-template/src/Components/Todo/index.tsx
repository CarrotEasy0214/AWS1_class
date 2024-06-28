import { useState, useMemo, useContext, useEffect } from "react";
import List, { ITitle } from "../List";
import { ITodoContext, TodoContext, ITodo } from "../../context/todoList";

// interface ITodo {
//   num: number;
//   content: string;
//   priority: number;
//   limit: string;
// }

const Todo = (): JSX.Element => {
  // const [list, setList] = useState<ITodo[]>([]);
  const { list } = useContext(TodoContext) as ITodoContext;
  const titleList: ITitle<ITodo>[] = useMemo(
    () => [
      { key: "num" as keyof ITodo, name: "No." },
      { key: "content" as keyof ITodo, name: "할일", isStretch: true },
      { key: "limit" as keyof ITodo, name: "기간제한" },
    ],
    []
  );
  // useEffect(() => {
  //   addList({ num: 1, content: "asdasdsa", limit: "240630", priority: 1 });
  // }, []);
  return (
    <div>
      <List<ITodo> list={list} titleList={titleList} />
    </div>
  );
};

export default Todo;
