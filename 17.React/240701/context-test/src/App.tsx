import { useCallback, useState } from "react";
import { useTodoContext } from "./context/TodoProvider";
import { Todo } from "./context/TodoProvider";
import Add from "./components/Add";
import List from "./components/List";

const App = (): JSX.Element => {
  // const { state, dispatch } = useTodoContext();
  // console.log(state);

  // const addTodo = useCallback(() => {
  //   dispatch({
  //     type: "ADDTODO",
  //     payload: { id: 1, content: "testing", isComplete: false },
  //   });
  // }, []);
  return (
    <div>
      <Add />
      <List />
      {/* <button onClick={addTodo}>추가</button>
      {state.todoList.map((item: Todo, idx: number) => (
        <div key={idx}>{item.content}</div>
      ))} */}
    </div>
  );
};

export default App;
