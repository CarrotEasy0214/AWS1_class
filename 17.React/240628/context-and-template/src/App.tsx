import Board from "./Components/Board/Comp";
import Todo from "./Components/Todo";
import { FC, useCallback, useState } from "react";
import { ITodo, TodoContext } from "./context/todoList";

const App: FC = () => {
  const [list, setList] = useState<ITodo[]>([]);
  const addList = useCallback((todo: ITodo) => {
    setList((list: ITodo[]) => [...list, todo]);
  }, []);
  return (
    <TodoContext.Provider value={{ list, addList }}>
      <div>
        <Board />
        <Todo />
      </div>
    </TodoContext.Provider>
  );
};

export default App;
