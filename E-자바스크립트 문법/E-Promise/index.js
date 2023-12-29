// Promise를 사용해 콜백 지옥을 탈출하자!

const isPositive = (number, resolve, reject) => {
  setTimeout(() => {
    if (typeof number === "number") {
      // 성공 -> resolve
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      // 실패 -> reject
      reject("주어진 값이 숫자형이 아닙니다.");
    }
  }, 2000);
};

isPositive(
  -10,
  (res) => {
    console.log("성공적으로 수행됨", res);
  },
  (err) => {
    console.log("실패하였음", err);
  }
); // callback 이용

const isPositiveP = (number) => {
  const executor = (resolve, reject) => {
    setTimeout(() => {
      if (typeof number === "number") {
        // 성공 -> resolve
        console.log(number);
        resolve(number >= 0 ? "양수" : "음수");
      } else {
        // 실패 -> reject
        reject("주어진 값이 숫자형이 아닙니다.");
      }
    }, 2000);
  };

  const asyncTask = new Promise(executor); // Promise 객체 생성 (생성자로 executor넘김)
  return asyncTask;
};

const res = isPositiveP("101"); // 동기 함수를 비동기 함수로 변경

res
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
