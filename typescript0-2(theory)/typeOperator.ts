// union type (|) [합집합]
const a2: number | string = 100;

// {icecreamName, price, kcal}
// string, number, number
// price와 kcal를 안적어도 됨

// 타입 알리아스
type Icecream = {
  icecreamName: string;
  price?: number;
  kcal?: number;
};

const b2: Icecream = {
  icecreamName: "메로나",
};

// 타입 알리아스 퀴즈
// Person: 이름, 나이
type Person = {
  name: string;
  age: number;
};
const b3: Person = {
  name: "진태",
  age: 25,
};

// Colleger: 전공, 학년
type Colleger = {
  major: string;
  grade: number;
};

// Worker 직급, 시급
type Worker2 = {
  position: string;
  wage: number;
};

type ChungChuen = Person & Colleger & Worker2;

const taejin: ChungChuen = {
  name: "태진",
  age: 25,
  major: "컴퓨터공학",
  grade: 4,
  position: "알바생",
  wage: 10000,
};

// intersection type (&) [교집합]
const c3: { name: string } & { age: number } = {
  name: "하하",
  age: 21,
};
