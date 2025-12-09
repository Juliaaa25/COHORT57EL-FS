import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./app/store";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);

// npm install redux-persist

// 🎓 Что такое <PersistGate>?

// <PersistGate> — это компонент из пакета redux-persist, который:

// ✅ Блокирует рендеринг всего приложения до тех пор,

// пока данные из localStorage (или sessionStorage) не будут восстановлены в Redux store.

// 🧠 Зачем это нужно?

// Если не использовать PersistGate, произойдёт следующее:

// Redux store при загрузке страницы будет пустым.

// Ваш UI на мгновение покажет пустые данные (undefined, пустые списки и т. д.).

// Только затем начнётся восстановление данных из localStorage.

// UI перерисуется — это выглядит как мерцание, "склеивание интерфейса".

// PersistGate предотвращает это.

// Он говорит:

// “Подожди, сначала я восстановлю персистентные данные в store,
// а потом уже отображай приложение”.

// Поэтому пользователь сразу увидит актуальные данные, без скачков.
//========================================

// persistor={persistor}

// persistor — это специальный объект, созданный так:

// export const persistor = persistStore(store);

// Он отвечает за:

// сохранение Redux state в localStorage

// восстановление Redux state при запуске приложения

// PersistGate использует его, чтобы понять:

// когда кэш загружен

// можно ли рендерить приложение

// PersistGate = “дверь, которая не открывается, пока данные не загружены”.

// Вот последовательность:

// 1️⃣ Приложение запускается
// 2️⃣ PersistGate видит, что localStorage ещё не восстановлен
// 3️⃣ Временно рендерит loading (или ничего, если loading={null})
// 4️⃣ Рекаверит состояние из localStorage
// 5️⃣ Открывает “дверь” и отображает <App />
// 6️⃣ Приложение получает уже восстановленный state
