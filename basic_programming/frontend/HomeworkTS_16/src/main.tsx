import React from "react";
import ReactDOM from "react-dom/client";
import TailwindFormComponent from "./components/TailwindFormComponent";
import "./style.css";
import store from "./components/store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <TailwindFormComponent />
    </Provider>
  </React.StrictMode>
);
