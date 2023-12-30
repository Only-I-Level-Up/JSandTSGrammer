type Person = {
  name: string;
  age: number;
};

let person: Person = {} as Person; // 프로그래머가 직접 타입을 단언

person.name = "이상진";
person.age = 27;

type Dog = {
  color: string;
  name: string;
};

let dog = {
  name: "백구",
  color: "white",
  breed: "진도",
} as Dog;

/*
  타입 단언의 규칙
  값 as 단언 <- 단언식
  A가 B의 슈퍼타입이거나 
  A가 B의 서브타입이어야 함
*/

let num1 = 10 as never;
let num2 = 20 as unknown as string; // 이러면 오류 발생 안함
// let num3 = 30 as string; 오류 발생
