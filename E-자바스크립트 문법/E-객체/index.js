// 비 원시 타입 [여러 개의 고정되지 않은 동적 공간을 사용한다.]

const person = new Object(); // 객체 생성자
const people = {}; // 객체 리터럴

const wantToEat = {
  name: "우동",
  taste: "good",
  star: 5,
  togetherEat: ["유부초밥", "콜라"],
}; // 프로퍼티 [key]: value

console.log(wantToEat); // 표기법
console.log(wantToEat.name); // 점표기법
console.log(wantToEat["name"]); // 괄호 표기법 (key를 통해서 객체의 값 찾기)

const getPropertyValue = (key) => {
  return person[key];
};

console.log(getPropertyValue("name")); // 동적인 파라미터를 전달받음, 정해진 key가 아님 => 괄호표기법 사용

wantToEat.location = "대한민국 부산";
wantToEat.sing = "Ditto";

person.name = "오뎅궁물";
person["name"] = "우동";

delete wantToEat.location; // 객체 삭제 문법
delete wantToEat["sing"]; // 객체 삭제 문법 22
wantToEat.star = null; // 객체 삭제문법 33 (null을 통해 메모리 누수를 방지할 수 있음)

wantToEat.say = () => {
  console.log("돌고돌아 우동 너였다..");
};

wantToEat.say();
console.log(wantToEat);

wantToEat.say = function () {
  console.log(`돌고돌아 ${this.name} 너였다..`);
}; // 이건 되는데

wantToEat.say = () => {
  console.log(`돌고돌아 ${this.name} 너였다..`);
}; // 이건 안됨 ㅎ

console.log(`name: ${"name" in wantToEat}`); // name이라는 key를 갖는 프로퍼티를 확인 할 수도 있음 (boolean으로)
