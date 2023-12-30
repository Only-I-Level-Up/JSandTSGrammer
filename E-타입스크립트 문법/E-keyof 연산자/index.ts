type Person = typeof person;

const getPropertiesKey = (person: Person, key: keyof typeof person) => {
  return person[key];
};

const person = {
  name: "이상진",
  age: 18,
};

getPropertiesKey(person, "name");
