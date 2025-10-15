// 📌 Основные особенности TypeScript
// Статическая типизация
// В TS типы переменных, функций, аргументов и возвращаемых значений можно задавать явно.
// Ошибки в типах выявляются ещё на этапе компиляции, а не во время выполнения кода.
// Это повышает надежность и снижает количество багов.
// Совместимость с JavaScript
// Любой корректный JS-код — это уже корректный TS-код.
// Можно добавлять типы постепенно.
// Поддержка современных возможностей JS
// Поддержка ES6+ и будущих стандартов.
// TS компилирует их в более старый JS для совместимости с браузерами.
// Поддержка ООП (объектно-ориентированного программирования)
// Классы, интерфейсы, модификаторы доступа (public, private, protected), абстрактные классы.
// Интерфейсы и собственные типы
// Возможность описывать форму объектов, сигнатуры функций, структуры данных.
// Поддержка type и interface для создания собственных типов.
// Автодополнение и рефакторинг
// Благодаря типам редакторы (например, VS Code) лучше понимают ваш код, подсказывают методы,
// предупреждают об ошибках.

console.log("Hello TS");

// Как типизировать?
// Явно vs Неявно
// При объявлении переменной мы указываем тип данных:

let x: number = 10;
console.log(x);

let isDrunk: boolean = true;

// Ключевое слово type
// мы можем объявлять типы отдельно

type Age = number;
let myAge: Age = 35;

let k: number | string = 10;
k = "hello";

let qwerty: any;

// Пример Union type

type Pet = "cat" | "dog";
let petOfAlex: Pet;
petOfAlex = "cat";
petOfAlex = "dog";

// можно расширить Union type

type ExtendedPet = Pet | "bird";
let petOfAlex2: ExtendedPet = "dog";

type Gender = "male" | "female";
type ExtendedGender = Gender | "non binary person";

// Как типизировать массив стринговых значений

let fruits: string[] = ["apple", "orange", "banana"];

// особенно важно указывать тип при создании пустого массива

let vegetables: string[] = [];
vegetables.push("tomato");
console.log(vegetables);

// Как типизировать объекты?

type User = {
  firstName: string;
  isAdmin: boolean;
};
const user1: User = {
  firstName: "",
  isAdmin: false,
};

interface Monster {
  name: string;
  height: number;
  isAlive: boolean;
  isEvil: boolean;
}

const frankenstein: Monster = {
  name: "Frankenstein",
  height: 180,
  isAlive: true,
  isEvil: true,
};

interface ExtendedMonster extends Monster {
  isFlying: boolean;
}

const dracula: ExtendedMonster = {
  isFlying: true,
  name: "Dracula",
  height: 175,
  isAlive: true,
  isEvil: true,
};

// Опциональные поля

interface Food {
  title?: string;
  isSweet?: boolean;
}
const pancake: Food = {
  title: "Pancakes",
  isSweet: true,
};
const carrot: Food = {
  title: "Carrot",
};

// ____________________________________________________________________________________________________________________________________
// Создать интерфейс City
// со следующими свойствами:
// name
// population
// riversName - опциональное поле (название реки)
// isCapital - опциональное поле (является ли город столицей)
// isTouristic - опциональное поле (является ли город туристическим)

interface City {
  name: string;
  population: number;
  riversName?: string;
  isCapital?: boolean;
  isTouristic?: boolean;
}

// Создаем несколько объектов для этого интерфейса

const berlin: City = {
  name: "Berlin",
  population: 3769000,
  riversName: "Spree",
  isCapital: true,
  isTouristic: true,
};

const munich: City = {
  name: "Munich",
  population: 1472000,
  isTouristic: true,
};

interface ExtendedCity extends City {
  foundationDate: number;
}

// Пример объекта, соответствующего расширенному интерфейсу

const paris: ExtendedCity = {
  name: "Paris",
  population: 2148000,
  riversName: "Seine",
  isCapital: true,
  isTouristic: true,
  foundationDate: -52,
};

console.log(berlin);
console.log(munich);
console.log(paris);

// ____________________________________________________________________________________________________________________________
// Типизация функций
// Нужно типизировать параметры и возвращаемое значение

function sum(a: number, b: number): number {
  return a + b;
}

const dev = (a: number, b: number) => a / b;

console.log(sum(10, 12));
console.log(dev(20, 2));

// | Ситуация                          | Рекомендация            |          |
// | --------------------------------- | ----------------------- | -------- |
// | Описание формы объекта            | `interface` ✅           |          |
// | Объединения (\`                   | `, `&\`, условные типы) | `type` ✅ |
// | Расширение нескольких интерфейсов | `interface` ✅           |          |
// | Комбинирование разных типов       | `type` ✅                |          |
