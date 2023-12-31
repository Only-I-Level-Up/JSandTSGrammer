interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안...",
}; // 모든 프로퍼티를 선택적 프로퍼티로

type Partials<T> = {
  [key in keyof T]?: T[key];
};

/*
  Required<T>
  -> 필수의, 필수적인
*/

const withThumnailPost: Required<Post> = {
  title: "제목 나중에 짓자",
  tags: ["ts"],
  content: "초안...",
  thumbnailURL: "https://example.com/thumbnail.png",
};

type Requireds<T> = {
  [key in keyof T]-?: T[key];
};

/**
 * Readonly<T>
 */

const readonlyPost: Readonly<Post> = {
  title: "제목 나중에 짓자",
  tags: ["ts"],
  content: "초안...",
  thumbnailURL: "https://example.com/thumbnail.png",
};

type Readonlys<T> = {
  readonly [key in keyof T]: T[key];
};
