import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import usersReducer from "../features/users/usersSlice";
import productsReducer from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice";
import apodReducer from "../features/apod/apodSlice";
import { weatherApi } from "../features/weather/weatherApi";
//→ Импортируем configureStore — простой способ создать store.
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    products: productsReducer,
    cart: cartReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    apod: apodReducer,
  },
  middleware: (getDefault) => getDefault().concat(weatherApi.middleware),
});

// Типы для useSelector и useDispatch

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// → Создаём типы для селектора и диспатчера, чтобы использовать в TS-компонентах.

// Настраиваем middleware.
// Берём стандартные middleware Redux Toolkit и добавляем RTK Query middleware.
// Оно отвечает за кэширование, рефетчинг

// (getDefault) =>
// Redux Toolkit сам добавляет несколько стандартных middleware:
// например, для обработки ошибок, проверки типов и т.д.
// Эта функция получает массив этих стандартных middleware через getDefault().
// «Возьми стандартные настройки Redux
//  и добавь к ним RTK Query механизм запросов.»
// Представьте:
// defaultMiddleware — это обычный смартфон
// weatherApi.middleware — это камера, которую мы к нему прикручиваем

// Что такое middleware

// Представьте, что в Redux у нас есть цепочка, через которую проходит каждый dispatch.

// Компонент → dispatch(action) → редьюсер

// Middleware — это «перехватчик», который стоит между dispatch и редьюсером.
// Он получает каждое действие (action), может:

// посмотреть на него,

// изменить его,

// отправить дополнительный запрос,

// остановить его,

// или пропустить дальше.

// Иными словами:

// 🔵 **Middleware — это как охранник на проходной:

// он проверяет каждое действие перед тем, как оно попадёт в редьюсер.**

// Пример аналогии:

// Ты заходишь в здание (dispatch)

// Охрана проверяет тебя (middleware)

// Ты идёшь дальше в кабинет (редьюсер)

// Без middleware — ты проходишь сразу.

// 🟩 2. Зачем RTK Query нужен middleware?

// RTK Query делает много магии:

// обновляет кэш

// следит, когда нужно перезапустить запрос

// отменяет запросы

// ищет одинаковые запросы и не дублирует их

// обновляет данные при refetch

// подписывается на данные

// Чтобы эта магия работала, RTK Query нужен middleware.

// Он должен перехватывать actions типа:

// getWeather/started

// getWeather/success

// getWeather/error

// getWeather/refetch

// и т. д.

// Поэтому мы обязаны добавить его в store.

// 🟦 3. Что означает конкретная строка в store
// middleware: (getDefault) =>
//   getDefault().concat(weatherApi.middleware)

// Разбор построчно:

// ✔ middleware:

// Мы настраиваем middleware в Redux store.

// ✔ (getDefault) =>

// Redux Toolkit сам добавляет несколько стандартных middleware:
// например, для обработки ошибок, проверки типов и т.д.

// Эта функция получает массив этих стандартных middleware через getDefault().

// ✔ getDefault()

// Это массив обычных middleware Redux Toolkit.
// Мы их НЕ хотим удалять — они важные.

// Примерно как:

// [reduxThunk, serializableCheck, immutableCheck]

// ✔ .concat(weatherApi.middleware)

// concat — это как добавление элемента в конец массива.

// Мы берём все стандартные middleware и добавляем RTK Query middleware.

// То есть итоговый список выглядит так:

// [
//   ...defaultMiddleware,
//   weatherApi.middleware
// ]

// 🟧 ✔ Простое объяснение
// 👉 Эта строка означает:

// 🥤 «Возьми стандартные настройки Redux и добавь к ним RTK Query механизм запросов.»

// Или совсем просто:

// 🐱 «Мы подключаем в Redux специальный модуль, который управляет запросами RTK Query.»

// 🟦 Полнейшая аналогия для студентов:

// Представьте:

// defaultMiddleware — это обычный смартфон

// weatherApi.middleware — это камера, которую мы к нему прикручиваем

// Эта строка — это момент, когда мы добавляем новое устройство:

// телефон + камера

// То есть Redux начинает уметь работать с API-запросами RTK Query.

