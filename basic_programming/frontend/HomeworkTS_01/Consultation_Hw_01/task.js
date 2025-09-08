// 1. Явная и неявная типизация
var a = 10;
var b = 20;
console.log(a, b);
// 2. Типизация переменной строкой
var greeting = "Hello, TypeScript!";
console.log(greeting);
// 3. Union Type
var taskStatus = "success";
console.log(taskStatus);
taskStatus = "error";
console.log(taskStatus);
var myRole = "moderator";
console.log(myRole);
// 5. Типизация массива
var cities = ["Paris", "Tokyo", "New York"];
console.log(cities.length);
// 6. Типизация пустого массива
var numbers = [];
numbers.push(5, 10, 15);
var sum = numbers.reduce(function (acc, val) { return acc + val; }, 0);
console.log(sum);
var myBook = { title: "TypeScript Handbook", pages: 250 };
console.log(myBook);
var myCar = { brand: "Toyota", year: 2021 };
console.log(myCar);
var movie1 = { title: "Inception", rating: 9 };
var movie2 = { title: "Avatar", rating: 8, director: "James Cameron" };
console.log(movie1, movie2);
var eagle = { name: "Eagle", isWild: true, canFly: true };
console.log(eagle);
var Paris = { name: "Paris", population: 2148327, isCapital: true };
console.log(Paris);
// 12. Функция с типами параметров
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 6));
// 13. Функция с типом возвращаемого значения
function greet(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet("Alice"));
// 14. Функция, принимающая union type
function printPet(pet) {
    console.log("You have a ".concat(pet));
}
printPet("cat");
printPet("dog");
var add = function (a, b) { return a + b; };
var subtract = function (a, b) { return a - b; };
console.log(add(10, 5), subtract(10, 5));
var boeing747 = {
    numberOfEngines: 4,
    isJet: true,
    maxHeight: 13000,
    capacity: 660,
};
var cessna172 = { numberOfEngines: 1, isJet: false, maxHeight: 4000 };
console.log(boeing747, cessna172);
var products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 400 },
];
console.log(products);
var concert = { title: "Rock Concert", date: new Date("2025-09-08") };
console.log(concert.date.toISOString().split("T")[0]); // YYYY-MM-DD
// 19. Преобразование типов
var numStr = "42";
var result = Number(numStr) + 8;
console.log(result);
// 20. Функция с необязательным параметром
function introduce(name, age) {
    if (age !== undefined) {
        console.log("My name is ".concat(name, " and I am ").concat(age, " years old"));
    }
    else {
        console.log("My name is ".concat(name));
    }
}
introduce("Alice", 30);
introduce("Bob");
