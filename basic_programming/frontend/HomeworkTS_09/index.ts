// Создаем интерфейс Airplane

interface Airplane {
  numberOfEngines: number; // количество двигателей
  isJet: boolean; // реактивный ли самолет
  maxHeight: number; // максимальная высота полета (в метрах)
  capacity?: number; // опциональное поле — вместимость (пассажиров)
}

// Создаем несколько переменных

const boeing737: Airplane = {
  numberOfEngines: 2,
  isJet: true,
  maxHeight: 12500,
  capacity: 215,
};

const f16: Airplane = {
  numberOfEngines: 1,
  isJet: true,
  maxHeight: 15000,
};

const antonov225: Airplane = {
  numberOfEngines: 6,
  isJet: true,
  maxHeight: 12000,
  capacity: 250,
};

// Проверка
console.log(boeing737);
console.log(f16);
console.log(antonov225);
