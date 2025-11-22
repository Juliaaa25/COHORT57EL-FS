import "./App.css";

import { Counter } from "./features/counter/Counter";
import { Sandwich } from "./features/sandwich/Sandwich";
import { UsersList } from "./features/users/UsersList";
import { ProductsList } from "./features/products/ProductsList";

function App() {
  return (
    <div>
      <Counter />
      <Sandwich />
      <UsersList />
      <ProductsList />
    </div>
  );
}

export default App;
