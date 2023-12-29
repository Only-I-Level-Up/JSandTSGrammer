// 타입 별칭
type User = {
  name: string;
  age: number;
  location: string;
  nickname: string;
  id: number;
};

const user: User = {
  name: "이상진",
  age: 25,
  location: "부산시",
  nickname: "lsj0202",
  id: 1,
};

// 인덱스 시그니처
type Country = {
  [key: string]: string;
};

let country: Country = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumber = {
  [key: string]: number;
  Korea: number; // Korea는 필수적
};

let countryNumber: CountryNumber = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
