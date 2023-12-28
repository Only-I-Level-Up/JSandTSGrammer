let arr = [1, 2, 3, 4, 5];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
} // 내장함수 사용하면 한 줄 쌉가능

arr.forEach((element) => console.log(element));

console.log(newArr);
arr.forEach((element) => newArr.push(element * 2));
console.log(newArr);

//map
arr.map((element) => {
  return newArr.push(...element, element * 4);
}); // 원본배열 훼손x

console.log(newArr);

//forEach
arr.forEach((data) => {
  if (data === 3) {
    console.log("hello");
  }
});

// includes (기본 배열)
console.log(arr.includes(3)); // true
console.log(arr.indexOf(3)); // 2
console.log(arr.indexOf(-1)); // -1

const obj = [
  { color: "red", num: 1 },
  { color: "blue", num: 2 },
  { color: "pink", num: 3 },
  { color: "pink", num: 4 },
  { color: "pink", num: 5 },
];

// find, findIndex (객체 배열)
console.log(obj.findIndex((el) => el.color === "blue")); // 1
console.log(obj.findIndex((el) => el.color === "pink")); // 2 (같은 컬러가 있다면 먼저 나온 컬러의 인덱스를 출력)
console.log(obj.find((el) => el.color == "red")); // 객체 요소를 반환

// filter
console.log(obj.filter((el) => el.color === "pink")); // color가 pink인 요소 출력

// some
console.log(obj.some((el) => el.color === "pink")); // color가 pink인 요소가 있는지 확인

// slice
console.log(obj.slice(0, 2));

// concat
const obj2 = [{ color: "blackPink" }, { color: "blackPink" }];
console.log(obj.concat(obj2)); // 배열이 합쳐짐

// sort
let chart = [1, 2, 3, 4, 5, 2, 10];

chart.sort();
console.log(chart); // 문자열 기준으로 정렬 [1, 10, 2, 2, 3, 4, 5]

// sort 비교함수
const compare = (a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }

  return 0;
};
chart.sort(compare);
console.log(chart);

chart.sort((a, b) => a - b); // 위의 함수를 쉽게 사용하려면 이러한 코드를 쓰면 됩니다.
console.log(chart); // 숫자 기준으로 정렬 [1, 2, 3, 4, 5, 10, 2]

// 배열의 문자열을 하나의 문자열로 합침
const keyWords = ["이상진", "님", "안녕하세요", "좋은", "아침입니다", "!"];
console.log(keyWords.join(" "));
