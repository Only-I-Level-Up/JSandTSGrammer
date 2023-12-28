let arr = [];

for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) {
    arr.push(i);
  }
}

console.log(arr);

let object = {
  name: "이상진",
  age: 18,
  dev: "Frontend",
  food: "우동",
  same: "노영진",
};

for (let key in object) {
  console.log(key, object[key]);
}
