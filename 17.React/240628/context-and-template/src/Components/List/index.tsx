import Item from "./item";

export interface ITitle<S> {
  key: keyof S;
  name: string;
  isStretch?: boolean;
}

interface IProps<T> {
  list: T[];
  titleList: ITitle<T>[];
}

const List = <T,>({ list, titleList }: IProps<T>): JSX.Element => {
  // console.log(list[0]["title" as keyof T]);
  return (
    <ul>
      <li>
        <ul className="flex justify-between">
          {titleList.map(
            ({ name, isStretch = false }: ITitle<T>, idx: number) => (
              <li
                key={`title-${idx}`}
                className={`w-16 ${isStretch ? "flex-1" : "text-center"}`}
              >
                {name}
              </li>
            )
          )}
        </ul>
      </li>
      {list.map((item: T, idx: number) => (
        <Item<T> key={`item-${idx}`} item={item} titleList={titleList} />
      ))}
      {/* <li>
        <ul className="flex justify-between">
          <li>1</li>
          <li>testing</li>
          <li>JKH</li>
          <li>2시간전</li>
        </ul>
      </li>
      <li>
        <ul className="flex justify-between">
          <li>1</li>
          <li>testing</li>
          <li>JKH</li>
          <li>2시간전</li>
        </ul>
      </li> */}
    </ul>
  );
};

export default List;
