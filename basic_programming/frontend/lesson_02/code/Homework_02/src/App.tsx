import "./App.css";
import Greeting from "./components/Greeting/Greeting";
import DogCard from "./components/DogCard/DogCard";
import ProfileCard from "./components/ProfileCard/ProfileCard";

function App() {
  return (
    <div>
      <Greeting />
      <DogCard />

      {/* Пример */}
      <ProfileCard
        avatar="https://kartinki.pibig.info/uploads/posts/2023-03/1680193571_kartinki-pibig-info-p-khoroshego-dnya-na-rabote-kartinki-arti-2.jpg"
        name="Yulia"
        description="Full Stack Junior developer who loves React and TypeScript"
      />
    </div>
  );
}

export default App;
