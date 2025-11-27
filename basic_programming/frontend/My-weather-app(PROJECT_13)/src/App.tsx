import { Provider } from "react-redux";
import { store } from "./app/store";
import { Weather } from "./features/weather";

function App() {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
}

export default App;
