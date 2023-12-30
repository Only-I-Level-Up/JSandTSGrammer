type FuncA = () => string;
type FuncB = () => number;

type ReturnThype<T> = T extends () => infer R ? R : never;

type Ac = ReturnThype<FuncA>;
type bc = ReturnThype<FuncB>;

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이여야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
// number

type PromiseB = PromiseUnpack<Promise<string>>;
// string
