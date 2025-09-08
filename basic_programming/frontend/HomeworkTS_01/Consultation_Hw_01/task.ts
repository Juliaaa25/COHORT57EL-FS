// 1. Явная и неявная типизация
let a: number = 10;
let b = 20;
console.log(a, b);

// 2. Типизация переменной строкой
let greeting: string = "Hello, TypeScript!";
console.log(greeting);

// 3. Union Type
let taskStatus: "success" | "error" = "success";
console.log(taskStatus);
taskStatus = "error";
console.log(taskStatus);

// 4. Расширенный Union Type
type Role = "admin" | "user";
type ExtendedRole = Role | "moderator";
let myRole: ExtendedRole = "moderator";
console.log(myRole);

// 5. Типизация массива
let cities: string[] = ["Paris", "Tokyo", "New York"];
console.log(cities.length);

// 6. Типизация пустого массива
let numbers: number[] = [];
numbers.push(5, 10, 15);
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log(sum);

// 7. Типизация объекта (type)
type Book = {
  title: string;
  pages: number;
};
let myBook: Book = { title: "TypeScript Handbook", pages: 250 };
console.log(myBook);

// 8. Типизация объекта (interface)
interface Car {
  brand: string;
  year: number;
}
let myCar: Car = { brand: "Toyota", year: 2021 };
console.log(myCar);

// 9. Опциональные поля в интерфейсе
interface Movie {
  title: string;
  rating: number;
  director?: string;
}
let movie1: Movie = { title: "Inception", rating: 9 };
let movie2: Movie = { title: "Avatar", rating: 8, director: "James Cameron" };
console.log(movie1, movie2);

// 10. Расширение интерфейсов
interface Animal {
  name: string;
  isWild: boolean;
}
interface Bird extends Animal {
  canFly: boolean;
}
let eagle: Bird = { name: "Eagle", isWild: true, canFly: true };
console.log(eagle);

// 11. Интерфейс города
interface City {
  name: string;
  population: number;
  isCapital?: boolean;
}
let Paris: City = { name: "Paris", population: 2148327, isCapital: true };
console.log(Paris);

// 12. Функция с типами параметров
function multiply(a: number, b: number): number {
  return a * b;
}
console.log(multiply(5, 6));

// 13. Функция с типом возвращаемого значения
function greet(name: string): string {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// 14. Функция, принимающая union type
function printPet(pet: "cat" | "dog") {
  console.log(`You have a ${pet}`);
}
printPet("cat");
printPet("dog");

// 15. Тип для функции
type MathOperation = (a: number, b: number) => number;
let add: MathOperation = (a, b) => a + b;
let subtract: MathOperation = (a, b) => a - b;
console.log(add(10, 5), subtract(10, 5));

// 16. Интерфейс самолёта
interface Airplane {
  numberOfEngines: number;
  isJet: boolean;
  maxHeight: number;
  capacity?: number;
}
let boeing747: Airplane = {
  numberOfEngines: 4,
  isJet: true,
  maxHeight: 13000,
  capacity: 660,
};
let cessna172: Airplane = { numberOfEngines: 1, isJet: false, maxHeight: 4000 };
console.log(boeing747, cessna172);

// 17. Типизация и массив объектов
type Product = {
  name: string;
  price: number;
};
let products: Product[] = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 400 },
];
console.log(products);

// 18. Интерфейс с датой
interface MyEvent {
  title: string;
  date: Date;
}
let concert: MyEvent = { title: "Rock Concert", date: new Date("2025-09-08") };
console.log(concert.date.toISOString().split("T")[0]); // YYYY-MM-DD

// 19. Преобразование типов
let numStr: string = "42";
let result = Number(numStr) + 8;
console.log(result);

// 20. Функция с необязательным параметром
function introduce(name: string, age?: number) {
  if (age !== undefined) {
    console.log(`My name is ${name} and I am ${age} years old`);
  } else {
    console.log(`My name is ${name}`);
  }
}
introduce("Alice", 30);
introduce("Bob");
