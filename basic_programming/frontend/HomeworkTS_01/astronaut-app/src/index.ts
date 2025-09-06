// Тип Robot
type Robot = {
  model: string;
};

// Тип Astronaut
type Astronaut = {
  isInSpace: boolean;
  experienceYears: number;
  assistantRobot: Robot;
  missions: string[];
};

// Примеры
const robot1: Robot = {
  model: "XR-12",
};

const astronaut1: Astronaut = {
  isInSpace: true,
  experienceYears: 8,
  assistantRobot: robot1,
  missions: ["Moon Landing", "ISS Maintenance"],
};

const astronaut2: Astronaut = {
  isInSpace: false,
  experienceYears: 3,
  assistantRobot: { model: "T-800" },
  missions: ["Training Program", "Mars Simulation"],
};

console.log("🚀 Astronauts in DB:");
console.log(astronaut1);
console.log(astronaut2);
