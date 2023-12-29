const meal = {
  한식: "라면",
  일식: "라멘",
  중식: "짜장면",
};

const getMeal = (mealType) => {
  return meal[mealType] || "굶기";
};

console.log(getMeal());
console.log(getMeal("중식"));
