type Map2<T> = {
  [key: string]: T;
};

let stringMap2: Map2<string> = {
  key: "string",
};

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

const developerUser: User<Developer> = {
  name: "lsj",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "lsj",
  profile: {
    type: "student",
    school: "BSSM",
  },
};

const goToSchool = (user: User<Student>) => {
  console.log("잘 못 오셨습니다.");
  const school = user.profile.school;
};
