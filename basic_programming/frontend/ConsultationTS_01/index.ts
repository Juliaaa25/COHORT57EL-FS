console.log("Hello TS!");

// Как типизировать?
// Явно vs Неявно
// При объявлении переменной мы указываем тип данных:
// Ключевое слово type
// мы можем объявлять типы отдельно
// Типы всегда пишутся с большой буквы

// Пример Union type
type Gender = "male" | "female";
type ExtendedGender = Gender | "non binary person";
// Как типизировать массив стринговых значений

// особенно важно указывать тип при создании пустого массива
let vegitables: string[] = [];
vegitables.push("potato");
console.log(vegitables);

type User = {
  firstName: string;
  isAdmin: boolean;
};
const user1: User = {
  firstName: "Vladimir",
  isAdmin: false,
};

interface Monster {
  name: string;
  height: number;
  isAlive: boolean;
  isEvil: boolean;
}

// Создали объект указанного типа

// Опциональные поля

interface Food {
  title: string;
  isSweet: boolean;
}

console.log("Hello TS!");

// npm install -g ts-node typescript
// npm install -g typescript
// npm install -g ts-node
// npm install -D typescript
// npm install -D ts-node
// tsc -v

// ts-node -v
// ts-node index.ts
// npx ts-node index.ts
