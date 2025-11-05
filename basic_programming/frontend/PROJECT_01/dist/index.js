"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 9;
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
let isDrunk = true;
// любой примитивный тип мы можем указывать в качесвте типа для переменной
let age = 22;
let acc; // создали переменную и указали тип
let myGender = "male";
let eliotPageGender = "non-binary";
let myCarBody = "cedan";
// Как типизировать массив?
const students = ["Ivan", "Fred", "Johanes"];
const personalInfo = ["Alisher", 31, "male"];
const stepan = {
    email: "stepa@gmail.com",
    isAdmin: false,
};
const markKnopfler = {
    name: "Mark Knopfler",
    instruments: ["guitar", "voice"],
    isActive: true,
};
const pickWithers = {
    name: "Pick Withers",
    instruments: ["drumms"],
    isActive: true,
};
const direStraits = {
    name: "Dire Straits",
    members: [markKnopfler, pickWithers],
};
// Как мы можем типизировать функции?
function sum(a, b) {
    return a + b;
}
// void - когда нет возвращаемого значения
function printNumber(a) {
    console.log(a);
}
const devide = (a, b) => a / b;
//# sourceMappingURL=index.js.map