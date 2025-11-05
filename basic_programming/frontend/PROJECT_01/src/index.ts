let x: number = 9;
x = 12;

// transpile

// compile time
// runtime

console.log("Hello TS");

// Typing

// implicit - скрытая типизация
let myName = "Alisher"; // тип определился автоматически как string

// string, number, bigint, boolean, null, undefined, symbol

// explicit - явным образом сами задали
let isDrunk: boolean = true;
// любой примитивный тип мы можем указывать в качесвте типа для переменной
let age: number = 22;

let acc: number; // создали переменную и указали тип
// acc = true; // здесь будет ошибки

// Union - юнион тип - когда вы перечисляете что может быть внутри
// с помощью слова type
type Gender = "male" | "female";

let myGender: Gender = "male";

type ExtednedGender = Gender | "non-binary";

let eliotPageGender: ExtednedGender = "non-binary";

//
type CarBody = "cedan" | "cupe" | "suv" | "combi suv";

let myCarBody: CarBody = "cedan";

// Как типизировать массив?
const students: string[] = ["Ivan", "Fred", "Johanes"];

// Tuple - кортеж
// const personalInfo: [string, number, Gender] = ["Alisher", 31, "male"];
type PersonalInfo = [string, number, Gender];
const personalInfo: PersonalInfo = ["Alisher", 31, "male"];

// Как типизировать объекты?
// Самый популярный вариант через слово interface
interface User {
  email: string;
  age?: number; // опциональное
  isAdmin: boolean;
}

const stepan: User = {
  email: "stepa@gmail.com",
  isAdmin: false,
};

// Пример с музыкальной группой:
type Instrument = "guitar" | "bass" | "piano" | "drumms" | "flute" | "voice";

interface Musician {
  name: string;
  instruments: Instrument[];
  isActive: boolean;
}

interface Group {
  name: string;
  members: Musician[];
}

const markKnopfler: Musician = {
  name: "Mark Knopfler",
  instruments: ["guitar", "voice"],
  isActive: true,
};

const pickWithers: Musician = {
  name: "Pick Withers",
  instruments: ["drumms"],
  isActive: true,
};

const direStraits: Group = {
  name: "Dire Straits",
  members: [markKnopfler, pickWithers],
};

// Как мы можем типизировать функции?

function sum(a: number, b: number): number {
  return a + b;
}

// void - когда нет возвращаемого значения
function printNumber(a: number): void {
  console.log(a);
}

const devide = (a: number, b: number): number => a / b;
