let array = new Array();

array = [
  "이상진",
  2112,
  "대한민국",
  "부산",
  {
    lsj: () => {
      const arr = [1, 2, 3, 4, 5];
      console.log(arr);
      return arr;
    },
  },
];

const arr = array[4].lsj();
arr.push(6);
console.log("arr", arr); // 함수안의 배열에서 값 추가하기

console.log(array.length); // 점표기법으로 배열의 길이 가져오기
