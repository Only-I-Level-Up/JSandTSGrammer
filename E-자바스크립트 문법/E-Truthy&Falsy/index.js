const getName = () => {
  if (!person) {
    return "객체가 아닙니다.";
  }
  return person.name;
};

let person; // null || undefined는 falsy 속성
const name = getName(person);

console.log(name);
