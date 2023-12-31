/**
 *
 * Exclude<T, U>
 * -> T에서 U를 제거하는 타입
 */
type Excluded<T, U> = T extends U ? never : T;

type A = Exclude<string | boolean, boolean>;

/**
 * Extract<T, U>
 * -> T에서 U를 추출하는 타입
 */

type Extracted<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>;

/**
 * ReturnType<T>
 * -> 함수의 반환값 타입을 추출하는 타입
 */

type ReturnTyped<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

const funcA = () => {
  return "hello";
};

const funcB = () => {
  return 10;
};

type Return = ReturnType<typeof funcA>;
type Return2 = ReturnType<typeof funcB>;
