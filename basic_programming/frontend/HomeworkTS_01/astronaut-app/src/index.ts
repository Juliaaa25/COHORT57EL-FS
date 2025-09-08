// Тип Robot
type Robot = {
  model: string;
};

// Новый тип Mission
type Mission = {
  name: string;
  year?: number;
  durationDays?: number;
};

// Тип Astronaut
type Astronaut = {
  isInSpace: boolean;
  experienceYears: number;
  assistantRobot: Robot;
  missions: Mission[];
};

// Примеры
const robot1: Robot = {
  model: "XR-12",
};

const astronaut1: Astronaut = {
  isInSpace: true,
  experienceYears: 8,
  assistantRobot: robot1,
  missions: [
    { name: "Moon Landing", year: 2025, durationDays: 7 },
    { name: "ISS Maintenance", year: 2026 },
  ],
};

const astronaut2: Astronaut = {
  isInSpace: false,
  experienceYears: 3,
  assistantRobot: { model: "T-800" },
  missions: [
    { name: "Training Program", year: 2024 },
    { name: "Mars Simulation", year: 2025, durationDays: 30 },
  ],
};

console.log("🚀 Astronauts in DB:");
console.log(astronaut1);
console.log(astronaut2);
