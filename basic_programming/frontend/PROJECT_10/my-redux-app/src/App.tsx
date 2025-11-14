import type { JSX } from "react";
import "./App.css";

import Counter from "./components/counter/Counter";
import TaskCreation from "./components/tasks/taskCreation";
import Tasks from "./components/tasks/Tasks";
import Sandwich from "./components/Sandwich/Sandwitch";

import MovieCreation from "./components/Movies/MovieCreation";
import { Movies } from "./components/Movies/Movies";

function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-8 space-y-12">
      <section className="space-y-4">
        <h1 className="text-2xl font-bold text-indigo-600">Приложение</h1>
        {/* <Tasks /> */}
        {/* <TaskCreation /> */}
        {/* <Counter /> */}
        {/* <Sandwich /> */}
      </section>

      <section className="bg-white shadow-md rounded-2xl p-6 space-y-6">
        <h2 className="text-3xl font-bold text-center text-indigo-700">
          Movies Library
        </h2>

        <MovieCreation />
        <Movies />
      </section>
    </div>
  );
}

export default App;
