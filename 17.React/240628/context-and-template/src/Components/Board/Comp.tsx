import { ITodoContext, TodoContext } from "../../context/todoList";
import List, { ITitle } from "../List";
import { useContext, useEffect, useState } from "react";

export interface IBoard {
  num: number;
  title: string;
  user: string;
  createdAt: Date;
}

const Board = (): JSX.Element => {
  const [titleList, setTitleList] = useState<ITitle<IBoard>[]>([
    { key: "num" as keyof IBoard, name: "No." },
    { key: "title" as keyof IBoard, name: "제목", isStretch: true },
    { key: "user" as keyof IBoard, name: "작성자" },
    { key: "createdAt" as keyof IBoard, name: "작성일자" },
  ]);
  const [list, setList] = useState<IBoard[]>([
    { num: 1, title: "testing", user: "jkh", createdAt: new Date() },
  ]);

  // const { addList } = useContext(TodoContext) as ITodoContext;
  const context = useContext(TodoContext) as ITodoContext;
  const addList = context.addList;
  const todoList = context.list;

  useEffect(() => {
    addList({ num: 2, content: "asdasdsa", limit: "240630", priority: 3 });
  }, []);

  return (
    <div>
      <List<IBoard> list={list} titleList={titleList} />
    </div>
  );
};

export default Board;
