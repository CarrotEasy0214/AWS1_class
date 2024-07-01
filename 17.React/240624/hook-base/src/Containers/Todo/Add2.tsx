import { ChangeEvent, FC, useCallback, useState } from "react";
import AddComp from "../../Components/Todo/Add";

export interface IProps {
  addItem(content: string, priority: number, limit: string): void;
}

const Add: FC<IProps> = ({ addItem }) => {
  const [content, setContent] = useState<string>("");
  const [priority, setPriority] = useState<number>(0);
  const [limit, setLimit] = useState<string>("");

  const changeContent = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
      setContent(value);
    },
    []
  );

  const changePriority = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
      const temp = +value;
      if (!isNaN(temp)) setPriority(temp);
      // e 무리수 << 숫자
      // typeof NaN == number
    },
    []
  );

  const changeLimit = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
      setLimit(value);
    },
    []
  );

  const submit = () => {
    addItem(content, priority, limit);
    setContent("");
    setPriority(0);
    setLimit("");
  };

  return (
    <div className="flex items-center gap-2 p-1 border-b-4 border-black border-double">
      <label htmlFor="todo-priority">Priority :</label>
      <input
        className="border rounded border-gray-500"
        type="number"
        id="todo-priority"
        value={priority}
        onInput={changePriority}
      />
      <input
        className="flex-1 border rounded border-gray-500"
        type="text"
        value={content}
        onInput={changeContent}
        placeholder="Todo"
      />
      <input
        className="border rounded border-gray-500"
        type="date"
        value={limit}
        onInput={changeLimit}
      />
      <button
        className={
          "border border-gray-400 rounded p-1 px-5 bg-blue select-none"
        }
        onClick={submit}
      >
        추가
      </button>
    </div>
  );
};

export default Add;
