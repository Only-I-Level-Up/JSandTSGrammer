/**
 * Pick<T, K>
 * -> 뽑다, 고르다
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Picked<T, K extends keyof T> = {
  // K는 T의 서브타입
  [key in K]: T[key];
};

const legacyPost: Picked<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 콘텐트",
};

/**
 * Omit<T, K>
 * -> 빼다, 생략하다
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */
type Omited<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

/**
 * Record<K, V>
 * 객체를 만들어주는 유틸리티 타입
 */

type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

type Recorded<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string; title: string; content: string }
>;
