import { createContext } from "react";

export interface ITodo {
  num: number;
  content: string;
  priority: number;
  limit: string;
}

export interface ITodoContext {
  list: ITodo[];
  addList: (todo: ITodo) => void;
}

export const TodoContext = createContext<ITodoContext | undefined>(undefined);
