const taskA = () => {
  console.log("taskA");
};

const taskB = () => {
  console.log("taskA");
};

const taskC = () => {
  console.log("taskA");
};

taskA();
taskB();
taskC(); // 자바스크립트의 싱글 스레드 (동기 방식의 처리)

// 비동기 작업: 싱글 스레드를 사용하고 콜백함수를 붙여 사용한다.
const task = () => {
  setTimeout(() => {
    console.log("A TASK END");
  }, 2000);
};

task();
console.log("코드 끝");
