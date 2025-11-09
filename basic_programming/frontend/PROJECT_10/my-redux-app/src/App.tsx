import type { JSX } from "react";
import "./App.css";
import Counter from "./components/counter/Counter";
import TaskCreation from "./components/tasks/taskCreation";
import Tasks from "./components/tasks/Tasks";
import Sandwich from "./components/Sandwich/Sandwitch";

function App(): JSX.Element {
  return (
    <div>
      <Tasks />
      <TaskCreation />
      <Counter />
      <Sandwich />
    </div>
  );
}

export default App;
