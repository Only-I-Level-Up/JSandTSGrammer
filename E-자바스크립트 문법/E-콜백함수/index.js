const eatFood = (mood, goodCallBack, badCallBack) => {
  // 함수 표현식
  if (mood == "good") {
    goodCallBack();
  } else {
    badCallBack();
  }
};

const tasteGood = () => {
  console.log("맛있어서 눈물이ㅠ");
};

const tasteBad = () => {
  console.log("우웩");
};

eatFood("good", tasteGood, tasteBad); // mood, goodCallBack, badCallBack
