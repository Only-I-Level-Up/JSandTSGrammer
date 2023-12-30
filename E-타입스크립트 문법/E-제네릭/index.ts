interface InterfaceA {
  length: number;
}

interface InterfaceB extends InterfaceA {}

const getLength = <T extends { length: number }>(data: T) => {
  return data.length;
};

const var1 = getLength([1, 2, 3]);
const var2 = getLength("12345");
const var3 = getLength({ length: 10 });

// map 메서드 만들기
const maps = <T, U>(arr: T[], callback: (item: T) => U): U[] => {
  let result: U[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
};

const arr = [1, 2, 3, 4];
const doubledArr = maps(arr, (it) => it * 2);

// forEach 메서드 만들기
const arr2 = [1, 2, 3, 4];

const forEachs = <T>(arr: T[], callback: (item: T) => void) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};

forEachs(arr2, (it) => console.log(it.toFixed(2)));
