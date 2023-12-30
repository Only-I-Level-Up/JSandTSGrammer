type User = {
  id: number;
  name: string;
  age: number;
};

type PartialUser = {
  [key in keyof User]?: User[key];
};

const fetchUser = (): User => {
  return {
    id: 1,
    name: "이상진",
    age: 18,
  };
};

const updateUser = (user: User) => {};
