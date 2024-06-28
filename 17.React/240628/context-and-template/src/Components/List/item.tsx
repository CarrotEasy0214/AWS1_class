import { ITitle } from ".";

const Item = <T,>({
  item,
  titleList,
}: {
  item: T;
  titleList: ITitle<T>[];
}): JSX.Element => {
  return (
    <li>
      <ul className="flex justify-between">
        {titleList.map(({ key, isStretch }: ITitle<T>, idx: number) => (
          <li
            key={`item-${idx}`}
            className={`w-16 truncate ${isStretch ? "flex-1" : "text-center"}`}
          >{`${item[key]}`}</li>
        ))}
      </ul>
    </li>
  );
};

export default Item;
