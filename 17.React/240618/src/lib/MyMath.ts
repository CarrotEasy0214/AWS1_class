interface IMyMath {
  add(a?: number, b?: number): number;
  add(a?: string, b?: string): number;
}

// 같은 메서드를 여러방식으로 넣는것을 오버로드 ex)console.log(), ()넣을수있는것중 다양한 방식을 넣을 수 있는 메서드
// 부모가 정해놓은 메서드를 자식이 재정립하면 오버라이드

// 어디까지나 예시
// 1 = number, 2 = string, 4 = object , 8 = array
// 1, 10, 100, 1000
class MyMath implements IMyMath {
  add(a?: number | string | null | undefined, b?: number | string): number {
    // 1| 10 => 11 // 2진법
    // 넘어온 인자가 number => 01, 11에 포함
    // 넘어온 인자가 object => 4, 100, 011에 포함안됨
    if (!a) a = 1;
    if (!b) b = 1;
    return +a + +b; // 형변환(string에서 숫자로 형태를 바꿔주는것)
  }
}

const myMath: IMyMath = new MyMath();
myMath.add(undefined);

type TStudent = {
  name: string;
  age: number;
};

const student = { name: "방지완", age: 29 };
// const key: string = "test";
const key: keyof TStudent = "age";

console.log(student[key]);
